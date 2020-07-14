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

class VersionManager {
  static final VERSION = 5;

  static void updateWorkspace(js.JsObject definition) {
    int version = definition.hasProperty("version") ? definition["version"] : 0;

    if (version > VERSION) {
      throw "Somehow the given model version ($version) is greater than the supported NetTango version ($VERSION).";
    }

    if (version < 1) {
      Version1.update(definition);
    }

    if (version < 2) {
      Version2.update(definition);
    }

    if (version < 3) {
      Version3.update(definition);
    }

    if (version < 4) {
      Version4.update(definition);
    }

    if (version < 5) {
      Version5.update(definition);
    }

    definition["version"] = VERSION;
  }
}
