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

class ChainAcceptor extends Acceptor {

  final Chain chain;

  ChainAcceptor(this.chain);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragManager.current.wasHandled && isLandingSpot(this.chain);
  }

  // the only "landing spot" for a chain is the top section
  static bool isLandingSpot(final Chain chain) {
    return
      chain.workspace.containerId == DragManager.current.workspace.containerId &&
      !chain.blocks.first.canBeStarter &&
      DragManager.current.isInsertable &&
      // not if you're dropping a starter that cannot contain some of my blocks
      DragManager.current.draggingBlocks.first.allowedTags.check(chain.blocks);
  }

}
