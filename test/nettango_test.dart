import 'dart:js';

@TestOn("browser")

import "package:test/test.dart";

import "dart:convert";

import "../web/ntango.dart";

const NETLOGO_MODEL_1 = {
  "version": 1,
  "blocks": [
    {
      "id": 23,
      "action": "wolf actions",
      "type": "nlogo:procedure",
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
          "type": "int",
          "step": 2,
          "name": "",
          "unit": "",
          "value": 2,
        }
      ]
    },
    {
      "id": 25,
      "action": "sheep actions",
      "type": "nlogo:procedure",
      "limit": 1,
      "format": "to sheep-actions",
      "blockColor": "#bb5555",
      "required": true
    }
  ],
  "program": {
    "chains": [
      [
        {
          "id": 23,
          "instanceId": 3,
          "action": "wolf actions",
          "type": "nlogo:procedure",
          "format": "to wolf-actions",
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
              "type": "int",
              "step": 2,
              "name": "",
              "unit": "",
              "value": 2
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
              "type": "int",
              "name": "",
              "unit": "",
              "value": 3,
              "step": 2
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

void versionThreeBlockCoordinates(Map block) {
  if (block["x"] != null && block["x"] is num) {
    block["x"] = block["x"] * 10;
  }
  if (block["y"] != null && block["y"] is num) {
    block["y"] = block["y"] * 10;
  }
  if (block["children"] != null && block["children"] is List) {
    versionThreeBlocksCoordinates(block["children"]);
  }
  if(block["clauses"] != null && block["clauses"] is List) {
    versionThreeChainsCoordinates(block["clauses"]);
  }
}

void versionThreeBlocksCoordinates(List blocks) {
  for (var block in blocks) {
    versionThreeBlockCoordinates(block);
  }
}

void versionThreeChainsCoordinates(List chains) {
  for (var chain in chains) {
    if (chain is List) {
      versionThreeBlocksCoordinates(chain);
    }
  }
}

void versionThreePropertiesDisplayUpdates(List blocks) {
  for (Map block in blocks) {
    if (block.containsKey("properties")) {
      block["propertiesDisplay"] = "shown";
    }
  }
}

void versionFourChainUpdates(Map program) {
  List chainBlocks = program["chains"];
  List chains = new List();
  for (List blocks in chainBlocks) {
    final chain = new Map();
    chain["blocks"] = blocks;
    if (blocks.length > 0) {
      Map first = blocks[0];
      chain["x"] = (first.containsKey("x") && first["x"] != null) ? first["x"].floor() : 0;
      chain["y"] = (first.containsKey("y") && first["y"] != null) ? first["y"].floor() : 0;
      for (Map block in blocks) {
        if (block.containsKey("x")) { block.remove("x"); }
        if (block.containsKey("y")) { block.remove("y"); }
      }
    } else {
      chain["x"] = 0;
      chain["y"] = 0;
    }
    chains.add(chain);
  }
  program["chains"] = chains;
}

String formatAttribute(containerId, blockId, instanceId, attributeId, value) {
  return "__${containerId}_${blockId}_${instanceId}_${attributeId}";
}

void main() {
  test("Smoke test of NetTango init and save", () {
    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify({}), formatAttribute);
    var result = JSSaveWorkspace("nt-canvas");
    var expected = jsonEncode({
      "version": VersionManager.VERSION,
      "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
      "blocks": [],
      "program": { "chains": [] }
    });
    expect(result, equals(expected));
  });

  test("Remove a paramater from a block that is in a chain", () {
    var json = JsObject.jsify({
      "version": 1,
      "blocks": [
        {
          "id": 23,
          "action": "wolf actions",
          "type": "nlogo:procedure",
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
              "required": true,
              "x": 4,
              "y": 8
            },
            {
              "id": 24,
              "action": "forward",
              "type": "nlogo:command",
              "format": "forward {0}",
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
    JSInitWorkspace("NetLogo", "nt-canvas", json, formatAttribute);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));
    var expected = {
      "version": VersionManager.VERSION,
      "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
      "blocks": [
        {
          "id": 23,
          "action": "wolf actions",
          "placement": 0,
          "type": "nlogo:procedure",
          "limit": 1,
          "format": "to wolf-actions",
          "blockColor": "#bb5555",
          "required": true
        },
        {
          "id": 24,
          "action": "forward",
          "placement": 1,
          "format": "forward 10",
          "type": "nlogo:command",
          "required": false,
        }
      ],
      "program": {
        "chains": [ {
          "x": 40, "y": 80,
          "blocks": [
            {
              "id": 23,
              "instanceId": 0,
              "action": "wolf actions",
              "placement": 0,
              "type": "nlogo:procedure",
              "format": "to wolf-actions",
              "blockColor": "#bb5555",
              "required": true
            },
            {
              "id": 24,
              "instanceId": 1,
              "action": "forward",
              "placement": 1,
              "type": "nlogo:command",
              "format": "forward 10",
              "required": false
            }
          ]
        } ]
      }
    };
    expect(result, equals(expected));
    var codeResult = JSExportCode("nt-canvas", null);
    expect(codeResult, equals("to wolf-actions\n  forward 10\nend\n\n"));
  });

  test("NetLogo code exports in proper order with params", () {
    final testCanavsID = "nt-canvas";
    final model = copyJson(NETLOGO_MODEL_1);

    // load and then save out the result to make sure it is correct
    JSInitWorkspace("NetLogo", testCanavsID, JsObject.jsify(model), formatAttribute);
    final result = jsonDecode(JSSaveWorkspace(testCanavsID));

    model["version"] = VersionManager.VERSION;
    model["width"] = CodeWorkspace.DEFAULT_WIDTH;
    model["height"] = CodeWorkspace.DEFAULT_HEIGHT;
    model["blocks"][0]["placement"] = BlockPlacement.starter.index;
    model["blocks"][1]["required"] = false;
    model["blocks"][1]["placement"] = BlockPlacement.child.index;
    model["blocks"][1]["params"][0].remove("unit");
    model["blocks"][1]["params"][0].remove("value");
    model["blocks"][1]["properties"][0].remove("name");
    model["blocks"][1]["properties"][0].remove("unit");
    model["blocks"][1]["properties"][0].remove("value");
    model["blocks"][2]["placement"] = BlockPlacement.starter.index;

    // TODO: This is getting out of hand.  Probably a better way is to have unit tests for each update
    // as we do in the version-manager_test.dart tests,  and then to use the actual update code from
    // the version manager to do the changes so we do not maintain these separate version.
    versionThreeChainsCoordinates(model["program"]["chains"]);
    versionThreePropertiesDisplayUpdates(model["blocks"]);
    versionThreePropertiesDisplayUpdates(model["program"]["chains"][0]);
    versionFourChainUpdates(model["program"]);

    model["program"]["chains"][0]["blocks"][0]["blockColor"] = "#bb5555";
    model["program"]["chains"][0]["blocks"][0]["instanceId"] = 0;
    model["program"]["chains"][0]["blocks"][0]["placement"] = BlockPlacement.starter.index;

    model["program"]["chains"][0]["blocks"][1]["instanceId"] = 1;
    model["program"]["chains"][0]["blocks"][1]["placement"] = BlockPlacement.child.index;
    model["program"]["chains"][0]["blocks"][1]["params"][0].remove("unit");
    model["program"]["chains"][0]["blocks"][1]["properties"][0].remove("name");
    model["program"]["chains"][0]["blocks"][1]["properties"][0].remove("unit");

    model["program"]["chains"][1]["blocks"][0]["instanceId"] = 2;
    model["program"]["chains"][1]["blocks"][0]["blockColor"] = "#bb5555";
    model["program"]["chains"][1]["blocks"][0]["placement"] = BlockPlacement.starter.index;

    model["program"]["chains"][1]["blocks"][1]["instanceId"] = 3;
    model["program"]["chains"][1]["blocks"][1]["placement"] = BlockPlacement.child.index;
    model["program"]["chains"][1]["blocks"][1]["params"][0].remove("unit");
    model["program"]["chains"][1]["blocks"][1]["properties"][0].remove("name");
    model["program"]["chains"][1]["blocks"][1]["properties"][0].remove("unit");
    model["program"]["chains"][1]["blocks"][1]["propertiesDisplay"] = "shown";

    expect(result, equals(model));

    var codeResult = JSExportCode(testCanavsID, null);

    expect(codeResult, equals("to sheep-actions\n  forward (__nt-canvas_24_3_3 + __nt-canvas_24_3_4)\nend\n\nto wolf-actions\n  forward (__nt-canvas_24_1_3 + __nt-canvas_24_1_4)\nend\n\n"));
  });

  test("Model with ifelse properly imports and generates code", () {
    final testCanavsID = "nt-canvas";

    var proc    = { "id": 4, "action": "wolf actions", "format": "to wolf", "type": "nlogo:procedure", "required": true };
    var forward = { "id": 1, "action": "forward", "format": "forward 1", "required": false };
    var wiggle  = { "id": 2, "action": "wiggle", "format": "left random 360", "required": false };
    var chance  = { "id": 0, "action": "chance", "format": "ifelse random 100 < 20", "type": "nlogo:ifelse", "required": false };
    var forwardInst = copyJson(forward);
    forwardInst["instanceId"] = 1;
    var wiggleInst = copyJson(wiggle);
    wiggleInst["instanceId"] = 1;
    var chanceInst = copyJson(chance);
    chanceInst["instanceId"] = 1;
    chanceInst["children"] = [ forwardInst ];
    chanceInst["clauses"] = [ { "children": [ wiggleInst ] }, { "action": "end-chance"} ];
    var procInst = copyJson(proc);
    procInst["instanceId"] = 1;
    var model = {
      "version": 2,
      "blocks": [ proc, chance, forward, wiggle ],
      "program": { "chains": [ [ procInst, chanceInst ] ] }
    };

    print(jsonEncode(model));

    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify(model), formatAttribute);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    print(jsonEncode(result));

    proc["placement"] = BlockPlacement.starter.index;
    chance["placement"] = BlockPlacement.child.index;
    forward["placement"] = BlockPlacement.child.index;
    wiggle["placement"] = BlockPlacement.child.index;

    var forwardExp = copyJson(forwardInst);
    forwardExp["instanceId"] = 2;
    forwardExp["placement"] = BlockPlacement.child.index;
    var wiggleExp = copyJson(wiggleInst);
    wiggleExp["instanceId"] = 3;
    wiggleExp["placement"] = BlockPlacement.child.index;
    var chanceExp = copyJson(chanceInst);
    chanceExp["instanceId"] = 1;
    chanceExp.remove("children");
    chanceExp["clauses"] = [ { "children": [ forwardExp ] }, { "children": [ wiggleExp ] } ];
    chanceExp["placement"] = BlockPlacement.child.index;
    var procExp = copyJson(procInst);
    procExp["instanceId"] = 0;
    procExp["placement"] = BlockPlacement.starter.index;

    var expected = {
      "version": VersionManager.VERSION,
      "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
      "blocks": [ proc, chance, forward, wiggle ],
      "program": { "chains": [ {
        "x": 0, "y": 0,
        "blocks": [ procExp, chanceExp ]
      }] }
    };
    expect(result, equals(expected));

    var codeResult = JSExportCode(testCanavsID, null);

    expect(codeResult, equals("to wolf\n  ifelse random 100 < 20\n  [\n    forward 1\n  ]\n  [\n    left random 360\n  ]\nend\n\n"));
  });

  test("Unversioned model gets IDs added for version 1", () {
    final action = {
      "action": "sheep actions",
      "required": false,
      "params": [ { "type": "int", "default": 10, "step": 1 } ],
      "properties": [ { "type": "int", "default": 9, "step": 1 } ]
    };
    final block = {
      "action": "sheep actions",
      "required": false,
      "params": [ { "type": "int", "default": 5 } ],
      "properties": [ { "type": "int", "default": 4 } ]
    };
    final model = {
      "blocks": [ action ],
      "program": { "chains": [ [ block ] ] }
    };

    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify(model), formatAttribute);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    final expected = {
      "version": VersionManager.VERSION, "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
      "blocks": [ {
        "id": 0,
        "action": "sheep actions",
        "required": false,
        "placement": 1,
        "params": [ { "id": 0, "type": "int", "default": 10, "step": 1 } ],
        "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      } ],
      "program": { "chains": [ {
        "x": 0, "y": 0,
        "blocks": [ {
          "id": 0,
          "instanceId": 0,
          "action": "sheep actions",
          "required": false,
          "placement": 1,
          "params": [ { "id": 0, "type": "int", "default": 10, "value": 10, "step": 1 } ],
          "properties": [ { "id": 1, "type": "int", "default": 9, "value": 9, "step": 1 } ],
          "propertiesDisplay": "shown"
        } ]
      } ] }
    };
    expect(result, equals(expected));
  });

  test("Duplicate menu block IDs get reset automatically", () {

    Map<String, Object> model = {
      "version": VersionManager.VERSION, "width": 300, "height": 300,
      "blocks": [ {
          "id": 0,
          "action": "sheep actions", "required": true, "placement": BlockPlacement.starter.index,
          "params": [ { "id": 0, "type": "int", "default": 10, "step": 2 } ],
          "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
          "propertiesDisplay": "shown"
        },
        {
          "id": 0,
          "action": "wolf actions", "required": true, "placement": BlockPlacement.starter.index,
          "params": [ { "id": 0, "type": "int", "default": 10, "step": 2 } ],
          "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
          "propertiesDisplay": "shown"
        }
      ],
      "program": { "chains": [] }
    };
    final expected = copyJson(model);
    expected["blocks"][1]["id"] = 1;

    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify(model), formatAttribute);
    final result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    expect(result, equals(expected));

  });

  test("Version 1 gets IDs added for new block", () {
    Map<String, Object> action = {
      "action": "sheep actions", "required": true,
      "params": [ { "type": "int", "default": 10, "step": 1 } ],
      "properties": [ { "type": "int", "default": 9, "step": 1 } ]
    };
    Map<String, Object> model = {
      "blocks": [ action ],
      "program": { "chains": [] },
      "version": 1
    };

    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify(model), formatAttribute);
    var result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    Map<String, Object> expected = {
      "version": VersionManager.VERSION, "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
      "blocks": [ {
        "id": 0,
        "action": "sheep actions", "required": true, "placement": BlockPlacement.starter.index,
        "params": [ { "id": 0, "type": "int", "default": 10, "step": 1 } ],
        "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      } ],
      "program": { "chains": [] }
    };
    expect(result, equals(expected));
  });

  test("Version 3 model with select and expression attributes saves correctly", () {
    final model =
{
  "version": 3,
  "height": 500,
  "width": 430,
  "blocks": [
    {
      "action": "procede", "format": "to procede show ({0}+{P0})", "required": true, "limit": 1, "id": 0, "type": "nlogo:procedure",
      "params": [
        {
          "name": "SelectMe", "type": "select", "default": "10",
          "values": [ { "actual": "10", "display": "mars" }, { "actual": "20", "display": "venus" }, { "actual": "30", "display": "mercury" } ],
          "id": 0
        }
      ],
      "properties": [ { "name": "ExpressMe", "type": "num", "default": "5", "id": 1 } ]
    },
    {
      "action": "show", "format": "show ({P0})", "required": false, "id": 1, "type": "nlogo:command",
      "properties": [ { "name": "ExpressMe", "type": "num", "default": "1", "id": 0 } ]
    }
  ],
  "expressions": [
    { "name": "true", "type": "bool" },
    { "name": "false", "type": "bool" },
    { "name": "AND", "type": "bool", "arguments": [ "bool", "bool" ], "format": "({0} and {1})" },
    { "name": "NOT", "type": "bool", "arguments": [ "bool" ], "format": "(not {0})" },
    { "name": ">", "type": "bool", "arguments": [ "num", "num" ] },
    { "name": "random", "type": "num", "arguments": [ "num" ], "format": "random-float {0}" }
  ],
  "program": {
    "chains": [
      [
        {
          "id": 0, "instanceId": 2, "action": "procede", "type": "nlogo:procedure", "format": "to procede show ({0}+{P0})", "required": true, "x": 46, "y": 11,
          "params": [
            {
              "id": 0, "type": "select", "name": "SelectMe", "value": "20", "default": "10",
              "values": [ { "actual": "10", "display": "mars" }, { "actual": "20", "display": "venus" }, { "actual": "30", "display": "mercury" } ]
            }
          ],
          "properties": [
            {
              "id": 1, "type": "num", "name": "ExpressMe",
              "value": { "name": "+", "type": "num",
                "children": [
                  { "name": "5", "type": "num" },
                  { "name": "/", "type": "num",
                    "children": [
                      { "name": "7", "type": "num" },
                      { "name": "2", "type": "num" }
                    ]
                  }
                ]
              },
              "default": "5",
              "expressionValue": "(5 + (7 / 2))"
            }
          ],
          "propertiesDisplay": "hidden"
        },
        {
          "id": 1, "instanceId": 6, "action": "show", "type": "nlogo:command", "format": "show ({P0})", "required": false,
          "properties": [ { "id": 0, "type": "num", "name": "ExpressMe", "value": "3", "default": "1" } ],
          "propertiesDisplay": "hidden"
        }
      ]
    ]
  }
};

    JSInitWorkspace("NetLogo", "nt-canvas", JsObject.jsify(model), formatAttribute);
    final result = jsonDecode(JSSaveWorkspace("nt-canvas"));

    final expected = copyJson(model);
    expected["version"] = VersionManager.VERSION;
    versionFourChainUpdates(expected["program"]);
    expected["blocks"][0]["propertiesDisplay"] = "shown";
    expected["blocks"][0]["placement"] = BlockPlacement.starter.index;
    expected["blocks"][1]["propertiesDisplay"] = "shown";
    expected["blocks"][1]["placement"] = BlockPlacement.child.index;
    expected["program"]["chains"][0]["blocks"][0]["instanceId"] = 0;
    expected["program"]["chains"][0]["blocks"][0]["placement"] = BlockPlacement.starter.index;
    expected["program"]["chains"][0]["blocks"][1]["instanceId"] = 1;
    expected["program"]["chains"][0]["blocks"][1]["placement"] = BlockPlacement.child.index;

    expect(result, equals(expected));
  });

}
