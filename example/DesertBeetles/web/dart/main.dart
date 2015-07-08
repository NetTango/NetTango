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


DBModel model;

void main() {

  print("Hello");
  model = new DBModel();
}


class Beetle extends Turtle {
  
  Beetle(Model model) : super(model);
  
  
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
    if (param is num) {
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
    return null; // TODO
  }
}


class DBModel extends Model {
  
  DBModel() : super("Desert Beetles", "beetle") {

  }
  
  
  void setup() {
    clearTurtles();
  }
}