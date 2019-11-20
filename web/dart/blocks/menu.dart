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

  void _resize(CanvasRenderingContext2D ctx) {
    width = BLOCK_WIDTH * 1.5;
    for (Slot slot in slots) {
      width = max(width, slot.block._getNaturalWidth(ctx) + BLOCK_GUTTER * 2);
    }
  }


  void draw(CanvasRenderingContext2D ctx, bool highlightTrash) {
    _resize(ctx);
    ctx.save();
    {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      if (highlightTrash) ctx.fillRect(x, y, width, height);

      num ix = x + BLOCK_GUTTER;
      num iy = y + BLOCK_HEIGHT / 2;

      for (Slot slot in slots) {
        slot.x = ix;
        slot.y = iy;
        slot.draw(ctx);
        iy += BLOCK_HEIGHT * 1.5;
      }
    }
    ctx.restore();
  }
}


class Slot implements Touchable {

  Block block;
  num x, y;

  CodeWorkspace workspace;

  int count = -1;


  Slot(this.block, this.workspace, this.count) {
    block._inMenu = true;
    workspace.addTouchable(this);
  }


  bool isAvailable() {
    int free = count - workspace.getBlockCount(block.id);
    return (count < 0 || free > 0);
  }


  num get width => block.width;
  num get height => block.height;


  void draw(CanvasRenderingContext2D ctx) {
    int free = count - workspace.getBlockCount(block.id);
    ctx.save();
    {
      if (!isAvailable()) ctx.globalAlpha = 0.3;
      block.x = x;
      block.y = y;
      block._resizeChain(ctx, BLOCK_WIDTH);
      block._drawBlock(ctx);
      block._drawLabel(ctx);
      block._drawOutline(ctx);
    }
    ctx.restore();
  }


  bool containsTouch(Contact c) {
    return block.containsTouch(c);
  }


  Touchable touchDown(Contact c) {
    if (isAvailable()) {
      Block target = block.clone();
      target.id = block.id;
      target.x = block.x - 5;
      target.y = block.y - 5;
      target._wasInMenu = true;
      workspace._addBlock(target);
      if (target is BeginBlock) {
        for (ClauseBlock clause in target.clauses) {
          workspace._addBlock(clause);
        }
      }

      return target.touchDown(c);
    }
    return this;
  }

  void touchUp(Contact c) { }

  void touchDrag(Contact c) { }

  void touchSlide(Contact c) { }
}
