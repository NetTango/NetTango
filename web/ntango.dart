// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

library NetTango;

import "dart:async";
import "dart:convert";
import "dart:html";
import "dart:js" as js;
import "dart:math";
import "package:dnd/dnd.dart";

part "versions/version-utils.dart";
part "versions/version-1.dart";
part "versions/version-2.dart";
part "versions/version-3.dart";
part "versions/version-4.dart";
part "versions/version-5.dart";
part "versions/version-manager.dart";

//part "utils/sounds.dart";
part 'utils/bool-utils.dart';
part 'utils/list-utils.dart';
part 'utils/num-utils.dart';
part 'utils/string-utils.dart';

part "blocks/external-storage.dart";
part "blocks/drag-drop/drag-manager.dart";
part "blocks/drag-drop/workspace-acceptor.dart";
part "blocks/drag-drop/chain-acceptor.dart";
part "blocks/drag-drop/clause-acceptor.dart";
part "blocks/drag-drop/block-acceptor.dart";
part "blocks/drag-drop/drag-image.dart";
part "blocks/drag-drop/block-drag-data.dart";
part "blocks/toggle.dart";
part 'blocks/tags/allowed-tags.dart';
part 'blocks/tags/concrete-tags.dart';
part 'blocks/tags/inherit-tags.dart';
part 'blocks/tags/unrestricted-tags.dart';
part 'blocks/tags/any-of-tags.dart';
part "blocks/block-style.dart";
part "blocks/block.dart";
part "blocks/block-collection.dart";
part "blocks/baubles/arrow.dart";
part "blocks/baubles/cap.dart";
part "blocks/baubles/notch.dart";
part "blocks/chain.dart";
part "blocks/clause.dart";
part "blocks/expression-definition.dart";
part "blocks/expression.dart";
part "blocks/code-formatter.dart";
part "blocks/slot.dart";
part "blocks/menu.dart";
part "blocks/attributes/attribute.dart";
part "blocks/attributes/expression-attribute.dart";
part "blocks/attributes/int-attribute.dart";
part "blocks/attributes/num-attribute.dart";
part "blocks/attributes/range-attribute.dart";
part "blocks/attributes/select-attribute.dart";
part "blocks/attributes/text-attribute.dart";
part "blocks/program-changed-event.dart";
part "blocks/workspace.dart";

part "serialization/dartify.dart";
part "serialization/jsonify.dart";

Map<String, CodeWorkspace> _workspaces = {};

CodeWorkspace GetWorkspace(String containerId) {
  return _workspaces[containerId];
}

void _initializeJS(String language, js.JsFunction formatAttributeJS, String containerId, js.JsObject definition) {
  String formatAttribute(containerId, blockId, instanceId, attributeId, value, attributeType) {
    if (formatAttributeJS == null) {
      return value.toString();
    } else {
      return formatAttributeJS.apply([containerId, blockId, instanceId, attributeId, value, attributeType]);
    }
  }

  _initialize(language, formatAttribute, containerId, definition);
}

void _initialize(String language, Function formatAttribute, String containerId, js.JsObject definition) {
  VersionManager.updateWorkspace(definition);

  CodeFormatter formatter = new CodeFormatter(language, formatAttribute, containerId);

  try {
    if (_workspaces.containsKey(containerId)) {
      _workspaces[containerId].removeEventListeners();
    }
    CodeWorkspace workspace = restoreWorkspace(containerId, definition, formatter);
    _workspaces[containerId] = workspace;
    workspace.draw();
  } on FormatException catch (e) {
    throw new FormatException("There was an error initializing the workspace with the given NetTango model JSON.", e );
  }
}

/// Javascript hook to initialize a workspace
void JSInitWorkspaceJS(String language, String containerId, String jsonString, js.JsFunction formatAttributeJS) {
  if (_workspaces[containerId] is CodeWorkspace) {
    _workspaces[containerId].unload();
  }
  final json = jsonDecode(jsonString);
  final pojo = js.JsObject.jsify(json);
  _initializeJS(language, formatAttributeJS, containerId, pojo);
}

void JSInitWorkspace(String language, String containerId, js.JsObject pojo, Function formatAttribute) {
  if (_workspaces[containerId] is CodeWorkspace) {
    _workspaces[containerId].unload();
  }
  _initialize(language, formatAttribute, containerId, pojo);
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
      String formatAttribute(containerId, blockId, instanceId, attributeId, value, attributeType) {
        if (formatAttributeJS == null) {
          return value.toString();
        } else {
          return formatAttributeJS.apply([containerId, blockId, instanceId, attributeId, value, attributeType]);
        }
      }

      return _workspaces[containerId].exportCode(formatAttributeOverride: formatAttribute);
    } else {
      return _workspaces[containerId].exportCode();
    }
  }
  return null;
}

String JSFormatAttributeValue(String containerId, int instanceId, int attributeId) {
  if (!_workspaces.containsKey(containerId)) {
    throw new Exception("Unknown container ID: ${containerId}");
  }
  final workspace = _workspaces[containerId];
  final block     = workspace.getBlockInstance(instanceId);
  final attribute = block.getAttribute(attributeId);
  return CodeFormatter.formatAttributeValue(attribute);
}

/// Javascript hook to export the entire state of a workspace
String JSSaveWorkspace(String containerId) {
  if (_workspaces.containsKey(containerId)) {
    final definition = encodeWorkspace(_workspaces[containerId]);
    return js.context["JSON"].callMethod("stringify", [definition]);
  } else {
    return "{}";
  }
}

/// Javascript hook to export all workspaces
String JSSaveAllWorkspaces() {
  final definitions = {};
  for (var containerId in _workspaces.keys) {
    final definition = encodeWorkspace(_workspaces[containerId]);
    definitions[containerId] = js.context["JSON"].callMethod("stringify", [definition]);;
  }
  return jsonEncode(json);
}

/// Expose core API functions to Javascript
void main() {
  js.context["NetTango_blockPlacementOptions"] = js.JsObject.jsify({
    "starter": BlockPlacement.STARTER,
    "child": BlockPlacement.CHILD,
    "anywhere": BlockPlacement.ANYWHERE
  });
  js.context["NetTango_selectQuoteOptions"] = js.JsObject.jsify({
    "always": QuoteOptions.ALWAYS_QUOTE,
    "never": QuoteOptions.NEVER_QUOTE,
    "smart": QuoteOptions.SMART_QUOTE
  });
  js.context["NetTango_InitWorkspace"] = JSInitWorkspaceJS;
  js.context["NetTango_InitAllWorkspaces"] = JSInitAllWorkspacesJS;
  js.context["NetTango_ExportCode"] = JSExportCode;
  js.context["NetTango_FormatAttributeValue"] = JSFormatAttributeValue;
  js.context["NetTango_Save"] = JSSaveWorkspace;
  js.context["NetTango_SaveAll"] = JSSaveAllWorkspaces;
}
