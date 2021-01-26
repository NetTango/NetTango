// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block";
import { AllowedTags } from "../tags/allowed-tags";
import { ChainDragData } from "./drag-data/chain-drag-data";
import { ClauseDragData } from "./drag-data/clause-drag-data";
import { NewDragData } from "./drag-data/new-drag-data";
import { DragManager } from "./drag-manager";

class BlockAcceptor {

  readonly block: Block

  constructor(block: Block) {
    this.block = block
  }

  checker(dropped: boolean): boolean {
    const dragManager = DragManager.getCurrent()
    return dropped && !dragManager.wasHandled && !(this.block.dragData instanceof NewDragData) && BlockAcceptor.isLandingSpot(this.block)
  }

  static isLandingSpot(block: Block): boolean {
    const dragManager = DragManager.getCurrent()
    if (dragManager.draggingBlocks === null) {
      return false
    }
    const isOverSelf = block.instanceId !== null && dragManager.draggingBlocks.some( (b) => block.instanceId !== null && b.getBlockInstance(block.instanceId) !== null )
    if (isOverSelf) {
      return false
    }

    const isSameWorkspace = block.workspace.containerId === dragManager.workspace.containerId
    const areTagsAllowed  = BlockAcceptor.getAllowedTags(block).check(dragManager.draggingBlocks)
    const isPositionOkay  = block.dragData.isLastInCollection() || dragManager.isInsertable
    return isSameWorkspace && dragManager.canBeChild && block.isAttachable && areTagsAllowed && isPositionOkay
  }

  static getAllowedTags(block: Block): AllowedTags {
    if (block.dragData instanceof NewDragData) {
      throw new Error("Should not have a new block accepting drags, they are unplaced blocks from menu slots.");
    }

    if (block.dragData instanceof ChainDragData) {
      return block.workspace.chains[block.dragData.chainIndex].blocks[0].allowedTags
    }

    if (block.dragData instanceof ClauseDragData) {
      return block.workspace.getBlockInstance(block.dragData.parentInstanceId).clauses[block.dragData.clauseIndex].allowedTags
    }

    throw new Error(`Unknown block drag data type: ${block.dragData}`)
  }

}

export { BlockAcceptor }
