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


class ChanceBlock extends BeginBlock {

  Random _rand = new Random();
  
  ChanceBlock(CodeWorkspace workspace, [String name = 'chance']) : super(workspace, name) {
    color = "#3399aa";
    end = new EndBlock(workspace, this);
    _addClause(end);
    params.add(new Parameter.fromJSON(this,
     {
        "type" : "range",
        "min" : 0,
        "max" : 100,
        "step" : 1,
        "default" : 4,
        "unit" : "%"
      }));
  }
  
  
  Block clone() {
    ChanceBlock block = new ChanceBlock(workspace, text);
    block.params.clear();
    copyTo(block);
    return block;
  }

  
  String compile(int indent) {
    String tab = "";
    for (int i=0; i<indent; i++) tab += "  ";
    return "${tab}chance (${params[0].value}) {\n";
  }


  String toURLString() {
    return "${text}(${params[0].value});";
  }
  
  
  dynamic eval(Program program) { return false; }
  
  
  Block step(Program program) {
    bool c = (_rand.nextDouble() * 100.0) <= params[0].value;
    return c ? next : end.next;
  }
}
