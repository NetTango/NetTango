/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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
  
  /// size of the canvas
  int width, height;
  
  /// block menu 
  BlockMenu menu;
  
  /* fixed start blocks */
  //List<StartBlock> starts = new List<StartBlock>();

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
    //String touchElement = json["touchElement"];
    //if (touchElement == null) touchElement = canvasId;
    //tmanager.registerEvents(querySelector("#$touchElement"));
    tmanager.registerEvents(canvas);
    tmanager.addTouchLayer(this);


    //--------------------------------------------------------
    // Workspace ID
    //--------------------------------------------------------
    this.id = json["name"];
    if (id == null) throw "Invalid workspace JSON object. Missing 'name' field.";


    //--------------------------------------------------------
    // initialize block menu
    //--------------------------------------------------------
    menu = new BlockMenu(this);
    if (json['blocks'] is List) {
      for (var b in json['blocks']) {
        Block block = new Block.fromJSON(this, b) 
          .. moveBlock(100, 100)
          .. font = "14px 'Poppins', sans-serif";
        //_addBlock(block);
        menu.addBlock(block, 2);
      }
    }

    //--------------------------------------------------------
    // default program
    //--------------------------------------------------------
    //if (json.containsKey("defaultProgram")) {
    //  fromURLString(json["defaultProgram"]);
    //}

    //_addBlock(new Block(this, "hop") .. x = 100 .. y = 100 .. font = "20px 'Montserrat', sans-serif");
    Sounds.loadSound("click", "packages/NetTango/sounds/click.wav");

    draw();
    tick();
  }

  
  void tick() {
    if (animate()) draw();
    window.animationFrame.then((time) => tick());
  }


/**
 * Callback when blocks of a program have changed
 */  
  void programChanged() {
    draw();
    var parseTree = exportParseTree();
    //print(new PlainFormatter().format(parseTree));
  }




/**
 * Returns a JSON object representing the program's parse tree
 */
  Map exportParseTree() {
    Map json = {
      "workspace" : id,
      "chains" : [ ]
    };
    for (Block block in blocks) {
      if (block.isStartOfChain) {
        json["chains"].add(block.exportParseTree());
      }
    }
    return json;
  }


/**
 * On a background touch, close all open parameter menus
 */
  bool backgroundTouch(Contact c) {
    return false;
  }
  
  
/**
 * Add a block to the workspace
 */
  void _addBlock(Block block) {
    blocks.add(block);
    addTouchable(block);
    for (Parameter param in block.params) {
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
  int getBlockCount(String action) {
    int count = 0;
    for (Block block in blocks) {
      if (block.action == action) count++;
    }
    return count;
  }


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
 * Snap a block onto an existing program
 */
  bool _snapTogether(Block target) {
    Block hit = _findTopConnector(target);
    if (hit != null) {
      target._snapBelow(hit);
      return true;
    } 
      
    hit = _findBottomConnector(target);
    if (hit != null) {
      target._snapAbove(hit);
      return true;
    }

    return false;
  }


  /// throw chain into the trash
  bool _trashChain(Block target) {
    if (menu.isOverMenu(target)) {
      while (target != null) {
        blocks.remove(target);
        removeTouchable(target);
        target = target.nextChain;
      }
    }
  }


  /// return a block near the top connector of target (or null)
  Block _findTopConnector(Block target) {
    if (target.prev == null && target.hasTopConnector) {
      for (Block block in blocks) {
        if (block != target) {

          // do the blocks overlap horizontally at all?
          if (target.x < block.x + block.width && target.x + target.width > block.x) {

            num by0 = block.y;
            num by1 = block.y + block.height;
            num by2 = by1 + block.height * 0.8;

            if (block.hasNext && target.topConnectorY < by1 && target.topConnectorY > by0) {
              return block;
            }
            else if (!block.hasNext && target.topConnectorY > by0 && target.topConnectorY < by2) {
              return block;
            }
          }
        }
      }
    }
    return null;
  }


  /// return a block near the bottom connector of target (or null) 
  Block _findBottomConnector(Block target) {
    if (target.next == null) {
      for (Block block in blocks) {
        if (block != target && block.prev == null && block.hasTopConnector) {

          // do the blocks overlap horizontally at all?
          if (target.x < block.x + block.width && target.x + target.width > block.x) {

            if ((block.topConnectorY - target.bottomConnectorY).abs() < 20) {
              return block;
            }
          }
        } 
      }
    }
    return null;
  }

  
/**
 * Animate the blocks and return true if any of the blocks changed
 */
  bool animate() {
    bool refresh = false;

    if (menu.animate()) refresh = true;
    
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

      List<Block> drags = new List<Block>();

      bool overMenu = false;

      for (Block block in blocks) {
        if (!block.hasPrev && block is! ClauseBlock) {
          block._reindentChain(0, null);
          block._repositionChain();
          block._resizeChain(ctx, BLOCK_WIDTH);
        }
        if (block._dragging) drags.add(block);
        if (menu.isOverMenu(block)) overMenu = true;
      }

      menu.draw(ctx, overMenu);

      for (Block block in blocks) {
        if (block._dragging) {
          Block target = _findTopConnector(block);
          if (target != null) {
            target._drawBottomConnector(ctx);
          } else {
            target = _findBottomConnector(block);
            if (target != null) target._drawTopConnector(ctx);
          }
        }

        block._drawBlock(ctx);
        block._drawLabel(ctx);
        block._drawParameters(ctx);
        if (drags.isNotEmpty) block._drawOutline(ctx);
      }
    }
    ctx.restore();
  }
}


