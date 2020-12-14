// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Version1 {

  static void update(js.JsObject json) {
    Map<String, int> actionToId = new Map<String, int>();
    Map<int, int> blockIdToAttributeIdOffset = new Map<int, int>();
    int attributeId = 0;

    Function(js.JsObject) blockDefinitionHandler = (b) {
      if (!b.hasProperty("action")) { return; }

      int id = actionToId.length;
      b["id"] = id;
      String action = b["action"];
      actionToId[action] = id;

      blockIdToAttributeIdOffset[id] = attributeId;

      attributeId = addIdsToParamsAndProps(attributeId, b);
    };

    Function(js.JsObject) blockInstanceHandler = (b) {
      addIdToBlock(actionToId, blockIdToAttributeIdOffset, b);
    };

    VersionUtils.updateBlocks3(json, blockDefinitionHandler, blockInstanceHandler);

  }

  static int addIdsToParamsAndProps(int attributeId, js.JsObject b) {
    Function(js.JsArray) attributesHandler = (attributes) {
      attributeId = addIdsToAttributes(attributeId, attributes);
    };
    VersionUtils.updateBlockAttributes(b, attributesHandler);

    return attributeId;
  }

  static int addIdsToAttributes(int attributeId, js.JsArray attributes) {
    for (js.JsObject attribute in attributes) {
      attribute["id"] = attributeId;
      attributeId++;
    }
    return attributeId;
  }

  static void addIdToBlock(Map<String, int> actionToId, Map<int, int> blockIdToAttributeIdOffset, js.JsObject b) {
    if (!b.hasProperty("action")) { return; }

    String action = b["action"];
    if (actionToId.containsKey(action)) {
      int id = actionToId[action];
      b["id"] = id;
      addIdsToParamsAndProps(blockIdToAttributeIdOffset[id], b);
    }
  }

}
