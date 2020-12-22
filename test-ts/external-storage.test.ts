
import { BlockPlacement } from "../src/blocks/block"
import { CodeFormatter } from "../src/blocks/code-formatter"
import { FormatAttributeType } from "../src/ntango"
import { restoreWorkspace } from "../src/serialization/dartify"
import { encodeWorkspace } from "../src/serialization/jsonify"
import { VersionManager } from "../src/versions/version-manager"

test("Unknown properties are maintained in external storage", () => {
  document.body.innerHTML = `<div id="test-space-id"></div>`

  const model: any = {
    "version": VersionManager.VERSION,
    "extraString": "extra information",
    "height": 600, "width": 450,
    "blocks": [{
      "id": 0,
      "action": "sheep actions",
      "extraArray": [ "extra", "values", "to-store" ],
      "required": false,
      "placement": BlockPlacement.STARTER,
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
          "placement": BlockPlacement.STARTER,
          "clauses": [ { "children": [], "open": "[", "close": "]", "extraBool": false } ],
          "params": [ { "id": 0, "type": "int", "extraObject": { "hello": 10 }, "default": 10, "value": 5, "step": 1 } ],
          "properties": [ { "id": 1, "type": "int", "extraNumber": 10, "default": 9, "step": 1 } ],
          "propertiesDisplay": "shown"
        }]
      }]
    }
  }

  const containerId = "test-space-id"
  const dartModel   = restoreWorkspace(containerId, model, createTestFormatter(containerId))
  expect(dartModel.chains[0].blocks[0].properties.get(1)!.getValue()).toBe("9")
  const result      = encodeWorkspace(dartModel)
  model["program"]["chains"][0]["blocks"][0]["properties"][0]["value"] = 9
  expect(result).toStrictEqual(model)
})

function createTestFormatter(containerId: string): CodeFormatter {
  const formatAttribute: FormatAttributeType = (containerId, blockId, instanceId, attributeId, value, attributeType) => value.toString()
  const formatter = new CodeFormatter("NetLogo", formatAttribute, containerId)
  return formatter
}
