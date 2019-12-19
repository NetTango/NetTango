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

  /// gets resized automatically
  num width = BLOCK_WIDTH + BLOCK_GUTTER * 2;

  BlockMenu(this.workspace);

  num get x => workspace.width - width;

  num get y => 0;

  num get height => workspace.height;

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

  bool animate() {
    return false;
  }

  bool isOverMenu(Block block) {
    return (!block._inMenu && !block._wasInMenu && block.x + block.width * 0.75 >= x);
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

  DivElement draw() {
    DivElement menuDiv = new DivElement() .. id = "${workspace.containerId}-menu";
    menuDiv.classes.add("nt-menu");
    for (Slot slot in slots) {
      slot.draw(menuDiv);
    }
    return menuDiv;
  }
}

class Slot {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int count = -1;

  Slot(this.block, this.workspace, this.count) {
    block._inMenu = true;
  }

  bool isAvailable() {
    int free = count - workspace.getBlockCount(block.id);
    return (count < 0 || free > 0);
  }

  num get width => block.width;
  num get height => block.height;

  void draw(DivElement container) {
    DivElement blockNode = new DivElement();
    blockNode.innerText = block.action;
    blockNode.classes.add("nt-menu-slot");
    container.append(blockNode);
  }

}
