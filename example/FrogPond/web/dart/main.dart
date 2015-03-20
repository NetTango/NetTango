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
library FrogPond2;

import 'dart:html';
import 'dart:math';
import 'package:NetTango/ntango.dart';
//import '../../../../lib/ntango.dart';

part 'frog.dart';
part 'fly.dart';
part 'histogram.dart';
part 'lilypad.dart';
part 'pages.dart';
part 'plot.dart';
part 'pond.dart';

double MAX_FROG_SIZE = 1.7;
double MIN_FROG_SIZE = 0.2;
int MAX_FROG_COUNT = 1000;

FrogPond model;


void main() {
  
  Sounds.loadSound("hop");
  Sounds.loadSound("skip");
  Sounds.loadSound("jump");
  Sounds.loadSound("chimes");
  Sounds.loadSound("croak");
  Sounds.loadSound("crunch");
  Sounds.loadSound("sing");
  Sounds.loadSound("chirp");
  Sounds.loadSound("click");
  Sounds.loadSound("splash");
  Sounds.loadSound("tick");
  Sounds.loadSound("turn");
  Sounds.loadSound("swoosh");
  Sounds.loadSound("gulp");

  model = new FrogPond();
  
  bindClickEvents("close-button", (event) => hideAllDialogs());
  bindClickEvents("mute-button", (event) {
    var buttons = querySelectorAll(".mute-button");
    Sounds.mute = !Sounds.mute;
    for (ButtonElement button in buttons) {
      button.style.backgroundImage = Sounds.mute ? "url('images/toolbar/mute.png')" : "url('images/toolbar/volume.png')";
    }
  });
}
