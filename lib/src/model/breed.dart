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
 * Breed is a special AgentSet
 */
class Breed extends AgentSet {

/**
 * All turtles in this breed will run programs from this workspace
 */
  CodeWorkspace workspace = null; 


  Breed([CodeWorkspace workspace = null]) {
    this.workspace = workspace;
  }

  
/**
 * Add an agent to the set. If workspace is defined, create new program
 */
  void add(Turtle t) {
    super.add(t);
    if (workspace != null) {
      t.program = new Program(workspace.start, t);
    }
  }
}
