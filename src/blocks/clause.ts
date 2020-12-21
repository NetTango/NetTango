// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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

  divider: HTMLDivElement = new HTMLDivElement()
  leftBar: HTMLDivElement = new HTMLDivElement()
  blocksDiv: HTMLDivElement = new HTMLDivElement()

  constructor(owner: Block, clauseIndex: number, action: string | null, open: string | null, close: string | null) {
    super()
    this.owner = owner
    this.clauseIndex = clauseIndex
    this.action = action
    this.open = open
    this.close = close
  }

  draw(dragImage: DragImage, container: Block, extraDropDiv: HTMLDivElement | null): HTMLDivElement {
    // final acceptor = new ClauseAcceptor(this)

    this.div = new HTMLDivElement()
    this.div.classList.add("nt-clause")

    if (extraDropDiv !== null) {
      // final extraDropzone = Dropzone(extraDropDiv, acceptor: acceptor)
      // extraDropzone.onDrop.listen(drop)
      // extraDropzone.onDragEnter.listen( (e) => isDragHeaderOver = true )
      // extraDropzone.onDragLeave.listen( (e) => isDragHeaderOver = false )
    }

    const styleClass = container.getStyleClass()

    this.leftBar = new HTMLDivElement()
    this.leftBar.classList.add("nt-clause-left-bar")
    this.leftBar.classList.add(`${styleClass}-color`)
    Block.maybeSetColorOverride(container.blockColor, this.leftBar)
    this.div.append(this.leftBar)

    this.divider = new HTMLDivElement()
    this.divider.classList.add("nt-clause-divider")
    this.divider.classList.add(`${styleClass}-color`)
    Block.maybeSetColorOverride(container.blockColor, this.divider)
    this.div.append(this.divider)

    const dividerText = StringUtils.toStrNotEmpty(this.action, "")
    if (StringUtils.isNotNullOrEmpty(dividerText.trim())) {
      const dividerTextDiv = new HTMLDivElement()
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

    // final dropzone = Dropzone(div, acceptor: acceptor)
    // dropzone.onDrop.listen(drop)
    // dropzone.onDragEnter.listen( (e) => isDragOver = true )
    // dropzone.onDragLeave.listen( (e) => isDragOver = false )

    this.blocksDiv = new HTMLDivElement()
    this.blocksDiv.classList.add("nt-clause-blocks")

    if (this.blocks.length === 0) {
      this.setEmpty()
      return this.div
    }

    this.div.append(this.blocksDiv)

    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      const siblings = this.blocks.slice(i + 1)
      if (this.owner.dragData.chainIndex === null || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data or instance ID.")
      }
      const dragData = BlockDragData.blockOwned(this.owner.dragData.chainIndex, i, this.owner.instanceId, siblings, this.clauseIndex)
      block.draw(dragImage, dragData)
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

    const dropElement = new HTMLDivElement()
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
      if (this.owner.dragData.chainIndex === null || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data or instance ID.")
      }
      block.dragData.resetBlockOwned(this.owner.dragData.chainIndex, i, this.owner.instanceId, this.blocks.slice(i + 1), this.clauseIndex)
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
      if (this.owner.dragData.chainIndex === null || this.owner.instanceId === null) {
        throw new Error("Cannot draw a clause for a block missing drag data or instance ID.")
      }
      block.dragData.resetBlockOwned(this.owner.dragData.chainIndex, i, this.owner.instanceId, this.blocks.slice(i + 1), this.clauseIndex)
      block.resetOwnedBlocksDragData()
    }

    BlockCollection.appendBlocks(this.blocksDiv, this.blocks, "nt-block-clause")
  }

  enableDropZones(): void {
    // if (ClauseAcceptor.isLandingSpot(this)) {
    //   this.div.classes.add("nt-allowed-drop")
    // }

    // for (final block in this.blocks) {
    //   block.enableDropZones()
    // }
  }

  disableDropZones(): void {
    // this.div.classes.remove("nt-allowed-drop")

    // for (final block in this.blocks) {
    //   block.disableDropZones()
    // }
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

  // void drop(DropzoneEvent event) {
  //   DragManager.current.wasHandled = true

  //   final newBlocks = owner.workspace.dragManager.consumeDraggingBlocks()

  //   insertBlocks(0, newBlocks)
  //   div.classes.remove("nt-clause-empty")

  //   Block changedBlock = newBlocks.elementAt(0)
  //   owner.workspace.programChanged(new BlockChangedEvent(changedBlock))
  // }

}
