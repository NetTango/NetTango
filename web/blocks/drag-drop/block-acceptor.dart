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

class BlockAcceptor extends Acceptor {

  final Block block;

  BlockAcceptor(this.block);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragManager.current.wasHandled && isLandingSpot(block);
  }

  static bool isLandingSpot(final Block block) {
    return
      block.workspace.containerId == DragManager.current.workspace.containerId &&
      DragManager.current.canBeChild &&
      block.isAttachable &&
      BlockAcceptor.getAllowedTags(block).check(DragManager.current.draggingBlocks) &&
      (block.dragData.isLastInCollection || DragManager.current.isInsertable);
  }

  static AllowedTags getAllowedTags(final Block block) {
    switch (block.dragData.parentType) {

      case "new-block":
        throw new Exception("Should not have a new block accepting drags, they are unplaced blocks from menu slots.");

      case "workspace-chain":
        return block.workspace.chains[block.dragData.chainIndex].blocks.first.allowedTags;

      case "block-clause":
        return block.workspace.getBlockInstance(block.dragData.parentInstanceId).clauses[block.dragData.clauseIndex].allowedTags;

      default:
        throw new Exception("Unknown block removal type: ${block.dragData.parentType}");

    }
  }

}
