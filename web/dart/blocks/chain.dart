/*
 * NetTango
 * Copyright (c) 2019 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */
part of NetTango;

class Chain extends BlockCollection {

  static final FRAGMENT_HEIGHT = 20;

  int x = 0, y = 0;

  final CodeWorkspace workspace;

  int chainIndex;

  DivElement fragmentDiv;
  bool isDragOver = false;

  // TODO: Starter/Fragment should really be explicit values in the data model
  bool get isFragment => blocks.isEmpty || !blocks[0].required;

  Chain(CodeWorkspace this.workspace);

  DivElement draw(DragImage dragImage, int newChainIndex) {
    this.chainIndex = newChainIndex;

    fragmentDiv = new DivElement();
    fragmentDiv.classes.add("nt-fragment");
    final fragmentDropzone = Dropzone(fragmentDiv, acceptor: this.workspace.workspaceAcceptor);
    fragmentDropzone.onDrop.listen(drop);
    fragmentDropzone.onDragEnter.listen( (e) => isDragOver = true );
    fragmentDropzone.onDragLeave.listen( (e) => isDragOver = false );

    _div = new DivElement();
    _div.classes.add("nt-chain");

    if (blocks.isEmpty) {
      return _div;
    }

    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks.elementAt(i);
      final dragData = BlockDragData.workspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.draw(dragImage, dragData);
    }

    Chain.redrawChain(_div, blocks, false, fragmentDiv: fragmentDiv);

    updatePosition(this.x, this.y);

    return _div;
  }

  void updatePosition(int x, int y) {
    this.x = x;
    this.y = y;
    _div.style.left = "${x}px";
    _div.style.top  = "${y}px";
  }

  void resetDragData(int newChainIndex) {
    this.chainIndex = newChainIndex;
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.resetOwnedBlocksDragData();
    }
  }

  bool updateDragOver() {
    fragmentDiv.classes.remove("nt-drag-over");
    bool isHighlightHandled = false;
    for (Block block in blocks) {
      final blockResult = block.updateDragOver();
      isHighlightHandled = isHighlightHandled || blockResult;
    }
    if (isDragOver && !isHighlightHandled) {
      isHighlightHandled = true;
      fragmentDiv.classes.add("nt-drag-over");
    }
    return isHighlightHandled;
  }

  void clearDragOver() {
    fragmentDiv.classes.remove("nt-drag-over");
    isDragOver = false;
    for (Block block in blocks) {
      block.clearDragOver();
    }
  }

  static void redrawChain(DivElement div, List<Block> blocks, bool useClones, {DivElement fragmentDiv = null}) {
    div.innerHtml = "";
    if (blocks.first.required) {
      div.classes.add("nt-chain-starter");
      div.classes.remove("nt-chain-fragment");
    } else {
      div.classes.remove("nt-chain-starter");
      div.classes.add("nt-chain-fragment");
      if (fragmentDiv != null) {
        div.append(fragmentDiv);
      }
      final topNotch = Notch.draw(true, blocks.first);
      div.append(topNotch);
    }

    BlockCollection.appendBlocks(div, blocks, "nt-block", useClones: useClones);

    final bottomNotch = Notch.draw(false, blocks.last);
    div.append(bottomNotch);
  }

  void redrawBlocks() {
    for (int i = 0; i < blocks.length; i++) {
      Block block = blocks[i];
      block._dragData.resetWorkspaceChain(chainIndex, i, blocks.skip(i + 1));
      block.resetOwnedBlocksDragData();
    }
    Chain.redrawChain(_div, blocks, false, fragmentDiv: fragmentDiv);
  }

  Iterable<Block> removeBlocks(int blockIndex) {
    final removedBlocks = blocks.skip(blockIndex);
    blocks = blocks.take(blockIndex).toList();
    redrawBlocks();
    return removedBlocks;
  }

  void addBlocks(Iterable<Block> newBlocks) {
    insertBlocks(blocks.length, newBlocks);
  }

  void insertBlocks(int blockIndex, Iterable<Block> newBlocks) {
    blocks.insertAll(blockIndex, newBlocks);
    redrawBlocks();
  }

  void enableTopDropZone() {
    if (!isFragment) {
      return;
    }
    fragmentDiv.classes.add("show");
    final top = this.y.round() - FRAGMENT_HEIGHT;
    _div.style.top = "${top}px";
  }

  void disableTopDropZone() {
    fragmentDiv.classes.remove("show");
    final top = this.y.round();
    _div.style.top = "${top}px";
  }

  void drop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;

    final newBlocks = workspace.consumeDraggingBlocks();
    final newFirst  = newBlocks.elementAt(0);
    final offset = DragImage.getOffsetToRoot(this._div);
    final dropLocation = event.position - offset;
    this.y = this.y - FRAGMENT_HEIGHT + dropLocation.y.floor();
    insertBlocks(0, newBlocks);

    workspace.programChanged(new BlockChangedEvent(newFirst));
    workspace.disableTopDropZones();
  }

}
