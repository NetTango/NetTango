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


class IfBlock extends BeginBlock {
  
  IfBlock(CodeWorkspace workspace, [String name = 'if']) : super(workspace, name) {
    end = new EndBlock(workspace, this);
    _addClause(end);
  }
  
  
  Block clone() {
    IfBlock block = new IfBlock(workspace, text);
    copyTo(block);
    return block;
  }

  
  String compile(int indent) {
    String tab = "";
    for (int i=0; i<indent; i++) tab += "  ";
    return "${tab}if (${param.value}) {\n";
  }


  String toURLString() {
    return "${text}(${param.value});";
  }
  
  
  dynamic eval(Program program) { return false; }
  
  
  Block step(Program program) {
    bool c = super.eval(program);
    return c ? next : end.next;
  }
}



class IfElseBlock extends BeginBlock {
  
  ElseBlock el;

  IfElseBlock(CodeWorkspace workspace) : super(workspace, 'if-else') {
    el = new ElseBlock(workspace, this);
    _addClause(el);
    
    end = new EndBlock(workspace, this);
    _addClause(end);
  }
  
  
  Block clone() {
    IfElseBlock block = new IfElseBlock(workspace);
    copyTo(block);
    return block;
  }
  
  
  String compile(int indent) {
    String tab = "";
    for (int i=0; i<indent; i++) tab += "  ";
    return "${tab}if (${param.value}) {\n";
  }


  String toURLString() {
    return "${text}(${param.value})[;";
  }
  
  
  dynamic eval(Program program) { return false; }
  
  
  Block step(Program program) {
    bool c = super.eval(program);
    if (c) {
      program["if${id}"] = "if-branch";
      return next;
    } else {
      program["if${id}"] = "else-branch";
      return el;
    }
  }
}


class ElseBlock extends ControlBlock {
  
  ElseBlock(CodeWorkspace workspace, BeginBlock begin) : super(workspace, begin, 'else');
  
  Block step(Program program) {
    if (program["if${begin.id}"] == "else-branch") {
      return next;
    } else {
      return begin.end.next;
    }
  }
  
  String compile(int indent) {
    String tab = "";
    for (int i=0; i<indent-1; i++) tab += "  ";
    return "${tab}else {\n";
  }  


  String toURLString() {
    return "];else[;";
  }
}
