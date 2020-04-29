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

import 'dart:async';
import 'dart:convert';
import 'dart:html';
import 'dart:js' as js;
import 'dart:math';
import 'package:dnd/dnd.dart';

part 'versions/version-utils.dart';
part 'versions/version-1.dart';
part 'versions/version-2.dart';
part 'versions/version-3.dart';
part 'versions/version-manager.dart';

//part 'utils/sounds.dart';
part 'utils/utils.dart';

part 'blocks/drag-acceptor.dart';
part 'blocks/drag-image.dart';
part 'blocks/toggle.dart';
part 'blocks/block-style.dart';
part 'blocks/block-drag-data.dart';
part 'blocks/block.dart';
part 'blocks/block-collection.dart';
part 'blocks/notch.dart';
part 'blocks/chain.dart';
part 'blocks/clause.dart';
part 'blocks/expression.dart';
part 'blocks/formatter.dart';
part 'blocks/slot.dart';
part 'blocks/menu.dart';
part 'blocks/attribute.dart';
part 'blocks/program-changed-event.dart';
part 'blocks/workspace.dart';

Map<String, CodeWorkspace> _workspaces = { };

CodeWorkspace GetWorkspace(String containerId) {
  return _workspaces[containerId];
}

void _initializeJS(String language, js.JsFunction formatAttributeJS, String containerId, Map json) {
  String formatAttribute(containerId, blockId, instanceId, attributeId, value) {
    if (formatAttributeJS == null) {
      return value.toString();
    } else {
      return formatAttributeJS.apply([containerId, blockId, instanceId, attributeId, value]);
    }
  }

  _initialize(language, formatAttribute, containerId, json);
}

void _initialize(String language, Function formatAttribute, String containerId, Map json) {
  VersionManager.updateWorkspace(json);

  CodeFormatter formatter;
  switch (language) {
    case "NetLogo":
      formatter = new NetLogoFormatter(formatAttribute, containerId);
      break;

    default:
      formatter = new PlainFormatter(formatAttribute, containerId);
      break;
  }

  try {
    if (_workspaces.containsKey(containerId)) {
      _workspaces[containerId].removeEventListeners();
    }
    _workspaces[containerId] = new CodeWorkspace(containerId, json, formatter);
  } on FormatException catch (e) {
    throw new FormatException("There was an error initializing the workspace with the given NetTango model JSON.", e );
  }
}

/// Javascript hook to initialize a workspace
void JSInitWorkspaceJS(String language, String containerId, String jsonString, js.JsFunction formatAttributeJS) {
  if (_workspaces[containerId] is CodeWorkspace) {
    _workspaces[containerId].unload();
  }
  var json = jsonDecode(jsonString);
  if (json is Map) {
    _initializeJS(language, formatAttributeJS, containerId, json);
  }
}

void JSInitWorkspace(String language, String containerId, String jsonString, Function formatAttribute) {
  if (_workspaces[containerId] is CodeWorkspace) {
    _workspaces[containerId].unload();
  }
  var json = jsonDecode(jsonString);
  if (json is Map) {
    _initialize(language, formatAttribute, containerId, json);
  }
}

/// Javascript hook to initialize all workspaces based on containerId names
void JSInitAllWorkspacesJS(String language, String jsonString, js.JsFunction formatAttributeJS) {
  var json = jsonDecode(jsonString);
  if (json is Map) {
    for (var key in json.keys) {
      JSInitWorkspaceJS(language, key, jsonString, formatAttributeJS);
    }
  }
}

/// Javascript hook to export code from a workspace
String JSExportCode(String containerId, js.JsFunction formatAttributeJS) {
  if (_workspaces.containsKey(containerId)) {
    if (formatAttributeJS != null) {
      String formatAttribute(containerId, blockId, instanceId, attributeId, value) {
        if (formatAttributeJS == null) {
          return value.toString();
        } else {
          return formatAttributeJS.apply([containerId, blockId, instanceId, attributeId, value]);
        }
      }

      return _workspaces[containerId].exportCode(formatAttributeOverride: formatAttribute);
    } else {
      return _workspaces[containerId].exportCode();
    }
  }
  return null;
}

/// Javascript hook to export the entire state of a workspace
String JSSaveWorkspace(String containerId) {
  if (_workspaces.containsKey(containerId)) {
    var defs = _workspaces[containerId].definition;
    defs['program'] = _workspaces[containerId].exportParseTree(false);
    return jsonEncode(defs);
  } else {
    return "{}";
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
  js.context['NetTango_InitWorkspace'] = JSInitWorkspaceJS;
  js.context['NetTango_InitAllWorkspaces'] = JSInitAllWorkspacesJS;
  js.context['NetTango_ExportCode'] = JSExportCode;
  js.context['NetTango_Save'] = JSSaveWorkspace;
  js.context['NetTango_SaveAll'] = JSSaveAllWorkspaces;
}
