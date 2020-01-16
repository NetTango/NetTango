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
import 'dart:js' as js;

part 'versions/version-utils.dart';
part 'versions/version-1.dart';
part 'versions/version-2.dart';
part 'versions/version-3.dart';
part 'versions/version-manager.dart';

//part 'utils/sounds.dart';
part 'utils/utils.dart';

part 'blocks/block-drag-data.dart';
part 'blocks/block.dart';
part 'blocks/block-collection.dart';
part 'blocks/chain.dart';
part 'blocks/clause.dart';
part 'blocks/expression.dart';
part 'blocks/formatter.dart';
part 'blocks/slot.dart';
part 'blocks/menu.dart';
part 'blocks/parameter.dart';
part 'blocks/program-changed-event.dart';
part 'blocks/workspace.dart';

var _workspaces = { };

CodeWorkspace GetWorkspace(String containerId) {
  return _workspaces[containerId];
}

void _init(String containerId, Map json) {
  VersionManager.updateWorkspace(json);
  try {
    _workspaces[containerId] = new CodeWorkspace(containerId, json);
  } on FormatException catch (e) {
    throw new FormatException("There was an error initializing the workspace with the given NetTango model JSON.", e );
  }
}

/// Javascript hook to initialize a workspace
void JSInitWorkspace(String containerId, String jsonString) {
  if (_workspaces[containerId] is CodeWorkspace) {
    _workspaces[containerId].unload();
  }
  var json = jsonDecode(jsonString);
  if (json is Map) {
    _init(containerId, json);
  }
}

/// Javascript hook to initialize all workspaces based on containerId names
void JSInitAllWorkspaces(String jsonString) {
  var json = jsonDecode(jsonString);
  if (json is Map) {
    for (var key in json.keys) {
      if (_workspaces[key] is CodeWorkspace) {
        _workspaces[key].unload();
      }
      if (json[key] is Map) {
        _init(key, json[key]);
      }
    }
  }
}


/// Javascript hook to export code from a workspace
String JSExportCode(String containerId, String language, js.JsFunction formatter) {
  String formatAttribute(containerId, blockId, instanceId, attributeId, value) {
    if (formatter == null) {
      return value.toString();
    } else {
      return formatter.apply([containerId, blockId, instanceId, attributeId, value]);
    }
  }
  if (_workspaces.containsKey(containerId)) {
    return CodeFormatter.formatCode(language, containerId, _workspaces[containerId].exportParseTree(true), formatAttribute);
  }
  return null;
}


/// Javascript hook to export the entire state of a workspace
String JSSaveWorkspace(String containerId) {
  if (_workspaces.containsKey(containerId)) {
    var defs = _workspaces[containerId].definition;
    defs['program'] = _workspaces[containerId].exportParseTree(false);
    return jsonEncode(defs);
  }
}


/// Javascript hook to export all workspaces
String JSSaveAllWorkspaces() {
  var json = { };
  for (var key in _workspaces.keys) {
    var defs = _workspaces[key].definition;
    defs['program'] = _workspaces[key].exportParseTree(false);
    json[key] = defs;
  }
  return jsonEncode(json);
}


/// Expose core API functions to Javascript
void main() {
  js.context['NetTango_InitWorkspace'] = JSInitWorkspace;
  js.context['NetTango_InitAllWorkspaces'] = JSInitAllWorkspaces;
  js.context['NetTango_ExportCode'] = JSExportCode;
  js.context['NetTango_Save'] = JSSaveWorkspace;
  js.context['NetTango_SaveAll'] = JSSaveAllWorkspaces;
}
