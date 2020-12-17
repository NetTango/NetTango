// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

abstract class BlockCollection {

  blocks: Block[] = []

  // DivElement div

  // void redrawBlocks()

  getBlockCount(id: number): number {
    try {
      if (this.blocks.length === 0) {
        return 0
      }
      return NumUtils.sum(this.blocks.map( (b) => b.getBlockCount(id) ))
    } catch (ex) {
      console.log(`here is the fail ${ex.toString()}`)
      throw ex
    }
  }

  getBlockInstance(instanceId: number): Block | null {
    for (var child of this.blocks) {
      const block = child.getBlockInstance(instanceId)
      if (block !== null) { return block }
    }
    return null
  }

  // void insertBlocks(int blockIndex, Iterable<Block> newBlocks) {
  //   blocks.insertAll(blockIndex, newBlocks)
  //   redrawBlocks()
  // }

  // Iterable<Block> removeBlocks(int blockIndex) {
  //   final removed = blocks.skip(blockIndex)
  //   blocks = blocks.take(blockIndex).toList()
  //   redrawBlocks()
  //   return removed
  // }

  // static void appendBlock(DivElement div, DivElement blockDiv, String newPosition, {bool useClones = false}) {
  //   final DivElement appendDiv = useClones ? blockDiv.clone(true) : blockDiv
  //   appendDiv.classes.removeAll([
  //     "nt-block-first",
  //     "nt-block-last",
  //     "nt-block-standalone",
  //     "nt-block-middle",
  //     "nt-block-clause-first",
  //     "nt-block-clause-last",
  //     "nt-block-clause-standalone",
  //     "nt-block-clause-middle"
  //   ])
  //   appendDiv.classes.add(newPosition)
  //   div.append(appendDiv)
  // }

  // static void appendBlocks(DivElement div, List<Block> blocks, String classPrefix, {bool useClones = false}) {
  //   if (blocks.isEmpty) {
  //     return
  //   }

  //   if (blocks.length == 1) {
  //     BlockCollection.appendBlock(div, blocks.first.blockDiv, "$classPrefix-standalone", useClones: useClones)
  //   } else {
  //     BlockCollection.appendBlock(div, blocks.first.blockDiv, "$classPrefix-first", useClones: useClones)
  //     for (int i = 1; i < (blocks.length - 1); i++) {
  //       BlockCollection.appendBlock(div, blocks[i].blockDiv, "$classPrefix-middle", useClones: useClones)
  //     }
  //     BlockCollection.appendBlock(div, blocks.last.blockDiv, "$classPrefix-last", useClones: useClones)
  //   }
  // }

}
