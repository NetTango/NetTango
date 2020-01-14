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

class Chain extends BlockCollection {

  int chainIndex;

  DivElement draw(Element drag, CssStyleSheet dragSheet, int newChainIndex) {
    this.chainIndex = newChainIndex;

    _div = new DivElement();
    _div.classes.add("nt-chain");

    if (blocks.isEmpty) {
      print("Chain with no blocks in workspace?");
      return _div;
    }

    updatePosition();

    // TODO: This should really be something like `first.starter`
    // to mark blocks that can start code chains on their own
    if (blocks[0].required) {
      _div.classes.add("nt-chain-starter");
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks.elementAt(i);
      final dragData = BlockDragData.workspaceChain(chainIndex, i, blocks.skip(i + 1));
      final blockDiv = block.draw(drag, dragSheet, dragData);
      _div.append(blockDiv);
    }

    return _div;
  }

  void updatePosition() {
    if (blocks.isEmpty) {
      return;
    }
    Block first = blocks[0];
    _div.style.left = "${first.x.round()}px";
    _div.style.top = "${first.y.round()}px";
  }

  void resetDragData(int newChainIndex) {
    this.chainIndex = newChainIndex;
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.resetOwnedBlocksDragData();
    }
  }

  void redrawBlocks() {
    _div.innerHtml = "";
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.resetOwnedBlocksDragData();
      _div.append(block._blockDiv);
    }
  }

  Iterable<Block> removeBlocks(int blockIndex) {
    final removedBlocks = blocks.skip(blockIndex);
    blocks = blocks.take(blockIndex).toList();
    redrawBlocks();
    return removedBlocks;
  }

  void addBlocks(Iterable<Block> newBlocks) {
    insertBlocks(blocks.length, newBlocks);
  }

  void insertBlocks(int blockIndex, Iterable<Block> newBlocks) {
    blocks.insertAll(blockIndex, newBlocks);
    redrawBlocks();
  }

  static Chain fromJSON(CodeWorkspace workspace, Map json) {
    Chain chain = new Chain();
    if (json["children"] is List) {
      chain.blocks = BlockCollection.fromJSON(workspace, json["children"]);
    }
    return chain;
  }
}
