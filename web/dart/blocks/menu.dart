/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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

/**
 * Visual programming menu bar
 */
class BlockMenu {

  /// Link back to the code workspace that owns this menu bar
  CodeWorkspace workspace;

  /// Slots for programming blocks
  List<Slot> slots = new List<Slot>();

  /// Menu background color
  String color = "rgba(0,0,0, 0.2)";

  DivElement _menuDiv;

  BlockMenu(this.workspace);

  void addBlock(Block block, int count) {
    Block match = getBlockById(block.id);
    if (match != null) {
      throw new FormatException(
"""Cannot add a block with the same ID as an existing block
  Adding: (${block.id}: ${block.action})
  Existing: (${match.id}: ${match.action})"""
      );
    }

    slots.add(new Slot(block, workspace, count));
  }

  Block getBlockById(int id) {
    var matches = slots.where( (s) {
      return s.block.id == id;
    });
    if (matches.length == 1) {
      return matches.first.block;
    }
    return null;
  }

  DivElement draw(DragImage dragImage) {
    _menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    _menuDiv.classes.add("nt-menu");

    for (int i = 0; i < slots.length; i++) {
      Slot slot = slots[i];
      _menuDiv.append(slot.draw(dragImage, i));
    }

    final dropZone = Dropzone(_menuDiv, acceptor: workspace.workspaceAcceptor);
    dropZone.onDragEnter.listen( (e) { DragAcceptor.isOverMenu = true; this.updateDragOver(); } );
    dropZone.onDragLeave.listen( (e) { DragAcceptor.isOverMenu = false; this.updateDragOver(); } );
    dropZone.onDrop.listen(drop);

    updateLimits();

    return _menuDiv;
  }

  void updateLimits() {
    for (Slot slot in slots) {
      slot.updateForLimit();
    }
  }

  void updateDragOver() {
    if (DragAcceptor.isOverMenu || (DragAcceptor.isOverContainer && !DragAcceptor.isOverWorkspace)) {
      _menuDiv.classes.add("nt-menu-drag-over");
    } else {
      _menuDiv.classes.remove("nt-menu-drag-over");
    }
  }

  void clearDragOver() {
    DragAcceptor.isOverMenu = false;
    DragAcceptor.isOverContainer = false;
    DragAcceptor.isOverWorkspace = false;
    _menuDiv.classes.remove("nt-menu-drag-over");
  }

  void drop(DropzoneEvent event) {
    DragAcceptor.wasHandled = true;

    final oldBlocks = workspace.consumeDraggingBlocks();
    Block changedBlock = oldBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));
    workspace.disableTopDropZones();
  }
}
