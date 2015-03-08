/*
 * NetTango
 * Copyright (c) 2015 Michael S. Horn, Uri Wilensky, and Corey Brady
 * 
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu
 
 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */
part of NetTango;



class CodeWorkspace extends TouchLayer {
  
  /* list of blocks in the workspace */
  List<Block> blocks = new List<Block>();
  
  /* size of the canvas */
  int width, height;
  
  /* block menu */
  Menu menu;
  
  /* fixed start block */
  StartBlock start;
  
  /* traces execution of programs as they run */
  TraceBug bug;

  /* Canvas 2D drawing context */
  CanvasRenderingContext2D ctx;

  /* Touch event manager */
  TouchManager tmanager = new TouchManager();


  
/**
 * id: the <canvas> element id for this workspace (e.g. "frog-workspace")
 * Constructor will attempt to find a <script> tag with the id value of 
 * "${id}-blocks" (e.g. "frog-workspace-blocks") to use as the JSON for 
 * defining the blocks available in this workspace
 */
  CodeWorkspace(String id) {
    
    // initialize drawing context
    CanvasElement canvas = querySelector("#${id}");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    // menu bar
    menu = new Menu(this, 0, height - BLOCK_HEIGHT * 1.6, width, BLOCK_HEIGHT * 1.6);
    
    // start block
    start = new StartBlock(this);
    addBlock(start);
    buildDefaultProgram();
    
    // trace bug
    bug = new TraceBug(start);

    // initialize touch manager
    tmanager.registerEvents(querySelector("#${id}"));
    tmanager.addTouchLayer(this);

    // initialize block menu
    ScriptElement se = querySelector("#${id}-blocks");
    if (se != null) {
      _initBlockMenu(JSON.decode(se.innerHtml));
    }

    new Timer.periodic(const Duration(milliseconds : 20), tick);
  }

  
/**
 * Adds a stack of blocks of the given type to the menu bar.
 */
  void addToMenu(Block block, int count) {
    menu.addBlock(block, count);
  }
  
  
  void traceProgram(Block target) {
    bug.target = target;
  }


  void tick(Timer t) {
    if (animate()) draw();
  }


/**
 * Callback when blocks of a program have changed
 */  
  void programChanged() {

  }


/**
 * Close all open parameter menus
 */  
  void closeAllParameterMenus() {
    for (Block block in blocks) {
      block.closeParameterMenu();
    }
    draw();
  }


/**
 * On a background touch, close all open parameter menus
 */
  backgroundTouch(Contact c) {
    closeAllParameterMenus();
  }
  
  
/**
 * Erase a program
 */
  void removeAllBlocks() {
    Block block = start.next;
    while (block != null && block != start.end) {
      Block b = block.next;
      block.prev = null;
      block.next = null;
      removeBlock(block);
      block = b;
    }
    start.next = start.end;
    start.end.prev = start;
  }
  
    
/**
 * Creates a simple starting program so that there's something that can be run
 */
  void buildDefaultProgram(){}
  
  
/**
 * Add a block to the workspace
 */
  void addBlock(Block block) {
    blocks.add(block);
    addTouchable(block);
    if (block.hasParam) addTouchable(block.param);
  }
  
  
/**
 * Remove a block from the workspace
 */
  void removeBlock(Block block) {
    blocks.remove(block);
    removeTouchable(block);
    if (block.hasParam) removeTouchable(block.param);
    draw();
  }
  
  
/**
 * Move a block to the top of the visual stack
 */
  void moveToTop(Block block) {
    removeBlock(block);
    addBlock(block);
  }
  
  
/**
 * How many blocks of the given type have been used in the program so far?
 */
  int getBlockCount(String blockType) {
    int count = 0;
    for (Block block in blocks) {
      if (block.type == blockType) count++;
    }
    return count;
  }
  
  
/**
 * Has a block been dragged off of the screen?
 */
  bool isOffscreen(Block block) {
    return (block.x + block.width > width ||
            block.x < 0 ||
            block.y + block.height > height ||
            block.y < 0);
  }
  
  
/**
 * Is a block over the menu?
 */
  bool isOverMenu(Block block) {
    return menu.overlaps(block);
  }
  

/**
 * Snap a block onto an existing program
 */
  bool snapTogether(Block target) {
    Block b = findInsertionPoint(target);
    if (b != null) {
      b.insertBlock(target);
      return true;
    } else {
      return false;
    }
  }
  
  
/**
 * Add a new block to the end of an existing program
 */
  void snapToEnd(Block target) {
    start.end.prev.insertBlock(target);
  }
  

/**
 * As a block is being dragged, determine the position after which the block
 * will be inserted into a program
 */
  Block findInsertionPoint(Block target) {
    Block block = start;
    Block result = null;
    while (block != null) {
      if (block.overlaps(target) && target.checkSyntax(block)) {
        result = block;
      }
      block = block.next;
    }
    if (result == null && !target.inserted) {
      return start.end.prev;
    } else if (target.y > start.end.y) {
      return null;
    } else {
      return result;
    }
  }
  
  
/**
 * Animate the blocks and return true if any of the blocks changed
 */
  bool animate() {
    bool refresh = false;
    
    if (bug.animate()) refresh = true;
    
    if (menu.animate()) refresh = true;
    
    //----------------------------------------------
    // for each block being dragged, identify active insertion points 
    //----------------------------------------------
    for (Block block in blocks) block.candidate = null;
      
    for (Block target in blocks) {
      if (target.dragging) {
        Block b = findInsertionPoint(target);
        if (b != null) {
          b.candidate = target;
        }
      }
    }
      
    for (Block block in blocks) {
      if (block.animate()) refresh = true;
    }
    
    return refresh;
  }
  
  
  void draw() {
    ctx.save();
    {
      ctx.clearRect(0, 0, width, height);

      // transform into workspace coordinates
      xform.transformContext(ctx);
      
      // draw blocks
      blocks.forEach((block) => block.draw(ctx));
      
      // draw the trace bug
      bug.draw(ctx);
      
      // draw the menu 
      menu.draw(ctx);
    }
    ctx.restore();
  }

  
  String toString() {
    String s = "[ START, ";
    Block b = start.next;
    while (b != null && !(b is EndProgramBlock)) {
      s += "${b.toString()}, ";
      b = b.next;
    }
    return s + "]";
  }


/**
 * This function parses a JSON block definition object and populates
 * the block menu.
 */
  void _initBlockMenu(List blocks) {
    for (var b in blocks) {
      if (b is Map && b.containsKey("name")) {
        Block block = new Block.fromJSON(this, b);
        addToMenu(block, toInt(b["instances"], 1));
      }
    }
  }

}