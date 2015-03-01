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
  
  /* Manages the animation events */
  Timer timer;


/**
 * Set up the model for a new run (abstract)
 */
  void setup();
  
  
/**
 * Advance model by one tick
 */
  void tick();

  
/**
 * Redraw the display
 */
  void draw();
  
  
/**
 * Reset all agent programs to the start block
 */
  void restartPrograms();
  
  
/**
 * Toggle play/pause 
 */
  void playPause() {
    if (isRunning) {
      pause();
    } else {
      play();
    }
  }

  
/**
 * Resume the program 
 */
  void play() {
    play_state = 1;
    setHtmlClass("play-button", "pause");
    if (timer != null && timer.isActive) timer.cancel();
    timer = new Timer.periodic(const Duration(milliseconds : 30), (timer) => _animate());
  }

  
/**
 * Pause a running program
 */
  void pause() {
    if (timer != null && timer.isActive) timer.cancel();
    timer = null;
    play_state = 0;
    setHtmlClass("play-button", "play");
  }
  
  
/**
 * Fast forward a program
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
 * Halts all programs and runs setup to reinit the model
 */
  void restart() {
    pause();
    setup();
  }
  
   
/**
 * Step forward 1 tick 
 */
  void stepForward() {
    pause();
    tick();
    draw();
  }
   
  
/**
 * Is the model running?
 */
  bool get isRunning {
    return play_state > 0;
  }
  
   
/**
 * advance the model, animate, and repaint
 */
  void _animate() {
    if (play_state != 0) {
      for (int i=0; i<play_state; i++) {
        tick();
      }
      draw();
    }
  }
  
}

