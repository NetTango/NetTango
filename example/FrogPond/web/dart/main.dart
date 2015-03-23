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
import 'package:uuid/uuid.dart';

part 'frog.dart';
part 'flower.dart';
part 'fly.dart';
part 'histogram.dart';
part 'lilypad.dart';
part 'pages.dart';
part 'plot.dart';
part 'pond.dart';

FrogPond model;

//const STATIC_ROOT = "";
const STATIC_ROOT = "/static/";


void main() {
  
  Sounds.loadSound("hop", "${STATIC_ROOT}sounds");
  Sounds.loadSound("skip", "${STATIC_ROOT}sounds");
  Sounds.loadSound("jump", "${STATIC_ROOT}sounds");
  Sounds.loadSound("chimes", "${STATIC_ROOT}sounds");
  Sounds.loadSound("croak", "${STATIC_ROOT}sounds");
  Sounds.loadSound("crunch", "${STATIC_ROOT}sounds");
  Sounds.loadSound("sing", "${STATIC_ROOT}sounds");
  Sounds.loadSound("chirp", "${STATIC_ROOT}sounds");
  Sounds.loadSound("click", "${STATIC_ROOT}sounds");
  Sounds.loadSound("splash", "${STATIC_ROOT}sounds");
  Sounds.loadSound("tick", "${STATIC_ROOT}sounds");
  Sounds.loadSound("turn", "${STATIC_ROOT}sounds");
  Sounds.loadSound("swoosh", "${STATIC_ROOT}sounds");
  Sounds.loadSound("gulp", "${STATIC_ROOT}sounds");

  print(new Uuid().v4());

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
