@TestOn("browser")

import "package:test/test.dart";

import "dart:convert";

import "../web/dart/ntango.dart";

const NETLOGO_MODEL_1 = {
  "version": 1,
  "blocks": [
    {
      "id": 23,
      "action": "wolf actions",
      "type": "nlogo:procedure",
      "start": true,
      "limit": 1,
      "format": "to wolf-actions",
      "blockColor": "#bb5555",
      "required": true
    },
    {
      "id": 24,
      "action": "forward",
      "format": "forward ({0} + {P0})",
      "type": "nlogo:command",
      "start": false,
      "control": false,
      "clauses": null,
      "params": [
        {
          "id": 3,
          "type": "range",
          "name": "steps",
          "unit": "",
          "value": 1,
          "default": 1,
          "random": false,
          "step": 0.1,
          "min": 0,
          "max": 3
        }
      ],
      "properties": [
        {
          "id": 4,
          "type": "num",
          "name": "",
          "unit": "",
          "value": 2,
          "default": null
        }
      ]
    },
    {
      "id": 25,
      "action": "sheep actions",
      "type": "nlogo:procedure",
      "start": true,
      "limit": 1,
      "format": "to sheep-actions",
      "blockColor": "#bb5555",
      "required": true
    }
  ],
  "expressions": [],
  "program": {
    "chains": [
      [
        {
          "id": 23,
          "instanceId": 3,
          "action": "wolf actions",
          "type": "nlogo:procedure",
          "format": "to wolf-actions",
          "start": false,
          "required": true,
          "x": 4,
          "y": 8
        },
        {
          "id": 24,
          "instanceId": 4,
          "action": "forward",
          "type": "nlogo:command",
          "format": "forward ({0} + {P0})",
          "start": true,
          "required": false,
          "x": 4,
          "y": 11.4,
          "params": [
            {
              "id": 3,
              "type": "range",
              "name": "steps",
              "unit": "",
              "value": 1,
              "default": 1,
              "random": false,
              "step": 0.1,
              "min": 0,
              "max": 3
            }
          ],
          "properties": [
            {
              "id": 4,
              "type": "num",
              "name": "",
              "unit": "",
              "value": 2,
              "default": null
            }
          ]
        }
      ],
      [
        {
          "id": 25,
          "instanceId": 5,
          "action": "sheep actions",
          "type": "nlogo:procedure",
          "format": "to sheep-actions",
          "start": false,
          "required": true,
          "x": 7.5607421875,
          "y": 20
        },
        {
          "id": 24,
          "instanceId": 6,
          "action": "forward",
          "type": "nlogo:command",
          "format": "forward ({0} + {P0})",
          "start": true,
          "required": false,
          "x": 7.5607421875,
          "y": 23.4,
          "params": [
            {
              "id": 3,
              "type": "range",
              "name": "steps",
              "unit": "",
              "value": 2,
              "default": 1,
              "random": false,
              "step": 0.1,
              "min": 0,
              "max": 3
            }
          ],
          "properties": [
            {
              "id": 4,
              "type": "num",
              "name": "",
              "unit": "",
              "value": 3,
              "default": null
            }
          ]
        }
      ]
    ]
  }
};

dynamic copyJson(dynamic json) {
  return jsonDecode(jsonEncode(json));
}

void main() {
  test("Smoke test of NetTango init and save", () {
    JSInitWorkspace("nt-canvas", "{}");
    var result = JSSaveWorkspace("nt-canvas");
    var expected = jsonEncode({
      "version": VersionManager.VERSION,
      "program": { "chains": [] }
    });
    expect(result, equals(expected));
  });

  test("Remove a paramater from a block that is in a chain", () {
    var json = jsonEncode({
      "version": 1,
      "blocks": [
        {
          "id": 23,
          "action": "wolf actions",
          "type": "nlogo:procedure",
          "start": true,
          "limit": 1,
          "format": "to wolf-actions",
          "blockColor": "#bb5555",
          "required": true
        },
        {
          "id": 24,
          "action": "forward",
          "format": "forward 10",
          "type": "nlogo:command",
          "start": false,
          "control": false,
          "clauses": null,
          "params": [],
          "properties": []
        }
      ],
      "expressions": [],
      "program": {
        "chains": [
          [
            {
              "id": 23,
              "action": "wolf actions",
              "type": "nlogo:procedure",
              "format": "to wolf-actions",
              "start": false,
              "required": true,
              "x": 4,
              "y": 8
            },
            {
              "id": 24,
              "action": "forward",
              "type": "nlogo:command",
              "format": "forward {0}",
              "start": true,
              "required": false,
              "x": 4,
              "y": 11.4,
              "params": [
                {
                  "id": 3,
                  "type": "range",
                  "name": "steps",
                  "unit": "",
                  "value": 1,
                  "default": 1,
                  "random": false,
                  "step": 0.1,
                  "min": 0,
                  "max": 3
                }
              ]
            }
          ]
        ]
      }
    });
    JSInitWorkspace("nt-canvas", json);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));
    var expected = {
      "version": VersionManager.VERSION,
      "blocks": [
        {
          "id": 23,
          "action": "wolf actions",
          "type": "nlogo:procedure",
          "start": true,
          "limit": 1,
          "format": "to wolf-actions",
          "blockColor": "#bb5555",
          "required": true
        },
        {
          "id": 24,
          "action": "forward",
          "format": "forward 10",
          "type": "nlogo:command",
          "start": false,
          "control": false,
          "clauses": null,
          "params": [],
          "properties": []
        }
      ],
      "expressions": [],
      "program": {
        "chains": [
          [
            {
              "id": 23,
              "instanceId": 2,
              "action": "wolf actions",
              "type": "nlogo:procedure",
              "format": "to wolf-actions",
              "start": false,
              "required": true,
              "x": 4,
              "y": 8
            },
            {
              "id": 24,
              "instanceId": 3,
              "action": "forward",
              "type": "nlogo:command",
              "format": "forward 10",
              "start": true,
              "required": false,
              "x": 4,
              "y": 11.4
            }
          ]
        ]
      }
    };
    expect(result, equals(expected));
    var codeResult = JSExportCode("nt-canvas", "NetLogo", null);
    expect(codeResult, equals("to wolf-actions\n  forward 10\nend\n\n"));
  });

  test("NetLogo code exports in proper order with params", () {
    final testCanavsID = "nt-canvas";
    final model = copyJson(NETLOGO_MODEL_1);
    var json = jsonEncode(model);
    JSInitWorkspace(testCanavsID, json);
    var result = jsonDecode(JSSaveWorkspace(testCanavsID));
    model["version"] = VersionManager.VERSION;
    expect(result, equals(model));

    String formatAttribute(canvasId, blockId, instanceId, attributeId, value) {
      return "__${canvasId}_${blockId}_${instanceId}_${attributeId}";
    };
    var codeResult = CodeFormatter.formatCode("NetLogo", testCanavsID, GetWorkspace(testCanavsID).exportParseTree(), formatAttribute);

    expect(codeResult, equals("to sheep-actions\n  forward (__nt-canvas_24_6_3 + __nt-canvas_24_6_4)\nend\n\nto wolf-actions\n  forward (__nt-canvas_24_4_3 + __nt-canvas_24_4_4)\nend\n\n"));
  });

  test("Unversioned model gets IDs added for version 1", () {
    Map<String, Object> action = {
      "action": "sheep actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    Map<String, Object> chain = {
      "action": "sheep actions",
      "params": [ { "type": "num", "default": 5 } ],
      "properties": [ { "type": "num", "default": 4 } ]
    };
    Map<String, Object> model = {
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    };

    JSInitWorkspace("nt-canvas", jsonEncode(model));
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ {
        "id": 0,
        "action": "sheep actions",
        "params": [ { "id": 0, "type": "num", "default": 10 } ],
        "properties": [ { "id": 1, "type": "num", "default": 9 } ]
      } ],
      "program": { "chains": [ [ {
        "id": 0,
        "instanceId": 1,
        "action": "sheep actions",
        "type": "",
        "format": null,
        "start": true,
        "required": false,
        "x": 0,
        "y": 0,
        "params": [ { "id": 0, "type": "num", "default": 10, "value": 10, "name": "", "unit": "" } ],
        "properties": [ { "id": 1, "type": "num", "default": 9, "value": 9, "name": "", "unit": "" } ]
      } ] ] }
    };
    expect(result, equals(expected));
  });

    test("Version 1 gets IDs added for new block", () {
    Map<String, Object> action = {
      "action": "sheep actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    Map<String, Object> model = {
      "blocks": [ action ],
      "program": { "chains": [] },
      "version": 1
    };

    JSInitWorkspace("nt-canvas", jsonEncode(model));
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ {
        "id": 0,
        "action": "sheep actions",
        "params": [ { "id": 0, "type": "num", "default": 10 } ],
        "properties": [ { "id": 1, "type": "num", "default": 9 } ]
      } ],
      "program": { "chains": [] }
    };
    expect(result, equals(expected));
  });

}
