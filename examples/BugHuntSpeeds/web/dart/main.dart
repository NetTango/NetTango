/*
 * NetTango: BugHunt Speeds
 */
library BugHuntSpeeds;

import 'dart:html';
import 'dart:math';
import 'package:NetTango/ntango.dart';
part 'histogram.dart';

const MIN_SPEED = 0.01;
const MAX_SPEED = 0.24;
const MID_SPEED = 0.12;


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
    tween.onend = (() { die(); (model as BeetleModel).kills++; });
  }


  void doHatch(param) {
    if ((model as BeetleModel).beetles.length < 1000) {
      Beetle baby = hatch();
      baby.x = model.minWorldX + Agent.rnd.nextDouble() * model.worldWidth;
      baby.y = model.minWorldY + Agent.rnd.nextDouble() * model.worldHeight;
      model.addTurtle(baby);
      model.addTouchable(baby);
      if (param == "speed-variation") {
        double g = nextGaussian() * 0.05;
        print(g);
        speed = max(speed + g, MIN_SPEED);
      }
      (model as BeetleModel).updateHistogram();
    }
  }


  void doForward(param) {
    forward(max(min(speed, 0.3), 0.01));
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

  Histogram hist;

  int kills = 0;


  BeetleModel(Map config) : super(config) {
    hist = new Histogram("histogram", true);
    hist.update([ 23, 33, 43, 33, 10 ]);
    hist.draw();
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
        beetle.speed = max(MIN_SPEED, nextGaussian() * 0.05 + MID_SPEED);
        addTurtle(beetle);
        addTouchable(beetle);
      }
    }
    updateHistogram();
  }


  void updateHistogram() {
    var bins = [ 0, 0, 0, 0, 0 ];
    for (int i=0; i<beetles.length; i++) {
      num speed = beetles[i].speed;
      num split = MAX_SPEED / 5;
      for (int j=0; j<bins.length; j++) {
        if (speed > split * j && speed <= split * (j+1)) {
          bins[j]++;
        }
      }
    }
    hist.update(bins);
    hist.draw();
  }


  void drawForeground(CanvasRenderingContext2D ctx) {  
    ctx.fillStyle = "black";
    ctx.font = "600 24px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("$kills bugs squished", 20, 20);
  }

}


void main() {

  Sounds.loadSound("splat");
  Sounds.loadSound("crunch");
  Sounds.loadSound("tick");

  var modelConfig = {
    "name" : "BugHuntSpeeds",
    "canvasId" : "turtles",
    "touchElement" : "blue-workspace",
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
    "touchElement" : "blue-workspace",
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
        "instances" : 3,
        "action" : "left",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 90,
            "step" : 1,
            "default" : 3,
            "random" : true,
            "label" : "degrees"
          }
        ]
      },


      {
        "name" : "right",
        "instances" : 3,
        "action" : "right",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 90,
            "step" : 1,
            "default" : 3,
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
      },

      {
        "name" : "chance",
        "type" : "chance",
        "instances" : 2,
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 10,
            "step" : 0.2,
            "default" : 2,
            "unit" : "%"
          }
        ]
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
