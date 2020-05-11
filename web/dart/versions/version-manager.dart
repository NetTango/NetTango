part of NetTango;

class VersionManager {
  static final VERSION = 4;

  static void updateWorkspace(JsObject json) {
    int version = json.hasProperty("version") ? json["version"] : 0;

    if (version > VERSION) {
      throw "Somehow the given model version ($version) is greater than the supported NetTango version ($VERSION).";
    }

    if (version < 1) {
      Version1.update(json);
    }

    if (version < 2) {
      Version2.update(json);
    }

    if (version < 3) {
      Version3.update(json);
    }

    if (version < 4) {
      Version4.update(json);
    }

    json["version"] = VERSION;
  }
}
