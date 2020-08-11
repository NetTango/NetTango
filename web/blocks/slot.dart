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

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int limit = -1;

  int _slotIndex;
  Block _newBlockInstance;
  DivElement _slotDiv;
  DragImage _dragImage;
  bool isAtLimit = false;

  Slot(this.block, this.workspace, this.limit);

  bool isAvailable() {
    int free = limit - workspace.getBlockCount(block.id);
    return (limit <= 0 || free > 0);
  }

  DivElement draw(DragImage dragImage, int slotIndex) {
    _dragImage = dragImage;
    _slotIndex = slotIndex;
    _slotDiv = new DivElement();
    _slotDiv.classes.add("nt-menu-slot");
    final styleClass = block.getStyleClass();
    _slotDiv.classes.add(styleClass);
    _slotDiv.classes.add("$styleClass-color");

    final sampleBlock = this.block.clone(false);
    final codeTip = formatCodeTip(sampleBlock);
    _slotDiv.appendHtml("""<span title="$codeTip">${block.action}</span>""");

    if (block.blockColor != null)  { _slotDiv.style.backgroundColor = block.blockColor; }
    if (block.borderColor != null) { _slotDiv.style.borderColor     = block.borderColor; }
    if (block.textColor != null)   { _slotDiv.style.color           = block.textColor; }
    if (block.font != null) {
      // lineHeight gets reset by the `font` property
      final lineHeight          = _slotDiv.style.lineHeight;
      _slotDiv.style.font       = block.font;
      _slotDiv.style.lineHeight = lineHeight;
    }

    final slotDrag = Draggable(_slotDiv, avatarHandler: _dragImage, draggingClass: "nt-block-dragging", cancel: ".nt-menu-slot-at-limit");
    slotDrag.onDragStart.listen(startDrag);
    slotDrag.onDragEnd.listen(endDrag);

    _slotDiv.onDoubleClick.listen( raiseDoubleClick );
    _slotDiv.onContextMenu.listen( raiseContextMenu );
    updateForLimit();
    return _slotDiv;
  }

  String formatCodeTip(Block sampleBlock) {
    final out = new StringBuffer();
    if (this.block.note != null && this.block.note.trimLeft().isNotEmpty) {
      out.writeln(this.block.note);
      out.writeln();
    }
    workspace.formatter.formatBlock(out, 0, sampleBlock);
    final value = out.toString().trim();
    final escapedValue = (new HtmlEscape()).convert(value);
    return escapedValue;
  }

  void updateForLimit() {
    if (isAvailable()) {
      _slotDiv.classes.remove("nt-menu-slot-at-limit");
    } else {
      _slotDiv.classes.add("nt-menu-slot-at-limit");
    }
  }

  void startDrag(DraggableEvent event) {
    _newBlockInstance = this.block.clone(false);
    BlockDragData dragData = BlockDragData.newBlock(_slotIndex);
    _newBlockInstance.draw(_dragImage, dragData);

    workspace.dragManager.startDrag(_newBlockInstance, event);
    Chain.redrawChain(_dragImage.element, [_newBlockInstance], false);
  }

  void endDrag(DraggableEvent event) {
    workspace.dragManager.endDrag();
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
