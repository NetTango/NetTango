part of NetTango;

class VersionManager {
  static final VERSION = 1;

  static void updateWorkspace(Map<String, Object> json) {
    int version = json.containsKey("version") ? json["version"] : 0;

    if (version > VERSION) {
      throw "Somehow the given model version ($version) is greater than the supported NetTango version ($VERSION).";
    }

    if (version < 1) {
      updateVersion1(json);
    }

    json["version"] = VERSION;
  }

  static int addIdsToParamsAndProps(int attributeId, Map<String, Object> b) {
    if (b.containsKey("params") && b["params"] is List) {
      attributeId = addIdsToAttributes(attributeId, b["params"]);
    } else {
      print("No params! ${b["params"].runtimeType}");
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      attributeId = addIdsToAttributes(attributeId, b["properties"]);
    } else {
      print("No props! ${b["properties"].runtimeType}");
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

      print("Adding IDs to params and props for $b");
      attributeId = addIdsToParamsAndProps(attributeId, b);
    }

    if (!json.containsKey("program") || !(json["program"] is Map)) {
      return;
    }

    Map program = json["program"];
    if (!program.containsKey("chains") || program["chains"] is! List) {
      print("No chains!");
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
    print("Adding IDs to a block: $b");

    if (b.containsKey("action")) {
      String action = b["action"];
      if (actionToId.containsKey(action)) {
        int id = actionToId[action];
        b["id"] = id;
        addIdsToParamsAndProps(blockIdToAttributeIdOffset[id], b);
      } else {
        print("Found a chain block with no action: $action");
      }
    } else {
      print("huh?");
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
