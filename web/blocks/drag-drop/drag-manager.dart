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

class DragManager {

  static DragManager currentDrag;

  final CodeWorkspace workspace;

  // Ideally these would not be static/global values, but for now this works for a single drag at a time.
  // If we ever want to support multi-drag, these could be moved into their own class, and some way of
  // associating each drag with its drag state would have to be implemented.  -Jeremy B April 2020
  Point dragStartOffset;
  bool canBeChild = false;
  bool wasHandled = false;
  bool isOverMenu = false;
  bool isOverWorkspace = false;
  bool isOverContainer = false;
  int oldChainX;
  int oldChainY;

  DragManager(this.workspace);

  void startDrag(Block firstBlock, DraggableEvent startEvent) {
    DragManager.currentDrag = this;

    this.canBeChild = firstBlock.canBeChild;
    this.dragStartOffset = startEvent.startPosition - DragImage.getOffsetToRoot(startEvent.draggableElement);
    this.wasHandled = false;
    this.workspace.removeBlocksForDrag(firstBlock._dragData);
    this.workspace.enableTopDropZones();
  }

  void endDrag() {
    DragManager.currentDrag = null;

    this.wasHandled = true;
    this.isOverMenu = false;
    this.isOverContainer = false;
    this.isOverWorkspace = false;
    this.workspace.disableTopDropZones();
    this.workspace.clearDragOver();
  }
}
