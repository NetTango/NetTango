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

class DragAcceptor extends Acceptor {
  // Ideally these would not be static/global values, but for now this works for a single drag at a time.
  // If we ever want to support multi-drag, these could be moved into their own class, and some way of
  // associating each drag with its drag state would have to be implemented.  -Jeremy B April 2020
  static String sourceContainerId;
  static Point dragStartOffset;
  static bool canBeChild = false;
  static bool wasHandled = false;
  static bool isOverMenu = false;
  static bool isOverWorkspace = false;
  static bool isOverContainer = false;
  static int oldChainX;
  static int oldChainY;

  static startDrag(Block firstBlock, DraggableEvent startEvent) {
    DragAcceptor.sourceContainerId = firstBlock.workspace.containerId;
    DragAcceptor.dragStartOffset = startEvent.startPosition - DragImage.getOffsetToRoot(startEvent.draggableElement);
    DragAcceptor.canBeChild = firstBlock.canBeChild;
    DragAcceptor.wasHandled = false;
  }

  static endDrag() {
    DragAcceptor.wasHandled = true;
    DragAcceptor.isOverMenu = false;
    DragAcceptor.isOverContainer = false;
    DragAcceptor.isOverWorkspace = false;
  }

  String containerId;
  bool allowStarters;

  DragAcceptor(this.containerId, this.allowStarters);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragAcceptor.wasHandled && this.containerId == DragAcceptor.sourceContainerId && (this.allowStarters || DragAcceptor.canBeChild);
  }
}
