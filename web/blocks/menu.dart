// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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

  DivElement menuDiv;

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
    menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    menuDiv.classes.add("nt-menu");

    for (int i = 0; i < slots.length; i++) {
      Slot slot = slots[i];
      menuDiv.append(slot.draw(dragImage, i));
    }

    final dropZone = Dropzone(menuDiv, acceptor: workspace.acceptor);
    dropZone.onDragEnter.listen( (e) {
      DragManager.current.isOverMenu = true;
      this.updateDragOver();
    });
    dropZone.onDragLeave.listen( (e) {
      DragManager.current.isOverMenu = false;
      this.updateDragOver();
    });
    dropZone.onDrop.listen(drop);

    updateLimits();

    return menuDiv;
  }

  void updateLimits() {
    for (Slot slot in slots) {
      slot.updateForLimit();
    }
  }

  void updateDragOver() {
    if (DragManager.current != null && (DragManager.current.isOverMenu || (DragManager.current.isOverContainer && !DragManager.current.isOverWorkspace))) {
      menuDiv.classes.add("nt-menu-drag-over");
    } else {
      menuDiv.classes.remove("nt-menu-drag-over");
    }
  }

  void drop(DropzoneEvent event) {
    DragManager.current.wasHandled = true;

    final oldBlocks = workspace.dragManager.consumeDraggingBlocks();
    Block changedBlock = oldBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));
  }
}
