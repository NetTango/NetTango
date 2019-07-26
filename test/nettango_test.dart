@TestOn("browser")

import "package:test/test.dart";

import "dart:convert";

import "../web/dart/ntango.dart";

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
    var codeResult = JSExportCode("nt-canvas", "NetLogo");
    expect(codeResult, equals("to wolf-actions\n  forward 10\nend\n\n"));
  });

  test("NetLogo code is properly exported with params", () {
      var jsonData = {
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
          ]
        ]
      }
    };
    var json = jsonEncode(jsonData);
    JSInitWorkspace("nt-canvas", json);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));
    expect(result, equals(jsonData));

    var codeResult = JSExportCode("nt-canvas", "NetLogo");
    expect(codeResult, equals("to wolf-actions\n  forward (1 + 2)\nend\n\n"));
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
