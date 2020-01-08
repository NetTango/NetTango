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

    Block first = blocks[0];
    chainDiv.style.left = "${first.x.round()}px";
    chainDiv.style.top = "${first.y.round()}px";

    // TODO: This should really be something like `first.starter`
    // to mark blocks that can start code chains on their own
    if (first.required) {
      chainDiv.classes.add("nt-chain-starter");
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks.elementAt(i);
      Map dragData = {
        "type": "existing-block-instance",
        "parent-type": "workspace-chain",
        "workspace-chain-index": chainIndex,
        "block-index": i
      };
      final blockDiv = block.draw(drag, dragSheet, chainIndex, dragData, blocks.skip(i + 1));
      chainDiv.append(blockDiv);
    }

    return chainDiv;
  }

  void remove(int blockIndex) {
    // TODO: This only works because we remove all sibling blocks after
    // the removed block.  If we ever want to remove 1 block in the
    // middle of the chain, we'll need to better handle generating the
    // `dragData` block index values.  -Jeremy B, Jan 2020
    blocks = blocks.take(blockIndex).toList();
    _chainDiv.innerHtml = "";
    for (Block block in blocks) {
      _chainDiv.append(block._blockDiv);
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
