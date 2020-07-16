/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
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

enum BlockPlacement { starter, child, anywhere }

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

  /// parameters for this block (optional)
  Map<int, Attribute> params = new Map<int, Attribute>();

  /// properties for this block (optional)
  /// properties are just named parameters that get listed vertically
  Map<int, Attribute> properties = new Map<int, Attribute>();
  String propertiesDisplay = "shown";

  int nextParamId = 0;

  bool get hasParams     => params.isNotEmpty;
  bool get hasProperties => properties.isNotEmpty;

  List<Clause> clauses = new List<Clause>();
  bool get hasClauses => clauses.isNotEmpty;

  String blockColor;
  String textColor;
  String borderColor;
  String font;

  /// Tells a code formatter that at least one block of this type is required
  bool isRequired = false;

  /// Restrict block placement
  BlockPlacement placement = BlockPlacement.child;
  bool get canBeChild   => placement == BlockPlacement.child   || placement == BlockPlacement.anywhere;
  bool get canBeStarter => placement == BlockPlacement.starter || placement == BlockPlacement.anywhere;

  /// link back to the main workspace
  CodeWorkspace workspace;

  DragImage _dragImage;
  BlockDragData _dragData;
  bool isDragOver = false;
  bool isDragNotchOver = false;
  DivElement _blockDiv;
  DivElement _actionDiv;
  Toggle _propertiesToggle;

  Block(this.workspace, this.id, this.action, bool isSlotBlock) {
    if (this.id == null) {
      this.id = this.workspace.nextBlockId;
      this.workspace.nextBlockId++;
    } else if (this.id >= this.workspace.nextBlockId) {
      this.workspace.nextBlockId = this.id + 1;
    }
    if (!isSlotBlock) {
      this.instanceId = this.workspace.nextBlockInstanceId;
      this.workspace.nextBlockInstanceId++;
    }
  }

  Block clone(bool isSlotBlock) {
    Block other = new Block(workspace, id, action, isSlotBlock);
    other.action = action;
    other.type = type;
    other.format = format;
    other.note = note;
    other.blockColor = blockColor;
    other.textColor = textColor;
    other.borderColor = borderColor;
    other.font = font;
    other.isRequired = isRequired;
    other.placement = placement;
    for (Attribute param in params.values) {
      Attribute otherParam = param.clone(other, isSlotBlock);
      other.params[otherParam.id] = otherParam;
    }
    for (Attribute prop in properties.values) {
      Attribute otherProp = prop.clone(other, isSlotBlock);
      other.properties[otherProp.id] = otherProp;
    }
    return other;
  }

  static Block cloneSlotForChain(Block block) {
    final newBlock = block.clone(false);
    for (int clauseIndex = 0; clauseIndex < block.clauses.length; clauseIndex++) {
      newBlock.clauses.add(new Clause(newBlock, clauseIndex));
    }
    return newBlock;
  }

  int getBlockCount(int id) {
    int count = 0;
    if (this.id == id) { count++; }
    if (this.hasClauses) {
      count = count + this.clauses.map( (clause) => clause.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    return count;
  }

  Block getBlockInstance(int instanceId) {
    if (this.instanceId == instanceId) {
      return this;
    }
    for (Clause clause in clauses) {
      final clauseBlock = clause.getBlockInstance(instanceId);
      if (clauseBlock != null) { return clauseBlock; }
    }
    return null;
  }

  String getStyleClass() {
    if (canBeStarter) {
      return "${workspace.containerId}-block-starter";
    }
    if (hasClauses) {
      return "${workspace.containerId}-block-container";
    }
    return "${workspace.containerId}-block-command";
  }

  DivElement draw(DragImage dragImage, BlockDragData dragData) {
    this._dragData = dragData;
    this._dragImage = dragImage;

    _blockDiv = new DivElement();
    _blockDiv.classes.add("nt-block");
    final styleClass = getStyleClass();
    _blockDiv.classes.add(styleClass);
    if (hasClauses) {
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
    if (hasClauses) {
      headerNode.classes.add("nt-block-clause-header");
    } else {
      headerNode.classes.add("nt-block-header");
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
      _propertiesToggle = new Toggle(propertiesDisplay != "hidden", (bool isOn) {
        propertiesDisplay = isOn ? "shown" : "hidden";
        propertiesDiv.classes.toggle("nt-block-properties-hidden");
        workspace.programChanged(new BlockChangedEvent(this));
      });
      if (propertiesDisplay == "hidden") {
        propertiesDiv.classes.add("nt-block-properties-hidden");
      }
      _actionDiv.append(_propertiesToggle.div);
    }

    for (Attribute attribute in properties.values) {
      final propertyDiv = attribute.drawProperty();
      propertyDiv.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, propertyDiv);
      propertiesDiv.append(propertyDiv);
    }

    if (hasClauses) {
      final firstClause = clauses[0];
      DivElement firstClauseDiv = firstClause.draw(_dragImage, headerNode);
      _blockDiv.append(firstClauseDiv);
    }

    for (Clause clause in clauses.skip(1)) {
      DivElement clauseDivider = new DivElement();
      clauseDivider.classes.add("nt-clause-divider");
      clauseDivider.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, clauseDivider);
      _blockDiv.append(clauseDivider);
      DivElement clauseDiv = clause.draw(_dragImage, clauseDivider);
      _blockDiv.append(clauseDiv);
    }

    if (hasClauses) {
      DivElement footer = new DivElement();
      footer.classes.add("nt-clause-footer");
      footer.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, footer);
      _blockDiv.append(footer);
    }

    Block.wireDragEvents(this, _blockDiv, (isOver) => this.isDragOver = isOver );

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

  static void wireDragEvents(Block block, DivElement div, void setOver(bool isOver)) {
    final draggable = Draggable(div, avatarHandler: block._dragImage, draggingClass: "nt-block-dragging");
    draggable.onDragStart.listen(block.startDrag);
    draggable.onDragEnd.listen(block.endDrag);
    final dropzone = Dropzone(div, acceptor: block.workspace.blockAcceptor);
    dropzone.onDrop.listen(block.drop);
    dropzone.onDragEnter.listen( (e) => setOver(true) );
    dropzone.onDragLeave.listen( (e) => setOver(false) );
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
      final chain = workspace.chains[_dragData.chainIndex];
      workspace.formatter.formatBlocks(out, chain.blocks, 0);
      // if this block isn't a valid chain starter, nothing may have been written
      if (out.isEmpty) {
        workspace.formatter.formatBlock(out, this, 0);
      }
    } else {
      workspace.formatter.formatBlock(out, this, 0);
    }
    final value = out.toString().trim();
    final escapedValue = (new HtmlEscape()).convert(value);
    return escapedValue;
  }

  bool updateDragOver() {
    _blockDiv.classes.remove("nt-drag-over");
    _blockDiv.classes.remove("nt-block-clause-drag-over");
    bool isHighlightHandled = false;
    for (Clause clause in clauses) {
      final clauseResult = clause.updateDragOver();
      isHighlightHandled = isHighlightHandled || clauseResult;
    }
    if ((isDragOver || isDragNotchOver) && !isHighlightHandled) {
      isHighlightHandled = true;
      _blockDiv.classes.add("nt-drag-over");
    }
    return isHighlightHandled;
  }

  void clearDragOver() {
    _blockDiv.classes.remove("nt-drag-over");
    _blockDiv.classes.remove("nt-block-clause-drag-over");
    isDragOver = false;
    isDragNotchOver = false;
    for (Clause clause in clauses) {
      clause.clearDragOver();
    }
  }

  void startDrag(DraggableEvent event) {
    DragAcceptor.startDrag(this, event);

    final blocks = new List<Block>() ..
      add(this) ..
      addAll(this._dragData.siblings);

    Chain.redrawChain(this._dragImage.element, blocks, true);

    workspace.removeBlocksForDrag(this._dragData);
    workspace.enableTopDropZones();
  }

  void endDrag(DraggableEvent event) {
    DragAcceptor.endDrag();

    workspace.disableTopDropZones();
    workspace.clearDragOver();

    if (!workspace.hasDraggingBlocks) {
      return;
    }

    // our blocks weren't dropped anywhere, so reset
    final newBlocks = workspace.consumeDraggingBlocks();
    switch (_dragData.parentType) {

      case "workspace-chain":
        if (_dragData.blockIndex == 0) {
          // new chain, we deleted the old one
          workspace.createChain(newBlocks, DragAcceptor.oldChainX, DragAcceptor.oldChainY);
        } else {
          workspace.chains[_dragData.chainIndex].insertBlocks(_dragData.blockIndex, newBlocks);
        }
        break;

      case "block-clause":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.clauses[_dragData.clauseIndex].insertBlocks(_dragData.blockIndex, newBlocks);
        break;

    }
  }

  void drop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;

    final newBlocks = workspace.consumeDraggingBlocks();

    switch (_dragData.parentType) {

      case "workspace-chain":
        workspace.chains[_dragData.chainIndex].insertBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

      case "block-clause":
        final parentBlock = workspace.chains[_dragData.chainIndex].getBlockInstance(_dragData.parentInstanceId);
        parentBlock.clauses[_dragData.clauseIndex].insertBlocks(_dragData.blockIndex + 1, newBlocks);
        break;

    }

    Block changedBlock = newBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));
    workspace.disableTopDropZones();
  }

  void resetOwnedBlocksDragData() {
    for (Clause clause in clauses) {
      clause.resetOwned();
    }
  }

  void resetBlockActionText() {
    _actionDiv.innerHtml = "";
    updateActionText();
    if (_propertiesToggle != null) {
      _actionDiv.append(_propertiesToggle.div);
    }
    for (Clause clause in clauses) {
      for (Block block in clause.blocks) {
        block.resetBlockActionText();
      }
    }
  }

}
