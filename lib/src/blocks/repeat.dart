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


class RepeatBlock extends BeginBlock {
  
  RepeatBlock(CodeWorkspace workspace, [String name = 'repeat']) : super(workspace, name) {
    end = new EndRepeatBlock(workspace, this);
    _addClause(end);
  }
  
  
  Block clone() {
    RepeatBlock block = new RepeatBlock(workspace, text);
    copyTo(block);
    return block;
  }

  
  String compile(int indent) {
    String tab = "";
    for (int i=0; i<indent; i++) tab += "  ";
    return "${tab}repeat (${param.value}) {\n";
  }


  String toURLString() {
    return "${text}(${param.value});";
  }
  
  
  dynamic eval(Program program) {
    String key = "repeat-$id";
    if (!program.hasVariable(key)) {
      String pval = (param == null) ? null : param.value.toString();
      int count = -1;
      if (pval != null) {
        count = int.parse(pval, onError: (e) => -1);
      }
      if (count >= 0) {
        program[key] = count;
      }
    }
    return false; 
  }
  
  
  Block step(Program program) {
    return next;
  }
}


class EndRepeatBlock extends EndBlock {
  
  EndRepeatBlock(CodeWorkspace workspace, BeginBlock begin) : super(workspace, begin);
  
  Block step(Program program) {
    String key = "repeat-${begin.id}";
    if (program.hasVariable(key)) {
      program[key]--;
      if (program[key] > 0) {
        return begin;
      } else {
        program.removeVariable(key);
        return next;
      }
    } else {
      return begin;
    }
  }
}
