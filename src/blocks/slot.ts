// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { Block } from "./block"
import { CodeWorkspace } from "./code-workspace"
import { DragImage } from "./drag-drop/drag-image"
import { MenuItemClickedEvent, MenuItemContextMenuEvent } from "./program-changed-event"

class Slot {

  block: Block
  // num x, y

  workspace: CodeWorkspace

  limit = -1

  slotIndex: number
  slotDiv: HTMLDivElement = document.createElement("div")
  dragImage: DragImage | null = null
  isAtLimit = false

  constructor(block: Block, workspace: CodeWorkspace, limit: number, slotIndex: number) {
    this.block = block
    this.workspace = workspace
    this.limit = limit
    this.slotIndex = slotIndex
  }

  isAvailable(): boolean {
    const free = this.limit - this.workspace.getBlockCount(this.block.id)
    return (this.limit <= 0 || free > 0)
  }

  draw(dragImage: DragImage, index: number): HTMLDivElement {
    this.dragImage = dragImage
    this.slotIndex = index
    this.slotDiv = document.createElement("div")
    this.slotDiv.classList.add("nt-menu-slot")
    const styleClass = this.block.getStyleClass()
    this.slotDiv.classList.add(styleClass)
    this.slotDiv.classList.add(`${styleClass}-color`)

    const sampleBlock = this.block.clone(false)
    const codeTip = this.formatCodeTip(sampleBlock)
    const titleSpan = `<span title="${codeTip}">${this.block.action}</span>`
    this.slotDiv.insertAdjacentHTML("beforeend", titleSpan)

    if (this.block.blockColor !== null)  { this.slotDiv.style.backgroundColor = this.block.blockColor }
    if (this.block.borderColor !== null) { this.slotDiv.style.borderColor     = this.block.borderColor }
    if (this.block.textColor !== null)   { this.slotDiv.style.color           = this.block.textColor }
    if (this.block.font !== null) {
      // lineHeight gets reset by the `font` property
      const lineHeight = this.slotDiv.style.lineHeight
      this.slotDiv.style.font       = this.block.font
      this.slotDiv.style.lineHeight = lineHeight
    }

    // final slotDrag = Draggable(slotDiv, avatarHandler: dragImage, draggingClass: "nt-block-dragging", cancel: ".nt-menu-slot-at-limit")
    // slotDrag.onDragStart.listen(startDrag)
    // slotDrag.onDragEnd.listen(endDrag)

    this.slotDiv.addEventListener("doubleclick", this.raiseDoubleClick)
    this.slotDiv.addEventListener("contextmenu", this.raiseContextMenu)
    this.updateForLimit()
    return this.slotDiv
  }

  formatCodeTip(sampleBlock: Block): string {
    const out = new StringBuffer()
    if (this.block.note !== null && StringUtils.isNotNullOrEmpty(this.block.note.trimLeft())) {
      out.writeln(this.block.note)
      out.writeln()
    }
    this.workspace.formatter.formatBlock(out, 0, sampleBlock)
    const value = out.toString().trim()
    const escapedValue = StringUtils.escapeHtml(value)
    return escapedValue
  }

  updateForLimit(): void {
    if (this.isAvailable()) {
      this.slotDiv.classList.remove("nt-menu-slot-at-limit")
    } else {
      this.slotDiv.classList.add("nt-menu-slot-at-limit")
    }
  }

  // void startDrag(DraggableEvent event) {
  //   final newInstance = this.block.clone(false)
  //   BlockDragData dragData = BlockDragData.newBlock(newInstance, this.slotIndex)
  //   newInstance.draw(dragImage, dragData)

  //   workspace.dragManager.startDrag(newInstance, dragData, event, false)
  // }

  // void endDrag(DraggableEvent event) {
  //   workspace.dragManager.endDrag()
  // }

  raiseDoubleClick(e: Event): void {
    const event = new MenuItemClickedEvent(this.block.id)
    this.workspace.programChanged(event)
  }

  raiseContextMenu(e: MouseEvent): boolean {
    e.preventDefault()
    e.stopPropagation()
    const event = new MenuItemContextMenuEvent(this.block.id, e.pageX, e.pageY)
    this.workspace.programChanged(event)
    return false
  }

}

export { Slot }
