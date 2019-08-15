part of NetTango;

class Version2 {

  static void update(Map json) {
    VersionUtils.updateBlocks(json, updateBlockSelectAttributes, updateBlockSelectAttributes);
  }

  static void updateBlockSelectAttributes(Map b) {
    if (b.containsKey("params") && b["params"] is List) {
      objectifySelectAttributes(b["params"]);
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      objectifySelectAttributes(b["properties"]);
    }
  }

  static void objectifySelectAttribute(Map attribute) {
    if (!attribute.containsKey("values") || attribute["values"] is! List) {
      return;
    }
    attribute["values"] = attribute["values"].map( (v) { return { "actual": v }; } ).toList();
  }

  static void objectifySelectAttributes(List attributes) {
    for (Map<String, Object> a in attributes.where( (f) => f.containsKey("type") && f["type"] == "select" )) {
      objectifySelectAttribute(a);
    }
  }

}