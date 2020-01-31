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

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int limit = -1;

  int _slotIndex;
  Block _newBlockInstance;
  DivElement _slotDiv;
  bool isDragging = false;
  bool isAtLimit = false;

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
    final styleClass = block.getStyleClass();
    _slotDiv.classes.add(styleClass);
    _slotDiv.classes.add("$styleClass-color");

    if (block.blockColor != null)  { _slotDiv.style.backgroundColor = block.blockColor; }
    if (block.borderColor != null) { _slotDiv.style.borderColor     = block.borderColor; }
    if (block.textColor != null)   { _slotDiv.style.color           = block.textColor; }
    if (block.font != null) {
      // lineHeight gets reset by the `font` property
      final lineHeight          = _slotDiv.style.lineHeight;
      _slotDiv.style.font       = block.font;
      _slotDiv.style.lineHeight = lineHeight;
    }

    _slotDiv.draggable = true;
    _slotDiv.onDragStart.listen( (e) => startDrag(e, drag) );
    _slotDiv.onDragEnd.listen( (e) => endDrag(e, drag) );
    _slotDiv.onDoubleClick.listen( raiseDoubleClick );
    _slotDiv.onContextMenu.listen( raiseContextMenu );
    updateForLimit();
    return _slotDiv;
  }

  void updateForLimit() {
    if (isAvailable()) {
      _slotDiv.draggable = true;
      _slotDiv.classes.remove("nt-menu-slot-at-limit");
    } else {
      _slotDiv.draggable = false;
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

    workspace.removeBlocksFromSource(dragData);

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

  void raiseDoubleClick(Event e) {
    final event = new MenuItemClickedEvent(block.id);
    workspace.programChanged(event);
  }

  bool raiseContextMenu(MouseEvent e) {
    e.preventDefault();
    e.stopPropagation();
    final event = new MenuItemContextMenuEvent(block.id, e.page.x, e.page.y);
    workspace.programChanged(event);
    return false;
  }
}
