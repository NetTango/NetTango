// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class ChainAcceptor extends Acceptor {

  final Chain chain;

  ChainAcceptor(this.chain);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragManager.current.wasHandled && ChainAcceptor.isLandingSpot(this.chain);
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
