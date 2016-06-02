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


/**
 * When programs run they use this interface to execute actions (block.eval)
 */
abstract class ProgramTarget {
  dynamic doAction(String action, List params);
}


class Program {
  
  /* Start block for the program */
  StartBlock start;
  
  /* Currently executing statement in the program */
  Block curr = null;
  
  /* Is the program running? */
  bool running = false;
  
  /* Target agent of this program */
  ProgramTarget target = null;
  
  /* variable storage */
  Map<String, dynamic> variables = new Map<String, dynamic>();
  
  
  Program(this.start, this.target) {
    curr = start;
  }
  
/**
 * Used by Turtle.copyTo to synchronize hatched turtle's programs with the parent
 */
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
      if (curr != null) {
        curr.eval(this);
      } else {
        curr = start;
      }
    }
  }

  
  void restart() {
    curr = start;
  }
}

