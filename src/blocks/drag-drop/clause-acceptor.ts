// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Clause } from "../clause"
import { DragInProgress, DragManager } from "./drag-manager"

class ClauseAcceptor {

  readonly clause: Clause

  constructor(clause: Clause) {
    this.clause = clause
  }

  checker(dropped: boolean): boolean {
    if (!dropped) {
      return dropped
    }
    return DragManager.isValidDrop(this.clause.owner.workspace.containerId, (dragState) => {
      return ClauseAcceptor.isLandingSpot(this.clause, dragState)
    })
  }

  static isLandingSpot(clause: Clause, dragState: DragInProgress): boolean {
    const block          = clause.owner
    const draggingBlocks = dragState.getDraggingBlocks()
    const isOverSelf = block.instanceId !== null && draggingBlocks.some( (b) => block.instanceId !== null && b.getBlockInstance(block.instanceId) !== null )
    if (isOverSelf) {
      return false
    }

    return (
      dragState.canBeChild &&
      clause.allowedTags.check(draggingBlocks) &&
      (clause.blocks.length === 0 || dragState.isInsertable)
    )
  }

}

export { ClauseAcceptor }
