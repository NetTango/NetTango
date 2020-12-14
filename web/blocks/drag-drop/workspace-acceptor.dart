// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class WorkspaceAcceptor extends Acceptor {

  final String containerId;

  WorkspaceAcceptor(this.containerId);

  @override
  bool accepts(Element draggableElement, int draggableId, Element dropzoneElement) {
    return
      !DragManager.current.wasHandled &&
      this.containerId == DragManager.current.workspace.containerId;
  }

}
