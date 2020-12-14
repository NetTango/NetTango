// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Clause extends BlockCollection {

  final storage = new ExternalStorage(["children", "action", "open", "close", "allowedTags"]);

  final Block owner;
  final int clauseIndex;
  final String action;
  final String open;
  final String close;

  AllowedTags allowedTags = new UnrestrictedTags();

  bool isDragOver = false;
  bool isDragHeaderOver = false;

  DivElement divider, leftBar, blocksDiv;

  Clause(this.owner, this.clauseIndex, this.action, this.open, this.close);

  DivElement draw(DragImage dragImage, Block container, DivElement extraDropDiv) {
    final acceptor = new ClauseAcceptor(this);

    div = new DivElement();
    div.classes.add("nt-clause");

    if (extraDropDiv != null) {
      final extraDropzone = Dropzone(extraDropDiv, acceptor: acceptor);
      extraDropzone.onDrop.listen(drop);
      extraDropzone.onDragEnter.listen( (e) => isDragHeaderOver = true );
      extraDropzone.onDragLeave.listen( (e) => isDragHeaderOver = false );
    }

    final styleClass = container.getStyleClass();

    this.leftBar = new DivElement();
    leftBar.classes.add("nt-clause-left-bar");
    leftBar.classes.add("$styleClass-color");
    Block.maybeSetColorOverride(container.blockColor, leftBar);
    div.append(leftBar);

    this.divider = new DivElement();
    divider.classes.add("nt-clause-divider");
    divider.classes.add("$styleClass-color");
    Block.maybeSetColorOverride(container.blockColor, divider);
    div.append(divider);

    final dividerText = StringUtils.toStrNotEmpty(this.action, "");
    if (StringUtils.isNotNullOrEmpty(dividerText.trim())) {
      final dividerTextDiv = new DivElement();
      dividerTextDiv.classes.add("nt-clause-divider-text");
      dividerTextDiv.innerText = dividerText;
      divider.append(dividerTextDiv);
    }
    // I would much prefer to just put the arrow in the clause directly, but it gets a little
    // tricky to figure out where to place it veritically with dividers, empty clauses, etc.
    // So this makes this mildly easier, but still a little hacky (see the CSS file for more).
    // -Jeremy B August 2020
    final arrow = Arrow.draw();
    divider.append(arrow);

    final dropzone = Dropzone(div, acceptor: acceptor);
    dropzone.onDrop.listen(drop);
    dropzone.onDragEnter.listen( (e) => isDragOver = true );
    dropzone.onDragLeave.listen( (e) => isDragOver = false );

    this.blocksDiv = new DivElement();
    blocksDiv.classes.add("nt-clause-blocks");

    if (blocks.isEmpty) {
      setEmpty();
      return div;
    }

    div.append(blocksDiv);

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(owner.dragData.chainIndex, i, owner.instanceId, siblings, clauseIndex);
      block.draw(dragImage, dragData);
    }

    BlockCollection.appendBlocks(blocksDiv, blocks, "nt-block-clause");

    return div;
  }

  Clause clone(Block newBlock) {
    final clause = new Clause(newBlock, this.clauseIndex, this.action, this.open, this.close);
    if (this.allowedTags is ConcreteTags) {
      final ConcreteTags allowed = this.allowedTags;
      clause.allowedTags = allowed.clone();
    }
    else if (this.allowedTags is InheritTags) {
      final InheritTags allowed = this.allowedTags;
      clause.allowedTags = allowed.clone(clause);
    } else {
      throw new Exception("Unknown AllowedTags type for clause cloning");
    }
    return clause;
  }

  void setEmpty() {
    div.classes.add("nt-clause-empty");
    div.append(Notch.drawClause(false, this));

    final dropElement = new DivElement() .. className = "nt-clause-drop";
    div.append(dropElement);

    div.append(Notch.drawClause(true,  this));
  }

  void setNonEmpty() {
    div.classes.remove("nt-clause-empty");
  }

  void resetOwned() {
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block.dragData.resetBlockOwned(owner.dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex);
      block.resetOwnedBlocksDragData();
    }
  }

  void redrawBlocks() {
    div.innerHtml = "";
    this.blocksDiv.innerHtml = "";

    div.append(this.leftBar);
    div.append(this.divider);

    if (blocks.isEmpty) {
      setEmpty();
      return;
    }

    setNonEmpty();

    div.append(blocksDiv);

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block.dragData.resetBlockOwned(owner.dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex);
      block.resetOwnedBlocksDragData();
    }

    BlockCollection.appendBlocks(blocksDiv, blocks, "nt-block-clause");
  }

  void enableDropZones() {
    if (ClauseAcceptor.isLandingSpot(this)) {
      this.div.classes.add("nt-allowed-drop");
    }

    for (final block in this.blocks) {
      block.enableDropZones();
    }
  }

  void disableDropZones() {
    this.div.classes.remove("nt-allowed-drop");

    for (final block in this.blocks) {
      block.disableDropZones();
    }
  }

  bool updateDragOver() {
    div.classes.remove("nt-block-clause-drag-over");
    if (blocks.isNotEmpty) { blocks[0].blockDiv.classes.remove("nt-block-clause-drag-over"); }
    bool isHighlightHandled = false;
    for (Block block in blocks) {
      final blockResult = block.updateDragOver();
      isHighlightHandled = isHighlightHandled || blockResult;
    }
    if ((isDragOver || isDragHeaderOver) && !isHighlightHandled) {
      isHighlightHandled = true;
      if (blocks.isEmpty) {
        div.classes.add("nt-block-clause-drag-over");
      } else {
        blocks[0].blockDiv.classes.add("nt-block-clause-drag-over");
      }
    }
    return isHighlightHandled;
  }

  void clearDragOver() {
    div.classes.remove("nt-block-clause-drag-over");
    if (blocks.isNotEmpty) { blocks[0].blockDiv.classes.remove("nt-block-clause-drag-over"); }
    isDragOver = false;
    isDragHeaderOver = false;
    for (Block block in blocks) {
      block.clearDragOver();
    }
  }

  void drop(DropzoneEvent event) {
    DragManager.current.wasHandled = true;

    final newBlocks = owner.workspace.dragManager.consumeDraggingBlocks();

    insertBlocks(0, newBlocks);
    div.classes.remove("nt-clause-empty");

    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));
  }

}
