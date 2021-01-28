// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../../block"
import { BlockDragData } from "./block-drag-data"

abstract class ActiveDragData extends BlockDragData {
  chainIndex: number
  blockIndex: number
  siblings: Block[]

  constructor(block: Block, chainIndex: number, blockIndex: number, siblings: Block[]) {
    super(block)
    this.chainIndex = chainIndex
    this.blockIndex = blockIndex
    this.siblings   = siblings
  }

  isLastInCollection(): boolean {
    return this.siblings.length === 0
  }

}

export { ActiveDragData }
