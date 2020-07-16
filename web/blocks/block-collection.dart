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

abstract class BlockCollection {

  List<Block> blocks = new List<Block>();

  DivElement _div;

  int getBlockCount(int id) {
    try {
      if (this.blocks.isEmpty) {
        return 0;
      }
      return blocks.map( (b) => b.getBlockCount(id) ).reduce( (a, b) => a + b );
    } catch (ex) {
      print("here is the fail ${ex.toString()}");
      rethrow;
    }
  }

  Block getBlockInstance(int instanceId) {
    for (Block child in blocks) {
      final block = child.getBlockInstance(instanceId);
      if (block != null) { return block; }
    }
    return null;
  }

  static void appendBlock(DivElement div, DivElement blockDiv, String newPosition, {bool useClones = false}) {
    final DivElement appendDiv = useClones ? blockDiv.clone(true) : blockDiv;
    appendDiv.classes.removeAll([
      "nt-block-starter",
      "nt-block-ender",
      "nt-block-standalone",
      "nt-block-middle",
      "nt-block-clause-starter",
      "nt-block-clause-standalone",
      "nt-block-clause-middle",
      "nt-block-clause-ender"
    ]);
    appendDiv.classes.add(newPosition);
    div.append(appendDiv);
  }

  static void appendBlocks(DivElement div, List<Block> blocks, String classPrefix, {bool useClones = false}) {
    if (blocks.isEmpty) {
      return;
    }

    if (blocks.length == 1) {
      BlockCollection.appendBlock(div, blocks.first._blockDiv, "$classPrefix-standalone", useClones: useClones);
    } else {
      BlockCollection.appendBlock(div, blocks.first._blockDiv, "$classPrefix-starter", useClones: useClones);
      for (int i = 1; i < (blocks.length - 1); i++) {
        BlockCollection.appendBlock(div, blocks[i]._blockDiv, "$classPrefix-middle", useClones: useClones);
      }
      BlockCollection.appendBlock(div, blocks.last._blockDiv, "$classPrefix-ender", useClones: useClones);
    }
  }
}
