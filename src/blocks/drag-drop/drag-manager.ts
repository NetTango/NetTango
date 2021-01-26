// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'
import type { Point } from '@interactjs/types/index'
import { ArrayUtils } from '../../utils/array-utils'
import { NumUtils } from '../../utils/num-utils'
import { Block } from "../block"
import { Chain } from '../chain'
import { CodeWorkspace } from "../code-workspace"
import { ActiveDragData } from './drag-data/active-drag-data'
import { BlockDragData } from "./drag-data/block-drag-data"
import { ChainDragData } from './drag-data/chain-drag-data'
import { ClauseDragData } from './drag-data/clause-drag-data'
import { NewDragData } from './drag-data/new-drag-data'
import { DragListener } from './drag-listener'

class DragManager {

  // Ideally this would not be a static/global value, but for now this works for a single drag at a time.
  // If we ever want to support multi-drag, some way of associating each drag with its drag state would
  // have to be implemented.  -Jeremy B April 2020
  static current: DragManager | null
  static getCurrent(): DragManager {
    if (DragManager.current === null) {
      throw new Error("Cannot use drag and drop if the current drag manager isn't set.")
    }
    return DragManager.current
  }

  readonly workspace: CodeWorkspace

  wasHandled: boolean = false
  dragData: BlockDragData | null = null
  dragStartOffset: Point = DragListener.ZERO_POINT
  isOverMenu: boolean = false
  isOverWorkspace: boolean = false
  isOverContainer: boolean = false
  oldChainX: number | null = null
  oldChainY: number | null = null

  draggingBlocks: Block[] | null = null
  get hasDraggingBlocks() { return this.draggingBlocks !== null }

  get canBeChild(): boolean { return ArrayUtils.ifNotNullOrEmpty(this.draggingBlocks, (a) => a[0].canBeChild, false) }
  get canBeStarter(): boolean { return ArrayUtils.ifNotNullOrEmpty(this.draggingBlocks, (a) => a[0].canBeStarter, false) }
  get isInsertable(): boolean { return ArrayUtils.ifNotNullOrEmpty(this.draggingBlocks, (a) => a[a.length - 1].isAttachable, false) }

  constructor(workspace: CodeWorkspace) {
    this.workspace = workspace
  }

  startDrag(block: Block, dragData: BlockDragData, startEvent: InteractEvent, useClones: boolean): void {
    DragManager.current = this

    this.wasHandled = false
    this.dragData = dragData
    const offset = DragListener.getOffsetToRoot(startEvent.target as HTMLElement)
    this.dragStartOffset = { x: startEvent.pageX - offset.x, y: startEvent.pageY - offset.y }
    this.draggingBlocks = this.removeBlocksForDrag()

    this.workspace.enableDropZones()

    const blocks = (this.dragData instanceof ActiveDragData) ? this.dragData.siblings.slice(0) : []
    blocks.splice(0, 0, block)

    Chain.redrawChain(DragListener.dragImage, blocks, useClones)
  }

  endDrag(): void {
    DragManager.current = null

    this.wasHandled = true
    this.isOverMenu = false
    this.isOverContainer = false
    this.isOverWorkspace = false

    this.workspace.disableDropZones()
    this.workspace.clearDragOver()
    this.clearDraggingClasses()

    const finishedDrag = this.dragData
    this.dragData = null

    if (!this.hasDraggingBlocks || finishedDrag === null) {
      return
    }

    // our blocks weren't dropped anywhere, so reset
    const newBlocks = this.consumeDraggingBlocks()

    if (finishedDrag instanceof NewDragData) {
      return
    }

    if (finishedDrag instanceof ChainDragData) {
      if (finishedDrag.blockIndex == 0) {
        // new chain, we deleted the old one
        this.workspace.createChain(newBlocks, NumUtils.toInt(this.oldChainX, 0), NumUtils.toInt(this.oldChainY, 0))
      } else {
        this.workspace.chains[finishedDrag.chainIndex].insertBlocks(finishedDrag.blockIndex, newBlocks)
      }
      return
    }

    if (finishedDrag instanceof ClauseDragData) {
      const parentBlock = this.workspace.chains[finishedDrag.chainIndex].getBlockInstance(finishedDrag.parentInstanceId)
      if (parentBlock === null) {
        throw new Error("Could not find the parent block that owns the clause a block was dragged from.")
      }
      parentBlock.clauses[finishedDrag.clauseIndex].insertBlocks(finishedDrag.blockIndex, newBlocks)
      return
    }

    throw new Error(`Unknown block drag type: ${finishedDrag}`)
  }

  removeBlocksForDrag(): Block[] {

    if (this.dragData === null) {
      throw new Error("Cannot remove blocks for dragging without any drag data to follow.")
    }

    if (this.dragData instanceof NewDragData) {
      const instance = this.dragData.newInstance
      return [instance]
    }

    if (this.dragData instanceof ChainDragData) {
      return (this.dragData.blockIndex == 0)
      ? this.removeChainForDrag(this.dragData.chainIndex)
      : this.workspace.chains[this.dragData.chainIndex].removeBlocks(this.dragData.blockIndex)
    }

    if (this.dragData instanceof ClauseDragData) {
      const parentBlock = this.workspace.chains[this.dragData.chainIndex].getBlockInstance(this.dragData.parentInstanceId)
      if (parentBlock === null) {
        throw new Error("Our drag event referenced a block in a clause for a block that doesn't exist?")
      }
      return parentBlock.clauses[this.dragData.clauseIndex].removeBlocks(this.dragData.blockIndex)
    }

    throw new Error(`Unknown block drag type: ${this.dragData}`)
  }

  removeChainForDrag(chainIndex: number): Block[] {
    const oldChain = this.workspace.chains[chainIndex]
    this.oldChainX = oldChain.x
    this.oldChainY = oldChain.y
    const blocks = oldChain.blocks
    this.workspace.removeChain(chainIndex)
    return blocks
  }

  consumeDraggingBlocks(): Block[] {
    if (this.draggingBlocks === null) {
      throw new Error("Cannot consume dragging blocks that haven't been set yet.")
    }
    const blocks = this.draggingBlocks
    this.draggingBlocks = null
    return blocks
  }

  clearDraggingClasses(): void {
    if (this.dragData !== null && this.dragData instanceof NewDragData) {
      const slot = this.workspace.menu.slots[this.dragData.slotIndex]
      slot.slotDiv.classList.remove("nt-block-dragging")
      return
    }
  }
}

export { DragManager }
