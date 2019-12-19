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

  Map toJSON() {
    var data = { };
    data["children"] = [];
    for (Block block in blocks) {
      data["children"].add(block.toJSON());
    }
    return data;
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
