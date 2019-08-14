part of NetTango;

class VersionManager {
  static final VERSION = 2;

  static void updateWorkspace(Map<String, Object> json) {
    int version = json.containsKey("version") ? json["version"] : 0;

    if (version > VERSION) {
      throw "Somehow the given model version ($version) is greater than the supported NetTango version ($VERSION).";
    }

    if (version < 1) {
      updateVersion1(json);
    }

    if (version < 2) {
      updateVersion2(json);
    }

    json["version"] = VERSION;
  }

  static int addIdsToParamsAndProps(int attributeId, Map<String, Object> b) {
    if (b.containsKey("params") && b["params"] is List) {
      attributeId = addIdsToAttributes(attributeId, b["params"]);
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      attributeId = addIdsToAttributes(attributeId, b["properties"]);
    }

    return attributeId;
  }

  static int addIdsToAttributes(int attributeId, List attributes) {
    for (Map<String, Object> attribute in attributes) {
      attribute["id"] = attributeId;
      attributeId++;
    }
    return attributeId;
  }

  static void updateVersion1(Map json) {
    Map<String, int> actionToId = new Map<String, int>();
    Map<int, int> blockIdToAttributeIdOffset = new Map<int, int>();
    int attributeId = 0;

    if (!json.containsKey("blocks") || !(json["blocks"] is List)) {
      return;
    }

    for (Map<String, Object> b in json["blocks"]) {
      if (!b.containsKey("action")) { continue; }

      int id = actionToId.length;
      b["id"] = id;
      String action = b["action"];
      actionToId[action] = id;

      blockIdToAttributeIdOffset[id] = attributeId;

      attributeId = addIdsToParamsAndProps(attributeId, b);
    }

    if (!json.containsKey("program") || !(json["program"] is Map)) {
      return;
    }

    Map program = json["program"];
    if (!program.containsKey("chains") || program["chains"] is! List) {
      return;
    }

    for (List bs in program["chains"]) {
      for(Map b in bs) {
        addIdToBlock(actionToId, blockIdToAttributeIdOffset, b);
      }
    }
  }

  static void addIdToBlock(
    Map<String, int> actionToId,
    Map<int, int> blockIdToAttributeIdOffset,
    Map b
  ) {

    if (b.containsKey("action")) {
      String action = b["action"];
      if (actionToId.containsKey(action)) {
        int id = actionToId[action];
        b["id"] = id;
        addIdsToParamsAndProps(blockIdToAttributeIdOffset[id], b);
      }
    }

    if (b.containsKey("children") && b["children"] is List) {
      for (var child in b["children"]) {
        if (child is Map) {
          addIdToBlock(actionToId, blockIdToAttributeIdOffset, child);
        }
      }
    }

    if (b.containsKey("clauses") && b["clauses"] is List) {
      for (var clause in b["clauses"]) {
        if (clause is Map && clause.containsKey("children") && clause["children"] is List) {
          for (var child in clause['children']) {
            addIdToBlock(actionToId, blockIdToAttributeIdOffset, child);
          }
        }
      }
    }
  }

  static void addDisplayToSelectAttribute(Map attribute) {
    if (!attribute.containsKey("values") || attribute["values"] is! List) {
      return;
    }
    attribute["values"] = attribute["values"].map( (v) { return { "display": v, "actual": v }; } ).toList();
  }

  static void addDisplayToSelectAttributes(List attributes) {
    for (Map<String, Object> a in attributes.where( (f) => f.containsKey("type") && f["type"] == "select" )) {
      addDisplayToSelectAttribute(a);
    }
  }

  static void addSelectDisplayToBlock(Map b) {
    if (b.containsKey("params") && b["params"] is List) {
      addDisplayToSelectAttributes(b["params"]);
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      addDisplayToSelectAttributes(b["properties"]);
    }

    if (b.containsKey("children") && b["children"] is List) {
      for (var child in b["children"]) {
        if (child is Map) {
          addSelectDisplayToBlock(child);
        }
      }
    }

    if (b.containsKey("clauses") && b["clauses"] is List) {
      for (var clause in b["clauses"]) {
        if (clause is Map && clause.containsKey("children") && clause["children"] is List) {
          for (var child in clause['children']) {
            addSelectDisplayToBlock(child);
          }
        }
      }
    }

  }

  static void updateVersion2(Map json) {
    if (!json.containsKey("blocks") || json["blocks"] is! List) {
      return;
    }

    for (Map<String, Object> b in json["blocks"]) {
      addSelectDisplayToBlock(b);
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
        addSelectDisplayToBlock(b);
      }
    }
  }
}
