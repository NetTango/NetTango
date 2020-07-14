/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

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
