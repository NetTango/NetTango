part of NetTango;

class Version3 {

  static void update(Map json) {
    VersionUtils.updateBlocks(json, (b) {}, unscaleBlockLocation);

    if (!json.containsKey("program") || json["program"] is! Map) {
      return;
    }

    Map program = json["program"];
    if (!program.containsKey("chains") || program["chains"] is! List) {
      return;
    }

    removeEmptyChains(json["program"]);
  }

  // This looks a little weird, but previously chains would be added that the user did not create
  // in order to have the procedures available so code would compile.  We're more explicit about
  // this now, and any version 2 model we see that has these empty procedures would've had them
  // removed anyway (not displayed to the user).  Hence we clear them so users aren't surprised
  // to find procedures they hadn't previously added.  -Jeremy B Jan-2020
  static void removeEmptyChains(Map program) {
    List chains = program["chains"];
    program["chains"] = chains.where( (chain) {
      if (chain is! List) {
        return false;
      }
      if (chain.length == 0) {
        return false;
      }
      if (chain.length > 1) {
        return true;
      }
      if (chain[0].containsKey("required") && chain[0]["required"]) {
        return false;
      }
      return true;
    }).toList();
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
