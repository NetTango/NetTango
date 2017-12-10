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

const BOOL_EXPRESSION = "boolean";

const NUM_EXPRESSION = "number";

final num EXPRESSION_WIDTH = 60 * SCALE;

final num EXPRESSION_HEIGHT = 35 * SCALE;

final num EXPRESSION_PADDING = 10 * SCALE;


/**
 * Placeholder for a single expression that has yet to be specified
 */
class ExpressionHolder {

  /// type of the expression
  String type;

  /// current expression in the holder
  Expression expression = null;

  /// parent expression that owns this holder
  Expression parent = null;

  ExpressionHolder(this.type);
  ExpressionHolder.Boolean() { type = BOOL_EXPRESSION; }
  ExpressionHolder.Number() { type = NUM_EXPRESSION; }

  /// block dimensions and position
  num x = 0.0, y = 0.0, width = EXPRESSION_WIDTH, height = EXPRESSION_HEIGHT;


  bool get isEmpty => expression == null;


  num resize(CanvasRenderingContext2D ctx, num startX, num startY) {
    if (expression != null) expression.resize(ctx, startX, startY);
    x = startX;
    y = startY;
    width = (expression == null) ? EXPRESSION_WIDTH : expression.width;
    return x + width;
  }


  void draw(CanvasRenderingContext2D ctx, bool highlight) {
    ctx.save();
    {
      ctx.strokeStyle = "#555";
      ctx.lineWidth = 1.5;
      roundRect(ctx, x, y, width, height, height/4);
      if (highlight) {
        ctx.fillStyle = "cyan";
        ctx.fill();
      }
      ctx.stroke();
      ctx.fillStyle = "#555";
      ctx.font = Expression.font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("…", x + width/2, y + height/2);
    }
    ctx.restore();
  }


  bool animate() {
    return false;
  }
}


/**
 * Visual expression block
 */
class Expression implements Touchable {
  
  /// Used to generate unique block id numbers
  static int _EXPRESSION_ID = 0;

  /// unique internal ID number
  int id;
  
  /// text displayed for the expression (e.g. ">", "false", "+") 
  String name;

  /// type of the expression
  String type;

  /// holder of this expression
  ExpressionHolder _parent = null;

  /// parent of this expression in the expression tree
  Expression get parent => (_parent == null) ? null : _parent.parent;

  /// children of this expression
  List<ExpressionHolder> _children = new List<ExpressionHolder>();

  /// block dimensions and position
  num x = 300, y = 300, width = EXPRESSION_WIDTH, height = EXPRESSION_HEIGHT;

  /// CSS font spec
  static String font = "400 ${18 * SCALE}px 'Poppins', sans-serif";

  /// is the block being dragged 
  bool _dragging = false, _redraw = false;
  
  /// used for dragging the block on the screen
  num _touchX, _touchY, _lastX, _lastY;


  Expression(this.name, this.type) {
    id = Expression._EXPRESSION_ID++;
  }


  Expression clone() {
    Expression other = new Expression(name, type);
    return other;
  }


  void addChild(String type) {
    _children.add(new ExpressionHolder(type));
  }

  bool get hasParent => (parent != null);


  num resize(CanvasRenderingContext2D ctx, num startX, num startY) {
    x = startX;
    y = startY;
    width = EXPRESSION_WIDTH;
    ctx.save();
    {
      ctx.font = font;
      width = ctx.measureText(name).width + EXPRESSION_PADDING * 2;
    }
    ctx.restore();
    startX = x + width;
    for (ExpressionHolder child in _children) {
      startX = child.resize(ctx, startX, startY);
    }
    return startX;
  }


  bool animate() {
    if (_dragging) {
      x += _touchX - _lastX;
      y += _touchY - _lastY;
      _lastX = _touchX;
      _lastY = _touchY;
    }
    return _dragging || _redraw;
  }


  void draw(CanvasRenderingContext2D ctx, bool highlight) {
    ctx.save();
    {
      ctx.strokeStyle = "#555";
      ctx.fillStyle = _dragging? "#eee" : "white";
      ctx.lineWidth = 1.5;
      roundRect(ctx, x, y, width, height, height/4);
      if (!hasParent) {
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = "#555";
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(name, x + width/2, y + height/2);
    }
    ctx.restore();
    for (ExpressionHolder child in _children) {
      child.draw(ctx, highlight);
    }
    _redraw = false;
  }


  void highlightEmpty(CanvasRenderingContext2D ctx) {
    for (ExpressionHolder child in _children) {
      child.highlight(ctx);
    }
  }


  bool containsTouch(Contact c) {
    double tx = c.touchX;
    double ty = c.touchY;
    return (tx >= x && ty >= y && tx <= x + width && ty <= y + height);
  }


  Touchable touchDown(Contact c) {
    _dragging = true;
    _redraw = true;
    _touchX = c.touchX;
    _touchY = c.touchY;
    _lastX = c.touchX;
    _lastY = c.touchY;
    return this;
  }

  
  void touchUp(Contact c) {
    _dragging = false;
    _redraw = true;
  }


  void touchDrag(Contact c) {
    _touchX = c.touchX;
    _touchY = c.touchY;
    _redraw = true;
  }


  void touchSlide(Contact c) { 
  }  
}
