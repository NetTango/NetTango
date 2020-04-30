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

class CodeWorkspace {

  int version = VersionManager.VERSION;

  /// HTML Canvas ID
  String containerId;
  DivElement container, spaceDiv, chainsDiv, backdrop, dialog;

  CodeFormatter formatter;

  List<Chain> chains = new List<Chain>();

  int nextBlockId = 0;
  int nextBlockInstanceId = 0;

  /// save a copy of the workspace definition object for the save() function
  Map definition;

  /// block menu
  BlockMenu menu;

  /// global variable definitions and types
  List variables = new List();

  /// list of expressions
  List expressions = new List();

  int height, width, currentHeight;

  BlockStyle starterBlockStyle;
  BlockStyle containerBlockStyle;
  BlockStyle commandBlockStyle;

  DragImage _dragImage;
  Iterable<Block> _draggingBlocks;
  Iterable<Block> get draggingBlocks => _draggingBlocks;
  set draggingBlocks(Iterable<Block> v) => _draggingBlocks = v;
  bool get hasDraggingBlocks => _draggingBlocks != null;

  DragAcceptor workspaceAcceptor, blockAcceptor;
  Dropzone containerDropzone;

/**
 * Construct a code workspace from a JSON object
 */
  CodeWorkspace(this.containerId, this.definition, this.formatter) {

    if (this.definition["version"] != VersionManager.VERSION) {
      throw "The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${this.definition["version"]}.";
    }

    container = querySelector("#${containerId}");
    if (container == null) throw "No container element with ID $containerId found.";
    container.setInnerHtml("");
    container.classes.add("nt-container");

    this.workspaceAcceptor = DragAcceptor(this.containerId, true);
    this.blockAcceptor     = DragAcceptor(this.containerId, false);

    containerDropzone = Dropzone(container, acceptor: this.workspaceAcceptor);
    containerDropzone.onDrop.listen(containerDrop);

    height = definition["height"] is int ? definition["height"] : 600;
    width  = definition["width"]  is int ? definition["width"]  : 450;

    if (definition.containsKey("blockStyles")) {
      starterBlockStyle   = BlockStyle.fromJSON(definition["blockStyles"]["starterBlockStyle"],   BlockStyle.DEFAULT_STARTER_COLOR);
      containerBlockStyle = BlockStyle.fromJSON(definition["blockStyles"]["containerBlockStyle"], BlockStyle.DEFAULT_CONTAINER_COLOR);
      commandBlockStyle   = BlockStyle.fromJSON(definition["blockStyles"]["commandBlockStyle"],   BlockStyle.DEFAULT_COMMAND_COLOR);
    } else {
      starterBlockStyle   = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_STARTER_COLOR;
      containerBlockStyle = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_CONTAINER_COLOR;
      commandBlockStyle   = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_COMMAND_COLOR;
    }

    container.style.minHeight = "${height}px";
    container.style.minWidth  = "${width}px";
    container.style.maxWidth  = "${width}px";
    currentHeight = height;

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
  }

/**
 * Detaches this workspace object from the canvas
 */
  void unload() {
    chains.clear();
  }

/**
 * Callback when blocks of a program have changed
 */
  void programChanged(ProgramChangedEvent event) {
    try {
      _updateWorkspaceForChanges();
      js.context["NetTango"].callMethod("_relayCallback", [ containerId, event.toJS() ]);
    } catch (e) {
      print("Unable to relay program changed event to Javascript");
    }
  }

  String exportCode({Function formatAttributeOverride = null}) {
    var parseTree = exportParseTree(true);
    return this.formatter.formatCode(parseTree, formatAttributeOverride: formatAttributeOverride);
  }

/**
 * Returns a JSON object representing the program's parse tree
 */
  Map exportParseTree(bool includeRequired) {
    Map json = {
      "chains": []
    };
    for (Chain chain in chains) {
      json["chains"].add(chain.exportParseTree());
    }

    if (includeRequired) {
      for (Slot slot in menu.slots) {
        if (slot.block.required && getBlockCount(slot.block.id) == 0) {
          json["chains"].add([slot.block.toJSON()]);
        }
      }
    }
    return json;
  }

  int getBlockCount(int id) {
    if (chains.isEmpty) {
      return 0;
    }
    return chains.map( (c) => c.getBlockCount(id) ).reduce( (a, b) => a + b );
  }

  void draw() {
    String styleId = "$containerId-styles";
    StyleElement style = document.getElementById(styleId);
    if (style == null) {
      style = new StyleElement() .. id = styleId;
      container.append(style);
    }
    CssStyleSheet styleSheet = style.sheet;
    // the style sheet remains during a re-init of workspaces, so clear it
    while (styleSheet.cssRules.length > 0) {
      styleSheet.removeRule(0);
    }

    starterBlockStyle.appendToSheet(styleSheet, "$containerId-block-starter");
    containerBlockStyle.appendToSheet(styleSheet, "$containerId-block-container");
    commandBlockStyle.appendToSheet(styleSheet, "$containerId-block-command");

    final wrapper = new DivElement();
    wrapper.classes.add("nt-workspace-wrapper");
    container.append(wrapper);

    final drag = new DivElement();
    drag.classes.add("nt-block-drag");
    drag.classes.add("nt-chain");
    wrapper.append(drag);

    backdrop = new DivElement() .. className = "nt-attribute-backdrop";
    backdrop.onClick.listen( (e) => backdrop.classes.remove("show") );
    dialog = new DivElement() .. className = "nt-attribute-dialog";
    dialog.onClick.listen( (e) => e.stopPropagation() );
    backdrop.append(dialog);
    container.append(backdrop);

    spaceDiv = new DivElement() .. id = "$containerId-space";
    spaceDiv.classes.add("nt-workspace");

    _dragImage = new DragImage(drag);

    wrapper.append(spaceDiv);

    chainsDiv = new DivElement();
    spaceDiv.append(chainsDiv);

    for (int i = 0; i < chains.length; i++) {
      Chain chain = chains[i];
      chain.draw(_dragImage, i);
    }

    redrawChains();

    final menuDiv = menu.draw(_dragImage);
    menuDiv.style.maxHeight = "${height}px";
    wrapper.append(menuDiv);

    final spaceDropzone = Dropzone(spaceDiv, acceptor: this.workspaceAcceptor);
    spaceDropzone.onDragEnter.listen( (e) { DragAcceptor.isOverWorkspace = true; menu.updateDragOver(); } );
    spaceDropzone.onDragOver.listen( (e) => this.updateDragOver() );
    spaceDropzone.onDragLeave.listen( (e) { DragAcceptor.isOverWorkspace = false; this.updateDragOver(); menu.updateDragOver(); } );
    spaceDropzone.onDrop.listen(drop);
    containerDropzone.onDragEnter.listen( (e) { DragAcceptor.isOverContainer = true; menu.updateDragOver(); }  );
    containerDropzone.onDragLeave.listen( (e) { DragAcceptor.isOverContainer = false; menu.updateDragOver(); } );

    updateWorkspaceHeight();
  }

  void drop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;
    disableTopDropZones();

    final blocks = consumeDraggingBlocks();
    final offset = DragImage.getOffsetToRoot(this.chainsDiv);
    final dropLocation = event.position - offset - DragAcceptor.dragStartOffset;
    createChain(blocks, max(0, dropLocation.x.floor()), max(0, dropLocation.y.floor()));
    Block changedBlock = blocks.elementAt(0);
    programChanged(new BlockChangedEvent(changedBlock));
  }

  void containerDrop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;
    disableTopDropZones();

    final oldBlocks = consumeDraggingBlocks();
    Block changedBlock = oldBlocks.elementAt(0);
    programChanged(new BlockChangedEvent(changedBlock));
  }

  Iterable<Block> consumeDraggingBlocks() {
    final blocks = draggingBlocks;
    draggingBlocks = null;
    return blocks;
  }

  void createChain(Iterable<Block> newBlocks, int x, int y) {
    Chain newChain = new Chain(this);
    int newChainIndex = chains.length;
    chains.add(newChain);
    DivElement chainDiv = newChain.draw(_dragImage, newChainIndex);
    spaceDiv.append(chainDiv);
    newChain.addBlocks(newBlocks);
    repositionChain(newChain, x, y);
  }

  Iterable<Block> removeChain(int chainIndex) {
    Chain oldChain = chains[chainIndex];
    final blocks = oldChain.blocks;
    chains.removeAt(chainIndex);
    oldChain._div.remove();
    for (int i = 0; i < chains.length; i++) {
      Chain chain = chains[i];
      chain.resetDragData(i);
      chain.updatePosition();
    }
    return blocks;
  }

  void removeBlocksFromSource(BlockDragData blockData) {
    switch (blockData.parentType) {

      case "new-block":
        final slot = menu.slots[blockData.slotIndex];
        slot._slotDiv.classes.remove("nt-block-dragging");
        final instance = slot._newBlockInstance;
        draggingBlocks = [instance];
        break;

      case "workspace-chain":
        if (blockData.blockIndex == 0) {
          draggingBlocks = removeChain(blockData.chainIndex);
        } else {
          draggingBlocks = chains[blockData.chainIndex].removeBlocks(blockData.blockIndex);
        }
        break;

      case "block-children":
        draggingBlocks = chains[blockData.chainIndex]
          .getBlockInstance(blockData.parentInstanceId)
          .children.removeBlocks(blockData.blockIndex);
        break;

      case "block-clause":
        draggingBlocks = chains[blockData.chainIndex]
          .getBlockInstance(blockData.parentInstanceId)
          .clauses[blockData.clauseIndex].removeBlocks(blockData.blockIndex);
        break;

      case "default":
        throw new Exception("Unknown block removal type: ${blockData.parentType}");
        break;

    }
  }

  void redrawChains() {
    final sortedChains = chains.toList();
    sortedChains.sort((c1, c2) => c1.blocks.first.y.compareTo(c2.blocks.first.y));
    chainsDiv.innerHtml = "";
    for (Chain chain in sortedChains) {
      chainsDiv.append(chain._div);
    }
  }

  void repositionChain(Chain chain, int x, int y) {
    if (!chain.blocks.isEmpty) {
      Block first = chain.blocks[0];
      first.x = x;
      first.y = y;
      chain.updatePosition();
    }
    redrawChains();
  }

  void enableTopDropZones() {
    for (Chain chain in chains) {
      chain.enableTopDropZone();
    }
  }

  void disableTopDropZones() {
    for (Chain chain in chains) {
      chain.disableTopDropZone();
    }
  }

  void updateDragOver() {
    for (Chain chain in chains) {
      chain.updateDragOver();
    }
  }

  void clearDragOver() {
    for (Chain chain in chains) {
      chain.clearDragOver();
    }
    menu.updateDragOver();
  }

  void _updateWorkspaceForChanges() {
    updateWorkspaceHeight();
    resetBlockActionText();
    menu.updateLimits();
  }

  void updateWorkspaceHeight() {
    int maxHeight = height; // start with the minimum height from the model
    final containerRect = container.getBoundingClientRect();
    for (Chain chain in chains) {
      final rect = chain._div.getBoundingClientRect();
      final childHeight = (rect.bottom - containerRect.top).ceil();
      if (childHeight > maxHeight) {
        maxHeight = childHeight;
      }
    }
    currentHeight = maxHeight + 1;
    final newHeight = "${currentHeight}px";
    spaceDiv.style.minHeight = newHeight;
    menu._menuDiv.style.maxHeight = newHeight;
  }

  void resetBlockActionText() {
    for (Chain chain in chains) {
      for (Block block in chain.blocks) {
        block.resetBlockActionText();
      }
    }
  }

  /// restore a constructed program from a previously saved state
  void _restoreProgram(Map json) {
    if (json['chains'] is List) {
      for (var chain in json['chains']) {
        if (chain is List) {
          _restoreChain(chain);
        }
      }
    }
  }

  void _restoreChain(List chainJson) {
    Chain chain = new Chain(this);
    chains.add(chain);
    for (var b in chainJson) {
      if (b is Map) {
        Block block = _restoreBlock(b);
        if (block != null) {
          chain.blocks.add(block);
        }
      }
    }
  }

  /// restore a block from a previously saved program state
  Block _restoreBlock(Map json) {
    Block proto = menu.getBlockById(json["id"]);
    if (proto == null) {
      print("No prototype block found for id: ${json["id"]}");
      print(menu.slots.map( (s) { return s.block.id; }));
      return null;
    }

    Block block = proto.clone();

    if (json['x'] is num && json['y'] is num) {
      block.x = json['x'];
      block.y = json['y'];
    }

    block.propertiesDisplay = toStr(json["propertiesDisplay"], "shown");
    _restoreParams(block, json['params'], json['properties']);

    if (json['children'] is List) {
      block.children = new Clause(block);
      for (var childJson in json['children']) {
        if (childJson is Map) {
          Block child = _restoreBlock(childJson);
          if (child != null) {
            block.children.blocks.add(child);
          }
        }
      }
    }

    if (json['clauses'] is List) {
      block.clauses = new List<Clause>();
      int clauseIndex = 0;
      for (var clauseJson in json['clauses']) {
        if (clauseJson is Map && clauseJson['children'] is List) {
          Clause clause = new Clause(block, clauseIndex: clauseIndex);
          block.clauses.add(clause);
          for (var childJson in clauseJson['children']) {
            Block child = _restoreBlock(childJson);
            if (child != null) {
              clause.blocks.add(child);
            }
          }
          clauseIndex++;
        }
      }
    }

    return block;
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

  void removeEventListeners() {
    containerDropzone.destroy();
  }
}
