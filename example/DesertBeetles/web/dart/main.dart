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

import 'dart:html';
import 'dart:math';
import 'package:NetTango/ntango.dart';

part 'beetle.dart';
part 'desert.dart';
part 'dung.dart';
part 'tunnel.dart';
part 'tree.dart';
part 'histogram.dart';
part 'plot.dart';

DBModel model;

String STATIC_ROOT = "/static/";

void main() {

  if (window.localStorage.containsKey("STATIC_ROOT")) {
    STATIC_ROOT = window.localStorage["STATIC_ROOT"];
  }

  model = new DBModel();
}