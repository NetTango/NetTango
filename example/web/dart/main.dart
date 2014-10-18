/*
 * Desert Beetles
 * Copyright (c) 2014 Michael S. Horn
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
library DesertBeetles;

import 'dart:collection';
import 'dart:html';
import 'dart:math';
import 'dart:async';
import 'package:NetTango/ntango.dart';

void main() {

  print("Hello");
  DBModel model = new DBModel();
  model.play();
}


class Beetle extends Turtle {
  
  Beetle(Model model) : super(model);
  
  
  // TODO: This should be just draw()
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
  
  
  void doForward(param) {
    if (param is int) {
      forward(param / 10.0);
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
    Beetle b = new Beetle(model);
    copyTo(b);
    model.turtles.add(b);
    return b;
  }
}


class DBModel extends Model {
  
  DBModel() : super("Desert Beetles", "beetle") {

    // FORWARD block
    Block block = new Block(workspace, 'move');
    block.color = "#9E553B";
    block.param = new Parameter(block);
    block.param.values = [ 1, 2, 3, 4, 5 ];
    block.action = (beetle, param) {
      if (beetle is Beetle) {
        beetle.doForward(param);
      }
    };
    workspace.addToMenu(block, 2);

    
    // LEFT block
    block = new Block(workspace, 'left');
    block.color = "#9E553B";
    block.param = new Parameter(block);
    block.param.values = [ 'random', 5, 10, 20, 30, 40, 50 ];
    block.action = (beetle, param) {
      if (beetle is Beetle) {
        beetle.doLeft(param);
      }
    };
    workspace.addToMenu(block, 2);

    
    // RIGHT block
    block = new Block(workspace, 'right');
    block.color = "#9E553B";
    block.param = new Parameter(block);
    block.param.values = [ 'random', 5, 10, 20, 30, 40, 50 ];
    block.action = (beetle, param) {
      if (beetle is Beetle) {
        beetle.doRight(Agent.rnd.nextInt(10));
      }
    };
    workspace.addToMenu(block, 2);
     
  }
  
  
  void setup() {
    turtles.clear();
    // create three turtles
    turtles.add(new Beetle(this));
    turtles.add(new Beetle(this));
    turtles.add(new Beetle(this));
  }
}