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

class ClauseAcceptor extends Acceptor {

  final Clause clause;

  ClauseAcceptor(this.clause);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return
      !DragManager.current.wasHandled &&
      this.clause.owner.workspace.containerId == DragManager.current.workspace.containerId &&
      DragManager.current.canBeChild &&
      TagChecker.isSatisfied(this.clause.allowedTags, DragManager.current.draggingBlocks) &&
      (this.clause.blocks.isEmpty || DragManager.current.isInsertable);
  }

}
