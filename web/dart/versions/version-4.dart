part of NetTango;

class Version4 {

  static void update(js.JsObject json) {
    // locations were stored on blocks, but we're letting HTML/CSS handle layout for us
    // so keep the chain location on the chain itself and remove it from the blocks
    // -Jeremy B May 2020
    addLocationToChains(json);
    VersionUtils.updateBlocks(json, removeBlockLocations, removeBlockLocations);
  }

  static void addLocationToChains(js.JsObject json) {
    if (!json.hasProperty("program") || json["program"] is! js.JsObject) {
      return;
    }

    js.JsObject program = json["program"];
    if (!program.hasProperty("chains") || program["chains"] is! js.JsArray) {
      return;
    }

    js.JsArray chains = js.JsArray.from([]);
    for (js.JsArray blocks in program["chains"]) {
      int x = 0;
      int y = 0;
      if (blocks.isNotEmpty) {
        final first = blocks[0];
        if (first["x"] is num && first["y"] is num) {
          x = first["x"].floor();
          y = first["y"].floor();
        }
      }

      js.JsObject chain = js.JsObject.jsify({
        "blocks": blocks,
        "x": x,
        "y": y
      });
      chains.add(chain);
    }
    program["chains"] = chains;
  }

  static void removeBlockLocations(js.JsObject b) {
    b.deleteProperty("x");
    b.deleteProperty("y");
  }
}
