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
 * Breed is a special AgentSet that also has a reference to a CodeWorkspace for 
 * programming agents in this breed.
 */
class Breed extends AgentSet with Runtime {

/**
 * All turtles in this breed will run programs from this workspace
 */
  CodeWorkspace workspace = null; 


  Breed([CodeWorkspace workspace = null]) {
    if (workspace != null ) {
      this.workspace = workspace;
      workspace.runtime = this;
    }
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


// ------------ RUNTIME INTERFACE -------------------------

/**
 * Just do the normal agent set tick, but allow for fast
 * forwarding. Also, don't tick if play_state <= 0.
 */
  void tick() {
    if (play_state > 0) {
      for (int i=0; i<play_state; i++) {
        super.tick();
      }
    }
  }


/**
 * Step forward 1 tick (step forward button pressed)
 */
  void stepForward() {
    tick();
  }

   
/**
 * Called when the restart button is pressed in a workspace
 */
  void setup() {
    restartProgram();
  }

  
/**
 * Called whenever the blocks program is changed
 */
  void programChanged() {
    restartProgram();
  }

}
