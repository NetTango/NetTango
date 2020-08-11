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

  DivElement div;

  void redrawBlocks();

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

  void insertBlocks(int blockIndex, Iterable<Block> newBlocks) {
    blocks.insertAll(blockIndex, newBlocks);
    if (newBlocks.length > 0 && !newBlocks.last.isAttachable) {
      blocks = blocks.take(blockIndex + newBlocks.length).toList();
    }
    redrawBlocks();
  }

  Iterable<Block> removeBlocks(int blockIndex) {
    final removed = blocks.skip(blockIndex);
    blocks = blocks.take(blockIndex).toList();
    redrawBlocks();
    return removed;
  }

  static void appendBlock(DivElement div, DivElement blockDiv, String newPosition, {bool useClones = false}) {
    final DivElement appendDiv = useClones ? blockDiv.clone(true) : blockDiv;
    appendDiv.classes.removeAll([
      "nt-block-first",
      "nt-block-last",
      "nt-block-standalone",
      "nt-block-middle",
      "nt-block-clause-first",
      "nt-block-clause-last",
      "nt-block-clause-standalone",
      "nt-block-clause-middle"
    ]);
    appendDiv.classes.add(newPosition);
    div.append(appendDiv);
  }

  static void appendBlocks(DivElement div, List<Block> blocks, String classPrefix, {bool useClones = false}) {
    if (blocks.isEmpty) {
      return;
    }

    if (blocks.length == 1) {
      BlockCollection.appendBlock(div, blocks.first.blockDiv, "$classPrefix-standalone", useClones: useClones);
    } else {
      BlockCollection.appendBlock(div, blocks.first.blockDiv, "$classPrefix-first", useClones: useClones);
      for (int i = 1; i < (blocks.length - 1); i++) {
        BlockCollection.appendBlock(div, blocks[i].blockDiv, "$classPrefix-middle", useClones: useClones);
      }
      BlockCollection.appendBlock(div, blocks.last.blockDiv, "$classPrefix-last", useClones: useClones);
    }
  }
}
