part of NetTango;

class Version2 {

  static void update(js.JsObject json) {
    VersionUtils.updateBlocks3(json, updateBlockSelectAttributes, updateBlockSelectAttributes);
  }

  static void updateBlockSelectAttributes(js.JsObject b) {
    VersionUtils.updateBlockAttributes(b, objectifySelectAttributes);
  }

  static void objectifySelectAttribute(js.JsObject attribute) {
    if (!attribute.hasProperty("values") || attribute["values"] is! js.JsArray) {
      return;
    }
    attribute["values"] = js.JsArray.from(attribute["values"].map( (v) { return js.JsObject.jsify({ "actual": v }); } ));
  }

  static void objectifySelectAttributes(js.JsArray attributes) {
    for (js.JsObject a in attributes.where( (f) => f.hasProperty("type") && f["type"] == "select" )) {
      objectifySelectAttribute(a);
    }
  }

}
