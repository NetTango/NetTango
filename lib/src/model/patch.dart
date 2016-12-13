/*
 * NetTango
 * Copyright (c) 2016 Michael S. Horn, Uri Wilensky, and Corey Brady
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


class Patch extends Agent implements Touchable {
   
  // patch coordinates
  int x, y;
  
  bool dirty = false;
   
   
  Patch(Model model, this.x, this.y) : super(model) {
    color = new Color(0, 100, 0, 100);
    dirty = true;
  }
  
  
  void _drawLocal(CanvasRenderingContext2D ctx) {
    if (dirty) {
      ctx.clearRect(x - 0.5, y - 0.5, 1, 1);
      ctx.fillStyle = color.toString();
      ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
      draw(ctx);
      dirty = false;
    }
  }
  
  
  void tick() { }


/**
 * Override if you want to do special rendering for patches
 */
  void draw(CanvasRenderingContext2D ctx) { }
   
   
  bool containsTouch(Contact event) {
    double tx = model.screenToWorldX(event.touchX, event.touchY);
    double ty = model.screenToWorldY(event.touchX, event.touchY);
    return (tx >= x-0.5 && tx <= x+0.5 && ty >= y-0.5 && ty <= y+0.5);
  }
  

  bool touchDown(Contact event) { return false; }
  void touchUp(Contact event) { }
  void touchSlide(Contact event) { }
  void touchDrag(Contact event) { }
}