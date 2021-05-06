// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { Block } from "./block"
import { CodeWorkspace } from "./code-workspace"
import { MenuItemClickedEvent, MenuItemContextMenuEvent } from "./program-changed-event"
import { DragListener } from "./drag-drop/drag-listener"
import { DragManager } from "./drag-drop/drag-manager"
import { NewDragData } from './drag-drop/drag-data/new-drag-data'
import { BlockInput } from '../types/types'
import { ObjectUtils } from '../utils/object-utils'

class Slot {

  readonly b: BlockInput
  readonly workspace: CodeWorkspace

  slotIndex: number
  slotDiv: HTMLDivElement = document.createElement("div")
  isAtLimit = false

  constructor(b: BlockInput, workspace: CodeWorkspace, slotIndex: number) {
    this.b = b
    if (b.id === null) {
      throw new Error("Cannot make a menu slot for a block without an ID.")
    }
    this.workspace = workspace
    this.slotIndex = slotIndex
  }

  isAvailable(): boolean {
    const free = this.b.limit - this.workspace.getBlockCount(this.b.id)
    return (this.b.limit <= 0 || free > 0)
  }

  draw(index: number): HTMLDivElement {
    this.slotIndex = index
    this.slotDiv = document.createElement("div")
    this.slotDiv.classList.add("nt-menu-slot")
    const styleClass = Block.getStyleClass(this.b, this.workspace.containerId)
    this.slotDiv.classList.add(styleClass)
    this.slotDiv.classList.add(`${styleClass}-color`)

    const codeTip = this.formatCodeTip(this.b)
    const titleSpan = `<span title="${codeTip}">${this.b.action}</span>`
    this.slotDiv.insertAdjacentHTML("beforeend", titleSpan)

    if (this.b.blockColor !== null)  { this.slotDiv.style.backgroundColor = this.b.blockColor }
    if (this.b.borderColor !== null) { this.slotDiv.style.borderColor     = this.b.borderColor }
    if (this.b.textColor !== null)   { this.slotDiv.style.color           = this.b.textColor }
    if (this.b.font !== null) {
      // lineHeight gets reset by the `font` property
      const lineHeight = this.slotDiv.style.lineHeight
      this.slotDiv.style.font       = this.b.font
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

  formatCodeTip(block: BlockInput): string {
    const out = new StringBuffer()
    if (this.b.note !== null && StringUtils.isNotNullOrEmpty(this.b.note.trimLeft())) {
      out.writeln(this.b.note)
      out.writeln()
    }
    const fakeInstance = ObjectUtils.clone(block)
    fakeInstance.instanceId = -1
    this.workspace.formatter.formatBlock(out, 0, fakeInstance)
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
    const newInstance = new Block(ObjectUtils.clone(this.b), this.workspace, false)
    const dragData = new NewDragData(newInstance, this.slotIndex)
    newInstance.draw(dragData)
    DragManager.start(newInstance, dragData, event)
  }

  endDrag(): void {
    DragManager.cancel()
  }

  raiseDoubleClick(): void {
    const event = new MenuItemClickedEvent(this.b.id)
    this.workspace.programChanged(event)
  }

  raiseContextMenu(e: MouseEvent): boolean {
    e.preventDefault()
    e.stopPropagation()
    const event = new MenuItemContextMenuEvent(this.b.id, e.pageX, e.pageY)
    this.workspace.programChanged(event)
    return false
  }

}

export { Slot }
