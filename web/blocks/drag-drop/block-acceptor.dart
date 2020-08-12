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

  List<String> getAllowedTags() {
    switch (this.block.dragData.parentType) {

      case "new-block":
        throw new Exception("Should not have a new block accepting drags, they are unplaced blocks from menu slots.");

      case "workspace-chain":
        return this.block.workspace.chains[this.block.dragData.chainIndex].blocks.first.allowedTags;

      case "block-clause":
        return this.block.workspace.getBlockInstance(this.block.dragData.parentInstanceId).clauses[this.block.dragData.clauseIndex].allowedTags;

      default:
        throw new Exception("Unknown block removal type: ${this.block.dragData.parentType}");

    }
  }

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return
      !DragManager.current.wasHandled &&
      this.block.workspace.containerId == DragManager.current.workspace.containerId &&
      DragManager.current.canBeChild &&
      this.block.isAttachable &&
      TagChecker.isSatisfied(this.getAllowedTags(), DragManager.current.draggingBlocks) &&
      (this.block.dragData.isLastInCollection || DragManager.current.isInsertable);
  }

}
