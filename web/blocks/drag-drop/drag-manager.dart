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

  Point dragStartOffset;
  bool wasHandled = false;
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

  DragManager(this.workspace);

  void startDrag(BlockDragData dragData, DraggableEvent startEvent) {
    DragManager.current = this;

    this.wasHandled = false;
    this.dragStartOffset = startEvent.startPosition - DragImage.getOffsetToRoot(startEvent.draggableElement);
    this.removeBlocksForDrag(dragData);

    this.workspace.enableTopDropZones();
  }

  void endDrag() {
    DragManager.current = null;

    this.wasHandled = true;
    this.isOverMenu = false;
    this.isOverContainer = false;
    this.isOverWorkspace = false;

    this.workspace.disableTopDropZones();
    this.workspace.clearDragOver();
  }

  void removeBlocksForDrag(BlockDragData blockData) {

    switch (blockData.parentType) {

      case "new-block":
        final slot = this.workspace.menu.slots[blockData.slotIndex];
        slot.slotDiv.classes.remove("nt-block-dragging");
        final instance = blockData.newInstance;
        this.draggingBlocks = [instance];
        break;

      case "workspace-chain":
        if (blockData.blockIndex == 0) {
          this.draggingBlocks = this.removeChainForDrag(blockData.chainIndex);
        } else {
          this.draggingBlocks = this.workspace.chains[blockData.chainIndex].removeBlocks(blockData.blockIndex);
        }
        break;

      case "block-clause":
        this.draggingBlocks = this.workspace.chains[blockData.chainIndex]
          .getBlockInstance(blockData.parentInstanceId)
          .clauses[blockData.clauseIndex].removeBlocks(blockData.blockIndex);
        break;

      default:
        throw new Exception("Unknown block removal type: ${blockData.parentType}");

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
