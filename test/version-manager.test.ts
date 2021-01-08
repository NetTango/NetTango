// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { BlockPlacement } from "../src/blocks/block"
import { VersionManager } from "../src/versions/version-manager"

test("Version1 - blank workspace gets version added", () => {
  const model = {}
  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual({ "version": VersionManager.VERSION })
})

test("Version1 - block gets id added", () => {
  const action = { "action": "wolf actions" }
  const model = {
    "blocks": [ action ]
  }

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ]
  }

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

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ],
    "program": { "chains": [ {
      "x": 0, "y": 0,
      "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ]
    } ] }
  }

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block with children gets id added", () => {
  const wolf = { "action": "wolf actions" }
  const forward = { "action": "forward 10" }
  const chain = { "action": "wolf actions", "children": [ forward ] }
  const model = {
    "blocks": [ wolf, forward ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [
      { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD },
      { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD }
    ],
    "program": { "chains": [ { "x": 0, "y": 0, "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD, "clauses": [ { "children": [ { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD } ] } ] } ] } ] }
  }

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block with clauses gets id added", () => {
  const wolf = { "action": "wolf actions" }
  const forward = { "action": "forward 10" }
  const chain = { "action": "wolf actions", "clauses": [ { "children": [ forward ] } ] }
  const model = {
    "blocks": [ wolf, forward ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [
      { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD },
      { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD }
    ],
    "program": { "chains": [ { "x": 0, "y": 0, "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD, "clauses": [ { "children": [] }, { "children": [ { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD } ] } ] } ] } ] }
  }

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - block, parameter, and property get ids added", () => {
  const action = {
    "action": "wolf actions",
    "params": [ { "type": "num", "default": 10 } ],
    "properties": [ { "type": "num", "default": 9 } ]
  }
  const model = {
    "blocks": [ action ]
  }

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ {
      "id": 0,
      "action": "wolf actions",
      "placement": BlockPlacement.CHILD,
      "params": [ { "id": 0, "type": "num", "default": 10 } ],
      "properties": [ { "id": 1, "type": "num", "default": 9 } ]
    } ]
  }

  VersionManager.updateWorkspace(model)
  expect(model).toStrictEqual(expected)
})

test("Version1 - chain block, parameter, and property get ids added", () => {
  const action = {
    "action": "wolf actions",
    "params": [ { "type": "num", "default": 10 } ],
    "properties": [ { "type": "num", "default": 9 } ]
  }
  const chain = {
    "action": "wolf actions",
    "params": [ { "type": "num", "default": 5 } ],
    "properties": [ { "type": "num", "default": 4 } ]
  }
  const model = {
    "blocks": [ action ],
    "program": { "chains": [ [ chain ] ] }
  }

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ {
      "id": 0,
      "action": "wolf actions",
      "placement": BlockPlacement.CHILD,
      "params": [ { "id": 0, "type": "num", "default": 10 } ],
      "properties": [ { "id": 1, "type": "num", "default": 9 } ]
    } ],
    "program": { "chains": [ {
      "x": 0, "y": 0,
      "blocks": [ {
        "id": 0,
        "action": "wolf actions",
        "placement": BlockPlacement.CHILD,
        "params": [ { "id": 0, "type": "num", "default": 5 } ],
        "properties": [ { "id": 1, "type": "num", "default": 4 } ]
      } ]
    } ] }
  }

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

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ {
      "id": 0,
      "action": "wolf actions",
      "placement": BlockPlacement.CHILD,
      "params": [ { "type": "select", "default": "apples", "values": [ { "actual": "apples" }, { "actual": "oranges" } ] } ]
    } ],
    "program": { "chains": [ {
      "x": 0, "y": 0,
      "blocks": [ {
        "id": 0,
        "action": "wolf actions",
        "placement": BlockPlacement.CHILD,
        "params": [ { "type": "select", "default": "apples", "values": [ { "actual": "apples" }, { "actual": "oranges" } ] } ]
      } ]
    } ] }
  }

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

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD } ],
    "program": {
      "chains": [ { "blocks": [ { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD  }, { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD  } ], "x": 10, "y": 7 } ]
    }
  }
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
      "values": [ { "actual": "red", "display": "" }, { "actual": "blue", "display": "" }, { "actual": "green", "display": "" } ]
    } ] } ]
  }

  VersionManager.updateWorkspace(model)

  const expected = {
    "version": VersionManager.VERSION,
    "blocks": [ { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD, "params": [ {
      "id": 0,
      "type": "select",
      "name": "color",
      "default": "red",
      "quoteValues": "never-quote",
      "values": [ { "actual": "red", "display": "" }, { "actual": "blue", "display": "" }, { "actual": "green", "display": "" } ]
    } ] } ]
  }
  expect(model).toStrictEqual(expected)
})
