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


/// Control blocks are part of nested control structures (if, repeat, chance)
abstract class ControlBlock extends Block {

  ClauseBlock nextClause = null;

  ControlBlock(CodeWorkspace workspace, int id, String action) : super(workspace, id, action);

  Block get nextChain {
    if (hasNext) {
      return next;
    }
    else if (nextClause != null) {
      return nextClause;
    }
    else if (parent != null) {
      return parent.nextClause;
    }
    else {
      return null;
    }
  }

  void _reindentChain(int indent, ControlBlock parent) {
    this.indent = indent;
    this.parent = parent;
    if (hasNext) next._reindentChain(indent + indentBelow, this);
  }


  void _outlineDescender(CanvasRenderingContext2D ctx) {
    num r = BLOCK_PADDING;
    if (nextClause != null) {
      ctx.quadraticCurveTo(x + BLOCK_INDENT, y + height, x + BLOCK_INDENT, y + height + r);
      if (hasNext) {
        ctx.lineTo(x + BLOCK_INDENT, nextClause.y);
        ctx.lineTo(x + BLOCK_INDENT + r, nextClause.y);
      } else {
        ctx.lineTo(x + BLOCK_INDENT, nextClause.y - r);
        ctx.quadraticCurveTo(x + BLOCK_INDENT, nextClause.y, x + BLOCK_INDENT + r, nextClause.y);
      }
    }
  }
}



/// Clauses are inner parts of control structures (else, else if, end)
class ClauseBlock extends ControlBlock {

  BeginBlock begin;

  int get indentAbove => 1;

  int get indentBelow => 1;

  bool get isStartOfChain => false;


  ClauseBlock(CodeWorkspace workspace, int id, String action) : super(workspace, id, action) {
    hasTopConnector = false;
  }

  Block clone() {
    ClauseBlock other = new ClauseBlock(workspace, id, action);
    _copyTo(other);
    return other;
  }


//-------------------------------------------------------------------------
/// export this chain of blocks
//-------------------------------------------------------------------------
  void _exportParseTree(List chain) {
    Map json = toJSON();
    json["children"] = [];
    chain.add(json);
    if (next != null) next._exportParseTree(json["children"]);
  }


  void _drawOutline(CanvasRenderingContext2D ctx) { }
  void _drawBlock(CanvasRenderingContext2D ctx) { }

  Touchable touchDown(Contact c) { return begin.touchDown(c); }
}




/// A special clause block that ends control statement.
class EndBlock extends ClauseBlock {

  int get indentAbove => 1;

  int get indentBelow => 0;


  EndBlock(CodeWorkspace workspace, int id, String action) :
    super(workspace, id, action) {
    this._height = BLOCK_HEIGHT / 2;
    format = "";
  }

  void _reindentChain(int indent, ControlBlock parent) {
    this.indent = indent;
    this.parent = parent;
    if (hasNext) next._reindentChain(indent + indentBelow, parent);
  }

  void _exportParseTree(List chain) {
    chain.add(toJSON());
  }

  void _drawLabel(CanvasRenderingContext2D ctx) { }
}


/// Start of a control structure
class BeginBlock extends ControlBlock {

  /// clauses for begin blocks
  List<ClauseBlock> clauses = new List<ClauseBlock>();

  /// end block for control statements
  EndBlock end;

  int get indentAbove => 0;

  int get indentBelow => 1;


  BeginBlock(CodeWorkspace workspace, int id, String action) : super(workspace, id, action) {
    end = new EndBlock(workspace, null, "end-$action");
    end.begin = this;
    clauses.add(end);
    nextClause = end;
  }


  Block clone() {
    BeginBlock other = new BeginBlock(workspace, id, action);
    _copyTo(other);

    for (ClauseBlock clause in clauses) {
      if (clause is! EndBlock) {
        other._addClause(clause.clone());
      }
    }
    other.end.format = end.format;
    return other;
  }


  Block get bottomOfChain => end.bottomOfChain;


//-------------------------------------------------------------------------
/// export this chain of blocks
//-------------------------------------------------------------------------
  void _exportParseTree(List chain) {
    Map json = toJSON();
    json["children"] = [];
    json["clauses"] = [];
    chain.add(json);
    if (next != null) next._exportParseTree(json["children"]);
    for (ClauseBlock clause in clauses) {
      clause._exportParseTree(json["clauses"]);
    }
    if (end.next != null) end.next._exportParseTree(chain);
  }


//-------------------------------------------------------------------------
/// recompute block indentation
//-------------------------------------------------------------------------
  void _reindentChain(int indent, ControlBlock parent) {
    this.indent = indent;
    this.parent = parent;
    if (hasNext) {
      next._reindentChain(indent + 1, this);
    }
    for (ClauseBlock clause in clauses) {
      clause._reindentChain(indent, parent);
    }
  }


//-------------------------------------------------------------------------
/// reposition and resize a chain of blocks.
//-------------------------------------------------------------------------
  void _repositionChain() {
    super._repositionChain();

    Block last = this;

    for (ClauseBlock clause in clauses) {

      if (last.hasNext) {
        Block bottom = last.next.bottomOfChain;
        clause.x = x;
        clause.y = bottom.y + bottom.height;
      }
      else {
        clause.x = x;
        clause.y = last.y + last.height + BLOCK_HEIGHT;
      }
      clause._repositionChain();
      last = clause;
    }
  }



  void _addClause(ClauseBlock clause) {
    /// end should always go last
    clause.begin = this;
    clauses.remove(end);
    clauses.add(clause);
    clauses.add(end);
    for (int i=0; i<clauses.length-1; i++) {
      clauses[i].nextClause = clauses[i+1];
    }
    nextClause = clauses[0];
  }


  /// messy shape outline code for control blocks!
  void _outlineBlock(CanvasRenderingContext2D ctx) {
    if (_inMenu) {
      super._outlineBlock(ctx);
      return;
    }
    num r = BLOCK_PADDING;
    ctx.beginPath();
    ctx.moveTo(x + r, y);

    ControlBlock block = this;
    bool drawTopNotch = !hasPrev && hasTopConnector;
    bool drawBottomNotch = false;
    while (block != null) {
      drawBottomNotch = !block.hasNext && (block.nextClause != null || indent == 0);
      block._outlineTop(ctx, drawTopNotch);
      block._outlineRight(ctx, drawTopNotch, drawBottomNotch);
      block._outlineBottom(ctx, drawBottomNotch);
      block._outlineDescender(ctx);
      drawTopNotch = !block.hasNext;
      block = block.nextClause;
    }

    // Left side of the block
    if (end.hasNext || indent > 0) {
      ctx.lineTo(x, end.y + end.height);
    } else {
      ctx.lineTo(x + r, end.y + end.height);
      ctx.quadraticCurveTo(x, end.y + end.height, x, end.y + end.height - r);
    }
    if (hasPrev) {
      ctx.lineTo(x, y);
      ctx.lineTo(x + r, y);
    } else {
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
    }
    ctx.closePath();
  }
}
