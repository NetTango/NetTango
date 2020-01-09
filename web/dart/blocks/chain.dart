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

class Chain {

  List<Block> blocks = new List<Block>();

  DivElement _chainDiv;

  List exportParseTree() {
    List tree = [];
    for (Block block in blocks) {
      tree.add(block.toJSON());
    }
    return tree;
  }

  int getBlockCount(int id) {
    return blocks.map( (b) => b.getBlockCount(id) ).reduce( (a, b) => a + b );
  }

  Block getBlockInstance(int instanceId) {
    for (Block child in blocks) {
      final block = child.getBlockInstance(instanceId);
      if (block != null) { return block; }
    }
    return null;
  }

  Map toJSON() {
    var data = { };
    data["children"] = [];
    for (Block block in blocks) {
      data["children"].add(block.toJSON());
    }
    return data;
  }

  DivElement draw(Element drag, CssStyleSheet dragSheet, int chainIndex) {
    DivElement chainDiv = new DivElement();
    chainDiv.classes.add("nt-chain");
    _chainDiv = chainDiv;

    if (blocks.isEmpty) {
      print("Chain with no blocks in workspace?");
      return chainDiv;
    }

    updatePosition();

    // TODO: This should really be something like `first.starter`
    // to mark blocks that can start code chains on their own
    if (blocks[0].required) {
      chainDiv.classes.add("nt-chain-starter");
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks.elementAt(i);
      final dragData = BlockDragData.workspaceChain(chainIndex, i, blocks.skip(i + 1));
      final blockDiv = block.draw(drag, dragSheet, dragData);
      chainDiv.append(blockDiv);
    }

    return chainDiv;
  }

  void updatePosition() {
    if (blocks.isEmpty) {
      return;
    }
    Block first = blocks[0];
    _chainDiv.style.left = "${first.x.round()}px";
    _chainDiv.style.top = "${first.y.round()}px";
  }

  Iterable<Block> remove(int chainIndex, int blockIndex) {
    final removedBlocks = blocks.skip(blockIndex);
    blocks = blocks.take(blockIndex).toList();
    _chainDiv.innerHtml = "";
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      _chainDiv.append(block._blockDiv);
    }
    return removedBlocks;
  }

  void add(int chainIndex, Iterable<Block> newBlocks) {
    for (Block block in newBlocks) {
      _chainDiv.append(block._blockDiv);
      blocks.add(block);
    }
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.resetOwnedBlocksDragData();
    }
  }

  static Chain fromJSON(CodeWorkspace workspace, Map json) {
    Chain chain = new Chain();
    if (json["children"] is List) {
      for (var blockJson in json["children"]) {
        Block block = Block.fromJSON(workspace, blockJson);
        chain.blocks.add(block);
      }
    }
    return chain;
  }

}
