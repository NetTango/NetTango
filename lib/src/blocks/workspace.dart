/*
 * NetTango
 * Copyright (c) 2016 Michael S. Horn, Uri Wilensky, and Corey Brady
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
  
  String id;

  /* list of blocks in the workspace */
  List<Block> blocks = new List<Block>();
  
  /* size of the canvas */
  int width, height;
  
  /* block menu */
  Menu menu;
  
  /* fixed start blocks */
  List<StartBlock> starts = new List<StartBlock>();

  /* Runtime object that this workspace controls (e.g. Models, Breeds, etc) */
  Runtime runtime;
  
  /* traces execution of programs as they run */
  TraceBug bug;

  /* Canvas 2D drawing context */
  CanvasRenderingContext2D ctx;

  /* Touch event manager */
  TouchManager tmanager = new TouchManager();


/**
 * Construct a code workspace from a JSON object
 */
  CodeWorkspace(Map json) {

    //--------------------------------------------------------
    // load canvas
    //--------------------------------------------------------
    String canvasId = json["canvasId"];
    if (canvasId == null) throw "Invalid workspace JSON object. Missing 'canvas-id' field.";
    CanvasElement canvas = querySelector("#$canvasId");
    if (canvas == null) throw "No canvas element with ID $canvasId found.";
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;


    //--------------------------------------------------------
    // initialize touch manager
    //--------------------------------------------------------
    String touchElement = json["touchElement"];
    if (touchElement == null) touchElement = canvasId;
    tmanager.registerEvents(querySelector("#$touchElement"));
    tmanager.addTouchLayer(this);


    //--------------------------------------------------------
    // Workspace ID
    //--------------------------------------------------------
    this.id = json["name"];
    if (id == null) throw "Invalid workspace JSON object. Missing 'name' field.";


    //--------------------------------------------------------
    // Anchor workspace to the top, right, bottom, or left
    //--------------------------------------------------------
    String anchor = "bottom";
    if (json.containsKey("anchor")) anchor = json["anchor"];
    switch (anchor) {
      case "left":
        width = canvas.height;
        height = canvas.width;
        transform(cos(PI/2), sin(PI/2), -sin(PI/2), cos(PI/2), height, 0);        
        break;
      case "right":
        width = canvas.height;
        height = canvas.width;
        transform(cos(PI / -2), sin(PI / -2), -sin(PI / -2), cos(PI / -2), 0, width);
        break;
      case "top":
        transform(cos(-PI), sin(-PI), -sin(-PI), cos(-PI), width, height);
        break;
      case "bottom":
      default:
    }


    //--------------------------------------------------------
    // Create menu bar
    //--------------------------------------------------------
    num menuH = BLOCK_HEIGHT * 1.6;
    menu = new Menu(this, 0, height - menuH, width, menuH);
    if (json.containsKey("color")) menu.background = json["color"];


    //--------------------------------------------------------
    // start blocks
    //--------------------------------------------------------
    if (json.containsKey("startBlocks") && json["startBlocks"] is List) {
      for (var spec in json["startBlocks"]) {
        addStartBlock(spec["name"], spec["color"], spec["position"]);
      }
    } else {
      addStartBlock("start $id", "green", 40);
    }


    //--------------------------------------------------------
    // trace bug  
    //--------------------------------------------------------
    bug = new TraceBug(start);   // FIXME multi-start


    //--------------------------------------------------------
    // initialize block menu
    //--------------------------------------------------------
    if (json.containsKey("blocks")) {
      _initBlockMenu(json["blocks"]);
    }


    //--------------------------------------------------------
    // customize menu buttons
    //--------------------------------------------------------
    menu.fastForwardButton.visible = toBool(json['fastForwardButton'], true);
    menu.stepForwardButton.visible = toBool(json['stepForwardButton'], true);


    //--------------------------------------------------------
    // default program
    //--------------------------------------------------------
    if (json.containsKey("defaultProgram")) {
      fromURLString(json["defaultProgram"]);
    }

    draw();
    tick();
  }


/**
 * returns the first start block in the list
 */
  StartBlock get start => starts[0];

  
/**
 * Adds a start block to the workspace
 */
  void addStartBlock(String name, String color, num position) {
    StartBlock sb = new StartBlock(this, name) 
      .. color = color
      .. x = position;
    _addBlock(sb);
    starts.add(sb);
  }


/** 
 * Gets a start block instance based on its name
 */
  StartBlock getStartBlock(String name) {
    for (StartBlock sb in starts) {
      if (sb.text == name) return sb;
    }
    return null;
  }


/**
 * Removes a start block
 */
  void removeStartBlock(String name) {
    StartBlock sb = getStartBlock(name);
    if (sb != null) {
      starts.remove(sb);
      _removeBlock(sb);
    }
  } 


/**
 * Adds a stack of blocks of the given type to the menu bar.
 */
  void addToMenu(Block block, int count) {
    menu.addBlock(block, count);
  }
  
  
/**
 * Highlight a program block
 */  
  void traceProgram(int blockID) {
    Block target = null;
    for (Block block in blocks) {
      if (block.id == blockID) target = block;
    }
    if (target != null && target is! EndProgramBlock && target is! StartBlock) {
      bug.target = target;
    }
  }


  void tick() {
    if (animate()) draw();
    window.animationFrame.then((time) => tick());
  }


/**
 * Callback when blocks of a program have changed
 */  
  void programChanged() {
    if (runtime != null) runtime.programChanged();
  }


/**
 * Close all open parameter menus
 */  
  void closeAllParameterMenus() {
    bool repaint = false;
    for (Block block in blocks) {
      if (block.closeParameterMenu()) {
        repaint = true;
      }
    }
    if (repaint) draw();
  }


/**
 * On a background touch, close all open parameter menus
 */
  bool backgroundTouch(Contact c) {
    closeAllParameterMenus();
    return false;
  }
  
  
/**
 * Erase a program  (DOESN'T WORK IN MULTI-BLOCK ENVIRONMENT)
 */
/* 
  void removeAllBlocks() {
    Block block = start.next;
    while (block != null && block != start.end) {
      Block b = block.next;
      block.prev = null;
      block.next = null;
      _removeBlock(block);
      block = b;
    }
    start.next = start.end;
    start.end.prev = start;
  }
*/

/**
 * Add a block to the workspace
 */
  void _addBlock(Block block) {
    blocks.add(block);
    addTouchable(block);
    for (Paramter param in block.params) {
      addTouchable(param);
    }
  }
  
  
/**
 * Remove a block from the workspace
 */
  void _removeBlock(Block block) {
    blocks.remove(block);
    removeTouchable(block);
    for (Parameter param in block.params) {
      removeTouchable(param);
    }
    draw();
  }
  
  
/**
 * Move a block to the top of the visual stack
 */
  void _moveToTop(Block block) {
    _removeBlock(block);
    _addBlock(block);
  }
  
  
/**
 * How many blocks of the given type have been used in the program so far?
 */
  int getBlockCount(String blockType) {
    int count = 0;
    for (Block block in blocks) {
      if (block.text == blockType) count++;
    }
    return count;
  }


/**
 * Is the program empty? Only a start block...
 */
//  bool get isEmpty {
//    return blocks.length <= 2;  // start and end blocks together
//  }
  
  
/**
 * Has a block been dragged off of the screen?
 */
  bool _isOffscreen(Block block) {
    return (block.x + block.width > width ||
            block.x < 0 ||
            block.y + block.height > height ||
            block.y < 0);
  }
  
  
/**
 * Is a block over the menu?
 */
  bool _isOverMenu(Block block) {
    return menu.overlaps(block);
  }
  

/**
 * Snap a block onto an existing program
 */
  bool _snapTogether(Block target) {
    Block b = _findInsertionPoint(target);
    if (b != null) {
      b.insertBlock(target);
      return true;
    } else {
      return false;
    }
  }
  
  
/**
 * Add a new block to the end of an existing program (defaults to first start)
 */
  void snapToEnd(Block target) {
    start.end.prev.insertBlock(target);
  }
  

/**
 * As a block is being dragged, determine the position after which the block
 * will be inserted into a program
 */
  Block _findInsertionPoint(Block target) {
    Block result = null;

    for (StartBlock sb in starts) {
      Block block = sb;
      while (block != null) {
        if (block.overlaps(target) && target.checkSyntax(block)) {
          result = block;
        }
        block = block.next;
      }
    }
    if (result == null && !target.inserted) {
      //return start.end.prev;
      return null;
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
        Block b = _findInsertionPoint(target);
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
      // transform into workspace coordinates
      xform.transformContext(ctx);
      
      ctx.clearRect(0, 0, width, height);

      // draw blocks
      blocks.forEach((block) => block.draw(ctx));
      
      // draw the trace bug
      bug.draw(ctx);
      
      // draw the menu 
      menu.draw(ctx);
    }
    ctx.restore();
  }

  
  String toString([StartBlock sb]) {
    if (sb == null) sb = start;
    String s = "[ START, ";
    Block b = sb.next;
    while (b != null && !(b is EndProgramBlock)) {
      s += "${b.toString()}, ";
      b = b.next;
    }
    return s + "]";
  }


/**
 * Parses a program description stored as a URL-encoded string and builds the 
 * block program.
 * FIXME - defaults to single start block
 */
  void fromURLString(String program) {
    program = Uri.decodeFull(program);
    Block prev = start;
    List<BeginBlock> nest = new List<BeginBlock>();

    for (String s in program.split(';')) {
      if (s == "end" && nest.isNotEmpty) {
        prev = nest.last.end;
        nest.removeLast();
        continue;
      } 
      else {
        int i = s.indexOf('(');
        String name = (i > 0) ? s.substring(0, i) : s;
        Block block = menu.getBlockByName(name);
        if (block != null) {
          block = block.clone();
          _addBlock(block);
          prev.insertBlock(block);
          block.inserted = true;
          if (block is BeginBlock) {
            nest.add(block);
            block.addAllBlocks();
          }
        }
        prev = block;
      }
    }
  }
  
    
/**
 * Converts the program to a URL-encoded string
 */
  String toURLString([StartBlock sb]) {
    if (sb == null) sb = start;
    String s = "";
    Block b = sb.next;
    while (b != null && b is! EndProgramBlock) {
      s += b.toURLString();
      b = b.next;
    }
    return Uri.encodeFull(s);
  }


/**
 * This function parses a JSON block definition object and populates
 * the block menu.
 */
  void _initBlockMenu(var data) {
    for (var b in data) {
      Block block = new Block.fromJSON(this, b);
      addToMenu(block, toInt(b["instances"], 1));
    }
  }

}