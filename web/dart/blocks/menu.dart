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

  DivElement draw(DivElement drag) {
    _menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    _menuDiv.classes.add("nt-menu");

    for (int i = 0; i < slots.length; i++) {
      Slot slot = slots[i];
      _menuDiv.append(slot.draw(drag, i));
    }

    _menuDiv.onDragEnter.listen( (e) => enterDrag(e) );
    _menuDiv.onDragOver.listen( (e) => e.preventDefault() );
    _menuDiv.onDrop.listen( drop );

    updateLimits();

    return _menuDiv;
  }

  void updateLimits() {
    for (Slot slot in slots) {
      slot.updateForLimit();
    }
  }

  void clearDragOver() {
    _menuDiv.classes.remove("nt-menu-drag-over");
  }

  bool enterDrag(MouseEvent event) {
    event.stopPropagation();
    workspace.clearDragOver();

    if (!event.dataTransfer.types.contains(workspace.containerId)) {
      return false;
    }
    _menuDiv.classes.add("nt-menu-drag-over");
    return false;
  }

  bool drop(MouseEvent event) {
    event.stopPropagation();
    event.preventDefault();
    workspace.clearDragOver();

    if (!event.dataTransfer.types.contains(workspace.containerId)) {
      return false;
    }

    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);

    final oldBlocks = workspace.removeBlocksFromSource(blockData);

    Block changedBlock = oldBlocks.elementAt(0);
    workspace.programChanged(new BlockChangedEvent(changedBlock));

    return false;
  }
}
