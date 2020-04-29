/*
 * NetTango
 * Copyright (c) 2019 Michael S. Horn, Uri Wilensky, and Corey Brady
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

  final Block owner;
  final int clauseIndex;

  bool isDragOver = false;
  bool isDragHeaderOver = false;

  Clause(this.owner, {this.clauseIndex = null}) {}

  static Clause fromJSON(CodeWorkspace workspace, Block owner, Map json, int clauseIndex) {
    Clause clause = new Clause(owner, clauseIndex: clauseIndex);
    if (json["children"] is List) {
      clause.blocks = BlockCollection.fromJSON(workspace, json["children"]);
    }
    return clause;
  }

  DivElement draw(DragImage dragImage, DivElement headerDiv) {
    _div = new DivElement();
    _div.classes.add("nt-clause");

    final headerDropzone = Dropzone(headerDiv, acceptor: owner.workspace.blockAcceptor);
    headerDropzone.onDrop.listen(drop);
    headerDropzone.onDragEnter.listen( (e) => isDragHeaderOver = true );
    headerDropzone.onDragLeave.listen( (e) => isDragHeaderOver = false );

    final dropzone = Dropzone(_div, acceptor: owner.workspace.blockAcceptor);
    dropzone.onDrop.listen(drop);
    dropzone.onDragEnter.listen( (e) => isDragOver = true );
    dropzone.onDragLeave.listen( (e) => isDragOver = false );

    if (blocks.isEmpty) {
      setEmpty();
      return _div;
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(owner._dragData.chainIndex, i, owner.instanceId, siblings, clauseIndex: clauseIndex);
      block.draw(dragImage, dragData);
    }

    BlockCollection.appendBlocks(_div, blocks, "nt-block-clause");

    return _div;
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
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex: clauseIndex);
      block.resetOwnedBlocksDragData();
    }
  }

  void redrawBlocks() {
    _div.innerHtml = "";

    if (blocks.isEmpty) {
      setEmpty();
      return;
    }

    setNonEmpty();

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex: clauseIndex);
      block.resetOwnedBlocksDragData();
    }

    BlockCollection.appendBlocks(_div, blocks, "nt-block-clause");
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

  void insertBlocks(int blockIndex, Iterable<Block> newBlocks) {
    blocks.insertAll(blockIndex, newBlocks);
    redrawBlocks();
  }

  Iterable<Block> removeBlocks(int blockIndex) {
    final removed = blocks.skip(blockIndex);
    blocks = blocks.take(blockIndex).toList();
    redrawBlocks();
    return removed;
  }

}
