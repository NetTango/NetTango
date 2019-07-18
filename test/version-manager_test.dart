import "package:test/test.dart";

//import "dart:convert";

import "../web/dart/ntango.dart";

void main() {
  test("Version1 - blank workspace gets version added", () {
    Map<String, dynamic> model = {};
    VersionManager.updateWorkspace(model);
    expect(model, equals({ "version": VersionManager.VERSION }));
  });

  test("Version1 - block gets id added", () {
    Map<String, Object> action = { "action": "wolf actions" };
    Map<String, Object> model = {
      "blocks": [ action ]
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ { "id": 0, "action": "wolf actions" } ]
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

  test("Version1 - chain block gets id added", () {
    Map<String, Object> action = { "action": "wolf actions" };
    Map<String, Object> chain = { "action": "wolf actions" };
    Map<String, Object> model = {
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ { "id": 0, "action": "wolf actions" } ],
      "program": { "chains": [ [ { "id": 0, "action": "wolf actions" } ] ] }
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

  test("Version1 - chain block with children gets id added", () {
    Map<String, Object> wolf = { "action": "wolf actions" };
    Map<String, Object> forward = { "action": "forward 10" };
    Map<String, Object> chain = { "action": "wolf actions", "children": [ forward ] };
    Map<String, Object> model = {
      "blocks": [ wolf, forward ],
      "program": { "chains": [ [ chain ] ] }
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [
        { "id": 0, "action": "wolf actions" },
        { "id": 1, "action": "forward 10" }
      ],
      "program": { "chains": [ [ { "id": 0, "action": "wolf actions", "children": [ { "id": 1, "action": "forward 10" } ] } ] ] }
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

  test("Version1 - chain block with clauses gets id added", () {
    Map<String, Object> wolf = { "action": "wolf actions" };
    Map<String, Object> forward = { "action": "forward 10" };
    Map<String, Object> chain = { "action": "wolf actions", "clauses": [ { "children": [ forward ] } ] };
    Map<String, Object> model = {
      "blocks": [ wolf, forward ],
      "program": { "chains": [ [ chain ] ] }
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [
        { "id": 0, "action": "wolf actions" },
        { "id": 1, "action": "forward 10" }
      ],
      "program": { "chains": [ [ { "id": 0, "action": "wolf actions", "clauses": [ { "children": [ { "id": 1, "action": "forward 10" } ] } ] } ] ] }
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

  test("Version1 - block, parameter, and property get ids added", () {
    Map<String, Object> action = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    Map<String, Object> model = {
      "blocks": [ action ]
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ {
        "id": 0,
        "action": "wolf actions",
        "params": [ { "id": 0, "type": "num", "default": 10 } ],
        "properties": [ { "id": 1, "type": "num", "default": 9 } ]
      } ]
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

  test("Version1 - chain block, parameter, and property get ids added", () {
    Map<String, Object> action = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 10 } ],
      "properties": [ { "type": "num", "default": 9 } ]
    };
    Map<String, Object> chain = {
      "action": "wolf actions",
      "params": [ { "type": "num", "default": 5 } ],
      "properties": [ { "type": "num", "default": 4 } ]
    };
    Map<String, Object> model = {
      "blocks": [ action ],
      "program": { "chains": [ [ chain ] ] }
    };

    Map<String, Object> expected = {
      "version": VersionManager.VERSION,
      "blocks": [ {
        "id": 0,
        "action": "wolf actions",
        "params": [ { "id": 0, "type": "num", "default": 10 } ],
        "properties": [ { "id": 1, "type": "num", "default": 9 } ]
      } ],
      "program": { "chains": [ [ {
        "id": 0,
        "action": "wolf actions",
        "params": [ { "id": 0, "type": "num", "default": 5 } ],
        "properties": [ { "id": 1, "type": "num", "default": 4 } ]
      } ] ] }
    };

    VersionManager.updateWorkspace(model);
    expect(model, equals(expected));
  });

}
