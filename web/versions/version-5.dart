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
    VersionUtils.updateBlocks(json, addBlockPlacements, addBlockPlacements);
  }

  static void addBlockPlacements(js.JsObject b) {
    if (b.hasProperty("required") && b["required"]) {
      // prior to version 5, `required` also indicated a starter block
      b["allowedPlacement"] = BlockPlacement.starter.index;
    } else {
      b["allowedPlacement"] = BlockPlacement.child.index;
    }
  }
}
