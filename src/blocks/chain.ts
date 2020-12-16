// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class Chain extends BlockCollection {

  // final storage = new ExternalStorage(["x", "y", "blocks"])

  // static final FRAGMENT_HEIGHT = 40

  // int x = 0, y = 0

  // final CodeWorkspace workspace

  // int chainIndex

  // DivElement fragmentDiv
  // bool isDragOver = false

  // bool get isFragment => blocks.isEmpty || !blocks[0].canBeStarter

  // Chain(CodeWorkspace this.workspace)

  // DivElement draw(DragImage dragImage, int newChainIndex) {
  //   this.chainIndex = newChainIndex

  //   fragmentDiv = new DivElement()
  //   fragmentDiv.classes.add("nt-fragment")
  //   final fragmentDropzone = Dropzone(fragmentDiv, acceptor: new ChainAcceptor(this))
  //   fragmentDropzone.onDrop.listen(drop)
  //   fragmentDropzone.onDragEnter.listen( (e) => isDragOver = true )
  //   fragmentDropzone.onDragLeave.listen( (e) => isDragOver = false )

  //   div = new DivElement()
  //   div.classes.add("nt-chain")

  //   if (blocks.isEmpty) {
  //     return div
  //   }

  //   for (int i = 0; i < blocks.length; i++) {
  //     Block block = blocks.elementAt(i)
  //     final dragData = BlockDragData.workspaceChain(chainIndex, i, blocks.skip(i + 1))
  //     block.draw(dragImage, dragData)
  //   }

  //   Chain.redrawChain(div, blocks, false, fragmentDiv: fragmentDiv)

  //   updatePosition(this.x, this.y)

  //   return div
  // }

  // void updatePosition(int x, int y) {
  //   this.x = x
  //   this.y = y
  //   div.style.left = "${x}px"
  //   div.style.top  = "${y}px"
  // }

  // void resetDragData(int newChainIndex) {
  //   this.chainIndex = newChainIndex
  //   for (int i = 0; i < blocks.length; i++) {
  //     Block block = blocks[i]
  //     block.dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1))
  //     block.resetOwnedBlocksDragData()
  //   }
  // }

  // bool updateDragOver() {
  //   fragmentDiv.classes.remove("nt-drag-over")
  //   bool isHighlightHandled = false
  //   for (Block block in blocks) {
  //     final blockResult = block.updateDragOver()
  //     isHighlightHandled = isHighlightHandled || blockResult
  //   }
  //   if (isDragOver && !isHighlightHandled) {
  //     isHighlightHandled = true
  //     fragmentDiv.classes.add("nt-drag-over")
  //   }
  //   return isHighlightHandled
  // }

  // void clearDragOver() {
  //   fragmentDiv.classes.remove("nt-drag-over")
  //   isDragOver = false
  //   for (Block block in blocks) {
  //     block.clearDragOver()
  //   }
  // }

  // static void redrawChain(DivElement div, List<Block> blocks, bool useClones, {DivElement fragmentDiv = null}) {
  //   div.innerHtml = ""

  //   if (blocks.first.canBeStarter) {
  //     div.classes.add("nt-chain-starter")
  //     div.classes.remove("nt-chain-fragment")

  //     final topCap = Cap.draw(true, blocks.first)
  //     div.append(topCap)

  //   } else {
  //     div.classes.remove("nt-chain-starter")
  //     div.classes.add("nt-chain-fragment")

  //     if (fragmentDiv != null) {
  //       div.append(fragmentDiv)
  //     }

  //     final topNotch = Notch.draw(true, blocks.first)
  //     div.append(topNotch)

  //     final arrow = Arrow.draw()
  //     div.append(arrow)
  //   }

  //   BlockCollection.appendBlocks(div, blocks, "nt-block", useClones: useClones)

  //   if (blocks.last.isAttachable) {
  //     final bottomNotch = Notch.draw(false, blocks.last)
  //     div.append(bottomNotch)
  //   } else {
  //     final bottomCap = Cap.draw(false, blocks.last)
  //     div.append(bottomCap)
  //   }
  // }

  // void redrawBlocks() {
  //   for (int i = 0; i < blocks.length; i++) {
  //     Block block = blocks[i]
  //     block.dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1))
  //     block.resetOwnedBlocksDragData()
  //   }
  //   Chain.redrawChain(div, blocks, false, fragmentDiv: fragmentDiv)
  // }

  // void addBlocks(Iterable<Block> newBlocks) {
  //   insertBlocks(blocks.length, newBlocks)
  // }

  // void enableDropZones() {
  //   if (ChainAcceptor.isLandingSpot(this)) {
  //     this.div.classes.add("nt-allowed-drop")
  //   }

  //   if (isFragment) {
  //     fragmentDiv.classes.add("show")
  //     final top = this.y.round() - FRAGMENT_HEIGHT
  //     div.style.top = "${top}px"
  //   }

  //   for (final block in this.blocks) {
  //     block.enableDropZones()
  //   }
  // }

  // void disableDropZones() {
  //   this.div.classes.remove("nt-allowed-drop")

  //   fragmentDiv.classes.remove("show")
  //   final top = this.y.round()
  //   div.style.top = "${top}px"

  //   for (final block in this.blocks) {
  //     block.disableDropZones()
  //   }
  // }

  // void drop(DropzoneEvent event) {
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
