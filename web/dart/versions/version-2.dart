part of NetTango;

class Version2 {

  static void update(Map json) {
    if (!json.containsKey("blocks") || json["blocks"] is! List) {
      return;
    }

    for (Map<String, Object> b in json["blocks"]) {
      addSelectDisplayToBlock(b);
    }

    if (!json.containsKey("program") || json["program"] is! Map) {
      return;
    }

    Map program = json["program"];
    if (!program.containsKey("chains") || program["chains"] is! List) {
      return;
    }

    for (List bs in program["chains"]) {
      for(Map b in bs) {
        addSelectDisplayToBlock(b);
      }
    }
  }

  static void objectifySelectAttribute(Map attribute) {
    if (!attribute.containsKey("values") || attribute["values"] is! List) {
      return;
    }
    attribute["values"] = attribute["values"].map( (v) { return { "actual": v }; } ).toList();
  }

  static void objectifySelectAttributes(List attributes) {
    for (Map<String, Object> a in attributes.where( (f) => f.containsKey("type") && f["type"] == "select" )) {
      objectifySelectAttribute(a);
    }
  }

  static void addSelectDisplayToBlock(Map b) {
    if (b.containsKey("params") && b["params"] is List) {
      objectifySelectAttributes(b["params"]);
    }

    if (b.containsKey("properties") && b["properties"] is List) {
      objectifySelectAttributes(b["properties"]);
    }

    if (b.containsKey("children") && b["children"] is List) {
      for (var child in b["children"]) {
        if (child is Map) {
          addSelectDisplayToBlock(child);
        }
      }
    }

    if (b.containsKey("clauses") && b["clauses"] is List) {
      for (var clause in b["clauses"]) {
        if (clause is Map && clause.containsKey("children") && clause["children"] is List) {
          for (var child in clause['children']) {
            addSelectDisplayToBlock(child);
          }
        }
      }
    }

  }

}
