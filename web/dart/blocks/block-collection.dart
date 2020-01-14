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

abstract class BlockCollection {

  List<Block> blocks = new List<Block>();

  DivElement _div;

  List exportParseTree() {
    List tree = [];
    for (Block block in blocks) {
      tree.add(block.toJSON());
    }
    return tree;
  }

  int getBlockCount(int id) {
    try {
      if (this.blocks.isEmpty) {
        return 0;
      }
      return blocks.map( (b) => b.getBlockCount(id) ).reduce( (a, b) => a + b );
    } catch (ex) {
      print("here is the fail ${ex.toString()}");
    }
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

  static List<Block> fromJSON(CodeWorkspace workspace, List children) {
    List<Block> blocks = new List<Block>();
    for (var blockJson in children) {
      Block block = Block.fromJSON(workspace, blockJson);
      blocks.add(block);
    }
    return blocks;
  }

}
