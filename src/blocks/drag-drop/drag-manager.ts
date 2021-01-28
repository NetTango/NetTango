// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'
import type { Point } from '@interactjs/types/index'

import { ArrayUtils } from '../../utils/array-utils'
import { Block } from "../block"
import { Chain } from '../chain'
import { CodeWorkspace } from "../code-workspace"
import { BlockDragData } from "./drag-data/block-drag-data"
import { DragListener } from './drag-listener'

class DragManager {

  private static currentDrag: DragInProgress | null = null

  // Just to try to make it clear this class isn't meant to be instantiated. -Jeremy B January 2021
  private constructor() {}

  static start(block: Block, dragData: BlockDragData, startEvent: InteractEvent): void {
    if (DragManager.currentDrag !== null) {
      return
    }

    DragManager.currentDrag = dragData.activate(startEvent)
    block.workspace.enableDropZones()
  }

  static cancel(blockHandler: (blocks: Block[]) => void = () => {}): void {
    if (DragManager.currentDrag === null) {
      return
    }

    const drag = DragManager.currentDrag
    drag.workspace.disableDropZones()

    const blocks = drag.getDraggingBlocks()
    DragManager.currentDrag = null
    drag.cancel()
    blockHandler(blocks)
  }

  static drop(blockHandler: (blocks: Block[], dragStartOffset: Point) => void = () => {}): void {
    if (DragManager.currentDrag === null) {
      return
    }

    const drag = DragManager.currentDrag
    drag.workspace.disableDropZones()

    DragManager.currentDrag = null
    const blocks = drag.getDraggingBlocks()
    drag.drop()
    blockHandler(blocks, drag.dragStartOffset)
  }

  static isValidDrop(containerId: string, dragHandler: (dragState: DragInProgress) => boolean = () => { return true }): boolean {
    if (this.currentDrag === null) {
      return false
    }

    return containerId === this.currentDrag.workspace.containerId && dragHandler(this.currentDrag)
  }

}

abstract class DragInProgress {

  readonly workspace: CodeWorkspace
  readonly dragStartOffset: Point

  constructor(workspace: CodeWorkspace, startEvent: InteractEvent) {
    this.workspace       = workspace
    const offset         = DragListener.getOffsetToRoot(startEvent.target as HTMLElement)
    this.dragStartOffset = { x: startEvent.pageX - offset.x, y: startEvent.pageY - offset.y }
  }

  abstract getDraggingBlocks(): Block[]

  cancel() {}
  drop() {}

  get canBeChild(): boolean   { return ArrayUtils.ifNotNullOrEmpty(this.getDraggingBlocks(), (a) => a[0].canBeChild, false) }
  get canBeStarter(): boolean { return ArrayUtils.ifNotNullOrEmpty(this.getDraggingBlocks(), (a) => a[0].canBeStarter, false) }
  get isInsertable(): boolean { return ArrayUtils.ifNotNullOrEmpty(this.getDraggingBlocks(), (a) => a[a.length - 1].isAttachable, false) }

  protected draw(useClones: boolean): void {
    Chain.redrawChain(this.workspace.dragImage, this.getDraggingBlocks(), useClones)
  }

}

export { DragManager, DragInProgress }
