// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../../block"
import { ActiveDragData } from "./active-drag-data"

class ClauseDragData extends ActiveDragData {
  parentInstanceId: number
  clauseIndex: number

  constructor(chainIndex: number, blockIndex: number, parentInstanceId: number, siblings: Block[], clauseIndex: number) {
    super(chainIndex, blockIndex, siblings)
    this.parentInstanceId = parentInstanceId
    this.clauseIndex      = clauseIndex
  }
}

export { ClauseDragData }
