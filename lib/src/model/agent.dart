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
 * Abstract baseclass for Turtles and Patches
 */
abstract class Agent implements Touchable {
  
  static Random rnd = new Random();
  
  /* all agents have an id number unique to their containing model */
  int id;
  
  /* reference to the containing model (agents can only belong to one model) */
  Model model;
  
  /* agent's color */
  Color color = new Color(255, 255, 0, 255);
  
  /* agent-specific variables (e.g. turtles-own) */
  Map _props = new Map();
  
  /* Agent's control program */
  Program program;
  
  
  Agent(this.model) {
    id = model.nextAgentId();
    // empty programs by default.
    program = new Program(null, this);
  }


/**
 * Access an agent-specific property
 */
  dynamic operator[](String key) {
    return _props[key];
  }

  
/**
 * Set an agent-specific property
 */
  void operator[]=(String key, var value) {
    _props[key] = value;
  }
  
  
/**
 * Is the named variable defined for this agent?
 */
  bool isDefined(String name) {
    return _props.containsKey(name);
  }
  

/**
 * Remove agents-own property
 */
  void removeVariable(String name) {
    _props.remove(name);
  }
  
  
/**
 * Remove all agents-own properties
 */
  void clearVariables() {
    _props.clear();
  }
  
  
/**
 * This gets called every clock tick for every agent
 */
  void tick();

  
/**
 * This gets called every clock tick for every agent.
 * If model is on fast-forward, draw may only get called every
 * 2, 4, 8, 16, etc. ticks.
 */
  void draw(CanvasRenderingContext2D ctx);
  
  
/**
 * Used internally to transform into agent space before drawing
 */
  void _drawLocal(CanvasRenderingContext2D ctx);
  

/**
 * Restart agent's program
 */
  void restartProgram() {
    program.restart();
  }

  
/**
 * Implementation of the Touchable interface
 */  
  bool containsTouch(Contact c) { return false; }
  void touchUp(Contact c) { }
  void touchDrag(Contact c) { }
  void touchSlide(Contact c) { }
  bool touchDown(Contact c) { return false; } 
}
