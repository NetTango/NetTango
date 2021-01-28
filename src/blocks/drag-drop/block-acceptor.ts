// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block";
import { AllowedTags } from "../tags/allowed-tags";
import { ChainDragData } from "./drag-data/chain-drag-data";
import { ClauseDragData } from "./drag-data/clause-drag-data";
import { NewDragData } from "./drag-data/new-drag-data";
import { DragManager, DragInProgress } from "./drag-manager";

class BlockAcceptor {

  readonly block: Block

  constructor(block: Block) {
    this.block = block
  }

  checker(dropped: boolean): boolean {
    if (!dropped || this.block.dragData instanceof NewDragData) {
      return dropped
    }
    return DragManager.isValidDrop(this.block.workspace.containerId, (dragState) => {
      return BlockAcceptor.isLandingSpot(this.block, dragState)
    })
  }

  static isLandingSpot(block: Block, dragState: DragInProgress): boolean {
    const draggingBlocks = dragState.getDraggingBlocks()
    const isOverSelf = block.instanceId !== null && draggingBlocks.some( (b) => block.instanceId !== null && b.getBlockInstance(block.instanceId) !== null )
    if (isOverSelf) {
      return false
    }

    const areTagsAllowed = BlockAcceptor.getAllowedTags(block).check(draggingBlocks)
    const isPositionOkay = block.dragData.isLastInCollection() || dragState.isInsertable
    return dragState.canBeChild && block.isAttachable && areTagsAllowed && isPositionOkay
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
