part of NetTango;

class Version3 {

  static void update(JsObject json) {
    VersionUtils.updateBlocks3(json, (b) {}, unscaleBlockLocation);

    if (!json.hasProperty("program") || json["program"] is! JsObject) {
      return;
    }

    JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! JsArray) {
      return;
    }

    removeEmptyChains(json["program"]);
  }

  // This looks a little weird, but previously chains would be added that the user did not create
  // in order to have the procedures available so code would compile.  We're more explicit about
  // this now, and any version 2 model we see that has these empty procedures would've had them
  // removed anyway (not displayed to the user).  Hence we clear them so users aren't surprised
  // to find procedures they hadn't previously added.  -Jeremy B Jan-2020
  static void removeEmptyChains(JsObject program) {
    JsArray chains = program["chains"];
    program["chains"] = JsArray.from(chains.where( (chain) {
      if (chain is! JsArray) {
        return false;
      }
      if (chain.length == 0) {
        return false;
      }
      if (chain.length > 1) {
        return true;
      }
      JsObject first = chain[0];
      if (first.hasProperty("required") && first["required"]) {
        return false;
      }
      return true;
    }));
  }

  static void unscaleBlockLocation(JsObject b) {
    if (b["x"] is num) {
      b["x"] = (b["x"] * 10);
    }
    if (b["y"] is num) {
      b["y"] = (b["y"] * 10);
    }
  }

}
