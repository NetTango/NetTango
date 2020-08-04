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

  final storage = new ExternalStorage(["children", "open", "close"]);

  final Block owner;
  final int clauseIndex;
  final String action;
  final String open;
  final String close;

  bool isDragOver = false;
  bool isDragHeaderOver = false;

  DivElement _divider, _leftBar, _blocks;

  Clause(this.owner, this.clauseIndex, this.action, this.open, this.close);

  DivElement draw(DragImage dragImage, Block container, DivElement extraDropDiv) {
    _div = new DivElement();
    _div.classes.add("nt-clause");

    if (extraDropDiv != null) {
      final extraDropzone = Dropzone(extraDropDiv, acceptor: owner.workspace.blockAcceptor);
      extraDropzone.onDrop.listen(drop);
      extraDropzone.onDragEnter.listen( (e) => isDragHeaderOver = true );
      extraDropzone.onDragLeave.listen( (e) => isDragHeaderOver = false );
    }

    final styleClass = container.getStyleClass();

    _leftBar = new DivElement();
    _leftBar.classes.add("nt-clause-left-bar");
    _leftBar.classes.add("$styleClass-color");
    Block.maybeSetColorOverride(container.blockColor, _leftBar);
    _div.append(_leftBar);

    _divider = new DivElement();
    _divider.classes.add("nt-clause-divider");
    _divider.classes.add("$styleClass-color");
    Block.maybeSetColorOverride(container.blockColor, _divider);
    _div.append(_divider);

    _blocks = new DivElement();
    _blocks.classes.add("nt-clause-blocks");

    final dividerText = toStrNotEmpty(this.action, toStr(this.open, ""));
    if (isNotNullOrEmpty(dividerText.trim())) {
      _divider.innerHtml = dividerText;
    }

    final dropzone = Dropzone(_div, acceptor: owner.workspace.blockAcceptor);
    dropzone.onDrop.listen(drop);
    dropzone.onDragEnter.listen( (e) => isDragOver = true );
    dropzone.onDragLeave.listen( (e) => isDragOver = false );

    if (blocks.isEmpty) {
      setEmpty();
      return _div;
    }

    _div.append(_blocks);

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(owner._dragData.chainIndex, i, owner.instanceId, siblings, clauseIndex);
      block.draw(dragImage, dragData);
    }

    BlockCollection.appendBlocks(_blocks, blocks, "nt-block-clause");

    return _div;
  }

  Clause clone(Block newBlock) {
    final clause = new Clause(newBlock, this.clauseIndex, this.action, this.open, this.close);
    return clause;
  }

  void setEmpty() {
    _div.classes.add("nt-clause-empty");
    _div.append(Notch.drawClause(false, this));

    final dropElement = new DivElement() .. className = "nt-clause-drop";
    _div.append(dropElement);

    _div.append(Notch.drawClause(true,  this));
  }

  void setNonEmpty() {
    _div.classes.remove("nt-clause-empty");
  }

  void resetOwned() {
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex);
      block.resetOwnedBlocksDragData();
    }
  }

  void redrawBlocks() {
    _div.innerHtml = "";
    _blocks.innerHtml = "";
    _div.append(_leftBar);
    _div.append(_divider);

    if (blocks.isEmpty) {
      setEmpty();
      return;
    }

    setNonEmpty();

    _div.append(_blocks);

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex);
      block.resetOwnedBlocksDragData();
    }

    BlockCollection.appendBlocks(_blocks, blocks, "nt-block-clause");
  }

  bool updateDragOver() {
    _div.classes.remove("nt-block-clause-drag-over");
    if (blocks.isNotEmpty) { blocks[0]._blockDiv.classes.remove("nt-block-clause-drag-over"); }
    bool isHighlightHandled = false;
    for (Block block in blocks) {
      final blockResult = block.updateDragOver();
      isHighlightHandled = isHighlightHandled || blockResult;
    }
    if ((isDragOver || isDragHeaderOver) && !isHighlightHandled) {
      isHighlightHandled = true;
      if (blocks.isEmpty) {
        _div.classes.add("nt-block-clause-drag-over");
      } else {
        blocks[0]._blockDiv.classes.add("nt-block-clause-drag-over");
      }
    }
    return isHighlightHandled;
  }

  void clearDragOver() {
    _div.classes.remove("nt-block-clause-drag-over");
    if (blocks.isNotEmpty) { blocks[0]._blockDiv.classes.remove("nt-block-clause-drag-over"); }
    isDragOver = false;
    isDragHeaderOver = false;
    for (Block block in blocks) {
      block.clearDragOver();
    }
  }

  void drop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;

    final newBlocks = owner.workspace.consumeDraggingBlocks();

    insertBlocks(0, newBlocks);
    _div.classes.remove("nt-clause-empty");

    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));
  }

}
