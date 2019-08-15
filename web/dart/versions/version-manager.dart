part of NetTango;

class VersionManager {
  static final VERSION = 2;

  static void updateWorkspace(Map<String, Object> json) {
    int version = json.containsKey("version") ? json["version"] : 0;

    if (version > VERSION) {
      throw "Somehow the given model version ($version) is greater than the supported NetTango version ($VERSION).";
    }

    if (version < 1) {
      Version1.update(json);
    }

    if (version < 2) {
      Version2.update(json);
    }

    json["version"] = VERSION;
  }
}
