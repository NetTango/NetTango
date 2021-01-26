// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import interact from "interactjs"
import type { InteractEvent } from '@interactjs/core/InteractEvent'

import { ExternalStorage } from "../utils/external-storage"
import { Arrow } from "./baubles/arrow"
import { Cap } from "./baubles/cap"
import { Notch } from "./baubles/notch"
import { Block } from "./block"
import { BlockCollection } from "./block-collection"
import { CodeWorkspace } from "./code-workspace"
import { ChainAcceptor } from "./drag-drop/chain-acceptor"
import { ChainDragData } from "./drag-drop/drag-data/chain-drag-data"
import { DragListener } from "./drag-drop/drag-listener"
import { DragManager } from "./drag-drop/drag-manager"
import { BlockChangedEvent } from "./program-changed-event"

class Chain extends BlockCollection {

  readonly storage = new ExternalStorage(["x", "y", "blocks"])

  static readonly FRAGMENT_HEIGHT = 40

  x = 0
  y = 0

  readonly workspace: CodeWorkspace

  chainIndex: number

  fragmentDiv = document.createElement("div")
  isDragOver: boolean = false

  get isFragment(): boolean { return this.blocks.length === 0 || !this.blocks[0].canBeStarter }

  constructor(workspace: CodeWorkspace, chainIndex: number) {
    super()
    this.workspace = workspace
    this.chainIndex = chainIndex
  }

  draw(newChainIndex: number): HTMLDivElement {
    this.chainIndex = newChainIndex

    this.fragmentDiv = document.createElement("div")
    this.fragmentDiv.classList.add("nt-fragment")
    const acceptor = new ChainAcceptor(this)
    const fragmentDropzone = interact(this.fragmentDiv).dropzone({
      accept: ".nt-menu-slot, .nt-block, .nt-cap, .nt-notch"
      , checker: (_1, _2, dropped) => acceptor.checker(dropped)
    })
    fragmentDropzone.on("drop", (e) => this.drop(e) )
    fragmentDropzone.on("dragenter", () => this.isDragOver = true )
    fragmentDropzone.on("dragleave", () => this.isDragOver = false )

    this.div = document.createElement("div")
    this.div.classList.add("nt-chain")

    if (this.blocks.length === 0) {
      return this.div
    }

    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      const dragData = new ChainDragData(this.chainIndex, i, this.blocks.slice(i + 1))
      block.draw(dragData)
    }

    Chain.redrawChain(this.div, this.blocks, false, this.fragmentDiv)

    this.updatePosition(this.x, this.y)

    return this.div
  }

  updatePosition(x: number, y: number): void {
    this.x = x
    this.y = y
    this.div.style.left = `${x}px`
    this.div.style.top  = `${y}px`
  }

  resetDragData(newChainIndex: number): void {
    this.chainIndex = newChainIndex
    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      block.dragData = new ChainDragData(this.chainIndex, i, this.blocks.slice(i + 1))
      block.resetOwnedBlocksDragData()
    }
  }

  updateDragOver(): boolean {
    this.fragmentDiv.classList.remove("nt-drag-over")
    var isHighlightHandled = false
    for (var block of this.blocks) {
      const blockResult = block.updateDragOver()
      isHighlightHandled = isHighlightHandled || blockResult
    }
    if (this.isDragOver && !isHighlightHandled) {
      isHighlightHandled = true
      this.fragmentDiv.classList.add("nt-drag-over")
    }
    return isHighlightHandled
  }

  clearDragOver(): void {
    this.fragmentDiv.classList.remove("nt-drag-over")
    this.isDragOver = false
    for (var block of this.blocks) {
      block.clearDragOver()
    }
  }

  static redrawChain(div: HTMLDivElement, blocks: Block[], useClones: boolean, fragmentDiv: HTMLDivElement | null = null): void {
    div.innerHTML = ""

    if (blocks[0].canBeStarter) {
      div.classList.add("nt-chain-starter")
      div.classList.remove("nt-chain-fragment")

      const topCap = Cap.draw(true, blocks[0])
      div.append(topCap)

    } else {
      div.classList.remove("nt-chain-starter")
      div.classList.add("nt-chain-fragment")

      if (fragmentDiv !== null) {
        div.append(fragmentDiv)
      }

      const topNotch = Notch.draw(true, blocks[0])
      div.append(topNotch)

      const arrow = Arrow.draw()
      div.append(arrow)
    }

    BlockCollection.appendBlocks(div, blocks, "nt-block", useClones)

    if (blocks[blocks.length - 1].isAttachable) {
      const bottomNotch = Notch.draw(false, blocks[blocks.length - 1])
      div.append(bottomNotch)
    } else {
      const bottomCap = Cap.draw(false, blocks[blocks.length - 1])
      div.append(bottomCap)
    }
  }

  redrawBlocks(): void {
    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      block.dragData = new ChainDragData(this.chainIndex, i, this.blocks.slice(i + 1))
      block.resetOwnedBlocksDragData()
    }
    Chain.redrawChain(this.div, this.blocks, false, this.fragmentDiv)
  }

  addBlocks(newBlocks: Block[]): void {
    this.insertBlocks(this.blocks.length, newBlocks)
  }

  enableDropZones(): void {
    if (ChainAcceptor.isLandingSpot(this)) {
      this.div.classList.add("nt-allowed-drop")
    }

    if (this.isFragment) {
      this.fragmentDiv.classList.add("show")
      const top = Math.round(this.y) - Chain.FRAGMENT_HEIGHT
      this.div.style.top = `${top}px`
    }

    for (var block of this.blocks) {
      block.enableDropZones()
    }
  }

  disableDropZones(): void {
    this.div.classList.remove("nt-allowed-drop")

    this.fragmentDiv.classList.remove("show")
    const top = Math.round(this.y)
    this.div.style.top = `${top}px`

    for (var block of this.blocks) {
      block.disableDropZones()
    }
  }

  drop(event: InteractEvent): void {
    const dragManager = DragManager.getCurrent()
    dragManager.wasHandled = true

    this.workspace.dragManager.clearDraggingClasses()
    const newBlocks = this.workspace.dragManager.consumeDraggingBlocks()
    const newFirst  = newBlocks[0]
    const offset = DragListener.getOffsetToRoot(this.div)
    // The casts here are necessary I believe because the type defs are wrong, `dragEvent` does exist on the
    // `InteractEvent` when a drop occurs. -Jeremy B January 2020
    const dropY = ((event as any).dragEvent.page.y as number) - offset.y - dragManager.dragStartOffset.y
    this.y = this.y - Chain.FRAGMENT_HEIGHT + Math.floor(dropY)
    this.insertBlocks(0, newBlocks)

    this.workspace.programChanged(new BlockChangedEvent(newFirst))
  }

}

export { Chain }
