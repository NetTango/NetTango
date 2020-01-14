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
    DivElement menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    menuDiv.classes.add("nt-menu");
    _menuDiv = menuDiv;
    for (int i = 0; i < slots.length; i++) {
      Slot slot = slots[i];
      menuDiv.append(slot.draw(drag, i));
    }

    menuDiv.onDragEnter.listen( (e) => enterDrag(e) );
    // menuDiv.onDragLeave.listen( (e) => leaveDrag(e) );
    menuDiv.onDragOver.listen( (e) => e.preventDefault() );
    menuDiv.onDrop.listen( drop );

    return menuDiv;
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

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int limit = -1;

  int _slotIndex;
  Block _newBlockInstance;
  DivElement _slotDiv;
  bool isDragging = false;

  Slot(this.block, this.workspace, this.limit);

  bool isAvailable() {
    int free = limit - workspace.getBlockCount(block.id);
    return (limit <= 0 || free > 0);
  }

  DivElement draw(DivElement drag, int slotIndex) {
    _slotIndex = slotIndex;
    _slotDiv = new DivElement();
    _slotDiv.innerText = block.action;
    _slotDiv.classes.add("nt-menu-slot");
    _slotDiv.draggable = true;
    _slotDiv.onDragStart.listen( (e) => startDrag(e, drag) );
    _slotDiv.onDragEnd.listen( (e) => endDrag(e, drag) );
    updateForLimit();
    return _slotDiv;
  }

  void updateForLimit() {
    if (isAvailable()) {
      _slotDiv.classes.remove("nt-menu-slot-at-limit");
    } else {
      _slotDiv.classes.add("nt-menu-slot-at-limit");
    }
  }

  void startDrag(MouseEvent event, DivElement drag) {
    if (isDragging) {
      return;
    }

    event.dataTransfer.setData(block.workspace.containerId, block.workspace.containerId);

    _slotDiv.classes.add("nt-block-dragging");

    _newBlockInstance = block.clone();
    if (block.clauses != null) {
      _newBlockInstance.children = new Clause(_newBlockInstance);
      if (block.clauses.length > 0) {
        _newBlockInstance.clauses = new List<Clause>();
        for (int i = 0; i < block.clauses.length; i++) {
          _newBlockInstance.clauses.add(new Clause(_newBlockInstance, clauseIndex: i));
        }
      }
    }

    BlockDragData dragData = BlockDragData.newBlock(_slotIndex);
    String dataString = jsonEncode(dragData.toJSON());
    event.dataTransfer.setData("text/json", dataString);
    final blockDiv = _newBlockInstance.draw(drag, dragData);
    blockDiv.style.pointerEvents = "none";
    if (_newBlockInstance.required) {
      drag.classes.add("nt-chain-starter");
      event.dataTransfer.setData("starter", "starter");
    } else {
      drag.classes.remove("nt-chain-starter");
    }
    drag.setInnerHtml("");
    drag.append(blockDiv);

    isDragging = true;
    event.dataTransfer.setDragImage(drag, 0, 0);
  }

  void endDrag(MouseEvent event, DivElement drag) {
    workspace.clearDragOver();

    _slotDiv.classes.remove("nt-block-dragging");
    drag.classes.remove("nt-chain-starter");

    isDragging = false;
    _newBlockInstance = null;
  }
}
