/*
 * NetTango
 * Copyright (c) 2014 Michael S. Horn, Uri Wilensky, and Corey Brady
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
  
  CanvasRenderingContext2D ctx;
  
  /* Runtime manager */
  Runtime runtime;

  
  CodeWorkspace(this.runtime, String id) {
    
    CanvasElement canvas = querySelector("#${id}-workspace");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    // menu bar
    menu = new Menu(this, 0, height - BLOCK_HEIGHT * 1.85, width, BLOCK_HEIGHT * 1.85);
    
    // start block
    start = new StartBlock(this);
    addBlock(start);
    buildDefaultProgram();
    
    // trace bug
    bug = new TraceBug(start);

    new Timer.periodic(const Duration(milliseconds : 20), tick);
  }
  
  
/**
 * Adds a stack of blocks of the given type to the menu bar.
 */
  void addToMenu(Block block, int count) {
    menu.addBlock(block, count);
  }
  
  
  void traceProgram(Program program) {
    bug.target = program.curr;
  }


  void tick(Timer t) {
    if (animate()) draw();
  }
  
  
  void programChanged() {
    runtime.pause();
    runtime.restartPrograms();
  }
  
  
/**
 * Erase a program
 */
  void removeAllBlocks() {
    programChanged();
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, height - BLOCK_HEIGHT * 1.85, width, BLOCK_HEIGHT * 1.85);
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
}