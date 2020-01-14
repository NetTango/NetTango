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

  Clause(this.owner, {this.clauseIndex = null}) {}

  static Clause fromJSON(CodeWorkspace workspace, Block owner, Map json, int clauseIndex) {
    Clause clause = new Clause(owner, clauseIndex: clauseIndex);
    if (json["children"] is List) {
      clause.blocks = BlockCollection.fromJSON(workspace, json["children"]);
    }
    return clause;
  }

  DivElement draw(Element drag, CssStyleSheet dragSheet, DivElement headerDiv) {
    _div = new DivElement();
    _div.classes.add("nt-clause");

    setupClauseHeaderLiseners(headerDiv);

    if (blocks.isEmpty) {
      _div.classes.add("nt-clause-empty");
      setupEmptyClauseListeners();
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      final siblings = blocks.skip(i + 1);
      final dragData = BlockDragData.blockOwned(owner._dragData.chainIndex, i, owner.instanceId, siblings, clauseIndex: clauseIndex);
      final blockDiv = block.draw(drag, dragSheet, dragData);
      _div.append(blockDiv);
    }
    return _div;
  }

  void resetOwned() {
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex: clauseIndex);
    }
  }

  void redrawBlocks() {
    _div.innerHtml = "";

    if (blocks.isEmpty) {
      _div.classes.add("nt-clause-empty");
      setupEmptyClauseListeners();
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetBlockOwned(owner._dragData.chainIndex, i, owner.instanceId, blocks.skip(i + 1), clauseIndex: clauseIndex);
      block.resetOwnedBlocksDragData();
      _div.append(block._blockDiv);
    }
  }

  void setupClauseHeaderLiseners(DivElement headerNode) {
    headerNode.onDragEnter.listen( enterClauseHeaderDrag );
    headerNode.onDragOver.listen( (e) => e.preventDefault() );
    headerNode.onDragLeave.listen( leaveClauseHeaderDrag );
    headerNode.onDrop.listen( dropClauseHeader );
  }

  void setupEmptyClauseListeners() {
    _div.onDragEnter.listen( enterClauseDrag );
    _div.onDragLeave.listen( leaveClauseDrag );
    _div.onDragOver.listen( (e) => e.preventDefault() );
    _div.onDrop.listen( dropClause );
  }

  bool enterClauseHeaderDrag(MouseEvent event) {
    Element target = event.target;
    if (target.classes.contains("nt-block-drag-target") || owner._blockDiv.classes.contains("nt-block-drag-target") ) {
      return true;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.stopPropagation();
    if (blocks.isEmpty) {
      _div.classes.add("nt-block-clause-header-drag-over");
    } else {
      blocks[0]._blockDiv.classes.add("nt-block-clause-header-drag-over");
    }
    return false;
  }

  void leaveClauseHeaderDrag(MouseEvent event) {
    if (blocks.isEmpty) {
      _div.classes.remove("nt-block-clause-header-drag-over");
    } else {
      blocks[0]._blockDiv.classes.remove("nt-block-clause-header-drag-over");
    }
  }

  bool dropClauseHeader(MouseEvent event) {
    event.preventDefault();
    event.stopPropagation();
    if (blocks.isEmpty) {
      _div.classes.remove("nt-block-clause-header-drag-over");
    } else {
      blocks[0]._blockDiv.classes.remove("nt-block-clause-header-drag-over");
    }
    Element target = event.target;
    if (target.classes.contains("nt-block-drag-target") || target.classes.contains("nt-block-drag-sibling")) {
      return false;
    }
    if (owner._blockDiv.classes.contains("nt-block-drag-target") || owner._blockDiv.classes.contains("nt-block-drag-sibling")) {
      return false;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId) || event.dataTransfer.types.contains("starter")) {
      return false;
    }

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);
    final newBlocks = owner.workspace.removeBlocksFromSource(blockData);

    insertBlocks(0, newBlocks);
    _div.classes.remove("nt-clause-empty");

    owner.workspace.updateWorkspaceForChanges();
    Block changedBlock = newBlocks.elementAt(0);
    owner.workspace.programChanged(new BlockChangedEvent(changedBlock));

    return false;
  }

  bool enterClauseDrag(MouseEvent event) {
    if (!_div.classes.contains("nt-clause-empty")) {
      return true;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return true;
    }
    if (!event.dataTransfer.types.contains(owner.workspace.containerId)) {
      return true;
    }
    event.stopPropagation();
    _div.classes.add("nt-drag-over");
    return false;
  }

  bool leaveClauseDrag(MouseEvent event) {
    // why do this instead of removing the event listener when not empty?
    // you have to store the subscription somewhere to `cancel()` it with
    // dart, and that's more state than I want to track at the moment.
    if (!_div.classes.contains("nt-clause-empty")) {
      return true;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return true;
    }
    event.stopPropagation();
    _div.classes.remove("nt-drag-over");
    return false;
  }

  bool dropClause(MouseEvent event) {
    if (!_div.classes.contains("nt-clause-empty")) {
      return false;
    }
    if (event.dataTransfer.types.contains("starter")) {
      return false;
    }
    event.preventDefault();
    event.stopPropagation();

    if (!event.dataTransfer.types.contains(owner.workspace.containerId)) {
      return false;
    }

    _div.classes.remove("nt-drag-over");
    _div.classes.remove("nt-clause-empty");

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);
    final newBlocks = owner.workspace.removeBlocksFromSource(blockData);

    insertBlocks(0, newBlocks);

    owner.workspace.updateWorkspaceForChanges();
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
