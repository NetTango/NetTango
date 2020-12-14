// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

CodeWorkspace restoreWorkspace(String containerId, js.JsObject workspaceEnc, CodeFormatter formatter) {
  if (workspaceEnc["version"] != VersionManager.VERSION) {
    throw "The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${workspaceEnc["version"]}.";
  }

  final workspace = new CodeWorkspace(containerId, formatter);
  workspace.storage.set(workspaceEnc);

  workspace.height = workspaceEnc["height"] is int ? workspaceEnc["height"] : CodeWorkspace.DEFAULT_HEIGHT;
  workspace.width  = workspaceEnc["width"]  is int ? workspaceEnc["width"]  : CodeWorkspace.DEFAULT_WIDTH;

  workspace.chainOpen  = StringUtils.toStr(workspaceEnc["chainOpen"],  null);
  workspace.chainClose = StringUtils.toStr(workspaceEnc["chainClose"], null);

  if (workspaceEnc.hasProperty("blockStyles")) {
    workspace.starterBlockStyle   = restoreBlockStyle(workspaceEnc["blockStyles"]["starterBlockStyle"],   BlockStyle.DEFAULT_STARTER_COLOR);
    workspace.containerBlockStyle = restoreBlockStyle(workspaceEnc["blockStyles"]["containerBlockStyle"], BlockStyle.DEFAULT_CONTAINER_COLOR);
    workspace.commandBlockStyle   = restoreBlockStyle(workspaceEnc["blockStyles"]["commandBlockStyle"],   BlockStyle.DEFAULT_COMMAND_COLOR);
  }

  if (workspaceEnc["blocks"] is js.JsArray) {
    restoreMenuBlocks(workspace, workspaceEnc["blocks"]);
  }

  if (workspaceEnc["variables"] is js.JsArray) {
    workspace.variables = workspaceEnc["variables"];
  }

  if (workspaceEnc["expressions"] is js.JsArray) {
    restoreExpressionDefinitions(workspace, workspaceEnc["expressions"]);
  }

  if (workspaceEnc["program"] is js.JsObject) {
    restoreProgram(workspace, workspaceEnc["program"]);
  }

  return workspace;
}

void restoreMenuBlocks(CodeWorkspace workspace, js.JsArray blockEncs) {
  // pre-check block IDs for our next one, as they may be out of order
  // and we'll need to set any that aren't set (new blocks) while processing
  for (js.JsObject b in blockEncs) {
    int id = b["id"];
    if (id != null && id > workspace.nextBlockId) {
      workspace.nextBlockId = id + 1;
    }
  }
  for (js.JsObject b in blockEncs) {
    Block block = restoreMenuBlock(workspace, b);
    if (workspace.menu.getBlockById(block.id) != null) {
      // duplicate block ID - wipe the ID and re-generate a new block with a new ID
      block.id = null;
      block = block.clone(true);
      b["id"] = block.id;
    }
    int limit = NumUtils.toInt(b["limit"], -1);
    workspace.menu.addBlock(block, limit);
  }
}

Block restoreMenuBlock(CodeWorkspace workspace, js.JsObject blockEnc) {
  String action = StringUtils.toStr(blockEnc["action"]);
  int id = blockEnc["id"];
  Block block = new Block(workspace, id, action, true);
  block.storage.set(blockEnc);
  blockEnc["id"] = block.id;

  if (blockEnc["clauses"] is js.JsArray) {
    block.clauses = new List<Clause>();
    for (int i = 0; i < blockEnc["clauses"].length; i++) {
      final clauseEnc = blockEnc["clauses"][i];
      Clause chain = restoreClause(workspace, block, clauseEnc, i);
      block.clauses.add(chain);
    }
  }

  block.type = StringUtils.toStr(blockEnc["type"]);
  block.format = StringUtils.toStr(blockEnc["format"], null);
  block.closeClauses = StringUtils.toStr(blockEnc["closeClauses"], null);
  block.closeStarter = StringUtils.toStr(blockEnc["closeStarter"], null);
  block.note = StringUtils.toStr(blockEnc["note"], null);
  block.blockColor = StringUtils.toStr(blockEnc["blockColor"], null);
  block.textColor = StringUtils.toStr(blockEnc["textColor"], null);
  block.borderColor = StringUtils.toStr(blockEnc["borderColor"], null);
  block.font = StringUtils.toStr(blockEnc["font"], null);
  block.isRequired = BoolUtils.toBool(blockEnc["required"], block.isRequired);
  block.isTerminal = BoolUtils.toBool(blockEnc["isTerminal"], block.isTerminal);
  block.placement = StringUtils.toStr(blockEnc["placement"], block.placement);

  if (blockEnc["allowedTags"] != null) {
    block.allowedTags = restoreConcreteTags(blockEnc["allowedTags"]);
  }

  if (blockEnc["tags"] is js.JsArray) {
    for (String tag in blockEnc["tags"]) {
      block.tags.add(tag);
    }
  }

  if (blockEnc["params"] is js.JsArray) {
    for (js.JsObject p in blockEnc["params"]) {
      Attribute param = restoreAttribute(block, p);
      if (param != null) {
        block.params[param.id] = param;
      }
    }
  }

  if (blockEnc["properties"] is js.JsArray) {
    for (js.JsObject p in blockEnc["properties"]) {
      Attribute prop = restoreAttribute(block, p);
      if (prop != null) {
        block.properties[prop.id] = prop;
      }
    }
    block.propertiesDisplay = StringUtils.toStr(blockEnc["propertiesDisplay"], "shown");
  }

  return block;
}

Clause restoreClause(CodeWorkspace workspace, Block block, js.JsObject clauseEnc, int clauseIndex) {
  final open    = StringUtils.toStr(clauseEnc["open"],   null);
  final close   = StringUtils.toStr(clauseEnc["close"],  null);
  final action  = StringUtils.toStr(clauseEnc["action"], null);
  Clause clause = new Clause(block, clauseIndex, action, open, close);
  clause.storage.set(clauseEnc);

  if (clauseEnc["allowedTags"] != null) {
    clause.allowedTags = restoreAllowedTags(clause, clauseEnc["allowedTags"]);
  }

  if (clauseEnc["children"] is js.JsArray) {
    clause.blocks = restoreBlocks(workspace, clauseEnc["children"]);
  }

  return clause;
}

List<Block> restoreBlocks(CodeWorkspace workspace, js.JsArray children) {
  List<Block> blocks = new List<Block>();
  for (js.JsObject blockEnc in children) {
    Block block = restoreMenuBlock(workspace, blockEnc);
    blocks.add(block);
  }
  return blocks;
}

Attribute restoreAttribute(Block block, js.JsObject attributeEnc) {
  Attribute attribute;

  int id = attributeEnc["id"];

  switch(StringUtils.toStr(attributeEnc["type"], "num")) {

    case "int":
      IntAttribute a = attribute = new IntAttribute(block, id);
      a.random   = BoolUtils.toBool(attributeEnc["random"], null);
      a.stepSize = NumUtils.toNum(attributeEnc["step"], a.stepSize);
      break;

    case "num":
      attribute = new ExpressionAttribute(block, id, "num");
      break;

    case "bool":
      attribute = new ExpressionAttribute(block, id, "bool");
      break;

    case "range":
      RangeAttribute a = attribute = new RangeAttribute(block, id);
      a.random   = BoolUtils.toBool(attributeEnc["random"], false);
      a.stepSize = NumUtils.toNum(attributeEnc["step"], a.stepSize);
      a.minValue = NumUtils.toNum(attributeEnc["min"], a.minValue);
      a.maxValue = NumUtils.toNum(attributeEnc["max"], a.maxValue);
      break;

    case "select":
      SelectAttribute a = attribute = new SelectAttribute(block, id);
      a.quoteValues = StringUtils.toStr(attributeEnc["quoteValues"], null);
      if (attributeEnc["values"] is js.JsArray && attributeEnc["values"].length > 0) {
        for (final valueEnc in attributeEnc["values"]) {
          final value = new Option(valueEnc["actual"], valueEnc["display"]);
          a.values.add(value);
        }
      }
      break;

    case "text":
      attribute = new TextAttribute(block, id);
      break;

    default:
      attribute = new TextAttribute(block, id);
      break;

  }

  attribute.name = StringUtils.toStr(attributeEnc["name"], "");
  attribute.unit = StringUtils.toStr(attributeEnc["unit"], "");
  attribute.setDefaultValue(StringUtils.toStr(attributeEnc["default"], ""));

  attribute.storage.set(attributeEnc);
  return attribute;
}

void restoreExpressionDefinitions(CodeWorkspace workspace, js.JsArray definitionEncs) {
  if (definitionEncs == null || definitionEncs.length == 0) {
    return;
  }

  for (js.JsObject definitionEnc in definitionEncs) {
    final definition = new ExpressionDefinition(definitionEnc["name"], definitionEnc["type"]);
    definition.format = definitionEnc["format"];
    if (definitionEnc.hasProperty("arguments") && definitionEnc["arguments"] is js.JsArray) {
      for (String argument in definitionEnc["arguments"]) {
        definition.arguments.add(argument);
      }
    }
    workspace.expressionDefinitions.add(definition);
  }
}

void restoreProgram(CodeWorkspace workspace, js.JsObject programEnc) {
  if (programEnc["chains"] is! js.JsArray) {
    return;
  }

  for (js.JsObject chain in programEnc["chains"]) {
    restoreChain(workspace, chain);
  }
}

void restoreChain(CodeWorkspace workspace, js.JsObject chainEnc) {
  Chain chain = new Chain(workspace);
  chain.storage.set(chainEnc);

  if (chainEnc["x"] is num && chainEnc["y"] is num) {
    chain.x = chainEnc["x"].floor();
    chain.y = chainEnc["y"].floor();
  }

  workspace.chains.add(chain);
  if (chainEnc["blocks"] is! js.JsArray) {
    return;
  }

  for (js.JsObject b in chainEnc["blocks"]) {
    Block block = restoreChainBlock(workspace, b);
    if (block != null) {
      chain.blocks.add(block);
    }
  }
}

Block restoreChainBlock(CodeWorkspace workspace, js.JsObject blockEnc) {
  Block proto = workspace.menu.getBlockById(blockEnc["id"]);
  if (proto == null) {
    print("No prototype block found for id: ${blockEnc["id"]}");
    print(workspace.menu.slots.map( (s) { return s.block.id; }));
    return null;
  }

  Block block = proto.clone(false);
  block.storage.set(blockEnc);

  block.propertiesDisplay = StringUtils.toStr(blockEnc["propertiesDisplay"], "shown");
  restoreChainBlockAttributeValues(block.params, blockEnc["params"]);
  restoreChainBlockAttributeValues(block.properties, blockEnc["properties"]);

  if (blockEnc["clauses"] is js.JsArray) {
    int clauseIndex = 0;
    for (js.JsObject clauseEnc in blockEnc["clauses"]) {
      if (clauseIndex >= block.clauses.length) {
        break;
      }
      if (clauseEnc["children"] is! js.JsArray) { continue; }
      Clause clause = block.clauses[clauseIndex];
      clause.storage.set(clauseEnc);

      for (js.JsObject childJson in clauseEnc["children"]) {
        Block child = restoreChainBlock(workspace, childJson);
        if (child != null) {
          clause.blocks.add(child);
        }
      }
      clauseIndex++;
    }
  }

  return block;
}

// we trust the `attribute.clone()` that made each chain block attribute instance got the rest of the properties
// this just puts the values back in place.
void restoreChainBlockAttributeValues(Map<int, Attribute> blockAttributes, js.JsArray attributeEncs) {
  if (attributeEncs == null) {
    return;
  }

  for (js.JsObject attributeEnc in attributeEncs) {

    if (!attributeEnc.hasProperty("id") || !blockAttributes.containsKey(attributeEnc["id"])) {
      continue;
    }

    final blockAttribute = blockAttributes[attributeEnc["id"]];
    blockAttribute.storage.set(attributeEnc);

    if (attributeEnc["value"] == null) {
      continue;
    }

    if ([ "bool", "num" ].contains(blockAttribute.type)) {
      if (blockAttribute is! ExpressionAttribute) {
        throw new Exception("A non-expression attribute cannot have a type of 'num' or 'bool'.");
      }
      final expressionAttibute = blockAttribute as ExpressionAttribute;
      if (attributeEnc["value"] is js.JsObject) {
        final builder = restoreExpressionBuilder(expressionAttibute.block.workspace, expressionAttibute.type, attributeEnc["value"]);
        expressionAttibute.builder = builder;
      } else {
        final builder = restoreExpressionValue(expressionAttibute.block.workspace, expressionAttibute.type, attributeEnc["value"].toString());
        expressionAttibute.builder = builder;
      }
    } else {
      if (attributeEnc["value"] is js.JsObject) {
        // only expressions can have an object as a value, so...
        blockAttribute.setValue(StringUtils.toStr(attributeEnc["defaultValue"], ""));
      } else {
        blockAttribute.setValue(StringUtils.toStr(attributeEnc["value"], ""));
      }
    }
  }
}

ExpressionBuilder restoreExpressionValue(CodeWorkspace workspace, String type, String value) {
  final builder = new ExpressionBuilder(workspace, type);
  final expression = new Expression(builder, type);
  expression.name = value;
  builder.root = expression;
  return builder;
}

ExpressionBuilder restoreExpressionBuilder(CodeWorkspace workspace, String type, js.JsObject expressionEnc) {
  final builder = new ExpressionBuilder(workspace, type);
  if (expressionEnc != null && expressionEnc != "") {
    builder.root = restoreExpression(builder, type, expressionEnc);
  }
  return builder;
}

Expression restoreExpression(ExpressionBuilder builder, String type, js.JsObject expressionEnc) {
  final expression = new Expression(builder, type);
  expression.name = StringUtils.toStr(expressionEnc["name"]);
  if (expressionEnc["format"] != null) {
    expression.format = expressionEnc["format"];
  }

  if (expressionEnc["children"] is js.JsArray) {
    for (js.JsObject childEnc in expressionEnc["children"]) {
      Expression child = restoreExpression(builder, type, childEnc);
      expression.children.add(child);
    }
  }
  return expression;
}

BlockStyle restoreBlockStyle(js.JsObject styleEnc, String blockColorDefault) {
  if (styleEnc == null) {
    return new BlockStyle() .. blockColor = blockColorDefault;
  }
  return new BlockStyle() ..
    blockColor  = StringUtils.toStr(styleEnc["blockColor"],  blockColorDefault)    ..
    textColor   = StringUtils.toStr(styleEnc["textColor"],   BlockStyle.DEFAULT_TEXT_COLOR)   ..
    borderColor = StringUtils.toStr(styleEnc["borderColor"], BlockStyle.DEFAULT_BORDER_COLOR) ..
    fontWeight  = StringUtils.toStr(styleEnc["fontWeight"],  "") ..
    fontSize    = StringUtils.toStr(styleEnc["fontSize"],    "") ..
    fontFace    = StringUtils.toStr(styleEnc["fontFace"],    "");
}

AllowedTags restoreAllowedTags(Clause clause, js.JsObject allowedTagsEnc) {
  final String type = allowedTagsEnc["type"];
  switch (type) {

    case "inherit":
      return new InheritTags(clause);

    case "any-of":
    case "unrestricted":
      return restoreConcreteTags(allowedTagsEnc);

    default:
      throw new Exception("Unknown AllowedTags type: ${type}, cannot restore.");
  }
}

ConcreteTags restoreConcreteTags(js.JsObject concreteTags) {
  if (concreteTags["tags"] == null || concreteTags["tags"] is! js.JsArray) {
    return new UnrestrictedTags();
  }
  final Iterable<String> tags = (concreteTags["tags"] as js.JsArray).map( (t) => t as String );
  final anyOf = new AnyOfTags(tags);
  return anyOf;
}
