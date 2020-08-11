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
    return
      !DragManager.currentDrag.wasHandled &&
      this.block.workspace.containerId == DragManager.currentDrag.workspace.containerId &&
      DragManager.currentDrag.canBeChild;
  }

}
