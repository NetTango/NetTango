// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { NumUtils } from "../utils/num-utils"
import { Block } from "./block"

abstract class BlockCollection {

  blocks: Block[] = []

  div: HTMLDivElement = document.createElement("div")

  abstract redrawBlocks(): void

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

  insertBlocks(blockIndex: number, newBlocks: Block[]): void {
    this.blocks.splice(blockIndex, 0, ...newBlocks)
    this.redrawBlocks()
  }

  removeBlocks(blockIndex: number): Block[] {
    const removed = this.blocks.splice(blockIndex)
    this.redrawBlocks()
    return removed
  }

  static appendBlock(div: HTMLDivElement, blockDiv: HTMLDivElement, newPosition: string, useClones: boolean = false): void {
    const appendDiv: HTMLDivElement = blockDiv;//useClones ? (blockDiv.cloneNode(true) as HTMLDivElement) : blockDiv;

    [
      "nt-block-first",
      "nt-block-last",
      "nt-block-standalone",
      "nt-block-middle",
      "nt-block-clause-first",
      "nt-block-clause-last",
      "nt-block-clause-standalone",
      "nt-block-clause-middle"
    ].forEach( (cl) => appendDiv.classList.remove(cl) )
    appendDiv.classList.add(newPosition)
    div.append(appendDiv)
  }

  static appendBlocks(div: HTMLDivElement, blocks: Block[], classPrefix: string, useClones: boolean = false): void {
    if (blocks.length === 0) {
      return
    }

    if (blocks.length === 1) {
      BlockCollection.appendBlock(div, blocks[0].blockDiv, `${classPrefix}-standalone`, useClones)
    } else {
      BlockCollection.appendBlock(div, blocks[0].blockDiv, `${classPrefix}-first`, useClones)
      for (var i = 1; i < (blocks.length - 1); i++) {
        BlockCollection.appendBlock(div, blocks[i].blockDiv, `${classPrefix}-middle`, useClones)
      }
      BlockCollection.appendBlock(div, blocks[blocks.length - 1].blockDiv, `${classPrefix}-last`, useClones)
    }
  }

}

export { BlockCollection }
