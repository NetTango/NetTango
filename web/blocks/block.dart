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

class BlockPlacement {
  static final STARTER = "starter";
  static final CHILD = "child";
  static final ANYWHERE = "anywhere";
}

/**
 * Visual programming block
 */
class Block {

  final storage = new ExternalStorage(["id", "action", "required", "isTerminal", "placement", "allowedTags", "tags", "instanceId", "type", "format", "closeClauses", "closeStarter", "limit", "note", "blockColor", "textColor", "borderColor", "font", "clauses", "params", "properties", "propertiesDisplay"]);

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

  /// code to be inserted after all clauses
  String closeClauses;

  /// code to be inserted after all attached blocks in a chain if the block is a starter
  String closeStarter;

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

  /// Can this block accept subsequent peer blocks in the chain/clause?
  bool isTerminal;
  bool get isAttachable => isTerminal == null ? true : !isTerminal;

  /// Restrict block placement
  String placement = BlockPlacement.CHILD;
  bool get canBeChild   => placement == BlockPlacement.CHILD   || placement == BlockPlacement.ANYWHERE;
  bool get canBeStarter => placement == BlockPlacement.STARTER || placement == BlockPlacement.ANYWHERE;

  // If this is a non-terminal starter, these are the allowed tags for blocks to add to it.
  ConcreteTags allowedTags = new AllTags();

  // these are the tags for this block when being added to a clause or chain
  final List<String> tags = new List<String>();

  /// link back to the main workspace
  CodeWorkspace workspace;

  DragImage dragImage;
  BlockAcceptor acceptor;
  BlockDragData dragData;
  bool isDragOver = false;
  bool isDragNotchOver = false;
  DivElement blockDiv;
  DivElement actionDiv;
  Toggle propertiesToggle;

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
    other.closeClauses = closeClauses;
    other.closeStarter = closeStarter;
    other.note = note;
    other.blockColor = blockColor;
    other.textColor = textColor;
    other.borderColor = borderColor;
    other.font = font;
    other.isRequired = isRequired;
    other.isTerminal = isTerminal;
    other.placement = placement;
    other.allowedTags = allowedTags.clone();
    other.tags.addAll(tags);

    this.clauses.forEach( (clause) => other.clauses.add( clause.clone(other) ));

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

  int getBlockCount(int id) {
    int count = 0;
    if (this.id == id) { count++; }
    if (this.hasClauses) {
      count = count + NumUtils.sum(this.clauses.map( (clause) => clause.getBlockCount(id) ));
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

  Attribute getAttribute(int attributeId) {
    if (this.params.containsKey(attributeId)) {
      return this.params[attributeId];
    }
    if (this.properties.containsKey(attributeId)) {
      return this.properties[attributeId];
    }
    throw new Exception("Attribute with given ID not found on block: ${attributeId}");
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
    this.dragImage = dragImage;
    this.dragData = dragData;
    this.acceptor = new BlockAcceptor(this);

    this.blockDiv = new DivElement();
    blockDiv.classes.add("nt-block");
    final styleClass = getStyleClass();
    blockDiv.classes.add(styleClass);
    if (hasClauses) {
      blockDiv.classes.add("nt-block-with-clauses");
    }

    applyStyleOverrides(this, this.blockDiv);

    DivElement headerDiv = new DivElement();
    headerDiv.classes.add("$styleClass-color");
    maybeSetColorOverride(this.blockColor, headerDiv);
    headerDiv.classes.add("nt-block-header");
    blockDiv.append(headerDiv);

    this.actionDiv = new DivElement();
    updateActionText();
    actionDiv.classes.add("nt-block-action");
    headerDiv.append(actionDiv);

    final paramDiv = new DivElement();
    paramDiv.classes.add("nt-block-params");
    headerDiv.append(paramDiv);

    for (Attribute attribute in params.values) {
      paramDiv.append(attribute.drawParameter());
    }

    final propertiesDiv = new DivElement();
    propertiesDiv.classes.add("nt-block-properties");
    headerDiv.append(propertiesDiv);

    if (properties.length > 0) {
      propertiesToggle = new Toggle(propertiesDisplay != "hidden", (bool isOn) {
        propertiesDisplay = isOn ? "shown" : "hidden";
        propertiesDiv.classes.toggle("nt-block-properties-hidden");
        workspace.programChanged(new BlockChangedEvent(this));
      });
      if (propertiesDisplay == "hidden") {
        propertiesDiv.classes.add("nt-block-properties-hidden");
      }
      actionDiv.append(propertiesToggle.div);
    }

    for (Attribute attribute in properties.values) {
      final propertyDiv = attribute.drawProperty();
      propertyDiv.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, propertyDiv);
      propertiesDiv.append(propertyDiv);
    }

    if (hasClauses) {
      final firstClauseDiv = clauses[0].draw(dragImage, this, headerDiv);
      blockDiv.append(firstClauseDiv);

      for (Clause clause in clauses.skip(1)) {
        final clauseDiv = clause.draw(dragImage, this, null);
        blockDiv.append(clauseDiv);
      }

      final clauseFooter = new DivElement();
      clauseFooter.classes.add("nt-clause-footer");
      clauseFooter.classes.add("$styleClass-color");
      maybeSetColorOverride(this.blockColor, clauseFooter);
      blockDiv.append(clauseFooter);
    }

    if (this.isAttachable) {
      final arrow = Arrow.draw();
      blockDiv.append(arrow);
    }

    Block.wireDragEvents(this, blockDiv, (isOver) => this.isDragOver = isOver );

    return blockDiv;
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
    final draggable = Draggable(div, avatarHandler: block.dragImage, draggingClass: "nt-block-dragging");
    draggable.onDragStart.listen(block.startDrag);
    draggable.onDragEnd.listen(block.endDrag);
    final dropzone = Dropzone(div, acceptor: block.acceptor);
    dropzone.onDrop.listen(block.drop);
    dropzone.onDragEnter.listen( (e) => setOver(true) );
    dropzone.onDragLeave.listen( (e) => setOver(false) );
  }

  void updateActionText() {
    final codeTip = formatCodeTip();
    actionDiv.appendHtml("""<span title="$codeTip">$action</span>""");
  }

  String formatCodeTip() {
    final out = new StringBuffer();
    if (this.note != null && this.note.trimLeft().isNotEmpty) {
      out.writeln(this.note);
      out.writeln();
    }
    if (dragData.parentType == "workspace-chain" && dragData.blockIndex == 0) {
      final chain = workspace.chains[dragData.chainIndex];
      workspace.formatter.formatBlocks(out, 0, chain.blocks);
      // if this block isn't a valid chain starter, nothing may have been written
      if (out.isEmpty) {
        workspace.formatter.formatBlock(out, 0, this);
      }
    } else {
      workspace.formatter.formatBlock(out, 0, this);
    }
    final value = out.toString().trim();
    final escapedValue = (new HtmlEscape()).convert(value);
    return escapedValue;
  }

  bool updateDragOver() {
    blockDiv.classes.remove("nt-drag-over");
    blockDiv.classes.remove("nt-block-clause-drag-over");
    bool isHighlightHandled = false;
    for (Clause clause in clauses) {
      final clauseResult = clause.updateDragOver();
      isHighlightHandled = isHighlightHandled || clauseResult;
    }
    if ((isDragOver || isDragNotchOver) && !isHighlightHandled) {
      isHighlightHandled = true;
      blockDiv.classes.add("nt-drag-over");
    }
    return isHighlightHandled;
  }

  void clearDragOver() {
    blockDiv.classes.remove("nt-drag-over");
    blockDiv.classes.remove("nt-block-clause-drag-over");
    isDragOver = false;
    isDragNotchOver = false;
    for (Clause clause in clauses) {
      clause.clearDragOver();
    }
  }

  void startDrag(DraggableEvent event) {
    workspace.dragManager.startDrag(this, this.dragData, event, true);
  }

  void endDrag(DraggableEvent event) {
    workspace.dragManager.endDrag();
  }

  void drop(DropzoneEvent event) {
    DragManager.current.wasHandled = true;

    final newBlocks = workspace.dragManager.consumeDraggingBlocks();

    switch (dragData.parentType) {

      case "workspace-chain":
        workspace.chains[dragData.chainIndex].insertBlocks(dragData.blockIndex + 1, newBlocks);
        break;

      case "block-clause":
        final parentBlock = workspace.chains[dragData.chainIndex].getBlockInstance(dragData.parentInstanceId);
        parentBlock.clauses[dragData.clauseIndex].insertBlocks(dragData.blockIndex + 1, newBlocks);
        break;

    }

    Block changedBlock = newBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));
  }

  void enableDropZones() {
    if (BlockAcceptor.isLandingSpot(this)) {
      this.blockDiv.classes.add("nt-allowed-drop");
    }

    for (final clause in this.clauses) {
      clause.enableDropZones();
    }
  }

  void disableDropZones() {
    this.blockDiv.classes.remove("nt-allowed-drop");

    for (final clause in this.clauses) {
      clause.disableDropZones();
    }
  }

  void resetOwnedBlocksDragData() {
    for (final clause in this.clauses) {
      clause.resetOwned();
    }
  }

  void resetBlockActionText() {
    actionDiv.innerHtml = "";
    updateActionText();
    if (propertiesToggle != null) {
      actionDiv.append(propertiesToggle.div);
    }
    for (final clause in this.clauses) {
      for (final block in clause.blocks) {
        block.resetBlockActionText();
      }
    }
  }
}
