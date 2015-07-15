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
 * Abstract baseclass for Turtles and Patches
 */
abstract class Agent implements Touchable {
  
  static Random rnd = new Random();
  
  /* all agents have a (model) unique id number */
  int id;
  
  /* reference to the containing model */
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
    if (key == "color-red") {
      return color.red;
    } else if (key == "color-green") {
      return color.green;
    } else if (key == "color-blue") {
      return color.blue;
    } else if (key == "color-alpha") {
      return color.alpha;
    }
    return _props[key];
  }

  
/**
 * Set an agent-specific property
 */
  void operator[]=(String key, var value) {
    if (key == "color-red") {
      color.red = value.toInt();
    } else if (key == "color-green") {
      color.green = value.toInt();
    } else if (key == "color-blue") {
      color.blue = value.toInt();
    } else if (key == "color-alpha") {
      color.alpha = value.toInt();
    } else {
      _props[key] = value;
    }
  }
  
  
/**
 * Is the named variable defined for this agent?
 */
  bool isDefined(String name) {
    return (name == "color-red" ||
            name == "color-green" ||
            name == "color-blue" ||
            name == "color-alpha" ||
            _props.containsKey(name));
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
 * This gets called every clock tick for every agent
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

  
  bool containsTouch(Contact c) { return false; }
  void touchUp(Contact c) { }
  void touchDrag(Contact c) { }
  void touchSlide(Contact c) { }
  bool touchDown(Contact c) { return false; } 
}
