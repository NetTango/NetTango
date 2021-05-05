// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { BlockPlacement } from "../src/blocks/block-placement"
import { BlockStyle } from "../src/blocks/block-style"
import { CodeWorkspace } from "../src/blocks/code-workspace"
import { BlockInput, ClauseInput, CodeWorkspaceInput, IntAttributeInput, NumAttributeInput, SelectAttributeInput, UnrestrictedTags } from "../src/types/types"
import { ObjectUtils } from "../src/utils/object-utils"
import { VersionManager } from "../src/versions/version-manager"

const UNRESTRICTED_TAGS: UnrestrictedTags = Object.freeze({ type: "unrestricted" })

const EMPTY_WORKSPACE: CodeWorkspaceInput = {
  version: VersionManager.VERSION
, height: CodeWorkspace.DEFAULT_HEIGHT
, width: CodeWorkspace.DEFAULT_WIDTH
, blockStyles: {
    commandBlockStyle: BlockStyle.DEFAULT_COMMAND_STYLE
  , containerBlockStyle: BlockStyle.DEFAULT_CONTAINER_STYLE
  , starterBlockStyle: BlockStyle.DEFAULT_STARTER_STYLE
  }
, blocks: []
, chainClose: null
, chainOpen: null
, expressions: []
, program: { chains: [] }
, variables: []
}

const EMPTY_BLOCK: BlockInput = {
  id: 0
, action: ""
, blockColor: null
, borderColor: null
, closeClauses: null
, closeStarter: null
, font: null
, format: null
, instanceId: null
, isRequired: false
, isTerminal: false
, limit: 0
, note: null
, placement: BlockPlacement.CHILD
, propertiesDisplay: "shown"
, textColor: null
, type: null
, clauses: []
, params: []
, properties: []
, tags: []
, allowedTags: UNRESTRICTED_TAGS
}

const INT_ATTRIBUTE: IntAttributeInput = {
  id: 0
, default: 10
, name: null
, random: false
, step: 1
, type: "int"
, unit: null
, value: 10
}

const SELECT_ATTRIBUTE: SelectAttributeInput = {
  id: 0
, default: ""
, name: null
, quoteValues: "smart-quote"
, type: "select"
, unit: null
, value: ""
, values: []
}

const EMPTY_CLAUSE: ClauseInput = {
  action: null
, open: null
, close: null
, children: []
, allowedTags: UNRESTRICTED_TAGS
}

test("Version1 - blank workspace gets version added", () => {
  const model = {}
  VersionManager.updateWorkspace(model)
  const expected = EMPTY_WORKSPACE
  expect(model).toStrictEqual(expected)
})

test("Version1 - block gets id added", () => {
  const action = { "action": "wolf actions" }
  const model = {
    "blocks": [ action ]
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  expected.blocks.push(blockDef)

  VersionManager.updateWorkspace(model)

  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block gets id added", () => {
  const action = { "action": "wolf actions" }
  const chain = { "action": "wolf actions" }
  const model = {
    "blocks": [ action ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  expected.blocks.push(blockDef)
  const blockInst = ObjectUtils.clone(blockDef, { instanceId: null })
  expected.program.chains.push({
    x: 0, y: 0, blocks: [blockInst]
  })

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block with children gets id added", () => {
  const wolf = { "action": "wolf actions", "children": [] }
  const forward = { "action": "forward 10" }
  const chain = { "action": "wolf actions", "children": [ forward ] }
  const model = {
    "blocks": [ wolf, forward ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  const clause1: ClauseInput = ObjectUtils.clone(EMPTY_CLAUSE)
  blockDef1.clauses.push(clause1)
  expected.blocks.push(blockDef1)
  const blockDef2 = ObjectUtils.clone(EMPTY_BLOCK, { id: 1, action: "forward 10" })
  expected.blocks.push(blockDef2)
  const blockInst1 = ObjectUtils.clone(blockDef1, { instanceId: null })
  const blockInst2 = ObjectUtils.clone(blockDef2, { instanceId: null })
  blockInst1.clauses[0].children.push(blockInst2)
  expected.program.chains.push({
    x: 0, y: 0, blocks: [blockInst1]
  })

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block with clauses gets id added", () => {
  const wolf = { "action": "wolf actions", "clauses": [ {} ] }
  const forward = { "action": "forward 10" }
  const chain = { "action": "wolf actions", "clauses": [ { "children": [ forward ] } ] }
  const model = {
    "blocks": [ wolf, forward ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  const clause1: ClauseInput = ObjectUtils.clone(EMPTY_CLAUSE)
  blockDef1.clauses.push(clause1)
  const clause2: ClauseInput = ObjectUtils.clone(EMPTY_CLAUSE)
  blockDef1.clauses.push(clause2)
  expected.blocks.push(blockDef1)
  const blockDef2 = ObjectUtils.clone(EMPTY_BLOCK, { id: 1, action: "forward 10" })
  expected.blocks.push(blockDef2)
  const blockInst1 = ObjectUtils.clone(blockDef1, { instanceId: null })
  const blockInst2 = ObjectUtils.clone(blockDef2, { instanceId: null })
  blockInst1.clauses[1].children.push(blockInst2)
  expected.program.chains.push({
    x: 0, y: 0, blocks: [blockInst1]
  })

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - block, parameter, and property get ids added", () => {
  const action = {
    "action": "wolf actions",
    "params": [ { "type": "int", "default": 10 } ],
    "properties": [ { "type": "int", "default": 9 } ]
  }
  const model = {
    "blocks": [ action ]
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  const param1: IntAttributeInput = ObjectUtils.clone(INT_ATTRIBUTE, { default: 10, value: 10 })
  blockDef1.params.push(param1)
  const prop1: IntAttributeInput = ObjectUtils.clone(INT_ATTRIBUTE, { id: 1, default: 9, value: 9 })
  blockDef1.properties.push(prop1)
  expected.blocks.push(blockDef1)

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block, parameter, and property get ids added", () => {
  const action = {
    "action": "wolf actions",
    "params": [ { "type": "int", "default": 10 } ],
    "properties": [ { "type": "int", "default": 9 } ]
  }
  const chain = {
    "action": "wolf actions",
    "params": [ { "type": "int", "default": 5 } ],
    "properties": [ { "type": "int", "default": 4 } ]
  }
  const model = {
    "blocks": [ action ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  const param1: IntAttributeInput = ObjectUtils.clone(INT_ATTRIBUTE, { default: 10, value: 10 })
  blockDef1.params.push(param1)
  const prop1: IntAttributeInput = ObjectUtils.clone(INT_ATTRIBUTE, { id: 1, default: 9, value: 9 })
  blockDef1.properties.push(prop1)
  expected.blocks.push(blockDef1)
  const blockInst1 = ObjectUtils.clone(blockDef1, { instanceId: null })
  blockInst1.params[0].default = 10
  blockInst1.params[0].value = 10
  blockInst1.properties[0].default = 9
  blockInst1.properties[0].value = 9
  expected.program.chains.push({
    x: 0, y: 0, blocks: [blockInst1]
  })

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version2 - select parameter converts to objects", () => {
  const action = {
    "id": 0,
    "action": "wolf actions",
    "params": [ { "type": "select", "default": "apples", "values": [ "apples", "oranges" ] } ]
  }
  const chain = {
    "id": 0,
    "action": "wolf actions",
    "params": [ { "type": "select", "default": "apples", "values": [ "apples", "oranges" ] } ]
  }
  const model = {
    "version": 1,
    "blocks": [ action ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "wolf actions" })
  const param1: SelectAttributeInput = ObjectUtils.clone(SELECT_ATTRIBUTE, {
    default: "apples"
  , value: "apples"
  , values: [{ actual: "apples", display: null }, { actual: "oranges", display: null }]
  })
  blockDef1.params.push(param1)
  expected.blocks.push(blockDef1)
  const blockInst1 = ObjectUtils.clone(blockDef1, { instanceId: null })
  expected.program.chains.push({
    x: 0, y: 0, blocks: [blockInst1]
  })

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version4 - chain gets x and y coordinates from first block", () => {
  const model = {
    "version": 3,
    "blocks": [ { "id": 0, "action": "act1" } ],
    "program": {
      "chains": [ [ { "id": 0, "action": "act1", "x": 10, "y": 7 }, { "id": 0, "action": "act1", "x": 5, "y": 3 } ] ]
    }
  }

  VersionManager.updateWorkspace(model)

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "act1" })
  expected.blocks.push(blockDef1)
  const blockInst1 = ObjectUtils.clone(blockDef1, { instanceId: null })
  const blockInst2 = ObjectUtils.clone(blockDef1, { instanceId: null })
  expected.program.chains.push({
    x: 10, y: 7, blocks: [blockInst1, blockInst2]
  })

  expect(model).toStrictEqual(expected)
})

test("Version5 - select with unquoted values gets `never-quote` set", () => {
  const model = {
    "version": 4,
    "blocks": [ { "id": 0, "action": "act1", "params": [ {
      "id": 0,
      "type": "select",
      "name": "color",
      "default": "red",
      "values": [ { "actual": "red", "display": null }, { "actual": "blue", "display": null }, { "actual": "green", "display": null } ]
    } ] } ]
  }

  VersionManager.updateWorkspace(model)

  const expected = ObjectUtils.clone(EMPTY_WORKSPACE)
  const blockDef1 = ObjectUtils.clone(EMPTY_BLOCK, { action: "act1" })
  const param1: SelectAttributeInput = ObjectUtils.clone(SELECT_ATTRIBUTE, {
    default: "red"
  , name: "color"
  , quoteValues: "never-quote"
  , value: "red"
  , values: [{ actual: "red", display: null }, { actual: "blue", display: null }, { actual: "green", display: null }]
  })
  blockDef1.params.push(param1)
  expected.blocks.push(blockDef1)

  expect(model).toStrictEqual(expected)
})
