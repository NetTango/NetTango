// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExternalStorage } from "../utils/external-storage"
import { NumUtils } from "../utils/num-utils"
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { Attribute } from "./attributes/attribute"
import { Arrow } from "./baubles/arrow"
import { Toggle } from "./baubles/toggle"
import { Clause } from "./clause"
import { CodeWorkspace } from "./code-workspace"
import { BlockDragData } from "./drag-drop/block-drag-data"
import { DragImage } from "./drag-drop/drag-image"
import { BlockChangedEvent } from "./program-changed-event"
import { ConcreteTags } from "./tags/concrete-tags"
import { UnrestrictedTags } from "./tags/unrestricted-tags"

class BlockPlacement {
  static readonly STARTER = "starter"
  static readonly CHILD = "child"
  static readonly ANYWHERE = "anywhere"
}

/**
 * Visual programming block
 */
class Block {

  readonly storage = new ExternalStorage(["id", "action", "required", "isTerminal", "placement", "allowedTags", "tags", "instanceId", "type", "format", "closeClauses", "closeStarter", "limit", "note", "blockColor", "textColor", "borderColor", "font", "clauses", "params", "properties", "propertiesDisplay"])

  /// unique block ID number per workspace
  id: number

  /// unqiue block ID number per instance in a program chain
  instanceId: number | null = null

  /// text displayed on the block
  action: string

  /// language specific command type used by code formatters (e.g. nlogo:command)
  type: string | null = null

  /// formatting hint to help translate the parse tree into source code.
  /// parameters can be referenced using python format syntax. e.g.
  /// "if random 100 > {0}"
  format: string | null = null

  /// code to be inserted after all clauses
  closeClauses: string | null = null

  /// code to be inserted after all attached blocks in a chain if the block is a starter
  closeStarter: string | null = null

  // /// extra text to include in the code tip info of a block
  note: string | null = null

  /// parameters for this block (optional)
  params: Map<number, Attribute> = new Map()

  /// properties for this block (optional)
  /// properties are just named parameters that get listed vertically
  properties: Map<number, Attribute> = new Map()
  propertiesDisplay: "shown" | "hidden" = "shown"

  nextParamId: number = 0

  get hasParams(): boolean { return this.params.size > 0 }
  get hasProperties(): boolean { return this.properties.size > 0 }

  clauses: Clause[] = []
  get hasClauses(): boolean { return this.clauses.length > 0 }

  blockColor: string | null = null
  textColor: string | null = null
  borderColor: string | null = null
  font: string | null = null

  /// Tells a code formatter that at least one block of this type is required
  isRequired: boolean = false

  // /// Can this block accept subsequent peer blocks in the chain/clause?
  isTerminal: boolean | null = null
  get isAttachable(): boolean { return this.isTerminal === null ? true : !this.isTerminal }

  // /// Restrict block placement
  placement: "starter" | "child" | "anywhere" = BlockPlacement.CHILD
  // bool get canBeChild   => placement == BlockPlacement.CHILD   || placement == BlockPlacement.ANYWHERE
  get canBeStarter(): boolean {
    return this.placement === BlockPlacement.STARTER || this.placement === BlockPlacement.ANYWHERE
  }

  // If this is a non-terminal starter, these are the allowed tags for blocks to add to it.
  allowedTags: ConcreteTags = new UnrestrictedTags()

  // these are the tags for this block when being added to a clause or chain
  readonly tags: string[] = []

  /// link back to the main workspace
  workspace: CodeWorkspace

  dragImage: DragImage | null = null
  // BlockAcceptor acceptor
  dragData: BlockDragData = new BlockDragData()
  isDragOver = false
  isDragNotchOver = false
  blockDiv = document.createElement("div")
  actionDiv = document.createElement("div")
  propertiesToggle: Toggle | null = null

  constructor(workspace: CodeWorkspace, id: number | null, action: string, isSlotBlock: boolean) {
    this.workspace = workspace
    this.action = action
    if (id === null) {
      id = this.workspace.nextBlockId
      this.workspace.nextBlockId++
    } else if (id >= this.workspace.nextBlockId) {
      this.workspace.nextBlockId = id + 1
    }
    this.id = id
    if (!isSlotBlock) {
      this.instanceId = this.workspace.nextBlockInstanceId
      this.workspace.nextBlockInstanceId++
    }
  }

  clone(isSlotBlock: boolean): Block {
    const other = new Block(this.workspace, this.id, this.action, isSlotBlock)
    other.action = this.action
    other.type = this.type
    other.format = this.format
    other.closeClauses = this.closeClauses
    other.closeStarter = this.closeStarter
    other.note = this.note
    other.blockColor = this.blockColor
    other.textColor = this.textColor
    other.borderColor = this.borderColor
    other.font = this.font
    other.isRequired = this.isRequired
    other.isTerminal = this.isTerminal
    other.placement = this.placement
    other.allowedTags = this.allowedTags.clone()
    other.tags.push(...this.tags)

    this.clauses.forEach( (clause) => other.clauses.push( clause.clone(other) ))

    for (var param of this.params.values()) {
      const otherParam = param.clone(other, isSlotBlock)
      other.params.set(otherParam.id, otherParam)
    }
    for (var prop of this.properties.values()) {
      const otherProp = prop.clone(other, isSlotBlock)
      other.properties.set(otherProp.id, otherProp)
    }
    return other
  }

  getBlockCount(id: number): number {
    var count: number = 0
    if (this.id === id) { count++ }
    if (this.hasClauses) {
      count = count + NumUtils.sum(this.clauses.map( (clause) => clause.getBlockCount(id) ))
    }
    return count
  }

  getBlockInstance(instanceId: number): Block | null {
    if (this.instanceId === instanceId) {
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

  getStyleClass(): string {
    if (this.canBeStarter) {
      return `${this.workspace.containerId}-block-starter`
    }
    if (this.hasClauses) {
      return `${this.workspace.containerId}-block-container`
    }
    return `${this.workspace.containerId}-block-command`
  }

  draw(dragImage: DragImage, dragData: BlockDragData): HTMLDivElement {
    this.dragImage = dragImage
    this.dragData = dragData
  //   this.acceptor = new BlockAcceptor(this)

    this.blockDiv = document.createElement("div")
    this.blockDiv.classList.add("nt-block")
    const styleClass = this.getStyleClass()
    this.blockDiv.classList.add(styleClass)
    if (this.hasClauses) {
      this.blockDiv.classList.add("nt-block-with-clauses")
    }

    Block.applyStyleOverrides(this, this.blockDiv)

    const headerDiv = document.createElement("div")
    headerDiv.classList.add(`${styleClass}-color`)
    Block.maybeSetColorOverride(this.blockColor, headerDiv)
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
      this.propertiesToggle = new Toggle(this.propertiesDisplay !== "hidden", (isOn) => {
        this.propertiesDisplay = isOn ? "shown" : "hidden"
        propertiesDiv.classList.toggle("nt-block-properties-hidden")
        this.workspace.programChanged(new BlockChangedEvent(this))
      })
      if (this.propertiesDisplay === "hidden") {
        propertiesDiv.classList.add("nt-block-properties-hidden")
      }
      this.actionDiv.append(this.propertiesToggle.div)
    }

    for (var attribute of this.properties.values()) {
      const propertyDiv = attribute.drawProperty()
      propertyDiv.classList.add(`${styleClass}-color`)
      Block.maybeSetColorOverride(this.blockColor, propertyDiv)
      propertiesDiv.append(propertyDiv)
    }

    if (this.hasClauses) {
      const firstClauseDiv = this.clauses[0].draw(dragImage, this, headerDiv)
      this.blockDiv.append(firstClauseDiv)

      for (var clause of this.clauses.slice(1)) {
        const clauseDiv = clause.draw(dragImage, this, null)
        this.blockDiv.append(clauseDiv)
      }

      const clauseFooter = document.createElement("div")
      clauseFooter.classList.add("nt-clause-footer")
      clauseFooter.classList.add(`${styleClass}-color`)
      Block.maybeSetColorOverride(this.blockColor, clauseFooter)
      this.blockDiv.append(clauseFooter)
    }

    if (this.isAttachable) {
      const arrow = Arrow.draw()
      this.blockDiv.append(arrow)
    }

    Block.wireDragEvents(this, this.blockDiv, (isOver) => this.isDragOver = isOver )

    return this.blockDiv
  }

  static maybeSetColorOverride(backgroundColor: string | null, div: HTMLDivElement): void {
    if (backgroundColor !== null) { div.style.backgroundColor = backgroundColor }
  }

  static applyStyleOverrides(block: Block, div: HTMLDivElement): void {
    if (block.borderColor !== null) { div.style.borderColor = block.borderColor; }
    if (block.textColor !== null)   { div.style.color       = block.textColor; }
    if (block.font !== null) {
      // lineHeight gets reset by the `font` property
      const lineHeight     = div.style.lineHeight
      div.style.font       = block.font
      div.style.lineHeight = lineHeight
    }
  }

  static wireDragEvents(block: Block, div: HTMLDivElement, setOver: (isOver: boolean) => void): void {
    // final draggable = Draggable(div, avatarHandler: block.dragImage, draggingClass: "nt-block-dragging")
    // draggable.onDragStart.listen(block.startDrag)
    // draggable.onDragEnd.listen(block.endDrag)
    // final dropzone = Dropzone(div, acceptor: block.acceptor)
    // dropzone.onDrop.listen(block.drop)
    // dropzone.onDragEnter.listen( (e) => setOver(true) )
    // dropzone.onDragLeave.listen( (e) => setOver(false) )
  }

  updateActionText(): void {
    const codeTip = this.formatCodeTip()
    this.actionDiv.insertAdjacentHTML("afterend", `<span title="${codeTip}">${this.action}</span>`)
  }

  formatCodeTip(): string {
    const out = new StringBuffer()
    if (this.note !== null && StringUtils.isNotNullOrEmpty(this.note.trimLeft())) {
      out.writeln(this.note)
      out.writeln()
    }
    if (this.dragData.parentType === "workspace-chain" && this.dragData.blockIndex === 0 && this.dragData.chainIndex !== null) {
      const chain = this.workspace.chains[this.dragData.chainIndex]
      this.workspace.formatter.formatBlocks(out, 0, chain.blocks)
      // if this block isn't a valid chain starter, nothing may have been written
      if (out.isEmpty) {
        this.workspace.formatter.formatBlock(out, 0, this)
      }
    } else {
      this.workspace.formatter.formatBlock(out, 0, this)
    }
    const value = out.toString().trim()
    const escapedValue = StringUtils.escapeHtml(value)
    return escapedValue
  }

  updateDragOver(): boolean {
    this.blockDiv.classList.remove("nt-drag-over")
    this.blockDiv.classList.remove("nt-block-clause-drag-over")
    var isHighlightHandled = false
    for (var clause of this.clauses) {
      const clauseResult = clause.updateDragOver()
      isHighlightHandled = isHighlightHandled || clauseResult
    }
    if ((this.isDragOver || this.isDragNotchOver) && !isHighlightHandled) {
      isHighlightHandled = true
      this.blockDiv.classList.add("nt-drag-over")
    }
    return isHighlightHandled
  }

  clearDragOver(): void {
    this.blockDiv.classList.remove("nt-drag-over")
    this.blockDiv.classList.remove("nt-block-clause-drag-over")
    this.isDragOver = false
    this.isDragNotchOver = false
    for (var clause of this.clauses) {
      clause.clearDragOver()
    }
  }

  // void startDrag(DraggableEvent event) {
  //   workspace.dragManager.startDrag(this, this.dragData, event, true)
  // }

  // void endDrag(DraggableEvent event) {
  //   workspace.dragManager.endDrag()
  // }

  // void drop(DropzoneEvent event) {
  //   DragManager.current.wasHandled = true

  //   final newBlocks = workspace.dragManager.consumeDraggingBlocks()

  //   switch (dragData.parentType) {

  //     case "workspace-chain":
  //       workspace.chains[dragData.chainIndex].insertBlocks(dragData.blockIndex + 1, newBlocks)
  //       break

  //     case "block-clause":
  //       final parentBlock = workspace.chains[dragData.chainIndex].getBlockInstance(dragData.parentInstanceId)
  //       parentBlock.clauses[dragData.clauseIndex].insertBlocks(dragData.blockIndex + 1, newBlocks)
  //       break

  //   }

  //   Block changedBlock = newBlocks.elementAt(0)
  //   workspace.programChanged(new BlockChangedEvent(changedBlock))
  // }

  enableDropZones(): void {
  //   if (BlockAcceptor.isLandingSpot(this)) {
  //     this.blockDiv.classes.add("nt-allowed-drop")
  //   }

  //   for (final clause in this.clauses) {
  //     clause.enableDropZones()
  //   }
  }

  disableDropZones(): void {
  //   this.blockDiv.classes.remove("nt-allowed-drop")

  //   for (final clause in this.clauses) {
  //     clause.disableDropZones()
  //   }
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

export { Block, BlockPlacement }
