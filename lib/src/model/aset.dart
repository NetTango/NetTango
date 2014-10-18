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
 * A collection of agents
 */
class AgentSet<T> {

  /* List of agents */
  List<T> agents = new List<T>();
  
  /* Random number generator */
  Random rand = new Random();

  
/**
 * Create an empty agent set
 */
  AgentSet() {}

  
/**
 * Create an agent set from a single agent
 */
  AgentSet.fromAgent(T agent) {
    if (agent != null) agents.add(agent);
  }
  
  
  bool get isEmpty => agents.isEmpty;
  
  int get length => agents.length;
  
  T get first => (agents.isEmpty ? null : agents.first);
  
  T operator[](int i) => agents[i];

  
/**
 * Add an agent to the set
 */
  void add(T agent) {
    if (agent is Agent) {
      agents.add(agent);
    } else {
      throw "Invalid agent type. Must be a subclass of Agent";
    }
  }
  
  
/**
 * Remove an agent
 */
  void remove(T agent) {
    agents.remove(agent);
  }
  

/**
 * Remove all agents
 */
  void clear() {
    agents.clear();
  }
  
  
/**
 * Return an agent set consisting of just one agent selected at random
 */
  AgentSet oneOf() {
    if (agents.length == 0) {
      return null;
    } else {
      return new AgentSet.fromAgent(agents[rand.nextInt(agents.length)]);
    }
  }
  

/**
 * Draw all agents
 */
  void draw(CanvasRenderingContext2D ctx) {
    agents.forEach((t) => (t as Agent)._drawLocal(ctx));
  }
  
  
/**
 * Call tick for all agents... iterate backwards to prevent concurrent modification errors
 */
  void tick() {
    for (int i=agents.length - 1; i>=0; i--) {
      (agents[i] as Agent).tick();
    }
  }

  
/**
 * Restart agent programs
 */
  void restartProgram() {
    agents.forEach((t) => (t as Agent).restartProgram());
  }
}
