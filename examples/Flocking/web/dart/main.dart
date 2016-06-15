/*
 * NetTango Flocking
 */
library Flocking;

import 'dart:js';
//import 'dart:async';
import 'dart:html';
import 'dart:math';
//import 'dart:convert';
import 'package:NetTango/ntango.dart';


class GreenBird extends BlueBird {

  GreenBird(Model model) : super(model) {
    color = new Color(10, 200, 10, 100 + Agent.rnd.nextInt(100));
    size = 0.75;
  }
}


class BlueBird extends Turtle {

  AgentSet flockmates = new AgentSet();
  
  BlueBird(Model model) : super(model) {
    color = new Color(10, 10, 100, 100 + Agent.rnd.nextInt(100));
    size = 0.75;
  }
  

  void draw(CanvasRenderingContext2D ctx) {
    ctx.fillStyle = color.toString();
    ctx.beginPath();
    ctx.moveTo(0, radius);
    ctx.lineTo(radius * 0.75, -radius);
    ctx.lineTo(0, radius * -0.6);
    ctx.lineTo(-radius * 0.75, -radius);
    ctx.closePath();
    //ctx.arc(0, 0, radius, 0, PI * 2, true);
    ctx.fill();
  }


  AgentSet findFlockmates(num radius) {
    //forward(radius * 0.6);
    num tx = x, ty = y;
    //backward(radius * 0.6);
    return model.getBreed(this.runtimeType).getTurtlesInRadius(tx, ty, radius);
  }


  Turtle getClosestBird() {
    //forward(radius * 0.6);
    //AgentSet aset = model.getBreed(this.runtimeType).getTurtlesInRadius(x, y, radius);
    //backward(radius * 0.6);
    num mindist = 100;
    Turtle closest = null;
    if (flockmates != null) {
      for (int i=0; i<flockmates.length; i++) {
        if (flockmates[i] != this) {
          num dist = distanceBetween(flockmates[i]);
          if (closest == null || dist < mindist) {
            mindist = dist;
            closest = flockmates[i];
          }
        }
      }
    }
    return closest;
  }

  
  dynamic doAction(String action, List params) {
    switch(action) {
      case "forward": return doForward(params[0]);
      case "left": return doLeft(params[0]);
      case "right": return doRight(params[0]);
      case "towards": return doTurnTowards(params[0]);
      case "align": return doAlign(params[0]);
      case "away": return doTurnAway(params[0]);
      case "if-closer": return ifCloser(params[0]);
      case "start": flockmates = findFlockmates(3); return null;
    }
    return null;
  }


  bool ifCloser(param) {
    Turtle t = getClosestBird();
    return (t != null) ? (distanceBetween(getClosestBird()) <= param) : false;
  }

  
  void doForward(param) {
    if (param is num) {
      forward(param / 4);
    } else {
      forward(0.2);
    }
  }
  
  void doLeft(param) {
    left( (param is num) ? param : Agent.rnd.nextInt(10));
  }
  
  void doRight(param) {
    right( (param is num) ? param : Agent.rnd.nextInt(10));
  }


  void doTurnAway(param) {
    if (param is num) {
      Turtle t = getClosestBird();
      if (t != null) {
        num delta = headingDifference(t);
        if (delta >= 0) {
          right(min(delta, param));
        } else {
          right(max(delta, -param));
        }
      }
    }
  }


  void doAlign(param) {
    if (param is num && flockmates != null) {
      num delta = 0;
      num count = 0;
      for (int i=0; i<flockmates.length; i++) {
        if (flockmates[i] != this) {
          delta += headingDifference(flockmates[i]);
          count++;
        }
      }
      if (count > 0) {
        delta /= count; // average heading difference
        if (delta >= 0) {
          left(min(delta, param));
        } else {
          left(max(delta, -param));
        }
      }
    }
  }


  void doTurnTowards(param) {
    if (param is num && flockmates != null) {
      num delta = 0;
      num count = 0;
      for (int i=0; i<flockmates.length; i++) {
        if (flockmates[i] != this) {
          delta += angleBetween(flockmates[i]);
          count++;
        }
      }
      if (count > 0) {
        delta /= count; // average heading difference
        if (delta >= 0) {
          left(min(delta, param));
        } else {
          left(max(delta, -param));
        }
      }
    }
    /*
    if (param is num) {
      Turtle t = getClosestBird();
      if (t != null) {
        num delta = headingDifference(t);
        if (delta > 0) {
          left(min(delta, param));
        } else {
          right(max(delta, param));
        }
      }
    }
    */
  }
  

  Turtle hatch() {
    return new BlueBird(model);
  }

/*
  void tick() {
    forward(0.1);
    left(1);
  }
*/
}


class FlockModel extends Model {
  FlockModel(Map config) : super(config) {

  }

  void setup() {
    breedSetup(getBreed(GreenBird));
    breedSetup(getBreed(BlueBird));
  }


  void breedSetup(Breed breed) {
    clearTurtles(breed);
    if (breed.turtleType == BlueBird) {
      for (int i=0; i<100; i++) {
        addTurtle(new BlueBird(this) .. setXY(-14, 0));
      }
    }
    else {
      for (int i=0; i<100; i++) {
        addTurtle(new GreenBird(this) .. setXY(14, 0));
      }
    }
  }
}


void main() {

  var modelConfig = {
    "name" : "Flocking",
    "canvasId" : "turtles",
    "patchSize" : 30,
    "minWorldX" : -10,
    "maxWorldX" : 10,
    "minWorldY" : -10,
    "maxWorldY" : 10,
    "autoSize" : true,
    "batched" : true,
    "wrap" : true
  };

  var json = {
    "name" : "Blue Birds",
    "canvasId" : "blue-workspace",
    "touchElement" : "blue-workspace",
    "anchor" : "left",
    "color" : "rgba(0, 0, 0, 0.6)",
    "defaultProgram" : "forward(0.3);left(1);",
    "fastForwardButton" : false,
    "stepForwardButton" : false,
    "blocks" : [
      {
        "name" : "forward",
        "textColor" : "white",
        "instances" : 2,
        "action" : "forward",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 1.5,
            "step" : 0.1,
            "default" : 0.3,
            "random" : true,
            "unit" : "",
            "label" : "speed"
          }
        ]
      },

      {
        "name" : "left",
        "instances" : 2,
        "action" : "left",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 20,
            "step" : 0.5,
            "default" : 1,
            "random" : true,
            "label" : "degrees"
          }
        ]
      },


      {
        "name" : "right",
        "instances" : 2,
        "action" : "right",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 20,
            "step" : 0.5,
            "default" : 1,
            "random" : true,
            "label" : "degrees"
          }
        ]
      },

      {
        "name" : "turn towards",
        "short" : "towards",
        "instances" : 2,
        "action" : "towards",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 20,
            "step" : 0.25,
            "default" : 3,
            "label" : "max degrees"
 
          }
        ]
      },

      {
        "name" : "turn away from",
        "short" : "away",
        "instances" : 2,
        "action" : "away",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 20,
            "step" : 0.25,
            "default" : 1.5,
            "label" : "max degrees"
          }
        ]
      },

      {
        "name" : "align with",
        "short" : "align",
        "instances" : 2,
        "action" : "align",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 20,
            "step" : 0.25,
            "default" : 3,
            "label" : "max degrees"
          }
        ]
      },

      {
        "name" : "if bird closer than",
        "short" : "if",
        "type" : "if-else",
        "action" : "if-closer",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 5,
            "step" : 0.25,
            "default" : 1,
            "label" : "degrees"
          }
        ]

      }, 

      {
        "name" : "chance",
        "type" : "chance"
      }
/*
      {
        "name" : "waggle",
        "color" : "blue",
        "textColor" : "white",
        "params" : [
          {
            "values" : [ "slow", "fast", "silly" ]
          }
        ]
      }
*/      
    ]
  };

  FlockModel model = new FlockModel(modelConfig);
  CodeWorkspace workspace = new CodeWorkspace(json);
  model.createBreed(BlueBird, workspace);

  json["anchor"] = "right";
  json["canvasId"] = "green-workspace";
  json["touchElement"] = "green-workspace";
  json["name"] = "Green Birds";
  workspace = new CodeWorkspace(json);
  model.createBreed(GreenBird, workspace);

  model.setup();
  model.draw();
  model.animate();

  // NOTE: This works after running dart2js!
  context['sayHello'] = (parameter) {
    print("hello");
  };

}
