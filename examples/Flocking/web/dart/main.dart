/*
 * Frog Pond Evolution
 * Copyright (c) 2015 Michael S. Horn
 * 
 *           Michael S. Horn (michael-horn@northwestern.edu)
 *           Northwestern University
 *           2120 Campus Drive
 *           Evanston, IL 60613
 *           http://tidal.northwestern.edu
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */
library Flocking;

import 'dart:js';
//import 'dart:async';
import 'dart:html';
//import 'dart:math';
//import 'dart:convert';
import 'package:NetTango/ntango.dart';


class GreenBird extends BlueBird {

  GreenBird(Model model) : super(model) {
    color = new Color(10, 200, 10, 200);
    size = 0.75;
  }
}


class BlueBird extends Turtle {
  
  BlueBird(Model model) : super(model) {
    color = new Color(10, 10, 100, 200);
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
  
  dynamic doAction(String action, List params) {
    switch(action) {
      case "forward": return doForward(params[0]);
      case "left": return doLeft(params[0]);
      case "right": return doRight(params[0]);
    }
    return null;
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
      for (int i=0; i<50; i++) {
        addTurtle(new BlueBird(this) .. setXY(-14, 0));
      }
    }
    else {
      for (int i=0; i<50; i++) {
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
    "touchElement" : "green-workspace",
    "anchor" : "left",
    "color" : "rgba(0, 0, 0, 0.6)",
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
            "default" : 0.2,
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
            "max" : 10,
            "step" : 1,
            "default" : 3,
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
            "max" : 10,
            "step" : 1,
            "default" : 3,
            "random" : true,
            "label" : "degrees"
          }
        ]
      },

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
    ]
  };

  FlockModel model = new FlockModel(modelConfig);
  CodeWorkspace workspace = new CodeWorkspace(json);
  model.createBreed(BlueBird, workspace);


  json["anchor"] = "right";
  json["canvasId"] = "green-workspace";
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
