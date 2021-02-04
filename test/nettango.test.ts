// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { AttributeTypes } from "../src/blocks/attributes/attribute"
import { BlockPlacement } from "../src/blocks/block"
import { CodeWorkspace } from "../src/blocks/code-workspace"
import { NetTango } from "../src/nettango"
import { VersionManager } from "../src/versions/version-manager"

beforeEach( () => document.body.innerHTML = `<div id="nt-canvas"></div>` )

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
}

function copyJson(json: any): any {
  return JSON.parse(JSON.stringify(json))
}

function versionThreeBlockCoordinates(block: any) {
  if (block["x"] !== null && typeof(block["x"]) === "number") {
    block["x"] = block["x"] * 10
  }
  if (block["y"] !== null && typeof(block["y"]) === "number") {
    block["y"] = block["y"] * 10
  }
  if (block["children"] !== null && Array.isArray(block["children"])) {
    versionThreeBlocksCoordinates(block["children"])
  }
  if(block["clauses"] !== null && Array.isArray(block["clauses"])) {
    versionThreeChainsCoordinates(block["clauses"])
  }
}

function versionThreeBlocksCoordinates(blocks: any[]) {
  for (var block of blocks) {
    versionThreeBlockCoordinates(block)
  }
}

function versionThreeChainsCoordinates(chains: any[]) {
  for (var chain of chains) {
    if (Array.isArray(chain)) {
      versionThreeBlocksCoordinates(chain)
    }
  }
}

function versionThreePropertiesDisplayUpdates(blocks: any[]) {
  for (var block of blocks) {
    if (block.hasOwnProperty("properties")) {
      block["propertiesDisplay"] = "shown"
    }
  }
}

function versionFourChainUpdates(program: any) {
  var chainBlocks: any[] = program["chains"]
  var chains: any[] = []
  for (var blocks of chainBlocks) {
    const chain: any = {}
    chain["blocks"] = blocks
    if (blocks.length > 0) {
      const first = blocks[0]
      chain["x"] = (first.hasOwnProperty("x") && first["x"] != null) ? Math.floor(first["x"]) : 0
      chain["y"] = (first.hasOwnProperty("y") && first["y"] != null) ? Math.floor(first["y"]) : 0
      for (var block of blocks) {
        if (block.hasOwnProperty("x")) { delete block["x"] }
        if (block.hasOwnProperty("y")) { delete block["y"] }
      }
    } else {
      chain["x"] = 0
      chain["y"] = 0
    }
    chains.push(chain)
  }
  program["chains"] = chains
}

function formatAttributeForNetTangoExtension(containerId: string, blockId: number, instanceId: number, attributeId: number, value: any, attributeType: AttributeTypes) {
  return `__${containerId}_${blockId}_${instanceId}_${attributeId}`
}

function formatAttributeAsValue(containerId: string, blockId: number, instanceId: number, attributeId: number, value: any, attributeType: AttributeTypes): string {
  return value.toString()
}

test("Smoke test of NetTango restore and save", () => {
  NetTango.restore("NetLogo", "nt-canvas", {}, formatAttributeForNetTangoExtension)
  var result = NetTango.save("nt-canvas")
  var expected = {
    "version": VersionManager.VERSION,
    "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
    "blocks": [],
    "program": { "chains": [] }
  }
  expect(result).toStrictEqual(expected)
})

test("Remove a paramater from a block that is in a chain", () => {
  var json = {
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
  }
  NetTango.restore("NetLogo", "nt-canvas", copyJson(json), formatAttributeForNetTangoExtension)
  var result = NetTango.save("nt-canvas")
  var expected = {
    "version": VersionManager.VERSION,
    "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
    "blocks": [
      {
        "id": 23,
        "action": "wolf actions",
        "placement": BlockPlacement.STARTER,
        "type": "nlogo:procedure",
        "limit": 1,
        "format": "to wolf-actions",
        "blockColor": "#bb5555",
        "required": true
      },
      {
        "id": 24,
        "action": "forward",
        "placement": BlockPlacement.CHILD,
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
            "placement": BlockPlacement.STARTER,
            "type": "nlogo:procedure",
            "format": "to wolf-actions",
            "blockColor": "#bb5555",
            "required": true
          },
          {
            "id": 24,
            "instanceId": 1,
            "action": "forward",
            "placement": BlockPlacement.CHILD,
            "type": "nlogo:command",
            "format": "forward 10",
            "required": false
          }
        ]
      } ]
    }
  }
  expect(result).toStrictEqual(expected)
  var codeResult = NetTango.exportCode("nt-canvas", null)
  expect(codeResult).toStrictEqual("to wolf-actions\n  forward 10\nend\n\n")
})

test("NetLogo code exports in proper order with params", () => {
  const testCanavsID = "nt-canvas"
  const model = copyJson(NETLOGO_MODEL_1)

  // load and then save out the result to make sure it is correct
  NetTango.restore("NetLogo", testCanavsID, copyJson(model), formatAttributeForNetTangoExtension)
  const result = NetTango.save(testCanavsID)

  model["version"] = VersionManager.VERSION
  model["width"] = CodeWorkspace.DEFAULT_WIDTH
  model["height"] = CodeWorkspace.DEFAULT_HEIGHT
  model["blocks"][0]["placement"] = BlockPlacement.STARTER
  model["blocks"][1]["required"] = false
  model["blocks"][1]["placement"] = BlockPlacement.CHILD
  delete model["blocks"][1]["params"][0]["unit"]
  delete model["blocks"][1]["params"][0]["value"]
  delete model["blocks"][1]["properties"][0]["name"]
  delete model["blocks"][1]["properties"][0]["unit"]
  delete model["blocks"][1]["properties"][0]["value"]
  model["blocks"][2]["placement"] = BlockPlacement.STARTER

  // TODO: This is getting out of hand.  Probably a better way is to have unit tests for each update
  // as we do in the version-manager_test.dart tests,  and then to use the actual update code from
  // the version manager to do the changes so we do not maintain these separate version.
  versionThreeChainsCoordinates(model["program"]["chains"])
  versionThreePropertiesDisplayUpdates(model["blocks"])
  console.log(model["program"]["chains"][0])
  versionThreePropertiesDisplayUpdates(model["program"]["chains"][0])
  versionFourChainUpdates(model["program"])

  model["program"]["chains"][0]["blocks"][0]["blockColor"] = "#bb5555"
  model["program"]["chains"][0]["blocks"][0]["instanceId"] = 0
  model["program"]["chains"][0]["blocks"][0]["placement"] = BlockPlacement.STARTER

  model["program"]["chains"][0]["blocks"][1]["instanceId"] = 1
  model["program"]["chains"][0]["blocks"][1]["placement"] = BlockPlacement.CHILD
  delete model["program"]["chains"][0]["blocks"][1]["params"][0]["unit"]
  delete model["program"]["chains"][0]["blocks"][1]["properties"][0]["name"]
  delete model["program"]["chains"][0]["blocks"][1]["properties"][0]["unit"]

  model["program"]["chains"][1]["blocks"][0]["instanceId"] = 2
  model["program"]["chains"][1]["blocks"][0]["blockColor"] = "#bb5555"
  model["program"]["chains"][1]["blocks"][0]["placement"] = BlockPlacement.STARTER

  model["program"]["chains"][1]["blocks"][1]["instanceId"] = 3
  model["program"]["chains"][1]["blocks"][1]["placement"] = BlockPlacement.CHILD
  delete model["program"]["chains"][1]["blocks"][1]["params"][0]["unit"]
  delete model["program"]["chains"][1]["blocks"][1]["properties"][0]["name"]
  delete model["program"]["chains"][1]["blocks"][1]["properties"][0]["unit"]
  model["program"]["chains"][1]["blocks"][1]["propertiesDisplay"] = "shown"

  expect(result).toStrictEqual(model)

  var codeResult = NetTango.exportCode(testCanavsID, null)

  expect(codeResult).toStrictEqual("to sheep-actions\n  forward (__nt-canvas_24_3_3 + __nt-canvas_24_3_4)\nend\n\nto wolf-actions\n  forward (__nt-canvas_24_1_3 + __nt-canvas_24_1_4)\nend\n\n")
})

test("Model with ifelse properly imports and generates code", () => {
  const testCanavsID = "nt-canvas"

  var proc: any    = { "id": 4, "action": "wolf actions", "format": "to wolf", "type": "nlogo:procedure", "required": true }
  var forward: any = { "id": 1, "action": "forward", "format": "forward 1", "required": false }
  var wiggle: any  = { "id": 2, "action": "wiggle", "format": "left random 360", "required": false }
  var chance: any  = { "id": 0, "action": "chance", "format": "ifelse random 100 < 20", "type": "nlogo:ifelse", "required": false, "clauses": [ { "children": [] } ] }
  var forwardInst = copyJson(forward)
  forwardInst["instanceId"] = 1
  var wiggleInst = copyJson(wiggle)
  wiggleInst["instanceId"] = 1
  var chanceInst = copyJson(chance)
  chanceInst["instanceId"] = 1
  chanceInst["children"] = [ forwardInst ]
  chanceInst["clauses"] = [ { "children": [ wiggleInst ] }, { "action": "end-chance"} ]
  var procInst = copyJson(proc)
  procInst["instanceId"] = 1
  var model = {
    "version": 2,
    "blocks": [ proc, chance, forward, wiggle ],
    "program": { "chains": [ [ procInst, chanceInst ] ] }
  }

  NetTango.restore("NetLogo", "nt-canvas", copyJson(model), formatAttributeForNetTangoExtension)
  var result = NetTango.save("nt-canvas")

  proc["placement"] = BlockPlacement.STARTER
  chance["placement"] = BlockPlacement.CHILD
  chance["clauses"] = [ { "children": [] }, { "children": [] } ]
  forward["placement"] = BlockPlacement.CHILD
  wiggle["placement"] = BlockPlacement.CHILD

  var forwardExp = copyJson(forwardInst)
  forwardExp["instanceId"] = 2
  forwardExp["placement"] = BlockPlacement.CHILD
  var wiggleExp = copyJson(wiggleInst)
  wiggleExp["instanceId"] = 3
  wiggleExp["placement"] = BlockPlacement.CHILD
  var chanceExp = copyJson(chanceInst)
  chanceExp["instanceId"] = 1
  delete chanceExp["children"]
  chanceExp["clauses"] = [ { "children": [ forwardExp ] }, { "children": [ wiggleExp ] } ]
  chanceExp["placement"] = BlockPlacement.CHILD
  var procExp = copyJson(procInst)
  procExp["instanceId"] = 0
  procExp["placement"] = BlockPlacement.STARTER

  var expected = {
    "version": VersionManager.VERSION,
    "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
    "blocks": [ proc, chance, forward, wiggle ],
    "program": { "chains": [ {
      "x": 0, "y": 0,
      "blocks": [ procExp, chanceExp ]
    }] }
  }
  expect(result).toStrictEqual(expected)

  var codeResult = NetTango.exportCode(testCanavsID, null)

  expect(codeResult).toStrictEqual("to wolf\n  ifelse random 100 < 20\n  [\n    forward 1\n  ]\n  [\n    left random 360\n  ]\nend\n\n")
})

test("Unversioned model gets IDs added for version 1", () => {
  const action = {
    "action": "sheep actions",
    "required": false,
    "params": [ { "type": "int", "default": 10, "step": 1 } ],
    "properties": [ { "type": "int", "default": 9, "step": 1 } ]
  }
  const block = {
    "action": "sheep actions",
    "required": false,
    "params": [ { "type": "int", "default": 5 } ],
    "properties": [ { "type": "int", "default": 4 } ]
  }
  const model = {
    "blocks": [ action ],
    "program": { "chains": [ [ block ] ] }
  }

  NetTango.restore("NetLogo", "nt-canvas", copyJson(model), formatAttributeForNetTangoExtension)
  var result = NetTango.save("nt-canvas")

  const expected = {
    "version": VersionManager.VERSION, "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
    "blocks": [ {
      "id": 0,
      "action": "sheep actions",
      "required": false,
      "placement": BlockPlacement.CHILD,
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
        "placement": BlockPlacement.CHILD,
        "params": [ { "id": 0, "type": "int", "default": 10, "value": 10, "step": 1 } ],
        "properties": [ { "id": 1, "type": "int", "default": 9, "value": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      } ]
    } ] }
  }
  expect(result).toStrictEqual(expected)
})

test("Duplicate menu block IDs get reset automatically", () => {

  const model: any = {
    "version": VersionManager.VERSION, "width": 300, "height": 300,
    "blocks": [ {
        "id": 0,
        "action": "sheep actions", "required": true, "placement": BlockPlacement.STARTER,
        "params": [ { "id": 0, "type": "int", "default": 10, "step": 2 } ],
        "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      },
      {
        "id": 0,
        "action": "wolf actions", "required": true, "placement": BlockPlacement.STARTER,
        "params": [ { "id": 0, "type": "int", "default": 10, "step": 2 } ],
        "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
        "propertiesDisplay": "shown"
      }
    ],
    "program": { "chains": [] }
  }
  const expected = copyJson(model)
  expected["blocks"][1]["id"] = 1

  NetTango.restore("NetLogo", "nt-canvas", copyJson(model), formatAttributeForNetTangoExtension)
  const result = NetTango.save("nt-canvas")

  expect(result).toStrictEqual(expected)

})

test("Version 1 gets IDs added for new block", () => {
  const action: any = {
    "action": "sheep actions", "required": true,
    "params": [ { "type": "int", "default": 10, "step": 1 } ],
    "properties": [ { "type": "int", "default": 9, "step": 1 } ]
  }
  const model: any = {
    "blocks": [ action ],
    "program": { "chains": [] },
    "version": 1
  }

  NetTango.restore("NetLogo", "nt-canvas", copyJson(model), formatAttributeForNetTangoExtension)
  var result = NetTango.save("nt-canvas")

  const expected: any = {
    "version": VersionManager.VERSION, "height": CodeWorkspace.DEFAULT_HEIGHT, "width": CodeWorkspace.DEFAULT_WIDTH,
    "blocks": [ {
      "id": 0,
      "action": "sheep actions", "required": true, "placement": BlockPlacement.STARTER,
      "params": [ { "id": 0, "type": "int", "default": 10, "step": 1 } ],
      "properties": [ { "id": 1, "type": "int", "default": 9, "step": 1 } ],
      "propertiesDisplay": "shown"
    } ],
    "program": { "chains": [] }
  }
  expect(result).toStrictEqual(expected)
})

test("Version 3 model with select and expression attributes saves correctly", () => {
  const model =
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
}

  NetTango.restore("NetLogo", "nt-canvas", copyJson(model), formatAttributeForNetTangoExtension)
  const result = NetTango.save("nt-canvas")

  const expected = copyJson(model)
  expected["version"] = VersionManager.VERSION
  versionFourChainUpdates(expected["program"])
  expected["blocks"][0]["propertiesDisplay"] = "shown"
  expected["blocks"][0]["placement"] = BlockPlacement.STARTER
  expected["blocks"][1]["propertiesDisplay"] = "shown"
  expected["blocks"][1]["placement"] = BlockPlacement.CHILD
  expected["program"]["chains"][0]["blocks"][0]["instanceId"] = 0
  expected["program"]["chains"][0]["blocks"][0]["placement"] = BlockPlacement.STARTER
  expected["program"]["chains"][0]["blocks"][1]["instanceId"] = 1
  expected["program"]["chains"][0]["blocks"][1]["placement"] = BlockPlacement.CHILD

  expect(result).toStrictEqual(expected)
})

test("Model uses custom clause open and close formats correctly", () => {
  const model = {
    "version": VersionManager.VERSION, "height": 600, "width": 450,
    "blocks": [{
      "id": 0,
      "action": "to sheep-actions",
      "required": true,
      "placement": BlockPlacement.STARTER
    },{
      "id": 1,
      "action": "ifelses",
      "required": false,
      "format": "(ifelse", "closeClauses": ") ; {0}",
      "placement": BlockPlacement.CHILD,
      "clauses": [
        { "children": [], "open": "random {0} > 10 [" },
        { "children": [], "open": "random {0} > 20 [", "close": "] ; {0}" },
        { "children": [] }
      ],
      "params": [ { "id": 0, "type": "int", "name": "sample", "step": 1, "default": 10 } ]
    },
    { "id": 2, "action": "show \"hello!\"", "required": false, "placement": BlockPlacement.CHILD }
    ],
    "program": {
      "chains": [{
        "x": 10, "y": 10,
        "blocks": [{
          "id": 0,
          "instanceId": 0,
          "action": "to sheep-actions",
          "required": true,
          "placement": BlockPlacement.STARTER
        },{
          "id": 1,
          "instanceId": 1,
          "action": "ifelses",
          "required": false,
          "format": "(ifelse", "closeClauses": ") ; {0}",
          "placement": BlockPlacement.CHILD,
          "clauses": [
            { "open": "random {0} > 10 [", "children": [{ "id": 2, "instanceId": 2, "action": "show \"hello!\"", "required": false, "placement": BlockPlacement.CHILD }]},
            { "open": "random {0} > 20 [", "close": "] ; {0}", "children": [{ "id": 2, "instanceId": 3, "action": "show \"hello!\"", "required": false, "placement": BlockPlacement.CHILD} ] },
            { "children": [{ "id": 2, "instanceId": 4, "action": "show \"hello!\"", "required": false, "placement": BlockPlacement.CHILD }] }
          ],
          "params": [ { "id": 0, "type": "int", "name": "sample", "step": 1, "default": 10, "value": 15 } ]
        }]
      }]
    }
  }

  const containerId = "nt-canvas"
  NetTango.restore("NetLogo", containerId, copyJson(model), formatAttributeAsValue)
  const result = NetTango.save(containerId)

  const expected = copyJson(model)
  expect(result).toStrictEqual(expected)

  const codeResult = NetTango.exportCode(containerId, null)
  const expectedCode =
`to sheep-actions
  (ifelse
  random 15 > 10 [
    show "hello!"
  ]
  random 15 > 20 [
    show "hello!"
  ] ; 15
  [
    show "hello!"
  ]
  ) ; 15
end

`
  expect(codeResult).toStrictEqual(expectedCode)
})
