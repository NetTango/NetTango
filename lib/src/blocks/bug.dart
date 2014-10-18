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
 * Visual indicator for program execution
 */
class TraceBug {

  double x = 0.0, y = 0.0;
  
  Block target = null;
  
  StartBlock start;
  
  
  TraceBug(this.start) {
    target = start;
    x = targetX;
    y = targetY;
  }
  
  
  num get targetX => (target == null) ? 0.0 : (target.x + target.width + 6);
  
  num get targetY => (target == null) ? 0.0 : (target.y + target.height / 2);
  
  
  bool animate() {
    if (target == null) return false;
    
    double dx = targetX - x;
    double dy = targetY - y;
    if (dx.abs() > 1) dx *= 0.3;
    if (dy.abs() > 1) dy *= 0.3;
    
    if (dx.abs() > 0 || dy.abs() > 0) {
      x += dx;
      y += dy;
      return true;
    } else {
      return false;
    }
  }
  
  
  void reset() {
    target = start;
    x = targetX;
    y = targetY;
  }
  
  
  void draw(CanvasRenderingContext2D ctx) {
    if (target == null || target is StartBlock) return;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 9, y - 7);
    ctx.lineTo(x + 8, y - 3);
    ctx.lineTo(x + 20, y - 3);
    ctx.lineTo(x + 20, y + 3);
    ctx.lineTo(x + 8, y + 3);
    ctx.lineTo(x + 9, y + 7);
    ctx.closePath();
    ctx.fillStyle = "yellow"; //"#900";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}