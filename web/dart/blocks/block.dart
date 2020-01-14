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

  Clause children = null;
  List<Clause> clauses = null;

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
  bool isDragging = false;

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
    if (this.children != null) {
      count = count + children.getBlockCount(id);
    }
    if (this.clauses != null) {
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

  DivElement draw(DivElement drag, BlockDragData dragData) {
    this._dragData = dragData;

    DivElement blockNode = new DivElement();
    blockNode.classes.add("nt-block");
    if (children != null || clauses != null) {
      blockNode.classes.add("nt-block-with-clauses");
    }
    _blockDiv = blockNode;

    DivElement headerNode = new DivElement();
    // TODO: If `children` changes (empties), update these classes
    if (children == null) {
      headerNode.classes.add("nt-block-header");
    } else {
      headerNode.classes.add("nt-block-clause-header");
    }
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
      DivElement childrenDiv = children.draw(drag, headerNode);
      blockNode.append(childrenDiv);
    }

    if (clauses != null) {
      for (int i = 0; i < clauses.length; i++) {
        DivElement clauseDivider = new DivElement();
        clauseDivider.classes.add("nt-clause-divider");
        blockNode.append(clauseDivider);
        Clause clause = clauses[i];
        DivElement clauseDiv = clause.draw(drag, clauseDivider);
        blockNode.append(clauseDiv);
      }
    }

    blockNode.draggable = true;
    blockNode.onDragStart.listen( (e) => startDrag(e, drag) );
    blockNode.onDragEnd.listen( (e) => endDrag(e, drag) );
    blockNode.onDragEnter.listen( enterDrag );
    blockNode.onDragOver.listen( (e) => e.preventDefault() );
    // blockNode.onDragLeave.listen( leaveDrag );
    blockNode.onDrop.listen( drop );

    return blockNode;
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
    isDragging = dragging;
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

  void setDraggingClasses() {
    if (isDragging) {
      _blockDiv.classes.add("nt-block-dragging");
      for (Block sibling in _dragData.siblings) {
        sibling._blockDiv.classes.add("nt-block-dragging");
      }
    } else {
      _blockDiv.classes.remove("nt-block-dragging");
      for (Block sibling in _dragData.siblings) {
        sibling._blockDiv.classes.remove("nt-block-dragging");
      }
    }
  }

  bool startDrag(MouseEvent event, DivElement drag) {
    event.stopPropagation();
    if (isDragging) {
      return false;
    }

    event.dataTransfer.setData(workspace.containerId, workspace.containerId);
    String blockString = jsonEncode(this._dragData.toJSON());
    event.dataTransfer.setData("text/json", blockString);

    Element dragClone = _blockDiv.clone(true);

    if (required) {
      drag.classes.add("nt-chain-starter");
      event.dataTransfer.setData("starter", "starter");
    }
    drag.setInnerHtml("");
    drag.append(dragClone);
    for (Block sibling in this._dragData.siblings) {
      drag.append(sibling._blockDiv.clone(true));
    }

    setDragging(true);
    setDraggingClasses();
    event.dataTransfer.setDragImage(drag, 0, 0);
  }

  void endDrag(MouseEvent event, DivElement drag) {
    workspace.clearDragOver();

    setDragging(false);
    setDraggingClasses();
    drag.classes.remove("nt-chain-starter");
  }

  bool enterDrag(MouseEvent event) {
    event.stopPropagation();
    workspace.clearDragOver();

    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return true;
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

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);
    final newBlocks = workspace.removeBlocksFromSource(blockData);
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
    workspace.updateWorkspaceForChanges();
    Block changedBlock = newBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));

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

}
