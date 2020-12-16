// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class BlockPlacement {
  static readonly STARTER = "starter"
  static readonly CHILD = "child"
  static readonly ANYWHERE = "anywhere"
}

/**
 * Visual programming block
 */
class Block {

  // final storage = new ExternalStorage(["id", "action", "required", "isTerminal", "placement", "allowedTags", "tags", "instanceId", "type", "format", "closeClauses", "closeStarter", "limit", "note", "blockColor", "textColor", "borderColor", "font", "clauses", "params", "properties", "propertiesDisplay"])

  /// unique block ID number per workspace
  id: number

  /// unqiue block ID number per instance in a program chain
  instanceId: number | null = null

  /// text displayed on the block
  action: string

  // /// language specific command type used by code formatters (e.g. nlogo:command)
  // var type

  // /// formatting hint to help translate the parse tree into source code.
  // /// parameters can be referenced using python format syntax. e.g.
  // /// "if random 100 > {0}"
  // String format

  // /// code to be inserted after all clauses
  // String closeClauses

  // /// code to be inserted after all attached blocks in a chain if the block is a starter
  // String closeStarter

  // /// extra text to include in the code tip info of a block
  // String note

  /// parameters for this block (optional)
  params: Map<number, Attribute> = new Map()

  /// properties for this block (optional)
  /// properties are just named parameters that get listed vertically
  properties: Map<number, Attribute> = new Map()
  // String propertiesDisplay = "shown"

  nextParamId: number = 0

  // bool get hasParams     => params.isNotEmpty
  // bool get hasProperties => properties.isNotEmpty

  clauses: Clause[] = []
  get hasClauses(): boolean { return this.clauses.length > 0 }

  blockColor: string | null = null
  textColor: string | null = null
  // String borderColor
  // String font

  // /// Tells a code formatter that at least one block of this type is required
  // bool isRequired = false

  // /// Can this block accept subsequent peer blocks in the chain/clause?
  // bool isTerminal
  // bool get isAttachable => isTerminal == null ? true : !isTerminal

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

  // DragImage dragImage
  // BlockAcceptor acceptor
  dragData: BlockDragData | null = null
  // bool isDragOver = false
  isDragNotchOver = false
  // DivElement blockDiv
  // DivElement actionDiv
  // Toggle propertiesToggle

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

  // Block clone(bool isSlotBlock) {
  //   Block other = new Block(workspace, id, action, isSlotBlock)
  //   other.action = action
  //   other.type = type
  //   other.format = format
  //   other.closeClauses = closeClauses
  //   other.closeStarter = closeStarter
  //   other.note = note
  //   other.blockColor = blockColor
  //   other.textColor = textColor
  //   other.borderColor = borderColor
  //   other.font = font
  //   other.isRequired = isRequired
  //   other.isTerminal = isTerminal
  //   other.placement = placement
  //   other.allowedTags = allowedTags.clone()
  //   other.tags.addAll(tags)

  //   this.clauses.forEach( (clause) => other.clauses.add( clause.clone(other) ))

  //   for (Attribute param in params.values) {
  //     Attribute otherParam = param.clone(other, isSlotBlock)
  //     other.params[otherParam.id] = otherParam
  //   }
  //   for (Attribute prop in properties.values) {
  //     Attribute otherProp = prop.clone(other, isSlotBlock)
  //     other.properties[otherProp.id] = otherProp
  //   }
  //   return other
  // }

  // int getBlockCount(int id) {
  //   int count = 0
  //   if (this.id == id) { count++; }
  //   if (this.hasClauses) {
  //     count = count + NumUtils.sum(this.clauses.map( (clause) => clause.getBlockCount(id) ))
  //   }
  //   return count
  // }

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

  // DivElement draw(DragImage dragImage, BlockDragData dragData) {
  //   this.dragImage = dragImage
  //   this.dragData = dragData
  //   this.acceptor = new BlockAcceptor(this)

  //   this.blockDiv = new DivElement()
  //   blockDiv.classes.add("nt-block")
  //   final styleClass = getStyleClass()
  //   blockDiv.classes.add(styleClass)
  //   if (hasClauses) {
  //     blockDiv.classes.add("nt-block-with-clauses")
  //   }

  //   applyStyleOverrides(this, this.blockDiv)

  //   DivElement headerDiv = new DivElement()
  //   headerDiv.classes.add("$styleClass-color")
  //   maybeSetColorOverride(this.blockColor, headerDiv)
  //   headerDiv.classes.add("nt-block-header")
  //   blockDiv.append(headerDiv)

  //   this.actionDiv = new DivElement()
  //   updateActionText()
  //   actionDiv.classes.add("nt-block-action")
  //   headerDiv.append(actionDiv)

  //   final paramDiv = new DivElement()
  //   paramDiv.classes.add("nt-block-params")
  //   headerDiv.append(paramDiv)

  //   for (Attribute attribute in params.values) {
  //     paramDiv.append(attribute.drawParameter())
  //   }

  //   final propertiesDiv = new DivElement()
  //   propertiesDiv.classes.add("nt-block-properties")
  //   headerDiv.append(propertiesDiv)

  //   if (properties.length > 0) {
  //     propertiesToggle = new Toggle(propertiesDisplay != "hidden", (bool isOn) {
  //       propertiesDisplay = isOn ? "shown" : "hidden"
  //       propertiesDiv.classes.toggle("nt-block-properties-hidden")
  //       workspace.programChanged(new BlockChangedEvent(this))
  //     })
  //     if (propertiesDisplay == "hidden") {
  //       propertiesDiv.classes.add("nt-block-properties-hidden")
  //     }
  //     actionDiv.append(propertiesToggle.div)
  //   }

  //   for (Attribute attribute in properties.values) {
  //     final propertyDiv = attribute.drawProperty()
  //     propertyDiv.classes.add("$styleClass-color")
  //     maybeSetColorOverride(this.blockColor, propertyDiv)
  //     propertiesDiv.append(propertyDiv)
  //   }

  //   if (hasClauses) {
  //     final firstClauseDiv = clauses[0].draw(dragImage, this, headerDiv)
  //     blockDiv.append(firstClauseDiv)

  //     for (Clause clause in clauses.skip(1)) {
  //       final clauseDiv = clause.draw(dragImage, this, null)
  //       blockDiv.append(clauseDiv)
  //     }

  //     final clauseFooter = new DivElement()
  //     clauseFooter.classes.add("nt-clause-footer")
  //     clauseFooter.classes.add("$styleClass-color")
  //     maybeSetColorOverride(this.blockColor, clauseFooter)
  //     blockDiv.append(clauseFooter)
  //   }

  //   if (this.isAttachable) {
  //     final arrow = Arrow.draw()
  //     blockDiv.append(arrow)
  //   }

  //   Block.wireDragEvents(this, blockDiv, (isOver) => this.isDragOver = isOver )

  //   return blockDiv
  // }

  static maybeSetColorOverride(backgroundColor: string | null, div: HTMLDivElement): void {
    // if (backgroundColor != null) { div.style.backgroundColor = backgroundColor; }
  }

  static applyStyleOverrides(block: Block, div: HTMLDivElement): void {
    // if (block.borderColor != null) { div.style.borderColor = block.borderColor; }
    // if (block.textColor != null)   { div.style.color       = block.textColor; }
    // if (block.font != null) {
    //   // lineHeight gets reset by the `font` property
    //   final lineHeight     = div.style.lineHeight
    //   div.style.font       = block.font
    //   div.style.lineHeight = lineHeight
    // }
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

  // void updateActionText() {
  //   final codeTip = formatCodeTip()
  //   actionDiv.appendHtml("""<span title="$codeTip">$action</span>""")
  // }

  // String formatCodeTip() {
  //   final out = new StringBuffer()
  //   if (this.note != null && this.note.trimLeft().isNotEmpty) {
  //     out.writeln(this.note)
  //     out.writeln()
  //   }
  //   if (dragData.parentType == "workspace-chain" && dragData.blockIndex == 0) {
  //     final chain = workspace.chains[dragData.chainIndex]
  //     workspace.formatter.formatBlocks(out, 0, chain.blocks)
  //     // if this block isn't a valid chain starter, nothing may have been written
  //     if (out.isEmpty) {
  //       workspace.formatter.formatBlock(out, 0, this)
  //     }
  //   } else {
  //     workspace.formatter.formatBlock(out, 0, this)
  //   }
  //   final value = out.toString().trim()
  //   final escapedValue = (new HtmlEscape()).convert(value)
  //   return escapedValue
  // }

  // bool updateDragOver() {
  //   blockDiv.classes.remove("nt-drag-over")
  //   blockDiv.classes.remove("nt-block-clause-drag-over")
  //   bool isHighlightHandled = false
  //   for (Clause clause in clauses) {
  //     final clauseResult = clause.updateDragOver()
  //     isHighlightHandled = isHighlightHandled || clauseResult
  //   }
  //   if ((isDragOver || isDragNotchOver) && !isHighlightHandled) {
  //     isHighlightHandled = true
  //     blockDiv.classes.add("nt-drag-over")
  //   }
  //   return isHighlightHandled
  // }

  // void clearDragOver() {
  //   blockDiv.classes.remove("nt-drag-over")
  //   blockDiv.classes.remove("nt-block-clause-drag-over")
  //   isDragOver = false
  //   isDragNotchOver = false
  //   for (Clause clause in clauses) {
  //     clause.clearDragOver()
  //   }
  // }

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

  // void enableDropZones() {
  //   if (BlockAcceptor.isLandingSpot(this)) {
  //     this.blockDiv.classes.add("nt-allowed-drop")
  //   }

  //   for (final clause in this.clauses) {
  //     clause.enableDropZones()
  //   }
  // }

  // void disableDropZones() {
  //   this.blockDiv.classes.remove("nt-allowed-drop")

  //   for (final clause in this.clauses) {
  //     clause.disableDropZones()
  //   }
  // }

  // void resetOwnedBlocksDragData() {
  //   for (final clause in this.clauses) {
  //     clause.resetOwned()
  //   }
  // }

  // void resetBlockActionText() {
  //   actionDiv.innerHtml = ""
  //   updateActionText()
  //   if (propertiesToggle != null) {
  //     actionDiv.append(propertiesToggle.div)
  //   }
  //   for (final clause in this.clauses) {
  //     for (final block in clause.blocks) {
  //       block.resetBlockActionText()
  //     }
  //   }
  // }

}
