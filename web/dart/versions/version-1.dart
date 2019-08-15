part of NetTango;

class Version1 {

  static void update(Map json) {
    Map<String, int> actionToId = new Map<String, int>();
    Map<int, int> blockIdToAttributeIdOffset = new Map<int, int>();
    int attributeId = 0;

    Function(Map) blockDefinitionHandler = (b) {
      if (!b.containsKey("action")) { return; }

      int id = actionToId.length;
      b["id"] = id;
      String action = b["action"];
      actionToId[action] = id;

      blockIdToAttributeIdOffset[id] = attributeId;

      attributeId = addIdsToParamsAndProps(attributeId, b);
    };

    Function(Map) blockInstanceHandler = (b) {
      addIdToBlock(actionToId, blockIdToAttributeIdOffset, b);
    };

    VersionUtils.updateBlocks(json, blockDefinitionHandler, blockInstanceHandler);

  }

  static int addIdsToParamsAndProps(int attributeId, Map<String, Object> b) {
    Function(List) attributesHandler = (attributes) {
      attributeId = addIdsToAttributes(attributeId, attributes);
    };
    VersionUtils.updateBlockAttributes(b, attributesHandler);

    return attributeId;
  }

  static int addIdsToAttributes(int attributeId, List attributes) {
    for (Map<String, Object> attribute in attributes) {
      attribute["id"] = attributeId;
      attributeId++;
    }
    return attributeId;
  }

  static void addIdToBlock(Map<String, int> actionToId, Map<int, int> blockIdToAttributeIdOffset, Map b) {
    if (!b.containsKey("action")) { return; }

    String action = b["action"];
    if (actionToId.containsKey(action)) {
      int id = actionToId[action];
      b["id"] = id;
      addIdsToParamsAndProps(blockIdToAttributeIdOffset[id], b);
    }
  }

}
