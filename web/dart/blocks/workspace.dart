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

  int version = VersionManager.VERSION;

  /// HTML Canvas ID
  String canvasId;

  /// list of blocks in the workspace
  List<Block> blocks = new List<Block>();

  int nextBlockId = 0;
  int nextBlockInstanceId = 0;

  /// save a copy of the workspace definition objetc for the save() function
  Map definition;

  /// size of the canvas
  int width, height;

  /// block menu
  BlockMenu menu;

  /// global variable definitions and types
  List variables = new List();

  /// list of expressions
  List expressions = new List();

  /* Canvas 2D drawing context */
  CanvasRenderingContext2D ctx;

  /* Touch event manager */
  TouchManager tmanager = new TouchManager();


/**
 * Construct a code workspace from a JSON object
 */
  CodeWorkspace(this.canvasId, this.definition) {

    if (this.definition["version"] != VersionManager.VERSION) {
      throw "The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${this.definition["version"]}.";
    }

    //--------------------------------------------------------
    // load canvas
    //--------------------------------------------------------
    CanvasElement canvas = querySelector("#$canvasId");
    if (canvas == null) throw "No canvas element with ID $canvasId found.";
    ctx = canvas.getContext('2d');


    //--------------------------------------------------------
    // rescale according to devicePixelRatio
    //--------------------------------------------------------
    canvas.style.width = "${canvas.width}px";
    canvas.style.height = "${canvas.height}px";
    width = (canvas.width * SCALE).floor();
    height = (canvas.height * SCALE).floor();
    canvas.width = width;
    canvas.height = height;
    scale(1/SCALE, 1/SCALE);  // scales touch input


    //--------------------------------------------------------
    // initialize touch manager
    //--------------------------------------------------------
    tmanager.registerEvents(canvas);
    tmanager.addTouchLayer(this);


    //--------------------------------------------------------
    // initialize block menu
    //--------------------------------------------------------
    menu = new BlockMenu(this);
    if (definition['blocks'] is List) {
      // pre-check block IDs for our next one, as they may be out of order
      // and we'll need to set any that aren't set (new blocks) while processing
      for (var b in definition['blocks']) {
        int id = b['id'];
        if (id != null && id > nextBlockId) {
          nextBlockId = id + 1;
        }
      }
      for (var b in definition['blocks']) {
        Block block = new Block.fromJSON(this, b);
        if (menu.getBlockById(block.id) != null) {
          // duplicate block ID - wipe the ID and re-generate a new block with a new ID
          block.id = null;
          block = block.clone();
          b['id'] = block.id;
        }
        int limit = toInt(b['limit'], -1);
        menu.addBlock(block, limit);
      }
    }

    //--------------------------------------------------------
    // initialize global variables
    //--------------------------------------------------------
    if (definition['variables'] is List) {
      variables = definition['variables'];
    }

    //--------------------------------------------------------
    // initialize expression builder
    //--------------------------------------------------------
    if (definition['expressions'] is List) {
      expressions = definition['expressions'];
    }

    //--------------------------------------------------------
    // saved program state
    //--------------------------------------------------------
    if (definition['program'] is Map) {
      _restoreProgram(definition['program']);
    }

    draw();
    tick();
  }


/**
 * Detaches this workspace object from the canvas
 */
  void unload() {
    clearTouchables();
    blocks.clear();
    tmanager.removeTouchLayer(this);
  }


/**
 * Allows workspace to dyanamically grow and shrink the canvas
 * to allow for longer programs
 */
  void reshapeCanvas(num w, num h) {
    w = w.round();
    h = h.round();
    CanvasElement canvas = querySelector("#$canvasId");
    if (canvas != null) {
      canvas.style.width = "${w}px";
      canvas.style.height = "${h}px";
      width = (w * SCALE).floor();
      height = (h * SCALE).floor();
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');
      draw();
    }
  }


  void tick() {
    if (animate()) draw();
    window.animationFrame.then((time) => tick());
  }


/**
 * Callback when blocks of a program have changed
 */
  void programChanged(ProgramChangedEvent event) {
    draw();
    try {
      js.context["NetTango"].callMethod("_relayCallback", [ canvasId, event.toJS() ]);
    } catch (e) {
      print("Unable to relay program changed event to Javascript");
    }
  }


/**
 * Returns a JSON object representing the program's parse tree
 */
  Map exportParseTree() {
    Map json = {
      "chains" : [ ]
    };
    for (Block block in blocks) {
      if (block.isStartOfChain) {
        json["chains"].add(block.exportParseTree());
      }
    }
    for (Slot slot in menu.slots) {
      if (slot.block.required) {
        if (getBlockCount(slot.block.id) == 0) {
          json["chains"].add(slot.block.exportParseTree());
        }
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
    for (Parameter param in block.params.values) {
      addTouchable(param);
    }
    for (Parameter prop in block.properties.values) {
      addTouchable(prop);
    }
  }


/**
 * Remove a block from the workspace
 */
  void _removeBlock(Block block) {
    blocks.remove(block);
    removeTouchable(block);
    for (Parameter param in block.params.values) {
      removeTouchable(param);
    }
    for (Parameter prop in block.properties.values) {
      removeTouchable(prop);
    }
    draw();
  }


/**
 * Move a block to the top of the visual stack
 */
  void _moveToTop(Block block) {
    //List<Block> sorted = blocks.sublist(0) ..sort((a, b) => (b.y - a.y));
    _removeBlock(block);
    _addBlock(block);
  }


/**
 * How many blocks of the given type have been used in the program so far?
 */
  int getBlockCount(int id) {
    return blocks.where( (b) => b.id == id ).length;
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
      return true;
    }
    return false;
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
            num by2 = by1 + BLOCK_PADDING;

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

    num lowestY = 0.0;
    for (Block block in blocks) {
      if (block.animate()) refresh = true;
      lowestY = max(block.bottomConnectorY, lowestY);
    }

    if (lowestY > height) {
      if (!refresh) {
        reshapeCanvas(width / SCALE, (lowestY + BLOCK_HEIGHT * 3) / SCALE);
      }
    }

    return refresh;
  }


  void draw() {
    ctx.save();
    {
      // transform into workspace coordinates
      //xform.transformContext(ctx);

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
        block._drawProperties(ctx);
        //if (drags.isNotEmpty)
        block._drawOutline(ctx);
      }
    }
    ctx.restore();
  }


  /// restore a constructed program from a previously saved state
  void _restoreProgram(Map json) {
    if (json['chains'] is List) {
      for (var chain in json['chains']) {
        if (chain is List) {
          for (var b in chain) {
            if (b is Map) _restoreBlock(b);
          }
        }
      }
    }
  }


  /// restore a block from a previously saved program state
  void _restoreBlock(Map json) {
    Block proto = menu.getBlockById(json["id"]);
    if (proto == null) {
      print("No prototype block found for id: ${json["id"]}");
      print(menu.slots.map( (s) { return s.block.id; }));
      return;
    }

    Block block = proto.clone();

    if (json['x'] is num && json['y'] is num) {
      block.x = json['x'] * BLOCK_UNIT;
      block.y = json['y'] * BLOCK_UNIT;
    }
    _addBlock(block);
    if (block is BeginBlock) {
      for (ClauseBlock clause in block.clauses) {
        _addBlock(clause);
      }
    }

    _snapTogether(block);

    for (Block block in blocks) {
      if (!block.hasPrev && block is! ClauseBlock) {
        block._reindentChain(0, null);
        block._repositionChain();
        block._resizeChain(ctx, BLOCK_WIDTH);
      }
    }

    _restoreParams(block, json['params'], json['properties']);

    if (json['children'] is List) {
      for (var child in json['children']) {
        if (child is Map) _restoreBlock(child);
      }
    }

    if (json['clauses'] is List) {
      for (var clause in json['clauses']) {
        if (clause is Map && clause['children'] is List) {
          for (var child in clause['children']) _restoreBlock(child);
        }
      }
    }
  }


  /// restore parameters for a block from a previously saved program
  void _restoreParams(Block block, List params, List properties) {
    if (params is List) {
      for (var param in params) {
        if (param is Map && param.containsKey('id') && param.containsKey('value') && block.params.containsKey(param['id'])) {
          final blockParam = block.params[param['id']];
          if (param["value"] is Map && ![ "bool", "num" ].contains(blockParam.type)) {
            blockParam.value = blockParam.defaultValue;
          } else {
            blockParam.value = param['value'];
          }
        }
      }
    }
    if (properties is List) {
      for (var prop in properties) {
        if (prop is Map && prop.containsKey('id') && prop.containsKey('value') && block.properties.containsKey(prop['id'])) {
          final blockProp = block.properties[prop['id']];
          if (prop["value"] is Map && ![ "bool", "num" ].contains(blockProp.type)) {
            blockProp.value = blockProp.defaultValue;
          } else {
            blockProp.value = prop['value'];
          }
        }
      }
    }
  }
}
