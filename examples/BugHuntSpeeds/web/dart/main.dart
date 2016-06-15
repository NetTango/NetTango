/*
 * NetTango: BugHunt Speeds
 */
library BugHuntSpeeds;

import 'dart:html';
import 'dart:math';
import 'package:NetTango/ntango.dart';


class Beetle extends Turtle {

  ImageElement img = new ImageElement();

  bool touched = false;

  num speed = 0.05;

  Beetle(Model model) : super(model) {
    img.src = "images/beetle.png";
  }

  Turtle hatch() {
    Beetle clone = new Beetle(model);
    copyTo(clone);
    return clone;
  }

  void tick() {
    super.tick();
  }

  void draw(CanvasRenderingContext2D ctx) {
    ctx.save();
    {
      num scale = model.patchSize / img.width;
      num iw = img.width * size * scale / model.patchSize;
      num ih = img.height * size * scale / model.patchSize;
      ctx.drawImageScaled(img, -iw/2, -ih/2, iw, ih);
    }
    ctx.restore();
  }

  
  dynamic doAction(String action, List params) {
    switch(action) {
      case "forward": return doForward(params[0]);
      case "left": return doLeft(params[0]);
      case "right": return doRight(params[0]);
      case "if-touched": return touched;
      case "squish": return doSquish();
      case "hatch": return doHatch(params[0]);
      case "start": touched = false; return null;
    }
    return null;
  }


  void doSquish() {
    pulse();
    Sounds.playSound("crunch");
    model.removeTouchable(this);
    tween.onend = (() { die();  });
  }


  void doHatch(param) {
    if ((model as BeetleModel).beetles.length < 1000) {
      Beetle baby = hatch();
      baby.x = model.minWorldX + Agent.rnd.nextDouble() * model.worldWidth;
      baby.y = model.minWorldY + Agent.rnd.nextDouble() * model.worldHeight;
      model.addTurtle(baby);
      model.addTouchable(baby);
      if (param == "speed-variation") {
        double g = nextGaussian() * 0.025;
        speed = max(speed + g, 0.01);
      }
    }
  }


  void doForward(param) {
    forward(speed);
  }
  
  void doLeft(param) {
    left( (param is num) ? param : Agent.rnd.nextInt(10));
  }
  
  void doRight(param) {
    right( (param is num) ? param : Agent.rnd.nextInt(10));
  }

  bool touchDown(Contact event) {
    touched = true;
    return true;
  }

}


class BeetleModel extends Model {

  Breed get beetles => getBreed(Beetle);


  BeetleModel(Map config) : super(config) {
  }

  void setup() {
    breedSetup(getBreed(Beetle));
  }


  void breedSetup(Breed breed) {
    clearTurtles(breed);
    if (breed.turtleType == Beetle) {
      for (int i=0; i<30; i++) {
        Beetle beetle = new Beetle(this);
        beetle.x = minWorldX + Agent.rnd.nextDouble() * worldWidth;
        beetle.y = minWorldY + Agent.rnd.nextDouble() * worldHeight;
        beetle.speed = max(0.01, nextGaussian() * 0.025 + 0.06);
        addTurtle(beetle);
        addTouchable(beetle);
      }
    }
  }
}


void main() {

  Sounds.loadSound("splat");
  Sounds.loadSound("crunch");
  Sounds.loadSound("tick");

  var modelConfig = {
    "name" : "BugHuntSpeeds",
    "canvasId" : "turtles",
    "touchElement" : "green-workspace",
    "patchSize" : 35,
    "minWorldX" : -10,
    "maxWorldX" : 10,
    "minWorldY" : -10,
    "maxWorldY" : 10,
    "autoSize" : true,
    "batched" : true,
    "wrap" : true
  };

  var json = {
    "name" : "Beetle",
    "canvasId" : "blue-workspace",
    "touchElement" : "green-workspace",
    "anchor" : "bottom",
    "color" : "rgba(0, 0, 0, 0.6)",
    "defaultProgram" : "forward(0.3);left(1);",
    "fastForwardButton" : false,
    "stepForwardButton" : false,
    "blocks" : [
      {
        "name" : "forward",
        "textColor" : "white",
        "instances" : 2,
        "action" : "forward"
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
        "name" : "if-touched",
        "type" : "if",
        "action" : "if-touched"
      },

      {
        "name" : "hatch",
        "color" : "#b67196",
        "action" : "hatch",
        "params" : [
          {
            "values" : [ "speed-variation", "no-variation" ]
          }
        ]
      },

      {
        "name" : "squish",
        "color" : "#b67196",
        "action" : "squish",
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

  BeetleModel model = new BeetleModel(modelConfig);
  CodeWorkspace workspace = new CodeWorkspace(json);
  model.createBreed(Beetle, workspace);

  model.setup();
  model.draw();
  model.animate();

  new ImageElement()..src = "images/beetle.png"..onLoad.listen((e) => model.draw());
}
