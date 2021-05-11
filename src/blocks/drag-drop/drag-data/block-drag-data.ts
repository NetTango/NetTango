// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'

import { Block } from '../../block-instance';
import { DragInProgress } from '../drag-in-progress';

abstract class BlockDragData {
  readonly block: Block

  constructor(block: Block) {
    this.block = block
  }

  abstract isLastInCollection(): boolean
  abstract activate(startEvent: InteractEvent): DragInProgress

}

export { BlockDragData }
