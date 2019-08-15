part of NetTango;

class Version1 {

  static void update(Map json) {
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

}
