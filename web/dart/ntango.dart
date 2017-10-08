/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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
library NetTango;

import 'dart:math';
import 'dart:html';
import 'dart:convert';
import 'dart:web_audio';
import 'dart:js' as js;

part 'src/utils/matrix.dart';
part 'src/utils/sounds.dart';
part 'src/utils/touch.dart';
part 'src/utils/tween.dart';
part 'src/utils/utils.dart';

part 'src/blocks/block.dart';
part 'src/blocks/control.dart';
part 'src/blocks/formatter.dart';
part 'src/blocks/menu.dart';
part 'src/blocks/parameter.dart';
part 'src/blocks/workspace.dart';


var _workspaces = [];


/// Javascript hook to initialize a workspace
void NetTangoInitWorkspace(var json) {
  if (json is Map && json["canvasId"] is String) {
    if (querySelector("#${json['canvasId']}") != null) {
      _workspaces[json["canvasId"]] = new CodeWorkspace(json);
    }
  }
}


void main() {
  js.context['NetTango_InitWorkspace'] = NetTangoInitWorkspace;
}  
