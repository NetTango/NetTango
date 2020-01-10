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

final num SCALE = window.devicePixelRatio;

/**
 * Visual programming block
 */
class Block {

  /// unique block ID number per workspace
  int id;

  /// unqiue block ID number per instance in a program chain
  int instanceId;

  /// text displayed on the block
  String action;

  /// language specific command type used by code formatters (e.g. nlogo:command)
  var type;

  /// formatting hint to help translate the parse tree into source code.
  /// parameters can be referenced using python format syntax. e.g.
  /// "if random 100 > {0}"
  String format;

  /// block dimensions and position
  num x = 0.0, y = 0.0;

  /// parameters for this block (optional)
  Map<int, Parameter> params = new Map<int, Parameter>();

  /// properties for this block (optional)
  /// properties are just named paramters that get listed vertically
  Map<int, Parameter> properties = new Map<int, Parameter>();

  int nextParamId = 0;

  List<Block> children = null;
  List<Chain> clauses = null;

  /// CSS color of the block
  String blockColor = '#6b9bc3'; //'#d2584a';

  /// CSS color of the text
  String textColor = 'white';

  /// CSS border color of the block
  String borderColor = "rgba(255, 255, 255, 0.6)";

  /// CSS font spec
  String font = "400 ${14 * SCALE}px 'Poppins', sans-serif";

  /// Tells a code formatter that at least one block of this type is required
  bool required = false;

  /// link back to the main workspace
  CodeWorkspace workspace;

  bool get hasParams => params.isNotEmpty;

  bool get hasProperties => properties.isNotEmpty;

  BlockDragData _dragData;
  DivElement _blockDiv;
  DivElement _childrenDiv;
  List<DivElement> _clauseDivs = new List<DivElement>();

  Block(this.workspace, this.id, this.action) {
    if (this.id == null) {
      this.id = this.workspace.nextBlockId;
      this.workspace.nextBlockId++;
    } else if (this.id >= this.workspace.nextBlockId) {
      this.workspace.nextBlockId = this.id + 1;
    }
    this.instanceId = this.workspace.nextBlockInstanceId;
    this.workspace.nextBlockInstanceId++;
  }

  /// create a block from a JSON definition
  factory Block.fromJSON(CodeWorkspace workspace, Map json) {

    String action = toStr(json["action"]);  // required
    int id = json["id"];
    Block block = new Block(workspace, id, action);
    json["id"] = block.id;

    //----------------------------------------------------------
    // block types
    //----------------------------------------------------------
    if (json["clauses"] is List) {
      block.clauses = new List<Chain>();
      for (var clause in json["clauses"]) {
        Chain chain = Chain.fromJSON(workspace, clause);
        block.clauses.add(chain);
      }
    }

    //----------------------------------------------------------
    // block properties
    //----------------------------------------------------------
    block.type = toStr(json["type"]);
    block.format = toStr(json["format"], null);
    block.blockColor = toStr(json["blockColor"], block.blockColor);
    block.textColor = toStr(json["textColor"], block.textColor);
    block.borderColor = toStr(json["borderColor"], block.borderColor);
    block.font = toStr(json["font"], block.font);
    block.required = toBool(json["required"], block.required);

    //----------------------------------------------------------
    // parameters
    //----------------------------------------------------------
    if (json["params"] is List) {
      for (var p in json["params"]) {
        Parameter param = new Parameter.fromJSON(block, p);
        if (param != null) {
          block.params[param.id] = param;
        }
      }
    }

    //----------------------------------------------------------
    // properties
    //----------------------------------------------------------
    if (json["properties"] is List) {
      for (var p in json["properties"]) {
        Parameter prop = new Parameter.fromJSON(block, p);
        if (prop != null) {
          block.properties[prop.id] = prop;
        }
      }
    }

    return block;
  }

  Block clone() {
    Block other = new Block(workspace, id, action);
    _copyTo(other);
    return other;
  }

  void _copyTo(Block other) {
    other.action = action;
    other.type = type;
    other.format = format;
    other.blockColor = blockColor;
    other.textColor = textColor;
    other.borderColor = borderColor;
    other.font = font;
    other.required = required;
    for (Parameter param in params.values) {
      Parameter otherParam = param.clone(other);
      other.params[otherParam.id] = otherParam;
    }
    for (Parameter prop in properties.values) {
      Parameter otherProp = prop.clone(other);
      other.properties[otherProp.id] = otherProp;
    }
  }


//-------------------------------------------------------------------------
/// export block to a JSON object
//-------------------------------------------------------------------------
  Map toJSON() {
    var data = { };
    data["id"] = id;
    data["instanceId"] = instanceId;
    data["action"] = action;
    data["type"] = type;
    data["format"] = format;
    data["required"] = required;
    data["x"] = x;
    data["y"] = y;
    if (children != null) {
      data["children"] = [];
      for (Block child in children) {
        data["children"].add(child.toJSON());
      }
    }
    if (clauses != null) {
      data["clauses"] = [];
      for (Chain clause in clauses) {
        data["clauses"].add(clause.toJSON());
      }
    }
    if (params.isNotEmpty) {
      data["params"] = [];
      for (Parameter param in params.values) {
        data["params"].add(param.toJSON());
      }
    }
    if (properties.isNotEmpty) {
      data["properties"] = [];
      for (Parameter prop in properties.values) {
        data["properties"].add(prop.toJSON());
      }
    }
    return data;
  }

  int getBlockCount(int id) {
    int count = 0;
    if (this.id == id) { count++; }
    if (this.children != null && children.isNotEmpty) {
      count = count + this.children.map( (child) => child.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    if (this.clauses != null && clauses.isNotEmpty) {
      count = count + this.clauses.map( (clause) => clause.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    return count;
  }

  Block getBlockInstance(int instanceId) {
    if (this.instanceId == instanceId) {
      return this;
    }
    if (children != null) {
      for (Block child in children) {
        final block = child.getBlockInstance(instanceId);
        if (block != null) { return block; }
      }
    }
    if (clauses != null) {
      for (Chain clause in clauses) {
        final block = clause.getBlockInstance(instanceId);
        if (block != null) { return block; }
      }
    }
    return null;
  }

  /// move a single block to a location
  void moveBlock(num x, num y) {
    this.x = x;
    this.y = y;
  }

  DivElement draw(DivElement drag, CssStyleSheet dragSheet, BlockDragData dragData) {
    this._dragData = dragData;

    DivElement blockNode = new DivElement();
    blockNode.classes.add("nt-block");
    _blockDiv = blockNode;

    DivElement headerNode = new DivElement();
    headerNode.classes.add("nt-block-header");
    blockNode.append(headerNode);

    DivElement actionNode = new DivElement();
    actionNode.classes.add("nt-block-action");
    actionNode.innerText = action;
    headerNode.append(actionNode);

    for (Parameter attribute in params.values) {
      headerNode.append(attribute.drawParameter());
    }
    for (Parameter attribute in properties.values) {
      blockNode.append(attribute.drawProperty());
    }

    if (children != null) {
      _childrenDiv = drawClause(children, drag, dragSheet);
      blockNode.append(_childrenDiv);
    }

    if (clauses != null) {
      for (int i = 0; i < clauses.length; i++) {
        Chain clause = clauses[i];
        DivElement clauseDiv = drawClause(clause.blocks, drag, dragSheet, clauseIndex: i);
        _clauseDivs.add(clauseDiv);
        blockNode.append(clauseDiv);
      }
    }

    blockNode.draggable = true;
    blockNode.onDragStart.listen( (e) => startDrag(e, drag, dragSheet) );
    blockNode.onDragEnd.listen( (e) => endDrag(e, drag, dragSheet) );
    blockNode.onDragEnter.listen( (e) => enterDrag(e) );
    blockNode.onDragOver.listen( (e) => e.preventDefault() );
    blockNode.onDragLeave.listen( leaveDrag );
    blockNode.onDrop.listen( drop );

    return blockNode;
  }

  DivElement drawClause(List<Block> blocks, DivElement drag, CssStyleSheet dragSheet, {int clauseIndex = null}) {
    DivElement clauseDiv = new DivElement();
    clauseDiv.classes.add("nt-clause");
    if (blocks.isEmpty) {
      clauseDiv.classes.add("nt-clause-empty");
      setupEmptyDragListeners(clauseDiv, clauseIndex);
      return clauseDiv;
    }
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(_dragData.chainIndex, i, instanceId, siblings, clauseIndex: clauseIndex);
      final blockDiv = block.draw(drag, dragSheet, dragData);
      clauseDiv.append(blockDiv);
    }
    return clauseDiv;
  }

  void setupEmptyDragListeners(DivElement clauseDiv, int clauseIndex) {
    clauseDiv.onDragEnter.listen( (e) => enterClauseDrag(e, clauseDiv) );
    clauseDiv.onDragLeave.listen( (e) => leaveClauseDrag(e, clauseDiv) );
    clauseDiv.onDragOver.listen( (e) => e.preventDefault() );
    clauseDiv.onDrop.listen( (e) => dropClause(e, clauseDiv, clauseIndex) );
  }

  bool enterClauseDrag(MouseEvent event, DivElement clauseDiv) {
    if (!clauseDiv.classes.contains("nt-clause-empty")) {
      return true;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.stopPropagation();
    clauseDiv.classes.add("nt-drag-over");
    return false;
  }

  bool leaveClauseDrag(MouseEvent event, DivElement clauseDiv) {
    // why do this instead of removing the event listener when not empty?
    // you have to store the subscription somewhere to `cancel()` it with
    // dart, and that's more state than I want to track at the moment.
    if (!clauseDiv.classes.contains("nt-clause-empty")) {
      return true;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.stopPropagation();
    clauseDiv.classes.remove("nt-drag-over");
    return false;
  }

  bool dropClause(MouseEvent event, DivElement clauseDiv, int clauseIndex) {
    if (!clauseDiv.classes.contains("nt-clause-empty")) {
      return true;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.preventDefault();
    event.stopPropagation();
    clauseDiv.classes.remove("nt-drag-over");
    clauseDiv.classes.remove("nt-clause-empty");

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);
    final newBlocks = workspace.removeBlocksFromSource(blockData);

    if (clauseIndex == null) {
      insertChildBlocks(0, newBlocks);
    } else {
      insertClauseBlocks(clauseIndex, 0, newBlocks);
    }
    workspace.updateWorkspaceHeight();

    return false;
  }

  void startDrag(MouseEvent event, DivElement drag, CssStyleSheet dragSheet) {
    Element target = event.target;
    // if the class is already set, we're already draggin'
    if (target.classes.contains("nt-block-drag-target")) {
      return;
    }

    event.dataTransfer.setData(workspace.containerId, workspace.containerId);
    String blockString = jsonEncode(this._dragData.toJSON());
    event.dataTransfer.setData("text/json", blockString);
    event.dataTransfer.effectAllowed = "move";

    // HTML drag events fire internally to the div, so we
    // disable pointer events for any "inner" block elements
    // while we drag.  -Jeremy B, Jan 2020
    dragSheet.insertRule(".nt-menu-slot { pointer-events: none; }", 0);
    dragSheet.insertRule(".nt-block-header { pointer-events: none; }", 1);
    dragSheet.insertRule(".nt-property { pointer-events: none; }", 2);

    Element dragClone = target.clone(true);
    target.classes.add("nt-block-drag-target");

    if (required) {
      drag.classes.add("nt-chain-starter");
      event.dataTransfer.setData("starter", "starter");
    }
    drag.setInnerHtml("");
    drag.append(dragClone);
    for(Block sibling in this._dragData.siblings) {
      drag.append(sibling._blockDiv.clone(true));
      sibling._blockDiv.classes.add("nt-block-drag-sibling");
    }

    event.dataTransfer.setDragImage(drag, 0, 0);
  }

  void endDrag(MouseEvent event, DivElement drag, CssStyleSheet dragSheet) {
    while (dragSheet.rules.length > 0) {
      dragSheet.deleteRule(0);
    }

    Element target = event.target;
    target.classes.remove("nt-block-drag-target");
    drag.classes.remove("nt-chain-starter");
    for(Block sibling in this._dragData.siblings) {
      sibling._blockDiv.classes.remove("nt-block-drag-sibling");
    }
  }

  bool enterDrag(MouseEvent event) {
    Element target = event.target;
    if (target.classes.contains("nt-block-drag-target")) {
      return true;
    }
    if (!event.dataTransfer.types.contains(workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.stopPropagation();
    _blockDiv.classes.add("nt-drag-over");
    return false;
  }

  void leaveDrag(MouseEvent event) {
    _blockDiv.classes.remove("nt-drag-over");
  }

  bool drop(MouseEvent event) {
    event.preventDefault();
    event.stopPropagation();
    _blockDiv.classes.remove("nt-drag-over");
    Element target = event.target;
    if (target.classes.contains("nt-block-drag-target") || target.classes.contains("nt-block-drag-sibling")) {
      return false;
    }
    if (_blockDiv.classes.contains("nt-block-drag-target") || _blockDiv.classes.contains("nt-block-drag-sibling")) {
      return false;
    }
    if (!event.dataTransfer.types.contains(workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);
    final newBlocks = workspace.removeBlocksFromSource(blockData);
    switch (_dragData.parentType) {
      case "workspace-chain":
        workspace.chains[_dragData.chainIndex].insertBlocks(_dragData.chainIndex, _dragData.blockIndex + 1, newBlocks);
        break;

      case "block-children":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.insertChildBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

      case "block-clause":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.insertClauseBlocks(_dragData.clauseIndex, _dragData.blockIndex + 1, newBlocks);
        break;
    }
    workspace.updateWorkspaceHeight();
    Block changedBlock = newBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));

    return false;
  }

  void insertChildBlocks(int blockIndex, Iterable<Block> newBlocks) {
    children.insertAll(blockIndex, newBlocks);
    redrawBlocks(_childrenDiv, children);
  }

  void insertClauseBlocks(int clauseIndex, int blockIndex, Iterable<Block> newBlocks) {
    Chain clause = clauses[clauseIndex];
    clause.blocks.insertAll(blockIndex, newBlocks);
    DivElement clauseDiv = _clauseDivs[clauseIndex];
    redrawBlocks(clauseDiv, clause.blocks, clauseIndex: clauseIndex);
  }

  void redrawBlocks(DivElement div, List<Block> blocks, {int clauseIndex = null}) {
    div.innerHtml = "";
    if (blocks.isEmpty) {
      div.classes.add("nt-clause-empty");
      setupEmptyDragListeners(div, clauseIndex);
    }
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(_dragData.chainIndex, i, instanceId, blocks.skip(i + 1), clauseIndex: clauseIndex);
      block.resetOwnedBlocksDragData();
      div.append(block._blockDiv);
    }
  }

  Iterable<Block> removeChildBlocks(int blockIndex) {
    final removed = children.skip(blockIndex);
    children = children.take(blockIndex).toList();
    redrawBlocks(_childrenDiv, children);
    return removed;
  }

  Iterable<Block> removeClauseBlocks(int clauseIndex, int blockIndex) {
    Chain clause = clauses[clauseIndex];
    final removed = clause.blocks.skip(blockIndex);
    DivElement clauseDiv = _clauseDivs[clauseIndex];
    clause.blocks = clause.blocks.take(blockIndex).toList();
    redrawBlocks(clauseDiv, clause.blocks, clauseIndex: clauseIndex);
    return removed;
  }

  void resetOwnedBlocksDragData() {
    if (children != null) {
      for (int i = 0; i < children.length; i++) {
        Block block = children[i];
        block._dragData.resetBlockOwned(_dragData.chainIndex, i, instanceId, children.skip(i + 1));
        _childrenDiv.append(block._blockDiv);
      }
    }
    if (clauses != null) {
      for (int clauseIndex = 0; clauseIndex < clauses.length; clauseIndex++) {
        Chain clause = clauses[clauseIndex];
        for (int i = 0; i < clause.blocks.length; i++) {
          Block block = clause.blocks[i];
          block._dragData.resetBlockOwned(_dragData.chainIndex, i, instanceId, clause.blocks.skip(i + 1), clauseIndex: clauseIndex);
        }
      }
    }
  }

}
