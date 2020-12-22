// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "./block"
import { CodeWorkspace } from "./code-workspace"
import { DragImage } from "./drag-drop/drag-image"
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

  menuDiv = new HTMLDivElement()

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

  draw(dragImage: DragImage): HTMLDivElement {
    this.menuDiv = new HTMLDivElement()
    this.menuDiv.id = `${this.workspace.containerId}-menu`
    this.menuDiv.classList.add("nt-menu")

    for (var i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i]
      this.menuDiv.append(slot.draw(dragImage, i))
    }

    // final dropZone = Dropzone(menuDiv, acceptor: workspace.acceptor)
    // dropZone.onDragEnter.listen( (e) {
    //   DragManager.current.isOverMenu = true
    //   this.updateDragOver()
    // })
    // dropZone.onDragLeave.listen( (e) {
    //   DragManager.current.isOverMenu = false
    //   this.updateDragOver()
    // })
    // dropZone.onDrop.listen(drop)

    this.updateLimits()

    return this.menuDiv
  }

  updateLimits(): void {
    for (var slot of this.slots) {
      slot.updateForLimit()
    }
  }

  updateDragOver(): void {
    // if (DragManager.current != null && (DragManager.current.isOverMenu || (DragManager.current.isOverContainer && !DragManager.current.isOverWorkspace))) {
    //   menuDiv.classes.add("nt-menu-drag-over")
    // } else {
    //   menuDiv.classes.remove("nt-menu-drag-over")
    // }
  }

//   void drop(DropzoneEvent event) {
//     DragManager.current.wasHandled = true

//     final oldBlocks = workspace.dragManager.consumeDraggingBlocks()
//     Block changedBlock = oldBlocks.elementAt(0)
//     workspace.programChanged(new BlockChangedEvent(changedBlock))
//   }

}

export { BlockMenu }
