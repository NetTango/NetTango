// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Chain } from "../chain";
import { DragManager } from "./drag-manager";

class ChainAcceptor {

  readonly chain: Chain

  constructor(chain: Chain) {
    this.chain = chain
  }

  checker(dropped: boolean) {
    const dragManager = DragManager.getCurrent()
    return dropped && !dragManager.wasHandled && ChainAcceptor.isLandingSpot(this.chain)
  }

  // the only "landing spot" for a chain is the top section
  static isLandingSpot(chain: Chain): boolean {
    const dragManager = DragManager.getCurrent()
    return (
      chain.workspace.containerId === dragManager.workspace.containerId &&
      !chain.blocks[0].canBeStarter &&
      dragManager.isInsertable &&
      // not if you're dropping a starter that cannot contain some of my blocks
      dragManager.draggingBlocks !== null && dragManager.draggingBlocks[0].allowedTags.check(chain.blocks)
    )
  }

}

export { ChainAcceptor }
