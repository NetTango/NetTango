// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../../block"
import { BlockDragData } from "./block-drag-data"

class NewDragData extends BlockDragData {
  slotIndex: number
  newInstance: Block

  constructor(newInstance: Block, index: number) {
    super()
    this.slotIndex   = index
    this.newInstance = newInstance
  }

  isLastInCollection(): boolean {
    return true
  }
}

export { NewDragData }
