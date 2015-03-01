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


class Program {
  
  /* Start block for the program */
  StartBlock start;
  
  /* Currently executing statement in the program */
  Block curr = null;
  
  /* Is the program running? */
  bool running = false;
  
  /* Target agent of this program */
  var target = null;
  
  /* variable storage */
  Map<String, dynamic> variables = new Map<String, dynamic>();
  
  
  Program(CodeWorkspace workspace, this.target) {
    start = workspace.start;
    curr = start;
  }
  
  
  void synchronize(Program other) {
    curr = other.curr;
  }
  
  
  dynamic operator[] (String key) {
    return variables[key];
  }
  
  
  void operator[]=(String key, var value) {
    variables[key] = value;
  }
  
  
  bool hasVariable(String name) {
    return variables.containsKey(name);
  }
  
  
  void removeVariable(String name) {
    variables.remove(name);
  }
  
  
  void clearVariables() {
    variables.clear();
  }
  
  
  void step() {
    if (curr != null) {
      curr = curr.step(this);
      if (curr != null) curr.eval(this);
    }
  }

  
  void restart() {
    curr = start;
  }
}  
