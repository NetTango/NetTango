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

  DivElement draw(CssStyleSheet dragSheet) {
    DivElement menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    menuDiv.classes.add("nt-menu");
    _menuDiv = menuDiv;
    for (Slot slot in slots) {
      slot.draw(menuDiv, dragSheet);
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

    switch (blockData.parentType) {
      case "workspace-chain":
        workspace.chains[blockData.chainIndex].remove(blockData.chainIndex, blockData.blockIndex);
        break;

      case "block-children":
        workspace.chains[blockData.chainIndex]
          .getBlockInstance(blockData.parentInstanceId)
          .removeChildBlock(blockData.chainIndex, blockData.blockIndex, blockData.parentInstanceId);
        break;

      case "block-clause":
        workspace.chains[blockData.chainIndex]
          .getBlockInstance(blockData.parentInstanceId)
          .removeClauseBlock(blockData.chainIndex, blockData.blockIndex, blockData.parentInstanceId, blockData.clauseIndex);
        break;

      case "default":
        print("Unknown block removal type: ${json["parent-type"]}");
        break;

    }

    print(blockData);
    _menuDiv.classes.remove("nt-menu-drag-over");
  }
}

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int count = -1;

  Slot(this.block, this.workspace, this.count);

  bool isAvailable() {
    int free = count - workspace.getBlockCount(block.id);
    return (count < 0 || free > 0);
  }

  void draw(DivElement container, CssStyleSheet dragSheet) {
    DivElement blockNode = new DivElement();
    blockNode.innerText = block.action;
    blockNode.classes.add("nt-menu-slot");
    blockNode.draggable = true;
    blockNode.onDragStart.listen( (e) => startDrag(e, block.workspace.containerId, dragSheet) );
    blockNode.onDragEnd.listen( (e) => endDrag(e, dragSheet) );
    container.append(blockNode);
  }

  void startDrag(MouseEvent event, String workspaceId, CssStyleSheet dragSheet) {
    event.dataTransfer.setData(workspaceId, workspaceId);

    dragSheet.insertRule(".nt-block-header { pointer-events: none; }", 0);
    dragSheet.insertRule(".nt-property { pointer-events: none; }", 0);
  }

  void endDrag(MouseEvent event, CssStyleSheet dragSheet) {
    while (dragSheet.rules.length > 0) {
      dragSheet.deleteRule(0);
    }
  }
}
