/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
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

class DragManager {

  // Ideally this would not be a static/global value, but for now this works for a single drag at a time.
  // If we ever want to support multi-drag, some way of associating each drag with its drag state would
  // have to be implemented.  -Jeremy B April 2020
  static DragManager current;

  final CodeWorkspace workspace;

  final DragImage dragImage;

  bool wasHandled = false;
  BlockDragData dragData;
  Point dragStartOffset;
  bool isOverMenu = false;
  bool isOverWorkspace = false;
  bool isOverContainer = false;
  int oldChainX;
  int oldChainY;

  Iterable<Block> _draggingBlocks;
  Iterable<Block> get draggingBlocks => _draggingBlocks;
  set draggingBlocks(Iterable<Block> v) => _draggingBlocks = v;
  bool get hasDraggingBlocks => _draggingBlocks != null;

  bool get canBeChild => draggingBlocks.first.canBeChild;
  bool get isInsertable => draggingBlocks.last.isAttachable;

  DragManager(this.workspace, this.dragImage);

  void startDrag(Block block, BlockDragData dragData, DraggableEvent startEvent, bool useClones) {
    DragManager.current = this;

    this.wasHandled = false;
    this.dragData = dragData;
    this.dragStartOffset = startEvent.startPosition - DragImage.getOffsetToRoot(startEvent.draggableElement);
    this.draggingBlocks = this.removeBlocksForDrag();

    this.workspace.enableDropZones();

    final blocks = new List<Block>() ..
      add(block) ..
      addAll(this.dragData.siblings);

    Chain.redrawChain(this.dragImage.element, blocks, useClones);
  }

  void endDrag() {
    DragManager.current = null;

    this.wasHandled = true;
    this.isOverMenu = false;
    this.isOverContainer = false;
    this.isOverWorkspace = false;

    this.workspace.disableDropZones();
    this.workspace.clearDragOver();

    final finishedDrag = this.dragData;
    this.dragData = null;

    if (!this.hasDraggingBlocks) {
      return;
    }

    // our blocks weren't dropped anywhere, so reset
    final newBlocks = this.consumeDraggingBlocks();
    switch (finishedDrag.parentType) {

      case "new-block":
        // nothing to do with a new block, just drop the consumed dragging blocks
        break;

      case "workspace-chain":
        if (finishedDrag.blockIndex == 0) {
          // new chain, we deleted the old one
          workspace.createChain(newBlocks, this.oldChainX, this.oldChainY);
        } else {
          workspace.chains[finishedDrag.chainIndex].insertBlocks(finishedDrag.blockIndex, newBlocks);
        }
        break;

      case "block-clause":
        final parentBlock = workspace.chains[finishedDrag.chainIndex].getBlockInstance(finishedDrag.parentInstanceId);
        parentBlock.clauses[finishedDrag.clauseIndex].insertBlocks(finishedDrag.blockIndex, newBlocks);
        break;

      default:
        throw new Exception("Unknown block removal type: ${finishedDrag.parentType}");

    }
  }

  Iterable<Block> removeBlocksForDrag() {

    switch (this.dragData.parentType) {

      case "new-block":
        final slot = this.workspace.menu.slots[this.dragData.slotIndex];
        slot.slotDiv.classes.remove("nt-block-dragging");
        final instance = this.dragData.newInstance;
        return [instance];

      case "workspace-chain":
        return (this.dragData.blockIndex == 0)
          ? this.removeChainForDrag(this.dragData.chainIndex)
          : this.workspace.chains[this.dragData.chainIndex].removeBlocks(this.dragData.blockIndex);

      case "block-clause":
        return this.workspace.chains[this.dragData.chainIndex]
          .getBlockInstance(this.dragData.parentInstanceId)
          .clauses[this.dragData.clauseIndex].removeBlocks(this.dragData.blockIndex);

      default:
        throw new Exception("Unknown block removal type: ${this.dragData.parentType}");

    }

  }

  Iterable<Block> removeChainForDrag(int chainIndex) {
    Chain oldChain = this.workspace.chains[chainIndex];
    this.oldChainX = oldChain.x;
    this.oldChainY = oldChain.y;
    final blocks = oldChain.blocks;
    this.workspace.removeChain(chainIndex);

    return blocks;
  }

  Iterable<Block> consumeDraggingBlocks() {
    final blocks = this.draggingBlocks;
    this.draggingBlocks = null;
    return blocks;
  }

}
