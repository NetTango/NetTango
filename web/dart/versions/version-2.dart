part of NetTango;

class Version2 {

  static void update(JsObject json) {
    VersionUtils.updateBlocks3(json, updateBlockSelectAttributes, updateBlockSelectAttributes);
  }

  static void updateBlockSelectAttributes(JsObject b) {
    VersionUtils.updateBlockAttributes(b, objectifySelectAttributes);
  }

  static void objectifySelectAttribute(JsObject attribute) {
    if (!attribute.hasProperty("values") || attribute["values"] is! JsArray) {
      return;
    }
    attribute["values"] = JsArray.from(attribute["values"].map( (v) { return JsObject.jsify({ "actual": v }); } ));
  }

  static void objectifySelectAttributes(JsArray attributes) {
    for (JsObject a in attributes.where( (f) => f.hasProperty("type") && f["type"] == "select" )) {
      objectifySelectAttribute(a);
    }
  }

}
