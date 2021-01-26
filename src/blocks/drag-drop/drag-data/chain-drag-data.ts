// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../../block";
import { ActiveDragData } from "./active-drag-data";

class ChainDragData extends ActiveDragData {
  constructor(chainIndex: number, blockIndex: number, siblings: Block[]) {
    super(chainIndex, blockIndex, siblings)
  }
}

export { ChainDragData }
