// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block-instance"
import { Clause } from "../clause"
import { checkAnyOfTags } from "../tags/concrete-tags"
import { checkInheritTags } from "../tags/inherit-tags"
import { DragInProgress } from "./drag-in-progress"
import { DragManager } from "./drag-manager"

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
    const isOverSelf = block.b.instanceId !== null && draggingBlocks.some( (b) => block.b.instanceId !== null && b.getBlockInstance(block.b.instanceId) !== null )
    if (isOverSelf) {
      return false
    }

    return (
      dragState.canBeChild &&
      checkClauseAllowedTags(clause, draggingBlocks) &&
      (clause.blocks.length === 0 || dragState.isInsertable)
    )
  }
}

function checkClauseAllowedTags(clause: Clause, blocks: Block[]): boolean {
  switch (clause.def.allowedTags.type) {

    case 'any-of':
      return checkAnyOfTags(clause.def.allowedTags.tags, blocks)

    case 'inherit':
      return checkInheritTags(clause, blocks)

    case 'unrestricted':
      return true

  }
}

export { ClauseAcceptor, checkClauseAllowedTags }
