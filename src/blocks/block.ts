// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import interact from "interactjs"
import type { InteractEvent } from '@interactjs/core/InteractEvent'

import { NumUtils } from "../utils/num-utils"
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { Attribute } from "./attributes/attribute"
import { Arrow } from "./baubles/arrow"
import { Toggle } from "./baubles/toggle"
import { Clause } from "./clause"
import { CodeWorkspace } from "./code-workspace"
import { BlockAcceptor } from "./drag-drop/block-acceptor"
import { BlockDragData } from "./drag-drop/drag-data/block-drag-data"
import { ChainDragData } from "./drag-drop/drag-data/chain-drag-data"
import { NewDragData } from "./drag-drop/drag-data/new-drag-data"
import { BlockChangedEvent } from "./program-changed-event"
import { DragManager } from "./drag-drop/drag-manager"
import { ClauseDragData } from "./drag-drop/drag-data/clause-drag-data"
import { DragListener } from "./drag-drop/drag-listener"
import { BlockInput } from "../types/types"
import { ObjectUtils } from "../utils/object-utils"
import { createAttribute } from "./attributes/attribute-factory"
import { BlockRules } from "./block-rules"

/**
 * Visual programming block
 */
class Block {

  readonly b: BlockInput

  /// parameters for this block (optional)
  params: Map<number, Attribute> = new Map()

  /// properties for this block (optional)
  /// properties are just named parameters that get listed vertically
  properties: Map<number, Attribute> = new Map()

  nextParamId: number = 0

  get hasParams(): boolean { return this.params.size > 0 }
  get hasProperties(): boolean { return this.properties.size > 0 }

  clauses: Clause[] = []
  get hasClauses(): boolean {
    return BlockRules.hasClauses(this.b)
  }

  get isAttachable(): boolean { return !this.b.isTerminal }

  get canBeChild(): boolean {
    return BlockRules.canBeChild(this.b)
  }
  get canBeStarter(): boolean {
    return BlockRules.canBeStarter(this.b)
  }

  /// link back to the main workspace
  workspace: CodeWorkspace

  // BlockAcceptor acceptor
  dragData: BlockDragData = new NewDragData(this, 0)
  acceptor: BlockAcceptor = new BlockAcceptor(this)
  blockDiv = document.createElement("div")
  actionDiv = document.createElement("div")
  propertiesToggle: Toggle | null = null

  constructor(b: BlockInput, workspace: CodeWorkspace, isSlotBlock: boolean) {
    this.b = b
    this.workspace = workspace
    if (!isSlotBlock) {
      this.b.instanceId = this.workspace.nextBlockInstanceId
      this.workspace.nextBlockInstanceId++
    }

    this.clauses = b.clauses.map( (c, i) => new Clause(c, this, i) )
    b.params.forEach( (p) => {
      const param = createAttribute(p, this, isSlotBlock)
      this.params.set(param.a.id, param)
    })
    b.properties.forEach( (p) => {
      const property = createAttribute(p, this, isSlotBlock)
      this.properties.set(property.a.id, property)
    })
  }

  getBlockCount(id: number): number {
    var count: number = 0
    if (this.b.id === id) { count++ }
    if (this.hasClauses) {
      count = count + NumUtils.sum(this.clauses.map( (clause) => clause.getBlockCount(id) ))
    }
    return count
  }

  getBlockInstance(instanceId: number): Block | null {
    if (this.b.instanceId === instanceId) {
      return this
    }
    for (var clause of this.clauses) {
      const clauseBlock = clause.getBlockInstance(instanceId)
      if (clauseBlock !== null) { return clauseBlock }
    }
    return null
  }

  getAttribute(attributeId: number): Attribute {
    if (this.params.has(attributeId)) {
      return this.params.get(attributeId)!
    }
    if (this.properties.has(attributeId)) {
      return this.properties.get(attributeId)!
    }
    throw new Error(`Attribute with given ID not found on block: ${attributeId}`)
  }

  static getStyleClass(b: BlockInput, containerId: string): string {
    if (BlockRules.canBeStarter(b)) {
      return `${containerId}-block-starter`
    }
    if (BlockRules.hasClauses(b)) {
      return `${containerId}-block-container`
    }
    return `${containerId}-block-command`

  }

  getStyleClass(): string {
    return Block.getStyleClass(this.b, this.workspace.containerId)
  }

  draw(dragData: BlockDragData): HTMLDivElement {
    this.dragData = dragData

    this.blockDiv = document.createElement("div")
    this.blockDiv.classList.add("nt-block")
    const styleClass = this.getStyleClass()
    this.blockDiv.classList.add(styleClass)
    if (this.hasClauses) {
      this.blockDiv.classList.add("nt-block-with-clauses")
    }

    BlockRules.applyStyleOverrides(this.b, this.blockDiv)

    const headerDiv = document.createElement("div")
    headerDiv.classList.add(`${styleClass}-color`)
    BlockRules.maybeSetColorOverride(this.b.blockColor, headerDiv)
    headerDiv.classList.add("nt-block-header")
    this.blockDiv.append(headerDiv)

    this.actionDiv = document.createElement("div")
    this.updateActionText()
    this.actionDiv.classList.add("nt-block-action")
    headerDiv.append(this.actionDiv)

    const paramDiv = document.createElement("div")
    paramDiv.classList.add("nt-block-params")
    headerDiv.append(paramDiv)

    for (var attribute of this.params.values()) {
      paramDiv.append(attribute.drawParameter())
    }

    const propertiesDiv = document.createElement("div")
    propertiesDiv.classList.add("nt-block-properties")
    headerDiv.append(propertiesDiv)

    if (this.hasProperties) {
      this.propertiesToggle = new Toggle(this.b.propertiesDisplay !== "hidden", (isOn) => {
        this.b.propertiesDisplay = isOn ? "shown" : "hidden"
        propertiesDiv.classList.toggle("nt-block-properties-hidden")
        this.workspace.programChanged(new BlockChangedEvent(this))
      })
      if (this.b.propertiesDisplay === "hidden") {
        propertiesDiv.classList.add("nt-block-properties-hidden")
      }
      this.actionDiv.append(this.propertiesToggle.div)
    }

    for (var attribute of this.properties.values()) {
      const propertyDiv = attribute.drawProperty()
      propertyDiv.classList.add(`${styleClass}-color`)
      BlockRules.maybeSetColorOverride(this.b.blockColor, propertyDiv)
      propertiesDiv.append(propertyDiv)
    }

    if (this.hasClauses) {
      const firstClauseDiv = this.clauses[0].draw(this, headerDiv)
      this.blockDiv.append(firstClauseDiv)

      for (var clause of this.clauses.slice(1)) {
        const clauseDiv = clause.draw(this, null)
        this.blockDiv.append(clauseDiv)
      }

      const clauseFooter = document.createElement("div")
      clauseFooter.classList.add("nt-clause-footer")
      clauseFooter.classList.add(`${styleClass}-color`)
      BlockRules.maybeSetColorOverride(this.b.blockColor, clauseFooter)
      this.blockDiv.append(clauseFooter)
    }

    if (this.isAttachable) {
      const arrow = Arrow.draw()
      this.blockDiv.append(arrow)
    }

    Block.wireDragEvents(this, this.blockDiv)

    return this.blockDiv
  }

  static wireDragEvents(block: Block, div: HTMLDivElement): void {
    const dragListener = new DragListener(block.workspace.dragImage, div)
    dragListener.start = (e: InteractEvent) => block.startDrag(e)
    dragListener.end   = () => block.endDrag()

    const dropzone = interact(div).dropzone({
        accept: ".nt-menu-slot, .nt-block, .nt-cap, .nt-notch"
      , checker: (_1, _2, dropped) => block.acceptor.checker(dropped)
    })
    dropzone.on("drop", () => block.drop() )
    dropzone.on("dragenter", () => {
      block.blockDiv.classList.add("nt-drag-over")
    })
    dropzone.on("dragleave", () => {
      block.blockDiv.classList.remove("nt-drag-over")
    })
  }

  updateActionText(): void {
    const codeTip = this.formatCodeTip()
    this.actionDiv.insertAdjacentHTML("beforeend", `<span title="${codeTip}">${this.b.action}</span>`)
  }

  formatCodeTip(): string {
    const out = new StringBuffer()
    if (this.b.note !== null && StringUtils.isNotNullOrEmpty(this.b.note.trimLeft())) {
      out.writeln(this.b.note)
      out.writeln()
    }
    if (this.dragData instanceof ChainDragData) {
      const chain = this.workspace.chains[this.dragData.chainIndex]
      this.workspace.formatter.formatChainBlocks(out, chain.blocks.map( (block) => block.b ), this.workspace.ws.chainOpen, this.workspace.ws.chainClose)
      // if this block isn't a valid chain starter, nothing may have been written
      if (out.isEmpty) {
        this.workspace.formatter.formatBlock(out, 0, this.b)
      }
    } else {
      this.workspace.formatter.formatBlock(out, 0, this.b)
    }
    const value = out.toString().trim()
    const escapedValue = StringUtils.escapeHtml(value)
    return escapedValue
  }

  startDrag(event: InteractEvent): void {
    DragManager.start(this, this.dragData, event)
  }

  endDrag(): void {
    DragManager.cancel()
  }

  drop(): void {
    DragManager.drop( (newBlocks) => {
      this.blockDiv.classList.remove("nt-drag-over")

      if (this.dragData instanceof ChainDragData) {
        this.workspace.chains[this.dragData.chainIndex].insertBlocks(this.dragData.blockIndex + 1, newBlocks)
      }

      if (this.dragData instanceof ClauseDragData) {
        const parentBlock = this.workspace.chains[this.dragData.chainIndex].getBlockInstance(this.dragData.parentInstanceId)
        if (parentBlock === null) {
          throw new Error("Could not find parent block?")
        }
        parentBlock.clauses[this.dragData.clauseIndex].insertBlocks(this.dragData.blockIndex + 1, newBlocks)
      }

      const changedBlock = newBlocks[0]
      this.workspace.programChanged(new BlockChangedEvent(changedBlock))
    })
  }

  enableDropZones(): void {
    if (DragManager.isValidDrop(this.workspace.containerId, (dragState) => BlockAcceptor.isLandingSpot(this, dragState))) {
      this.blockDiv.classList.add("nt-allowed-drop")
    }

    for (var clause of this.clauses) {
      clause.enableDropZones()
    }
  }

  disableDropZones(): void {
    this.blockDiv.classList.remove("nt-allowed-drop")

    for (var clause of this.clauses) {
      clause.disableDropZones()
    }
  }

  resetOwnedBlocksDragData(): void {
    for (var clause of this.clauses) {
      clause.resetOwned()
    }
  }

  resetBlockActionText(): void {
    this.actionDiv.innerHTML = ""
    this.updateActionText()
    if (this.propertiesToggle !== null) {
      this.actionDiv.append(this.propertiesToggle.div)
    }
    for (var clause of this.clauses) {
      for (var block of clause.blocks) {
        block.resetBlockActionText()
      }
    }
  }

}

export { Block }
