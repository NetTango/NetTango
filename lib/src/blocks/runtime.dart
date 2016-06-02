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
 * Abstract class that workspaces use to communicate with thins like 
 * Models or AgentSets
 */
abstract class Runtime { 
  
  /*
   * Play state
   *   -2 : play backward 2x
   *   -1 : play backward normal speed
   *   0  : paused
   *   1  : play forward normal speed
   *   2  : play forward 2x
   *   4  : play forward 4x ....
   */
  int play_state = 0;

  /** Is the model running? */
  bool get isRunning => play_state > 0;
  

/**
 * Called indirectly from the restart button (after pausing the program)
 */
  void setup();

  
/**
 * Called whenever the blocks program is changed. Subclasses must restart 
 * programs to avoid following links to non-existing code.
 */
  void programChanged();


/**
 * Run the program (play button presed)
 */
  void play() {
    play_state = 1;
  }

  
/**
 * Pause / stop the program (paused button pressed)
 */
  void pause() {
    play_state = 0;
  }
  
  
/**
 * Fast forward the program (fast forward button pressed)
 */
  void fastForward() {
    if (!isRunning) {
      play();
    } else if (play_state < 16) {
      play_state *= 2;
    } else {
      play_state = 1;
    }
  }
  
  
/**
 * Step forward 1 tick (step forward button pressed)
 */
  void stepForward();

   
/**
 * Called when the restart button is pressed in a workspace
 */
  void restart() {
    pause();
    setup();
  }

}

