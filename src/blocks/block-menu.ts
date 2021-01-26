// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import interact from "interactjs"
import { Block } from "./block"
import { CodeWorkspace } from "./code-workspace"
import { DragManager } from "./drag-drop/drag-manager"
import { BlockChangedEvent } from "./program-changed-event"
import { Slot } from "./slot"

/**
 * Visual programming menu bar
 */
class BlockMenu {

  /// Link back to the code workspace that owns this menu bar
  workspace: CodeWorkspace

  /// Slots for programming blocks
  slots: Slot[] = []

  /// Menu background color
  color = "rgba(0, 0, 0, 0.2)"

  menuDiv = document.createElement("div")

  constructor(workspace: CodeWorkspace) {
    this.workspace = workspace
  }

  addBlock(block: Block, limit: number): void {
    const match = this.getBlockById(block.id)
    if (match !== null) {
      throw new Error(`
Cannot add a block with the same ID as an existing block
  Adding: (${block.id}: ${block.action})
  Existing: (${match.id}: ${match.action})`
      )
    }

    this.slots.push(new Slot(block, this.workspace, limit, this.slots.length))
  }

  getBlockById(id: number): Block | null {
    var matches = this.slots.filter( (s) => {
      return s.block.id === id
    })
    if (matches.length > 0) {
      return matches[0].block
    }
    return null
  }

  draw(): HTMLDivElement {
    this.menuDiv = document.createElement("div")
    this.menuDiv.id = `${this.workspace.containerId}-menu`
    this.menuDiv.classList.add("nt-menu")

    for (var i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i]
      this.menuDiv.append(slot.draw(i))
    }

    const dropZone = interact(this.menuDiv).dropzone({ accept: "#nt-drag-image" })
    dropZone.on("dragenter", () => {
      this.menuDiv.classList.add("nt-menu-drag-over")
    })
    dropZone.on("dragleave", () => {
      this.menuDiv.classList.remove("nt-menu-drag-over")
    })
    dropZone.on("drop", () => this.drop() )

    this.updateLimits()

    return this.menuDiv
  }

  updateLimits(): void {
    for (var slot of this.slots) {
      slot.updateForLimit()
    }
  }

  drop(): void {
    const dragManager = DragManager.getCurrent()
    if (dragManager.wasHandled) {
      return
    }

    this.menuDiv.classList.remove("nt-menu-drag-over")
    dragManager.wasHandled = true
    dragManager.clearDraggingClasses()
    const oldBlocks = dragManager.consumeDraggingBlocks()
    const changedBlock = oldBlocks[0]
    this.workspace.programChanged(new BlockChangedEvent(changedBlock))
  }

}

export { BlockMenu }
