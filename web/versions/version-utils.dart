// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class VersionUtils {

  static void updateBlocks(js.JsObject json, Function(js.JsObject) blockDefinitionHandler, Function(js.JsObject) blockInstanceHandler) {
    if (!json.hasProperty("blocks") || json["blocks"] is! js.JsArray) {
      return;
    }

    for (js.JsObject b in json["blocks"]) {
      blockDefinitionHandler(b);
    }

    if (!json.hasProperty("program") || json["program"] is! js.JsObject) {
      return;
    }

    js.JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! js.JsArray) {
      return;
    }

    for (js.JsObject chain in program["chains"]) {
      if (chain.hasProperty("blocks") && chain["blocks"] is js.JsArray) {
        for(js.JsObject b in chain["blocks"]) {

          blockInstanceHandler(b);

          // the `children` property was removed in version 5, but this should be harmless to
          // leave in as it checks the existence of the property first.  This block can be
          // removed the next time a big structure change requires changing `updateBlocks()`.
          // -Jeremy B July 2020
          if (b.hasProperty("children") && b["children"] is js.JsArray) {
            for (js.JsObject child in b["children"]) {
              blockInstanceHandler(child);
            }
          }

          if (b.hasProperty("clauses") && b["clauses"] is js.JsArray) {
            for (js.JsObject clause in b["clauses"]) {
              if (clause.hasProperty("children") && clause["children"] is js.JsArray) {
                for (var child in clause["children"]) {
                  blockInstanceHandler(child);
                }
              }
            }
          }

        }
      }
    }

  }

  /// the data structure changed for version 4, so this remains for updating version 3 or
  /// earlier files.
  static void updateBlocks3(js.JsObject json, Function(js.JsObject) blockDefinitionHandler, Function(js.JsObject) blockInstanceHandler) {
    if (!json.hasProperty("blocks") || json["blocks"] is! js.JsArray) {
      return;
    }

    for (js.JsObject b in json["blocks"]) {
      blockDefinitionHandler(b);
    }

    // it's possible we want all the block definition updates done before processing any children
    // so run through them again.  -Jeremy B August 2019
    for (js.JsObject b in json["blocks"]) {
      if (b.hasProperty("children") && b["children"] is js.JsArray) {
        for (js.JsObject child in b["children"]) {
          blockInstanceHandler(child);
        }
      }

      if (b.hasProperty("clauses") && b["clauses"] is js.JsArray) {
        for (js.JsObject clause in b["clauses"]) {
          if (clause.hasProperty("children") && clause["children"] is js.JsArray) {
            for (js.JsObject child in clause["children"]) {
              blockInstanceHandler(child);
            }
          }
        }
      }

    }

    if (!json.hasProperty("program") || json["program"] is! js.JsObject) {
      return;
    }

    js.JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! js.JsArray) {
      return;
    }

    for (js.JsArray bs in program["chains"]) {
      for(js.JsObject b in bs) {
        blockInstanceHandler(b);
      }
    }

  }

  static void updateBlockAttributes(js.JsObject b, Function(js.JsArray) attributesHandler) {
    if (b.hasProperty("params") && b["params"] is js.JsArray) {
      attributesHandler(b["params"]);
    }

    if (b.hasProperty("properties") && b["properties"] is js.JsArray) {
      attributesHandler(b["properties"]);
    }
  }

}
