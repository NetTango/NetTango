import 'dart:js';

@TestOn("browser")

import "package:test/test.dart";

import "../web/ntango.dart";
import "./test-utils.dart";

void main() {
  test("Unknown properties are maintained in external storage", () {
    final model = JsObject.jsify({
      "version": VersionManager.VERSION,
      "extraString": "extra information",
      "height": 600, "width": 450,
      "blocks": [{
        "id": 0,
        "action": "sheep actions",
        "extraArray": [ "extra", "values", "to-store" ],
        "required": false,
        "placement": BlockPlacement.starter.index,
        "clauses": [ { "children": [], "open": "[", "close": "]", "extraBool": false } ],
        "params": [ { "id": 0, "type": "int", "extraObject": { "hello": 10 }, "default": 10, "step": 1 } ],
        "properties": [ { "id": 1, "type": "int", "extraNumber": 10, "default": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      }],
      "program": {
        "chains": [{
          "x": 10, "y": 10,
          "extraString": "more extra information",
          "blocks": [{
            "id": 0,
            "instanceId": 0,
            "action": "sheep actions",
            "extraArray": [ "extra", "values", "to-store" ],
            "required": false,
            "placement": BlockPlacement.starter.index,
            "clauses": [ { "children": [], "open": "[", "close": "]", "extraBool": false } ],
            "params": [ { "id": 0, "type": "int", "extraObject": { "hello": 10 }, "default": 10, "value": 5, "step": 1 } ],
            "properties": [ { "id": 1, "type": "int", "extraNumber": 10, "default": 9, "step": 1 } ],
            "propertiesDisplay": "shown"
          }]
        }]
      }
    });

    final containerId = "test-space-id";
    final dartModel   = restoreWorkspace(containerId, model, TestUtils.createTestFormatter(containerId));
    final result      = encodeWorkspace(dartModel);
    model["program"]["chains"][0]["blocks"][0]["properties"][0]["value"] = 9;
    expect(TestUtils.dartify(result), equals(TestUtils.dartify(model)));
  });
}
