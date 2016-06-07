/*
 * NetTango
 * Copyright (c) 2014 Michael S. Horn, Uri Wilensky, and Corey Brady
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
class Menu {

  /* Link back to the code workspace that owns this menu bar */
  CodeWorkspace workspace;
  
  /* Dimensions of the menu */
  num x, y, w, h;
  
  /* Slots for programming blocks */
  List<Slot> slots = new List<Slot>();

  /* VCR Buttons */
  List<VCRButton> _buttons = new List<VCRButton>();

  /* Special VCR button play/pause: references _buttons[0] */
  VCRButton _playButton;

  /* Menu background color */
  String background = "rgba(0, 0, 0, 0.3)";
  
  
  Menu(this.workspace, this.x, this.y, this.w, this.h) {
    _buttons.add(new VCRButton(this, h - 24, VCRButtonShape.Play));
    _buttons.add(new VCRButton(this, h - 24, VCRButtonShape.FastForward));
    _buttons.add(new VCRButton(this, h - 24, VCRButtonShape.StepForward));
    _buttons.add(new VCRButton(this, h - 24, VCRButtonShape.Restart));
    _playButton = _buttons[0];
  }
  
  
  void addBlock(Block block, int count) {
    slots.add(new Slot(block, workspace, count));
  }
  
  
  bool overlaps(Block block) {
    return (block.centerY >= y);
  }
  
  
  bool animate() {
    return false;
  }


  Block getBlockByName(String name) {
    for (Slot slot in slots) {
      if (slot.block.text == name) {
        return slot.block;
      }
    }
    return null;
  }



  void _buttonAction(VCRButton button) { 
    if (workspace != null && workspace.runtime != null) {
      switch (button.shape) {
        case VCRButtonShape.Play: 
          workspace.runtime.play(); 
          break;
        case VCRButtonShape.Pause: 
          workspace.runtime.pause(); 
          break;
        case VCRButtonShape.FastForward: 
          workspace.runtime.fastForward(); 
          break;
        case VCRButtonShape.Restart: 
          workspace.runtime.restart(); 
          break;
        case VCRButtonShape.StepForward:
          workspace.runtime.stepForward();
          break;
        default: break;
      }
    }
    if (workspace.runtime.isRunning) {
      _playButton.shape = VCRButtonShape.Pause;
    } else {
      _playButton.shape = VCRButtonShape.Play;
    }
  }

  
  void draw(CanvasRenderingContext2D ctx) {
    ctx.save();
    {
      ctx.fillStyle = background;
      ctx.fillRect(x, y, w, h);

      num ix = x + 25;
      num iy = y + h/2;
      
      for (Slot slot in slots) {
        slot.x = ix;
        slot.y = iy - slot.height / 2;
        slot.draw(ctx);
        ix += slot.width + 10;
      }

      num bspace = 45;
      ix = x + w;

      for (int i=_buttons.length-1; i>=0; i--) {
        if (_buttons[i].visible) {
          VCRButton button = _buttons[i];
          ix -= bspace;
          button.x = ix;
          button.y = y + h/2 - button.width/2;
          button.draw(ctx);
        }
      }
    }
    ctx.restore();
  }
}


class Slot implements Touchable {
  
  Block block;
  Block target = null;
  num x, y;
  
  CodeWorkspace workspace;
  
  int count = 2;
  
  
  Slot(this.block, this.workspace, this.count) {
    block.inMenu = true;
    workspace.addTouchable(this);
  }
  
  
  bool isAvailable() {
    return workspace.getBlockCount(block.text) < count;
  }
  
  
  num get width => block.width;
  num get height => block.height;
  
  
  void draw(CanvasRenderingContext2D ctx) {
    int free = count - workspace.getBlockCount(block.text);
    if (free <= 0) {
      block.x = x.toDouble() - 1;
      block.y = y.toDouble() + 1;
      block.draw(ctx, true);
    } else {
      for (int i=0; i<free; i++) {
        block.x = x.toDouble() - 1 + (i * 3);
        block.y = y.toDouble() + 1 - (i * 3);
        block.draw(ctx);
      }
    }
  }
  
  
  bool containsTouch(Contact c) {
    return block.containsTouch(c);
  }
  
  
  bool touchDown(Contact c) {
    if (target == null && block.containsTouch(c) && isAvailable()) {
      target = block.clone();
      workspace._addBlock(target);
      target.move(-2, -8);
      target.touchDown(c);
      return true;
    } else {
      return false;
    }
  }
  
  
  void touchUp(Contact c) {
    if (target != null) {
      target.touchUp(c);
    }
    target = null;
  }
  
  
  void touchDrag(Contact c) {
    if (target != null) {
      target.touchDrag(c);
    }
  }
  
  void touchSlide(Contact c) { }
}


enum VCRButtonShape { Play, Pause, FastForward, StepForward, Restart }


class VCRButton implements Touchable {

  Menu menu;

  CodeWorkspace workspace;

  num x = 0, y = 0, width;

  VCRButtonShape shape = VCRButtonShape.Play;

  bool _down = false;

  bool visible = true;


  VCRButton(this.menu, this.width, this.shape) {
    this.workspace = menu.workspace;
    workspace.addTouchable(this);
  }


  void draw(CanvasRenderingContext2D ctx) {
    num bx = _down? x + 2 : x;
    num by = _down? y + 2 : y;
    ctx.save();
    {
      switch (shape) {
        case VCRButtonShape.Play: _playPath(ctx, bx, by); break;
        case VCRButtonShape.Pause: _pausePath(ctx, bx, by); break;
        case VCRButtonShape.FastForward: _fastForwardPath(ctx, bx, by); break;
        case VCRButtonShape.StepForward: _stepForwardPath(ctx, bx, by); break;
        case VCRButtonShape.Restart: _restartPath(ctx, bx, by); break;
      }
      if (!_down) {
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      }
      ctx.fillStyle = "rgba(255, 255, 255, ${_down ? 0.7 : 1})";
      ctx.fill();
    }
    ctx.restore();
  }


  void _playPath(CanvasRenderingContext2D ctx, num bx, num by) {
    num bw = width * 0.9;
    bx = bx + width/2 - bw/2;
    by = by + width/2 - bw/2;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + bw, by + bw/2);
    ctx.lineTo(bx, by + bw);
    ctx.closePath();
  }


  void _pausePath(CanvasRenderingContext2D ctx, num bx, num by) {
    num margin = 2;
    num bw = width * 0.28;
    ctx.beginPath();
    ctx.rect(bx + margin, by, bw, width);
    ctx.rect(bx + width - bw - margin, by, bw, width);
  }


  void _fastForwardPath(CanvasRenderingContext2D ctx, num bx, num by) {
    num bw = width * 0.55;
    num bh = width * 0.7;
    by = by + width/2 - bh/2;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + bw, by + bh/2);
    ctx.lineTo(bx, by + bh);
    ctx.closePath();
    bx += width * 0.45;
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + bw, by + bh/2);
    ctx.lineTo(bx, by + bh);
    ctx.closePath();
  }


  void _stepForwardPath(CanvasRenderingContext2D ctx, num bx, num by) {
    num bw = width * 0.55;
    num bh = width * 0.7;
    by = by + width/2 - bh/2;
    bx = bx + width/2 - bw/2;
    num bar = width * 0.2;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + bw, by + bh/2);
    ctx.lineTo(bx, by + bh);
    ctx.closePath();
    ctx.rect(bx + bw - 1, by, bar, bh);
  }


  void _restartPath(CanvasRenderingContext2D ctx, num bx, num by) {
    num bw = width * 0.85;
    num r1 = bw * 0.5;
    num r2 = bw * 0.3;
    num r3 = bw * 0.4;
    num cx = bx + width/2;
    num cy = by + width/2;
    ctx.beginPath();
    ctx.arc(cx, cy, r1, PI * 0.2, PI * 1.75, false);
    ctx.lineTo(cx + r1 - 1, cy - r3 - 2);
    ctx.lineTo(cx + r1 - 1, cy - 2);
    ctx.lineTo(cx + r1 - r3 - 1, cy - 2);
    ctx.arc(cx, cy, r2, PI * 1.75, PI * 0.2, true);
    ctx.closePath();
  }
  

  bool containsTouch(Contact c) {
    return (c.touchX >= x - 5 && c.touchX <= x + width + 5 && 
            c.touchY >= y - 5 && c.touchY <= y + width + 5);
  }
  
  
  bool touchDown(Contact c) {
    _down = true;
    workspace.draw();
    return true;
  }

    
  void touchUp(Contact c) {
    _down = false;
    if (containsTouch(c)) {
      menu._buttonAction(this);
    }
    workspace.draw();
  }
  
  
  void touchDrag(Contact c) { }
  
  void touchSlide(Contact c) { }  
}

