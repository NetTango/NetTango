/*
 * NetTango
 * Copyright (c) 2019 Michael S. Horn, Uri Wilensky, and Corey Brady
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
  static String sourceContainerId;
  static Point dragStartOffset;
  static bool isDragStarter = false;
  static bool wasHandled = false;
  static bool isOverMenu = false;
  static bool isOverWorkspace = false;
  static bool isOverContainer = false;

  String containerId;
  bool allowStarters;

  DragAcceptor(this.containerId, this.allowStarters);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return !DragAcceptor.wasHandled && this.containerId == DragAcceptor.sourceContainerId && (this.allowStarters || !DragAcceptor.isDragStarter);
  }
}
