// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Chain } from "../chain";
import { DragInProgress, DragManager } from "./drag-manager";

class ChainAcceptor {

  readonly chain: Chain

  constructor(chain: Chain) {
    this.chain = chain
  }

  checker(dropped: boolean) {
    if (!dropped) {
      return dropped
    }
    return DragManager.isValidDrop(this.chain.workspace.containerId, (dragState) => {
      return ChainAcceptor.isLandingSpot(this.chain, dragState)
    })
  }

  // the only "landing spot" for a chain is the top section
  static isLandingSpot(chain: Chain, dragState: DragInProgress): boolean {
    const draggingBlocks = dragState.getDraggingBlocks()
    const block = chain.blocks[0]
    const isOverSelf = block.instanceId !== null && draggingBlocks.some( (b) => block.instanceId !== null && b.getBlockInstance(block.instanceId) !== null )
    if (isOverSelf) {
      return false
    }

    return (
      !chain.blocks[0].canBeStarter &&
      dragState.isInsertable &&
      // not if you're dropping a starter that cannot contain some of my blocks
      draggingBlocks[0].allowedTags.check(chain.blocks)
    )
  }

}

export { ChainAcceptor }
