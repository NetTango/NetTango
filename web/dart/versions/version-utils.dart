part of NetTango;

class VersionUtils {

  static void updateBlocks(JsObject json, Function(JsObject) blockDefinitionHandler, Function(JsObject) blockInstanceHandler) {
    if (!json.hasProperty("blocks") || json["blocks"] is! JsArray) {
      return;
    }

    for (JsObject b in json["blocks"]) {
      blockDefinitionHandler(b);
    }

    if (!json.hasProperty("program") || json["program"] is! JsObject) {
      return;
    }

    JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! JsArray) {
      return;
    }

    for (JsObject chain in program["chains"]) {
      if (chain.hasProperty("blocks") && chain["blocks"] is JsArray) {
        for(JsObject b in chain["blocks"]) {

          blockInstanceHandler(b);

          if (b.hasProperty("children") && b["children"] is JsArray) {
            for (JsObject child in b["children"]) {
              blockInstanceHandler(child);
            }
          }

          if (b.hasProperty("clauses") && b["clauses"] is JsArray) {
            for (JsObject clause in b["clauses"]) {
              if (clause.hasProperty("children") && clause["children"] is JsArray) {
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
  static void updateBlocks3(JsObject json, Function(JsObject) blockDefinitionHandler, Function(JsObject) blockInstanceHandler) {
    if (!json.hasProperty("blocks") || json["blocks"] is! JsArray) {
      return;
    }

    for (JsObject b in json["blocks"]) {
      blockDefinitionHandler(b);
    }

    // it's possible we want all the block definition updates done before processing any children
    // so run through them again.  -Jeremy B August 2019
    for (JsObject b in json["blocks"]) {
      if (b.hasProperty("children") && b["children"] is JsArray) {
        for (JsObject child in b["children"]) {
          blockInstanceHandler(child);
        }
      }

      if (b.hasProperty("clauses") && b["clauses"] is JsArray) {
        for (JsObject clause in b["clauses"]) {
          if (clause.hasProperty("children") && clause["children"] is JsArray) {
            for (JsObject child in clause['children']) {
              blockInstanceHandler(child);
            }
          }
        }
      }

    }

    if (!json.hasProperty("program") || json["program"] is! JsObject) {
      return;
    }

    JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! JsArray) {
      return;
    }

    for (JsArray bs in program["chains"]) {
      for(JsObject b in bs) {
        blockInstanceHandler(b);
      }
    }

  }

  static void updateBlockAttributes(JsObject b, Function(JsArray) attributesHandler) {
    if (b.hasProperty("params") && b["params"] is JsArray) {
      attributesHandler(b["params"]);
    }

    if (b.hasProperty("properties") && b["properties"] is JsArray) {
      attributesHandler(b["properties"]);
    }
  }

}
