part of NetTango;

class VersionManager {
  static final VERSION = 4;

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

    definition["version"] = VERSION;
  }
}
