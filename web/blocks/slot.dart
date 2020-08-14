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

  int slotIndex;
  DivElement slotDiv;
  DragImage dragImage;
  bool isAtLimit = false;

  Slot(this.block, this.workspace, this.limit);

  bool isAvailable() {
    int free = limit - workspace.getBlockCount(block.id);
    return (limit <= 0 || free > 0);
  }

  DivElement draw(DragImage dragImage, int index) {
    this.dragImage = dragImage;
    this.slotIndex = index;
    slotDiv = new DivElement();
    slotDiv.classes.add("nt-menu-slot");
    final styleClass = block.getStyleClass();
    slotDiv.classes.add(styleClass);
    slotDiv.classes.add("$styleClass-color");

    final sampleBlock = this.block.clone(false);
    final codeTip = formatCodeTip(sampleBlock);
    slotDiv.appendHtml("""<span title="$codeTip">${block.action}</span>""");

    if (block.blockColor != null)  { slotDiv.style.backgroundColor = block.blockColor; }
    if (block.borderColor != null) { slotDiv.style.borderColor     = block.borderColor; }
    if (block.textColor != null)   { slotDiv.style.color           = block.textColor; }
    if (block.font != null) {
      // lineHeight gets reset by the `font` property
      final lineHeight          = slotDiv.style.lineHeight;
      slotDiv.style.font       = block.font;
      slotDiv.style.lineHeight = lineHeight;
    }

    final slotDrag = Draggable(slotDiv, avatarHandler: dragImage, draggingClass: "nt-block-dragging", cancel: ".nt-menu-slot-at-limit");
    slotDrag.onDragStart.listen(startDrag);
    slotDrag.onDragEnd.listen(endDrag);

    slotDiv.onDoubleClick.listen( raiseDoubleClick );
    slotDiv.onContextMenu.listen( raiseContextMenu );
    updateForLimit();
    return slotDiv;
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
      slotDiv.classes.remove("nt-menu-slot-at-limit");
    } else {
      slotDiv.classes.add("nt-menu-slot-at-limit");
    }
  }

  void startDrag(DraggableEvent event) {
    final newInstance = this.block.clone(false);
    BlockDragData dragData = BlockDragData.newBlock(newInstance, this.slotIndex);
    newInstance.draw(dragImage, dragData);

    workspace.dragManager.startDrag(newInstance, dragData, event, false);
  }

  void endDrag(DraggableEvent event) {
    workspace.dragManager.endDrag();
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
