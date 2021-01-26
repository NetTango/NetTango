// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import interact from "interactjs"
import type { InteractEvent } from '@interactjs/core/InteractEvent'

import { ExternalStorage } from "../utils/external-storage"
import { StringUtils } from "../utils/string-utils"
import { Arrow } from "./baubles/arrow"
import { Notch } from "./baubles/notch"
import { Block } from "./block"
import { BlockCollection } from "./block-collection"
import { ClauseAcceptor } from "./drag-drop/clause-acceptor"
import { ActiveDragData } from "./drag-drop/drag-data/active-drag-data"
import { ClauseDragData } from "./drag-drop/drag-data/clause-drag-data"
import { DragManager } from "./drag-drop/drag-manager"
import { BlockChangedEvent } from "./program-changed-event"
import { AllowedTags } from "./tags/allowed-tags"
import { ConcreteTags } from "./tags/concrete-tags"
import { InheritTags } from "./tags/inherit-tags"
import { UnrestrictedTags } from "./tags/unrestricted-tags"

class Clause extends BlockCollection {

  readonly storage = new ExternalStorage(["children", "action", "open", "close", "allowedTags"])

  readonly owner: Block
  readonly clauseIndex: number
  readonly action: string | null
  readonly open: string | null
  readonly close: string | null

  allowedTags: AllowedTags = new UnrestrictedTags()

  isDragOver: boolean = false
  isDragHeaderOver: boolean = false

  divider: HTMLDivElement = document.createElement("div")
  leftBar: HTMLDivElement = document.createElement("div")
  blocksDiv: HTMLDivElement = document.createElement("div")

  constructor(owner: Block, clauseIndex: number, action: string | null, open: string | null, close: string | null) {
    super()
    this.owner = owner
    this.clauseIndex = clauseIndex
    this.action = action
    this.open = open
    this.close = close
  }

  draw(container: Block, extraDropDiv: HTMLDivElement | null): HTMLDivElement {
    const acceptor = new ClauseAcceptor(this)

    this.div = document.createElement("div")
    this.div.classList.add("nt-clause")

    if (extraDropDiv !== null) {
      const extraDropzone = interact(extraDropDiv).dropzone({
          accept: ".nt-menu.slot"
        , checker: (_1, _2, dropped) => acceptor.checker(dropped)
      })
      extraDropzone.on("drop", () => this.drop() )
      extraDropzone.on("dragenter", () => { console.log("enter clause"); this.isDragHeaderOver = true })
      extraDropzone.on("dragleave", () => { console.log("leave clause"); this.isDragHeaderOver = false })
    }

    const styleClass = container.getStyleClass()

    this.leftBar = document.createElement("div")
    this.leftBar.classList.add("nt-clause-left-bar")
    this.leftBar.classList.add(`${styleClass}-color`)
    Block.maybeSetColorOverride(container.blockColor, this.leftBar)
    this.div.append(this.leftBar)

    this.divider = document.createElement("div")
    this.divider.classList.add("nt-clause-divider")
    this.divider.classList.add(`${styleClass}-color`)
    Block.maybeSetColorOverride(container.blockColor, this.divider)
    this.div.append(this.divider)

    const dividerText = StringUtils.toStrNotEmpty(this.action, "")
    if (StringUtils.isNotNullOrEmpty(dividerText.trim())) {
      const dividerTextDiv = document.createElement("div")
      dividerTextDiv.classList.add("nt-clause-divider-text")
      dividerTextDiv.innerText = dividerText
      this.divider.append(dividerTextDiv)
    }
    // I would much prefer to just put the arrow in the clause directly, but it gets a little
    // tricky to figure out where to place it veritically with dividers, empty clauses, etc.
    // So this makes this mildly easier, but still a little hacky (see the CSS file for more).
    // -Jeremy B August 2020
    const arrow = Arrow.draw()
    this.divider.append(arrow)

    const dropzone = interact(this.div).dropzone({
        accept: ".nt-menu-slot, .nt-block, .nt-cap, .nt-notch"
      , checker: (_1, _2, dropped) => acceptor.checker(dropped)
    })
    dropzone.on("drop", () => this.drop() )
    dropzone.on("dragenter", () => { console.log("enter clause"); this.isDragOver = true })
    dropzone.on("dragleave", () => { console.log("leave clause"); this.isDragOver = false })

    this.blocksDiv = document.createElement("div")
    this.blocksDiv.classList.add("nt-clause-blocks")

    if (this.blocks.length === 0) {
      this.setEmpty()
      return this.div
    }

    this.div.append(this.blocksDiv)

    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      const siblings = this.blocks.slice(i + 1)
      if (!(this.owner.dragData instanceof ActiveDragData) || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data.")
      }
      const dragData = new ClauseDragData(this.owner.dragData.chainIndex, i, this.owner.instanceId, siblings, this.clauseIndex)
      block.draw(dragData)
    }

    BlockCollection.appendBlocks(this.blocksDiv, this.blocks, "nt-block-clause")

    return this.div
  }

  clone(newBlock: Block): Clause {
    const clause = new Clause(newBlock, this.clauseIndex, this.action, this.open, this.close)
    if (this.allowedTags instanceof ConcreteTags) {
      const allowed: ConcreteTags = this.allowedTags
      clause.allowedTags = allowed.clone()
    }
    else if (this.allowedTags instanceof InheritTags) {
      const allowed: InheritTags = this.allowedTags
      clause.allowedTags = allowed.clone(clause)
    } else {
      throw new Error("Unknown AllowedTags type for clause cloning")
    }
    return clause
  }

  setEmpty(): void {
    this.div.classList.add("nt-clause-empty")
    this.div.append(Notch.drawClause(false, this))

    const dropElement = document.createElement("div")
    dropElement.className = "nt-clause-drop"
    this.div.append(dropElement)

    this.div.append(Notch.drawClause(true,  this))
  }

  setNonEmpty(): void {
    this.div.classList.remove("nt-clause-empty")
  }

  resetOwned(): void {
    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      if (!(this.owner.dragData instanceof ActiveDragData) || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data or instance ID.")
      }
      block.dragData = new ClauseDragData(this.owner.dragData.chainIndex, i, this.owner.instanceId, this.blocks.slice(i + 1), this.clauseIndex)
      block.resetOwnedBlocksDragData()
    }
  }

  redrawBlocks(): void {
    this.div.innerHTML = ""
    this.blocksDiv.innerHTML = ""

    this.div.append(this.leftBar)
    this.div.append(this.divider)

    if (this.blocks.length === 0) {
      this.setEmpty()
      return
    }

    this.setNonEmpty()

    this.div.append(this.blocksDiv)

    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      if (!(this.owner.dragData instanceof ActiveDragData) || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data or instance ID.")
      }
      block.dragData = new ClauseDragData(this.owner.dragData.chainIndex, i, this.owner.instanceId, this.blocks.slice(i + 1), this.clauseIndex)
      block.resetOwnedBlocksDragData()
    }

    BlockCollection.appendBlocks(this.blocksDiv, this.blocks, "nt-block-clause")
  }

  enableDropZones(): void {
    if (ClauseAcceptor.isLandingSpot(this)) {
      this.div.classList.add("nt-allowed-drop")
    }

    for (const block of this.blocks) {
      block.enableDropZones()
    }
  }

  disableDropZones(): void {
    this.div.classList.remove("nt-allowed-drop")

    for (var block of this.blocks) {
      block.disableDropZones()
    }
  }

  updateDragOver(): boolean {
    this.div.classList.remove("nt-block-clause-drag-over")
    if (this.blocks.length > 0) { this.blocks[0].blockDiv.classList.remove("nt-block-clause-drag-over") }

    var isHighlightHandled = false
    for (var block of this.blocks) {
      const blockResult = block.updateDragOver()
      isHighlightHandled = isHighlightHandled || blockResult
    }
    if ((this.isDragOver || this.isDragHeaderOver) && !isHighlightHandled) {
      isHighlightHandled = true
      if (this.blocks.length === 0) {
        this.div.classList.add("nt-block-clause-drag-over")
      } else {
        this.blocks[0].blockDiv.classList.add("nt-block-clause-drag-over")
      }
    }
    return isHighlightHandled
  }

  clearDragOver(): void {
    this.div.classList.remove("nt-block-clause-drag-over")
    if (this.blocks.length > 0) { this.blocks[0].blockDiv.classList.remove("nt-block-clause-drag-over"); }
    this.isDragOver = false
    this.isDragHeaderOver = false
    for (var block of this.blocks) {
      block.clearDragOver()
    }
  }

  drop(): void {
    console.log("drop clause")
    const dragManager = DragManager.getCurrent()
    dragManager.wasHandled = true

    this.owner.workspace.dragManager.clearDraggingClasses()
    const newBlocks = this.owner.workspace.dragManager.consumeDraggingBlocks()

    this.insertBlocks(0, newBlocks)
    this.div.classList.remove("nt-clause-empty")

    const changedBlock = newBlocks[0]
    this.owner.workspace.programChanged(new BlockChangedEvent(changedBlock))
  }

}

export { Clause }
