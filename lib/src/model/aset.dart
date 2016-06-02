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
 * A collection of agents
 */
class AgentSet<T> {

  /* List of agents */
  List<T> _agents = new List<T>();
  
  /* Random number generator */
  Random rand = new Random();

  /* Allows the use of for(Agent in agents) syntax */
  Iterator get iterator => _agents.iterator;


/**
 * Create an empty agent set
 */
  AgentSet() {}

  
/**
 * Create an agent set from a single agent
 */
  AgentSet.fromAgent(T agent) {
    if (agent != null) _agents.add(agent);
  }
  
  
  bool get isEmpty => _agents.isEmpty;
  
  int get length => _agents.length;
  
  T get first => (isEmpty ? null : _agents.first);

  T operator[](int i) => _agents[i];

  
/**
 * Add an agent to the set
 */
  void add(T agent) {
    if (agent is Agent) {
      _agents.add(agent);
    } else {
      throw "Invalid agent type. Must be a subclass of Agent";
    }
  }
  
  
/**
 * Remove an agent
 */
  void remove(T agent) {
    _agents.remove(agent);
  }


/**
 * Remove all "dead" turtles
 */
  void removeDead() {
    for (int i=_agents.length - 1; i >= 0; i--) {
      if (_agents[i] is Turtle && (_agents[i] as Turtle).dead) {
        _agents.removeAt(i);
      }
    }
  }
  

/**
 * Remove all agents
 */
  void clear() {
    _agents.clear();
  }


  T getRandomAgent() {
    return isEmpty ? null : _agents[rand.nextInt(_agents.length)];
  }


/**
 * Return an agent set consisting of just one agent selected at random
 */
  AgentSet oneOf() {
    return isEmpty ? null : new AgentSet.fromAgent(getRandomAgent());
  }
  
  
/**
 * Return an agent set consisting of all agents of the given type
 */
  AgentSet allOfBreed(Type breed) {
    AgentSet result = new AgentSet();
    for (T agent in _agents) {
      if (agent.runtimeType == breed) {
        result.add(agent);
      }
    }
    return result;
  }


/**
 * Return the number of agents of the given type
 */  
  int count([Type breed]) {
    if (breed == null) {
      return _agents.length;
    } else {
      int count = 0;
      for (T agent in _agents) {
        if (agent.runtimeType == breed) count++;
      }
      return count;
    }
  }
  

/**
 * Returns a Turtle at the given point (or null)
 */
  Turtle getTurtleAtPoint(num px, num py) {
    for (T t in _agents) {
      if ((t as Turtle).overlapsPoint(px, py)) {
        return t as Turtle;
      }
    }
    return null;
  }


/**
 * Returns a Turtle in the given radius (or null)
 */  
  Turtle getTurtleInRadius(num px, num py, num radius) {
    for (T t in _agents) {
      if ((t as Turtle).overlapsPoint(px, py, radius)) {
        return t as Turtle;
      }
    }
    return null;
  }
  

/**
 * Draw all agents
 */
  void draw(CanvasRenderingContext2D ctx) {
    _agents.forEach((t) => (t as Agent)._drawLocal(ctx));
  }
  
  
/**
 * Call tick for all agents... iterate backwards to 
 * prevent concurrent modification errors when new agents
 * are added to the list dynamically (e.g. hatch)
 */
  void tick() {
    for (int i=_agents.length - 1; i>=0; i--) {
      (_agents[i] as Agent).tick();
    }
  }

  
/**
 * Restart agent programs
 */
  void restartProgram() {
    _agents.forEach((t) => (t as Agent).restartProgram());
  }
}
