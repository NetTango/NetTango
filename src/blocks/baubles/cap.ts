// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block-instance"
import { DragCap } from "./drag-cap"

class Cap {

  static draw(isTop: Boolean, block: Block): HTMLDivElement {
    const div = DragCap.draw(isTop, block)
    Block.wireDragEvents(block, div)
    return div
  }

}

export { Cap }
