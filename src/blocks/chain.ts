// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExternalStorage } from "../utils/external-storage"
import { Arrow } from "./baubles/arrow"
import { Cap } from "./baubles/cap"
import { Notch } from "./baubles/notch"
import { Block } from "./block"
import { BlockCollection } from "./block-collection"
import { CodeWorkspace } from "./code-workspace"
import { BlockDragData } from "./drag-drop/block-drag-data"
import { DragImage } from "./drag-drop/drag-image"

class Chain extends BlockCollection {

  readonly storage = new ExternalStorage(["x", "y", "blocks"])

  static readonly FRAGMENT_HEIGHT = 40

  x = 0
  y = 0

  readonly workspace: CodeWorkspace

  chainIndex: number

  fragmentDiv = new HTMLDivElement()
  isDragOver: boolean = false

  get isFragment(): boolean { return this.blocks.length === 0 || !this.blocks[0].canBeStarter }

  constructor(workspace: CodeWorkspace, chainIndex: number) {
    super()
    this.workspace = workspace
    this.chainIndex = chainIndex
  }

  draw(dragImage: DragImage, newChainIndex: number): HTMLDivElement {
    this.chainIndex = newChainIndex

    this.fragmentDiv = new HTMLDivElement()
    this.fragmentDiv.classList.add("nt-fragment")
    // final fragmentDropzone = Dropzone(fragmentDiv, acceptor: new ChainAcceptor(this))
    // fragmentDropzone.onDrop.listen(drop)
    // fragmentDropzone.onDragEnter.listen( (e) => isDragOver = true )
    // fragmentDropzone.onDragLeave.listen( (e) => isDragOver = false )

    this.div = new HTMLDivElement()
    this.div.classList.add("nt-chain")

    if (this.blocks.length === 0) {
      return this.div
    }

    for (var i = 0; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      const dragData = BlockDragData.workspaceChain(this.chainIndex, i, this.blocks.slice(i + 1))
      block.draw(dragImage, dragData)
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
      block.dragData.resetWorkspaceChain(this.chainIndex, i, this.blocks.slice(i + 1))
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
      block.dragData.resetWorkspaceChain(this.chainIndex, i, this.blocks.slice(i + 1))
      block.resetOwnedBlocksDragData()
    }
    Chain.redrawChain(this.div, this.blocks, false, this.fragmentDiv)
  }

  addBlocks(newBlocks: Block[]): void {
    this.insertBlocks(this.blocks.length, newBlocks)
  }

  enableDropZones(): void {
    // if (ChainAcceptor.isLandingSpot(this)) {
    //   this.div.classes.add("nt-allowed-drop")
    // }

    // if (isFragment) {
    //   fragmentDiv.classes.add("show")
    //   final top = this.y.round() - FRAGMENT_HEIGHT
    //   div.style.top = "${top}px"
    // }

    // for (final block in this.blocks) {
    //   block.enableDropZones()
    // }
  }

  disableDropZones(): void {
    // this.div.classes.remove("nt-allowed-drop")

    // fragmentDiv.classes.remove("show")
    // final top = this.y.round()
    // div.style.top = "${top}px"

    // for (final block in this.blocks) {
    //   block.disableDropZones()
    // }
  }

  //  drop(DropzoneEvent event): void {
  //   DragManager.current.wasHandled = true

  //   final newBlocks = workspace.dragManager.consumeDraggingBlocks()
  //   final newFirst  = newBlocks.elementAt(0)
  //   final offset = DragImage.getOffsetToRoot(this.div)
  //   final dropLocation = event.position - offset
  //   this.y = this.y - FRAGMENT_HEIGHT + dropLocation.y.floor()
  //   insertBlocks(0, newBlocks)

  //   workspace.programChanged(new BlockChangedEvent(newFirst))
  // }

}

export { Chain }
