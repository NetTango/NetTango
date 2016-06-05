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
 * Start block
 */
class StartBlock extends BeginBlock {
  
  StartBlock(CodeWorkspace workspace, [String name = 'start']) : super(workspace, name) {
    x = getStartX();
    y = getStartY();
    color = 'green';
    action = 'start';
    end = new EndProgramBlock(workspace, this);
    end.y = y + height + BLOCK_MARGIN + 20;
    _addClause(end);
    workspace._addBlock(end);
    inserted = true;
    _width = (BLOCK_WIDTH + BLOCK_MARGIN).toDouble();
  }
  
  
  double getProgramHeight() {
    return (end.y + end.height) - y;
  }
  
  
  double getStartX() {
    return 20.0;
  }
  
  
  double getStartY() {
    return workspace.height - 160.0;
  }
  
  
  bool get isInProgram => true;

  
  bool touchDown(Contact c) {
    dragging = false;
    _lastX = c.touchX;
    _lastY = c.touchY;
    workspace.draw();
    return true;
  }
  
  
  void touchDrag(Contact c) {
    _lastX = c.touchX;
    _lastY = c.touchY;
    workspace.draw();
  }
  
  
  void touchUp(Contact c) {
    dragging = false;
    workspace.draw();
  }
}



/**
* Visual programming block
*/
class EndProgramBlock extends EndBlock {
    //color = '#a00';

  
  EndProgramBlock(CodeWorkspace workspace, StartBlock begin) : super(workspace, begin) {
    _width = (BLOCK_WIDTH + BLOCK_MARGIN).toDouble();
    inserted = true;
  }

  
  Block step(Program program) {
    return begin;
  }  

  
  bool touchDown(Contact c) {
    return false;
  }
}
