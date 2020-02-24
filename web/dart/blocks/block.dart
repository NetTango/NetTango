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

  /// extra text to include in the code tip info of a block
  String note;

  /// block dimensions and position
  num x = 0.0, y = 0.0;

  /// parameters for this block (optional)
  Map<int, Attribute> params = new Map<int, Attribute>();

  /// properties for this block (optional)
  /// properties are just named paramters that get listed vertically
  Map<int, Attribute> properties = new Map<int, Attribute>();

  int nextParamId = 0;

  Clause children = null;
  List<Clause> clauses = null;

  String blockColor;
  String textColor;
  String borderColor;
  String font;

  /// Tells a code formatter that at least one block of this type is required
  bool required = false;

  /// link back to the main workspace
  CodeWorkspace workspace;

  bool get hasParams => params.isNotEmpty;

  bool get hasProperties => properties.isNotEmpty;

  BlockDragData _dragData;
  DivElement _blockDiv;
  DivElement _dragImage;
  DivElement _actionDiv;
  bool isDragging = false;
  Toggle _propertiesToggle;

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
      block.clauses = new List<Clause>();
      for (int i = 0; i < json["clauses"].length; i++) {
        final clauseJson = json["clauses"][i];
        Clause chain = Clause.fromJSON(workspace, block, clauseJson, i);
        block.clauses.add(chain);
      }
    }

    //----------------------------------------------------------
    // block properties
    //----------------------------------------------------------
    block.type = toStr(json["type"]);
    block.format = toStr(json["format"], null);
    block.note = toStr(json["note"], null);
    block.blockColor = toStr(json["blockColor"], null);
    block.textColor = toStr(json["textColor"], null);
    block.borderColor = toStr(json["borderColor"], null);
    block.font = toStr(json["font"], null);
    block.required = toBool(json["required"], block.required);

    //----------------------------------------------------------
    // parameters
    //----------------------------------------------------------
    if (json["params"] is List) {
      for (var p in json["params"]) {
        Attribute param = new Attribute.fromJSON(block, p);
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
        Attribute prop = new Attribute.fromJSON(block, p);
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

  static Block cloneSlotForChain(Block block) {
    final newBlock = block.clone();
    if (block.clauses != null) {
      newBlock.children = new Clause(newBlock);
      if (block.clauses.length > 0) {
        newBlock.clauses = new List<Clause>();
        for (int i = 0; i < block.clauses.length; i++) {
          newBlock.clauses.add(new Clause(newBlock, clauseIndex: i));
        }
      }
    }
    return newBlock;
  }

  void _copyTo(Block other) {
    other.action = action;
    other.type = type;
    other.format = format;
    other.note = note;
    other.blockColor = blockColor;
    other.textColor = textColor;
    other.borderColor = borderColor;
    other.font = font;
    other.required = required;
    for (Attribute param in params.values) {
      Attribute otherParam = param.clone(other);
      other.params[otherParam.id] = otherParam;
    }
    for (Attribute prop in properties.values) {
      Attribute otherProp = prop.clone(other);
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
    data["note"] = note;
    data["required"] = required;
    data["x"] = x;
    data["y"] = y;
    if (children != null) {
      data["children"] = [];
      for (Block child in children.blocks) {
        data["children"].add(child.toJSON());
      }
    }
    if (clauses != null) {
      data["clauses"] = [];
      for (Clause clause in clauses) {
        data["clauses"].add(clause.toJSON());
      }
    }
    if (params.isNotEmpty) {
      data["params"] = [];
      for (Attribute param in params.values) {
        data["params"].add(param.toJSON());
      }
    }
    if (properties.isNotEmpty) {
      data["properties"] = [];
      for (Attribute prop in properties.values) {
        data["properties"].add(prop.toJSON());
      }
    }
    return data;
  }

  int getBlockCount(int id) {
    int count = 0;
    if (this.id == id) { count++; }
    if (this.children != null) {
      count = count + children.getBlockCount(id);
    }
    if (this.clauses != null && this.clauses.isNotEmpty) {
      count = count + this.clauses.map( (clause) => clause.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    return count;
  }

  Block getBlockInstance(int instanceId) {
    if (this.instanceId == instanceId) {
      return this;
    }
    if (children != null) {
      final block = children.getBlockInstance(instanceId);
      if (block != null) { return block; }
    }
    if (clauses != null) {
      for (Clause clause in clauses) {
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

  String getStyleClass() {
    if (required) {
      return "${workspace.containerId}-block-starter";
    }
    if (children != null || clauses != null) {
      return "${workspace.containerId}-block-container";
    }
    return "${workspace.containerId}-block-command";
  }

  DivElement draw(DivElement dragImage, BlockDragData dragData) {
    this._dragData = dragData;
    this._dragImage = dragImage;

    _blockDiv = new DivElement();
    _blockDiv.classes.add("nt-block");
    final styleClass = getStyleClass();
    _blockDiv.classes.add(styleClass);
    if (children != null || clauses != null) {
      _blockDiv.classes.add("nt-block-with-clauses");
    }

    applyStyleOverrides(this, this._blockDiv);

    DivElement leftBar = new DivElement();
    leftBar.classes.add("nt-block-left-bar");
    leftBar.classes.add("$styleClass-color");
    maybeSetColorOverride(this.blockColor, leftBar);
    // This is pretty gross, but there isn't a way I have found using plain CSS
    // to auto-clear a grid-positioned element to the last row when the number of
    // rows is auto-generated.  -Jeremy B January 2020
    leftBar.style.gridRowEnd = "${4 + properties.length + (clauses != null ? clauses.length * 2 : 0)}";
    _blockDiv.append(leftBar);

    DivElement headerNode = new DivElement();
    headerNode.classes.add("$styleClass-color");
    maybeSetColorOverride(this.blockColor, headerNode);
    if (children == null) {
      headerNode.classes.add("nt-block-header");
    } else {
      headerNode.classes.add("nt-block-clause-header");
    }
    _blockDiv.append(headerNode);

    _actionDiv = new DivElement();
    updateActionText();
    _actionDiv.classes.add("nt-block-action");
    headerNode.append(_actionDiv);

    final paramDiv = new DivElement();
    paramDiv.classes.add("nt-block-params");
    headerNode.append(paramDiv);

    for (Attribute attribute in params.values) {
      paramDiv.append(attribute.drawParameter());
    }

    final propertiesDiv = new DivElement();
    propertiesDiv.classes.add("nt-block-properties");
    headerNode.append(propertiesDiv);

    if (properties.length > 0) {
      _propertiesToggle = new Toggle( (isOn) => propertiesDiv.classes.toggle("nt-block-properties-hidden") );
      _actionDiv.append(_propertiesToggle.div);
    }

    for (Attribute attribute in properties.values) {
      final propertyDiv = attribute.drawProperty();
      propertyDiv.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, propertyDiv);
      propertiesDiv.append(propertyDiv);
    }

    if (children != null) {
      DivElement childrenDiv = children.draw(_dragImage, headerNode);
      _blockDiv.append(childrenDiv);
    }

    if (clauses != null) {
      for (int i = 0; i < clauses.length; i++) {
        DivElement clauseDivider = new DivElement();
        clauseDivider.classes.add("nt-clause-divider");
        clauseDivider.classes.add("$styleClass-color");
        clauseDivider.onDragOver.listen( (e) => e.preventDefault() );
        maybeSetColorOverride(this.blockColor, clauseDivider);
        _blockDiv.append(clauseDivider);
        Clause clause = clauses[i];
        DivElement clauseDiv = clause.draw(_dragImage, clauseDivider);
        _blockDiv.append(clauseDiv);
      }
    }

    if (children != null || clauses != null) {
      DivElement footer = new DivElement();
      footer.classes.add("nt-clause-footer");
      footer.classes.add("$styleClass-color");
      footer.onDragOver.listen( (e) => e.preventDefault() );
      maybeSetColorOverride(this.blockColor, footer);
      _blockDiv.append(footer);
    }

    Block.wireDragEvents(this, _blockDiv);

    return _blockDiv;
  }

  static void maybeSetColorOverride(String backgroundColor, DivElement div) {
    if (backgroundColor != null) { div.style.backgroundColor = backgroundColor; }
  }

  static void applyStyleOverrides(Block block, DivElement div) {
    if (block.borderColor != null) { div.style.borderColor = block.borderColor; }
    if (block.textColor != null)   { div.style.color       = block.textColor; }
    if (block.font != null) {
      // lineHeight gets reset by the `font` property
      final lineHeight     = div.style.lineHeight;
      div.style.font       = block.font;
      div.style.lineHeight = lineHeight;
    }
  }

  static void wireDragEvents(Block block, DivElement div) {
    div.draggable = true;
    div.onDragStart.listen( block.startDrag );
    div.onDragEnd.listen( block.endDrag );
    div.onDragEnter.listen( block.enterDrag );
    div.onDragOver.listen( (e) => e.preventDefault() );
    div.onDrop.listen( block.drop );
  }

  void updateActionText() {
    final codeTip = formatCodeTip();
    _actionDiv.appendHtml("""<span title="$codeTip">$action</span>""");
  }

  String formatCodeTip() {
    final out = new StringBuffer();
    if (this.note != null && this.note.trimLeft().isNotEmpty) {
      out.writeln(this.note);
      out.writeln();
    }
    if (_dragData.parentType == "workspace-chain" && _dragData.blockIndex == 0) {
      final chain = workspace.chains[_dragData.chainIndex].exportParseTree();
      workspace.formatter.formatChain(out, chain, 0);
      // if this block isn't a valid chain starter, nothing may have been written
      if (out.isEmpty) {
        workspace.formatter.formatBlock(out, this.toJSON(), 0);
      }
    } else {
      workspace.formatter.formatBlock(out, this.toJSON(), 0);
    }
    final value = out.toString().trim();
    final escapedValue = (new HtmlEscape()).convert(value);
    return escapedValue;
  }

  void clearDragOver() {
    _blockDiv.classes.remove("nt-drag-over");
    _blockDiv.classes.remove("nt-block-clause-drag-over");
    if (children != null) {
      children.clearDragOver();
    }
    if (clauses != null) {
      for (Clause clause in clauses) {
        clause.clearDragOver();
      }
    }
  }

  void setDragging(bool dragging) {
    this.isDragging = dragging;
    if (children != null) {
      children.setDragging(dragging);
    }
    if (clauses != null) {
      for (Clause clause in clauses) {
        clause.setDragging(dragging);
      }
    }
    for (Block sibling in _dragData.siblings) {
      sibling.setDragging(dragging);
    }
  }

  void startDrag(MouseEvent event) {
    event.stopPropagation();
    if (isDragging) {
      return;
    }

    event.dataTransfer.setData(workspace.containerId, workspace.containerId);
    if (this.required) {
      event.dataTransfer.setData("starter", "starter");
    }

    setDragging(true);

    final blocks = new List<Block>() ..
      add(this) ..
      addAll(this._dragData.siblings);

    Chain.redrawChain(this._dragImage, blocks, true);

    event.dataTransfer.setDragImage(this._dragImage, 0, 0);

    // This silliness is to avoid causing Chrome to freak out.  It immediately cancels
    // any drag/drop operations if you change the DOM of the element that started the
    // drag in the dragstart event.  -Jeremy B Jan-2020
    (new Timer(Duration(milliseconds: 1), () {
      workspace.removeBlocksFromSource(this._dragData);
      workspace.enableTopDropZones();
    }));
  }

  void endDrag(MouseEvent event) {
    workspace.clearDragOver();

    if (workspace.hasDraggingBlocks) {
      // our blocks weren't dropped anywhere, so reset
      final newBlocks = workspace.consumeDraggingBlocks();
      switch (_dragData.parentType) {

        case "workspace-chain":
          if (_dragData.blockIndex == 0) {
            // new chain, we deleted the old one
            workspace.createChain(newBlocks, x, y);
          } else {
            workspace.chains[_dragData.chainIndex].insertBlocks(_dragData.blockIndex, newBlocks);
          }
          break;

        case "block-children":
          final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
          parentBlock.children.insertBlocks(_dragData.blockIndex, newBlocks);
          break;

        case "block-clause":
          final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
          parentBlock.clauses[_dragData.clauseIndex].insertBlocks(_dragData.blockIndex, newBlocks);
          break;

      }
    }

    setDragging(false);
    _dragImage.innerHtml = "";
    _dragImage.classes.remove("nt-chain-starter");
    _dragImage.classes.remove("nt-chain-fragment");
    workspace.disableTopDropZones();
  }

  bool enterDrag(MouseEvent event) {
    event.stopPropagation();
    workspace.clearDragOver();

    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    _blockDiv.classes.add("nt-drag-over");

    return false;
  }

  bool drop(MouseEvent event) {
    event.preventDefault();
    event.stopPropagation();
    workspace.clearDragOver();

    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    final newBlocks = workspace.consumeDraggingBlocks();

    switch (_dragData.parentType) {

      case "workspace-chain":
        workspace.chains[_dragData.chainIndex].insertBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

      case "block-children":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.children.insertBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

      case "block-clause":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.clauses[_dragData.clauseIndex].insertBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

    }

    Block changedBlock = newBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));
    workspace.disableTopDropZones();

    return false;
  }

  void resetOwnedBlocksDragData() {
    if (children != null) {
      children.resetOwned();
    }
    if (clauses != null) {
      for (int clauseIndex = 0; clauseIndex < clauses.length; clauseIndex++) {
        Clause clause = clauses[clauseIndex];
        clause.resetOwned();
      }
    }
  }

  void resetBlockActionText() {
    _actionDiv.innerHtml = "";
    updateActionText();
    if (_propertiesToggle != null) {
      _actionDiv.append(_propertiesToggle.div);
    }
    if (children != null) {
      for (Block block in children.blocks) {
        block.resetBlockActionText();
      }
    }
    if (clauses != null) {
      for (Clause clause in clauses) {
        for (Block block in clause.blocks) {
          block.resetBlockActionText();
        }
      }
    }
  }

}
