part of NetTango;

class Version2 {

  static void update(Map json) {
    VersionUtils.updateBlocks(json, updateBlockSelectAttributes, updateBlockSelectAttributes);
  }

  static void updateBlockSelectAttributes(Map b) {
    VersionUtils.updateBlockAttributes(b, objectifySelectAttributes);
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
