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


abstract class Turtle extends Agent implements Touchable {
  
  
  /* turtle coordinates in world space */
  num x = 0.0, y = 0.0;
  
  /* turtle size */
  num size = 1.0;
  
  /* turtle heading in radians */
  num heading = 0.0;
  
  /* visual alpha (opacity) of the turtle */
  num opacity = 1.0;
  
  /* flag used to remove dead turtles from the model */
  bool dead = false;
  
  /* TODO: probably need something more sophisticated */
  String breed = "turtle";
  
  /* used for animation effects */
  Tween tween = new Tween();
  
  
  Turtle(Model model) : super(model) {
    right(Agent.rnd.nextInt(350));
    color = new Color(80, 30, 0, 255);
  }
  
  
  void copyTo(Turtle other) {
    other.x = x;
    other.y = y;
    other.size = size;
    other.heading = heading;
    other.opacity = opacity;
    other.color = color.clone();
    other.breed = breed;
    other.program.synchronize(program);
    
    // copy all of the properties
    for (String key in _props.keys) {
      other[key] = this[key];
    }
  }
  
  
  double get radius => size/2;
  
   
  void setXY(num x, num y) {
    if (model.wrap) {
      this.x = wrapX(x);
      this.y = wrapY(y);
    } else {
      this.x = x;
      this.y = y;
    }
  }
   
   
  void forward(num distance) {
    if (model.wrap) {
      x = wrapX(x - sin(heading) * distance);
      y = wrapY(y + cos(heading) * distance);
    } else {
      x -= sin(heading) * distance;
      y += cos(heading) * distance;
    }
  }
  
     
  void backward(num distance) {
    forward(-distance);
  }
  
  
  void left(num degrees) {
    heading += (degrees / 180) * PI;   
  }
  
  
  void right(num degrees) {
    left(-degrees);
  }
  
  
  void pulse() {
    tween = new Tween();
    tween.function = TWEEN_SINE2;
    tween.duration = 10;
    tween.repeat = 3;
    tween.ondelta = ((value) => opacity += value);
    tween.addControlPoint(1.0, 0.0);
    tween.addControlPoint(0.0, 0.5);
    tween.addControlPoint(1.0, 1.0);
  }
  
  
  void die() {
    dead = true;
  }
  

/**
 * By default turtles execute block programs unless you override this
 * function.
 */
  void tick() {
    if (tween.isTweening()) {
      tween.animate();
    } else {
      program.step();
    }
  }
  
  
  Turtle hatch();
  
  
  bool overlapsPoint(num tx, num ty, [ num tr = 0.0]) {
    num dist = distance(tx, ty, x, y);
    return dist < (radius + tr);
  }
  
  
  bool overlapsTurtle(Turtle other) {
    num dist = distance(other.x, other.y, x, y);
    return dist < (radius + other.radius);
  }
  

/**
 * return the angle between this turtle and the given turtle, using 
 * this turtle's heading as the reference. the value will be between
 * -180.0 and 180.0 degrees. Negative angles represent a clockwise (right)
 * turn.
 */  
  double angleBetween(Turtle b) {
    double PI2 = PI * 2;
    double theta = atan2(x - b.x, b.y - y);
    if (theta < 0) theta += PI2;
    double alpha = heading % PI2;
    double ccw = (theta > alpha) ? theta - alpha : (theta + PI2) - alpha;
    ccw = (ccw <= PI) ? ccw : ccw - PI2;
    return ccw / PI * 180;
  }
  
  
  num wrapX(num tx) {
    while (tx < model.minWorldX) {
      tx += model.worldWidth;
    }
    while (tx > model.maxWorldX) {
      tx -= model.worldWidth;
    }
    return tx;
  }
  
  
  num wrapY(num ty) {
    while (ty < model.minWorldY) {
      ty += model.worldHeight;
    } 
    while (ty > model.maxWorldY) {
      ty -= model.worldHeight;
    } 
    return ty;
  }
  
  
  void _drawLocal(CanvasRenderingContext2D ctx) {
    ctx.save();
    {
      if (opacity < 1.0) ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(heading);
      draw(ctx);
      ctx.globalAlpha = 1.0;
    }
    ctx.restore();
  }
  
  
  Patch patchHere() {
    return model.patchAt(x, y);
  }
  
  
  //-------------------------------------------------------------------
  // Touchable implementation
  //-------------------------------------------------------------------
  bool containsTouch(Contact event) {
    double tx = model.screenToWorldX(event.touchX, event.touchY);
    double ty = model.screenToWorldY(event.touchX, event.touchY);
    return (tx >= x-size/2 && tx <= x+size/2 && ty >= y-size/2 && ty <= y+size/2);
  }
  
  
  bool touchDown(Contact event) {
    color.setColor(255, 0, 0, 255);
    return true;
  }
  
  
  void touchUp(Contact event) {
    color.setColor(0, 255, 0, 255);
  }
  
  
  void touchDrag(Contact event) {      
    double tx = model.screenToWorldX(event.touchX, event.touchY);
    double ty = model.screenToWorldY(event.touchX, event.touchY);
    x = tx;
    y = ty;
  }
  
  
  void touchSlide(Contact event) { }
}