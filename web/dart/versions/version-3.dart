part of NetTango;

class Version3 {

  static void update(Map json) {
    VersionUtils.updateBlocks(json, (b) {}, unscaleBlockLocation);
  }

  static void unscaleBlockLocation(Map b) {
    if (b["x"] is num) {
      b["x"] = (b["x"] * 10);
    }
    if (b["y"] is num) {
      b["y"] = (b["y"] * 10);
    }
  }

}
