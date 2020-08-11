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

class Clause extends BlockCollection {

  final storage = new ExternalStorage(["children", "action", "open", "close"]);

  final Block owner;
  final int clauseIndex;
  final String action;
  final String open;
  final String close;

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

    this.blocksDiv = new DivElement();
    blocksDiv.classes.add("nt-clause-blocks");

    final dividerText = toStrNotEmpty(this.action, "");
    if (isNotNullOrEmpty(dividerText.trim())) {
      divider.innerHtml = dividerText;
    }

    final dropzone = Dropzone(div, acceptor: acceptor);
    dropzone.onDrop.listen(drop);
    dropzone.onDragEnter.listen( (e) => isDragOver = true );
    dropzone.onDragLeave.listen( (e) => isDragOver = false );

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
    DragManager.currentDrag.wasHandled = true;

    final newBlocks = owner.workspace.dragManager.consumeDraggingBlocks();

    insertBlocks(0, newBlocks);
    div.classes.remove("nt-clause-empty");

    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));
  }

}
