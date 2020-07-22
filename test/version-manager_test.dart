import 'dart:js';

@TestOn("browser")

import "package:test/test.dart";

//import "dart:convert";

import "../web/ntango.dart";
import "./test-utils.dart";

void main() {
  test("Version1 - blank workspace gets version added", () {
    final model = JsObject.jsify({});
    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals({ "version": VersionManager.VERSION }));
  });

  test("Version1 - block gets id added", () {
    final action = { "action": "wolf actions" };
    final model = JsObject.jsify({
      "blocks": [ action ]
    });

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ]
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version1 - chain block gets id added", () {
    final action = { "action": "wolf actions" };
    final chain = { "action": "wolf actions" };
    final model = JsObject.jsify({
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    });

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ],
      "program": { "chains": [ {
        "x": 0, "y": 0,
        "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD } ]
      } ] }
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version1 - chain block with children gets id added", () {
    final wolf = { "action": "wolf actions" };
    final forward = { "action": "forward 10" };
    final chain = { "action": "wolf actions", "children": [ forward ] };
    final model = JsObject.jsify({
      "blocks": [ wolf, forward ],
      "program": { "chains": [ [ chain ] ] }
    });

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [
        { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD },
        { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD }
      ],
      "program": { "chains": [ { "x": 0, "y": 0, "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD, "clauses": [ { "children": [ { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD } ] } ] } ] } ] }
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version1 - chain block with clauses gets id added", () {
    final wolf = { "action": "wolf actions" };
    final forward = { "action": "forward 10" };
    final chain = { "action": "wolf actions", "clauses": [ { "children": [ forward ] } ] };
    final model = JsObject.jsify({
      "blocks": [ wolf, forward ],
      "program": { "chains": [ [ chain ] ] }
    });

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [
        { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD },
        { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD }
      ],
      "program": { "chains": [ { "x": 0, "y": 0, "blocks": [ { "id": 0, "action": "wolf actions", "placement": BlockPlacement.CHILD, "clauses": [ { "children": [] }, { "children": [ { "id": 1, "action": "forward 10", "placement": BlockPlacement.CHILD } ] } ] } ] } ] }
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version1 - block, parameter, and property get ids added", () {
    final action = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    final model = JsObject.jsify({
      "blocks": [ action ]
    });

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [ {
        "id": 0,
        "action": "wolf actions",
        "placement": BlockPlacement.CHILD,
        "params": [ { "id": 0, "type": "num", "default": 10 } ],
        "properties": [ { "id": 1, "type": "num", "default": 9 } ]
      } ]
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version1 - chain block, parameter, and property get ids added", () {
    final action = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    final chain = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 5 } ],
      "properties": [ { "type": "num", "default": 4 } ]
    };
    final model = JsObject.jsify({
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    });

    final expected = {
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
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version2 - select parameter converts to objects", () {
    final action = {
      "id": 0,
      "action": "wolf actions",
      "params": [ { "type": "select", "default": "apples", "values": [ "apples", "oranges" ] } ]
    };
    final chain = {
      "id": 0,
      "action": "wolf actions",
      "params": [ { "type": "select", "default": "apples", "values": [ "apples", "oranges" ] } ]
    };
    final model = JsObject.jsify({
      "version": 1,
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    });

    final expected = {
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
    };

    VersionManager.updateWorkspace(model);
    expect(TestUtils.dartify(model), equals(expected));
  });

  test("Version4 - chain gets x and y coordinates from first block", () {
    final model = JsObject.jsify({
      "version": 3,
      "blocks": [ { "id": 0, "action": "act1" } ],
      "program": {
        "chains": [ [ { "id": 0, "action": "act1", "x": 10, "y": 7 }, { "id": 0, "action": "act1", "x": 5, "y": 3 } ] ]
      }
    });

    VersionManager.updateWorkspace(model);

    final expected = {
      "version": VersionManager.VERSION,
      "blocks": [ { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD } ],
      "program": {
        "chains": [ { "blocks": [ { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD  }, { "id": 0, "action": "act1", "placement": BlockPlacement.CHILD  } ], "x": 10, "y": 7 } ]
      }
    };
    expect(TestUtils.dartify(model), equals(expected));
  });

}
