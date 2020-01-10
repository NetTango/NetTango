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

  DivElement draw(DivElement drag, CssStyleSheet dragSheet) {
    DivElement menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    menuDiv.classes.add("nt-menu");
    _menuDiv = menuDiv;
    for (int i = 0; i < slots.length; i++) {
      Slot slot = slots[i];
      menuDiv.append(slot.draw(drag, dragSheet, i));
    }

    menuDiv.onDragEnter.listen( (e) => enterDrag(e) );
    menuDiv.onDragLeave.listen( (e) => leaveDrag(e) );
    menuDiv.onDragOver.listen( (e) => e.preventDefault() );
    menuDiv.onDrop.listen( drop );

    return menuDiv;
  }

  bool enterDrag(MouseEvent event) {
    if (!event.dataTransfer.types.contains(workspace.containerId)) {
      return true;
    }
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
    _menuDiv.classes.add("nt-menu-drag-over");
    return false;
  }

  void leaveDrag(MouseEvent event) {
    _menuDiv.classes.remove("nt-menu-drag-over");
  }

  void drop(MouseEvent event) {
    event.stopPropagation();
    event.preventDefault();
    final json = jsonDecode(event.dataTransfer.getData("text/json"));
    final blockData = BlockDragData.fromJSON(json);

    workspace.removeBlocksFromSource(blockData);

    _menuDiv.classes.remove("nt-menu-drag-over");
  }
}

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int count = -1;

  int _slotIndex;
  Block _newBlockInstance;
  DivElement _slotDiv;

  Slot(this.block, this.workspace, this.count);

  bool isAvailable() {
    int free = count - workspace.getBlockCount(block.id);
    return (count < 0 || free > 0);
  }

  DivElement draw(DivElement drag, CssStyleSheet dragSheet, int slotIndex) {
    _slotIndex = slotIndex;
    _slotDiv = new DivElement();
    _slotDiv.innerText = block.action;
    _slotDiv.classes.add("nt-menu-slot");
    _slotDiv.draggable = true;
    _slotDiv.onDragStart.listen( (e) => startDrag(e, block.workspace.containerId, drag, dragSheet) );
    _slotDiv.onDragEnd.listen( (e) => endDrag(e, drag, dragSheet) );
    return _slotDiv;
  }

  void startDrag(MouseEvent event, String workspaceId, DivElement drag, CssStyleSheet dragSheet) {
    Element target = event.target;
    // if the class is already set, we're already draggin'
    if (target.classes.contains("nt-block-drag-target")) {
      return;
    }

    event.dataTransfer.setData(workspaceId, workspaceId);

    _slotDiv.style.pointerEvents = "auto";
    dragSheet.insertRule(".nt-menu-slot { pointer-events: none; }", 0);
    dragSheet.insertRule(".nt-block-header { pointer-events: none; }", 1);
    dragSheet.insertRule(".nt-property { pointer-events: none; }", 2);

    target.classes.add("nt-block-drag-target");

    _newBlockInstance = block.clone();
    BlockDragData dragData = BlockDragData.newBlock(_slotIndex);
    String dataString = jsonEncode(dragData.toJSON());
    event.dataTransfer.setData("text/json", dataString);
    final blockDiv = _newBlockInstance.draw(drag, dragSheet, dragData);
    blockDiv.style.pointerEvents = "none";
    if (_newBlockInstance.required) {
      drag.classes.add("nt-chain-starter");
    }
    drag.setInnerHtml("");
    drag.append(blockDiv);

    event.dataTransfer.setDragImage(drag, 0, 0);
  }

  void endDrag(MouseEvent event, DivElement drag, CssStyleSheet dragSheet) {
    while (dragSheet.rules.length > 0) {
      dragSheet.deleteRule(0);
    }

    Element target = event.target;
    target.classes.remove("nt-block-drag-target");
    drag.classes.remove("nt-chain-starter");
    _slotDiv.style.pointerEvents = "";
    _newBlockInstance = null;
  }
}
