// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { Block } from "./block"
import { CodeWorkspace } from "./code-workspace"
import { MenuItemClickedEvent, MenuItemContextMenuEvent } from "./program-changed-event"
import { DragListener } from "./drag-drop/drag-listener"
import { NewDragData } from './drag-drop/drag-data/new-drag-data'

class Slot {

  block: Block
  // num x, y

  workspace: CodeWorkspace

  limit = -1

  slotIndex: number
  slotDiv: HTMLDivElement = document.createElement("div")
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

  draw(index: number): HTMLDivElement {
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

    const dragListener = new DragListener(this.workspace.dragImage, this.slotDiv, "nt-block-dragging", "nt-menu-slot-at-limit")
    dragListener.start = (e: InteractEvent) => this.startDrag(e)
    dragListener.end   = () => this.endDrag()

    this.slotDiv.addEventListener("dblclick", () => this.raiseDoubleClick() )
    this.slotDiv.addEventListener("contextmenu", (e) => this.raiseContextMenu(e) )
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

  startDrag(event: InteractEvent): void {
    const newInstance = this.block.clone(false)
    const dragData = new NewDragData(newInstance, this.slotIndex)
    newInstance.draw(dragData)
    this.workspace.dragManager.startDrag(newInstance, dragData, event, false)
  }

  endDrag(): void {
    this.workspace.dragManager.endDrag()
  }

  raiseDoubleClick(): void {
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
