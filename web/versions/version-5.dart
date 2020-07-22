/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

part of NetTango;

class Version5 {

  static void update(js.JsObject json) {
    VersionUtils.updateBlocks(json, moveChildrenToClauses, moveChildrenToClauses);
    VersionUtils.updateBlocks(json, addBlockPlacements, addBlockPlacements);
  }

  static void addBlockPlacements(js.JsObject b) {
    if (b.hasProperty("required") && b["required"]) {
      // prior to version 5, `required` also indicated a starter block
      b["placement"] = BlockPlacement.STARTER;
    } else {
      b["placement"] = BlockPlacement.CHILD;
    }
  }

  static void moveChildrenToClauses(js.JsObject b) {
    if (b.hasProperty("children")) {
      final blocks = b["children"];
      b.deleteProperty("children");
      final firstClause = js.JsObject.jsify({});
      firstClause["children"] = blocks;
      if (b.hasProperty("clauses")) {
        if (b["clauses"] is js.JsArray) {
          b["clauses"].insert(0, firstClause);
        } else {
          // uhhh... some messed up data?
          print("Found a block with clauses that was not an array?  Block ID: ${b["id"]}.  Replacing value.");
          b["clauses"] = js.JsArray.from([]);
          b["clauses"].add(firstClause);
        }
      } else {
        // no `clauses` property
        b["clauses"] = js.JsArray.from([]);
        b["clauses"].add(firstClause);
      }
    } else {
      // no `children` field, but if a `clauses` array exists, that means there is a phantom clause needed
      if (b.hasProperty("clauses") && b["clauses"] is js.JsArray) {
        final firstClause = js.JsObject.jsify({ "children": [] });
        b["clauses"].insert(0, firstClause);
      }
    }
  }
}
