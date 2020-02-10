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

  bool isDragging = false;

  Clause(this.owner, {this.clauseIndex = null}) {}

  static Clause fromJSON(CodeWorkspace workspace, Block owner, Map json, int clauseIndex) {
    Clause clause = new Clause(owner, clauseIndex: clauseIndex);
    if (json["children"] is List) {
      clause.blocks = BlockCollection.fromJSON(workspace, json["children"]);
    }
    return clause;
  }

  DivElement draw(Element drag, DivElement headerDiv) {
    _div = new DivElement();
    _div.classes.add("nt-clause");

    setupClauseHeaderLiseners(headerDiv);

    if (blocks.isEmpty) {
      setEmpty();
      return _div;
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(owner._dragData.chainIndex, i, owner.instanceId, siblings, clauseIndex: clauseIndex);
      block.draw(drag, dragData);
    }

    BlockCollection.appendBlocks(_div, blocks, "nt-block-clause");

    return _div;
  }

  void setEmpty() {
    _div.classes.add("nt-clause-empty");
    _div.append(Notch.drawClause(false, this));

    final dropZone = new DivElement() .. className = "nt-clause-drop";
    _div.append(dropZone);
    wireEvents(this, dropZone);

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

  void setupClauseHeaderLiseners(DivElement headerNode) {
    headerNode.onDragEnter.listen( enterClauseHeaderDrag );
    headerNode.onDragOver.listen( (e) => e.preventDefault() );
    headerNode.onDrop.listen( dropClauseHeader );
  }

  static void wireEvents(Clause clause, DivElement div) {
    div.onDragEnter.listen( clause.enterClauseDrag );
    div.onDragOver.listen( (e) => e.preventDefault() );
    div.onDrop.listen( clause.dropClause );
  }

  void setDragging(bool dragging) {
    isDragging = dragging;
    for (Block block in blocks) {
      block.setDragging(dragging);
    }
  }

  void clearDragOver() {
    _div.classes.remove("nt-block-clause-drag-over");
    for (Block block in blocks) {
      block.clearDragOver();
    }
  }

  bool enterClauseHeaderDrag(MouseEvent event) {
    event.stopPropagation();
    owner.workspace.clearDragOver();

    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    if (blocks.isEmpty) {
      _div.classes.add("nt-block-clause-drag-over");
    } else {
      blocks[0]._blockDiv.classes.add("nt-block-clause-drag-over");
    }

    return false;
  }

  bool dropClauseHeader(MouseEvent event) {
    event.preventDefault();
    event.stopPropagation();
    owner.workspace.clearDragOver();

    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    final newBlocks = owner.workspace.consumeDraggingBlocks();

    insertBlocks(0, newBlocks);
    _div.classes.remove("nt-clause-empty");

    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));

    return false;
  }

  bool enterClauseDrag(MouseEvent event) {
    event.stopPropagation();
    owner.workspace.clearDragOver();

    if (blocks.isNotEmpty) {
      return false;
    }
    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    _div.classes.add("nt-block-clause-drag-over");

    return false;
  }

  bool dropClause(MouseEvent event) {
    event.preventDefault();
    event.stopPropagation();
    owner.workspace.clearDragOver();

    if (blocks.isNotEmpty) {
      return false;
    }
    if (isDragging) {
      return false;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    final newBlocks = owner.workspace.consumeDraggingBlocks();

    insertBlocks(0, newBlocks);
    _div.classes.remove("nt-clause-empty");

    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));

    return false;
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
