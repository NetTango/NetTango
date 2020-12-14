// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class ClauseAcceptor extends Acceptor {

  final Clause clause;

  ClauseAcceptor(this.clause);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragManager.current.wasHandled && ClauseAcceptor.isLandingSpot(this.clause);
  }

  static bool isLandingSpot(final Clause clause) {
    return
      clause.owner.workspace.containerId == DragManager.current.workspace.containerId &&
      DragManager.current.canBeChild &&
      clause.allowedTags.check(DragManager.current.draggingBlocks) &&
      (clause.blocks.isEmpty || DragManager.current.isInsertable);
  }

}
