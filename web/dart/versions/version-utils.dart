part of NetTango;

class VersionUtils {

  static void updateBlocks(Map json, Function(Map) blockDefinitionHandler, Function(Map) blockInstanceHandler) {
    if (!json.containsKey("blocks") || json["blocks"] is! List) {
      return;
    }

    for (Map<String, Object> b in json["blocks"]) {
      blockDefinitionHandler(b);
    }

    // it's possible we want all the block definition updates done before processing any children
    // so run through them again.  -Jeremy B August 2019
    for (Map<String, Object> b in json["blocks"]) {
      if (b.containsKey("children") && b["children"] is List) {
        for (var child in b["children"]) {
          if (child is Map) {
            blockInstanceHandler(child);
          }
        }
      }

      if (b.containsKey("clauses") && b["clauses"] is List) {
        for (var clause in b["clauses"]) {
          if (clause is Map && clause.containsKey("children") && clause["children"] is List) {
            for (var child in clause['children']) {
              blockInstanceHandler(child);
            }
          }
        }
      }

    }

    if (!json.containsKey("program") || json["program"] is! Map) {
      return;
    }

    Map program = json["program"];
    if (!program.containsKey("chains") || program["chains"] is! List) {
      return;
    }

    for (List bs in program["chains"]) {
      for(Map b in bs) {
        blockInstanceHandler(b);
      }
    }

  }

  static void updateBlockAttributes(Map b, Function(List) attributesHandler) {
    if (b.containsKey("params") && b["params"] is List) {
      attributesHandler(b["params"]);
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      attributesHandler(b["properties"]);
    }
  }

}
