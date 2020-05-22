part of NetTango;

CodeWorkspace restoreWorkspace(String containerId, js.JsObject definition, CodeFormatter formatter) {
  if (definition["version"] != VersionManager.VERSION) {
    throw "The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${definition["version"]}.";
  }

  final workspace = new CodeWorkspace(containerId, formatter);
  workspace.height = definition["height"] is int ? definition["height"] : CodeWorkspace.DEFAULT_HEIGHT;
  workspace.width  = definition["width"]  is int ? definition["width"]  : CodeWorkspace.DEFAULT_WIDTH;

  if (definition.hasProperty("blockStyles")) {
    workspace.starterBlockStyle   = restoreBlockStyle(definition["blockStyles"]["starterBlockStyle"],   BlockStyle.DEFAULT_STARTER_COLOR);
    workspace.containerBlockStyle = restoreBlockStyle(definition["blockStyles"]["containerBlockStyle"], BlockStyle.DEFAULT_CONTAINER_COLOR);
    workspace.commandBlockStyle   = restoreBlockStyle(definition["blockStyles"]["commandBlockStyle"],   BlockStyle.DEFAULT_COMMAND_COLOR);
  }

  if (definition["blocks"] is js.JsArray) {
    restoreMenuBlocks(workspace, definition["blocks"]);
  }

  if (definition["variables"] is js.JsArray) {
    workspace.variables = definition["variables"];
  }

  if (definition["expressions"] is js.JsArray) {
    restoreExpressionDefinitions(workspace, definition["expressions"]);
  }

  if (definition["program"] is js.JsObject) {
    restoreProgram(workspace, definition["program"]);
  }

  return workspace;
}

void restoreMenuBlocks(CodeWorkspace workspace, js.JsArray blockDefs) {
  // pre-check block IDs for our next one, as they may be out of order
  // and we'll need to set any that aren't set (new blocks) while processing
  for (js.JsObject b in blockDefs) {
    int id = b["id"];
    if (id != null && id > workspace.nextBlockId) {
      workspace.nextBlockId = id + 1;
    }
  }
  for (js.JsObject b in blockDefs) {
    Block block = restoreMenuBlock(workspace, b);
    if (workspace.menu.getBlockById(block.id) != null) {
      // duplicate block ID - wipe the ID and re-generate a new block with a new ID
      block.id = null;
      block = block.clone(true);
      b["id"] = block.id;
    }
    int limit = toInt(b["limit"], -1);
    workspace.menu.addBlock(block, limit);
  }
}

Block restoreMenuBlock(CodeWorkspace workspace, js.JsObject blockDef) {
  String action = toStr(blockDef["action"]);
  int id = blockDef["id"];
  Block block = new Block(workspace, id, action, true);
  blockDef["id"] = block.id;

  if (blockDef["clauses"] is js.JsArray) {
    block.clauses = new List<Clause>();
    for (int i = 0; i < blockDef["clauses"].length; i++) {
      final clauseDef = blockDef["clauses"][i];
      Clause chain = restoreClause(workspace, block, clauseDef, i);
      block.clauses.add(chain);
    }
  }

  block.type = toStr(blockDef["type"]);
  block.format = toStr(blockDef["format"], null);
  block.note = toStr(blockDef["note"], null);
  block.blockColor = toStr(blockDef["blockColor"], null);
  block.textColor = toStr(blockDef["textColor"], null);
  block.borderColor = toStr(blockDef["borderColor"], null);
  block.font = toStr(blockDef["font"], null);
  block.required = toBool(blockDef["required"], block.required);

  if (blockDef["params"] is js.JsArray) {
    for (js.JsObject p in blockDef["params"]) {
      Attribute param = restoreAttribute(block, p);
      if (param != null) {
        block.params[param.id] = param;
      }
    }
  }

  if (blockDef["properties"] is js.JsArray) {
    for (js.JsObject p in blockDef["properties"]) {
      Attribute prop = restoreAttribute(block, p);
      if (prop != null) {
        block.properties[prop.id] = prop;
      }
    }
    block.propertiesDisplay = toStr(blockDef["propertiesDisplay"], "shown");
  }

  return block;
}

Clause restoreClause(CodeWorkspace workspace, Block block, js.JsObject clauseDef, int index) {
  Clause clause = new Clause(block, clauseIndex: index);
  if (clauseDef["children"] is js.JsArray) {
    clause.blocks = restoreBlocks(workspace, clauseDef["children"]);
  }
  return clause;
}

List<Block> restoreBlocks(CodeWorkspace workspace, js.JsArray children) {
  List<Block> blocks = new List<Block>();
  for (js.JsObject blockDef in children) {
    Block block = restoreMenuBlock(workspace, blockDef);
    blocks.add(block);
  }
  return blocks;
}

Attribute restoreAttribute(Block block, js.JsObject attributeDef) {
  Attribute attribute;

  int id = attributeDef["id"];

  switch(toStr(attributeDef["type"], "num")) {

    case "int":
      IntParameter a = attribute = new IntParameter(block, id);
      a.random   = toBool(attributeDef["random"], null);
      a.stepSize = toNum(attributeDef["step"], a.stepSize);
      break;

    case "num":
      attribute = new ExpressionParameter(block, id, "num");
      break;

    case "bool":
      attribute = new ExpressionParameter(block, id, "bool");
      break;

    case "range":
      RangeParameter a = attribute = new RangeParameter(block, id);
      a.random   = toBool(attributeDef["random"], false);
      a.stepSize = toNum(attributeDef["step"], a.stepSize);
      a.minValue = toNum(attributeDef["min"], a.minValue);
      a.maxValue = toNum(attributeDef["max"], a.maxValue);
      break;

    case "select":
      SelectParameter a = attribute = new SelectParameter(block, id);
      if (attributeDef["values"] is js.JsArray && attributeDef["values"].length > 0) {
        for (final valueDef in attributeDef["values"]) {
          final value = new Option(valueDef["actual"], valueDef["display"]);
          a.values.add(value);
        }
      }
      break;

    case "text":
      attribute = new Attribute(block, id);
      break;

    default:
      attribute = new Attribute(block, id);
      break;

  }

  attribute.name = toStr(attributeDef["name"], "");
  attribute.unit = toStr(attributeDef["unit"], "");
  attribute.defaultValue = attributeDef["default"];

  return attribute;
}

void restoreExpressionDefinitions(CodeWorkspace workspace, js.JsArray definitionDefs) {
  if (definitionDefs == null || definitionDefs.length == 0) {
    return;
  }

  for (js.JsObject definitionDef in definitionDefs) {
    final definition = new ExpressionDefinition(definitionDef["name"], definitionDef["type"]);
    definition.format = definitionDef["format"];
    if (definitionDef.hasProperty("arguments") && definitionDef["arguments"] is js.JsArray) {
      for (String argument in definitionDef["arguments"]) {
        definition.arguments.add(argument);
      }
    }
    workspace.expressionDefinitions.add(definition);
  }
}

void restoreProgram(CodeWorkspace workspace, js.JsObject programDef) {
  if (programDef["chains"] is! js.JsArray) {
    return;
  }

  for (js.JsObject chain in programDef["chains"]) {
    restoreChain(workspace, chain);
  }
}

void restoreChain(CodeWorkspace workspace, js.JsObject chainDef) {
  Chain chain = new Chain(workspace);

  if (chainDef["x"] is num && chainDef["y"] is num) {
    chain.x = chainDef["x"].floor();
    chain.y = chainDef["y"].floor();
  }

  workspace.chains.add(chain);
  if (chainDef["blocks"] is! js.JsArray) {
    return;
  }

  for (js.JsObject b in chainDef["blocks"]) {
    Block block = restoreChainBlock(workspace, b);
    if (block != null) {
      chain.blocks.add(block);
    }
  }
}

Block restoreChainBlock(CodeWorkspace workspace, js.JsObject blockDef) {
  Block proto = workspace.menu.getBlockById(blockDef["id"]);
  if (proto == null) {
    print("No prototype block found for id: ${blockDef["id"]}");
    print(workspace.menu.slots.map( (s) { return s.block.id; }));
    return null;
  }

  Block block = proto.clone(false);

  block.propertiesDisplay = toStr(blockDef["propertiesDisplay"], "shown");
  restoreChainBlockAttributes(block.params, blockDef["params"]);
  restoreChainBlockAttributes(block.properties, blockDef["properties"]);

  if (blockDef["children"] is js.JsArray) {
    block.children = new Clause(block);
    for (js.JsObject childDef in blockDef["children"]) {
      Block child = restoreChainBlock(workspace, childDef);
      if (child != null) {
        block.children.blocks.add(child);
      }
    }
  }

  if (blockDef["clauses"] is js.JsArray) {
    block.clauses = new List<Clause>();
    int clauseIndex = 0;
    for (js.JsObject clauseDef in blockDef["clauses"]) {
      if (clauseDef["children"] is! js.JsArray) { continue; }

      Clause clause = new Clause(block, clauseIndex: clauseIndex);
      block.clauses.add(clause);
      for (js.JsObject childJson in clauseDef["children"]) {
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

void restoreChainBlockAttributes(Map<int, Attribute> blockAttributes, js.JsArray attributeDefs) {
  if (attributeDefs == null) {
    return;
  }

  for (js.JsObject attributeDef in attributeDefs) {
    if (!attributeDef.hasProperty('id') || !attributeDef.hasProperty('value') || !blockAttributes.containsKey(attributeDef["id"])) {
      continue;
    }

    final blockAttribute = blockAttributes[attributeDef["id"]];
    if ([ "bool", "num" ].contains(blockAttribute.type)) {
      if (blockAttribute is! ExpressionParameter) {
        throw new Exception("A non-expression attribute cannot have a type of 'num' or 'bool'.");
      }
      final expressionAttibute = blockAttribute as ExpressionParameter;
      if (attributeDef["value"] is js.JsObject) {
        final builder = restoreExpressionBuilder(expressionAttibute.block.workspace, expressionAttibute.type, attributeDef["value"]);
        expressionAttibute.builder = builder;
      } else {
        final builder = restoreExpressionValue(expressionAttibute.block.workspace, expressionAttibute.type, attributeDef["value"]);
        expressionAttibute.builder = builder;
      }
    } else {
      if (attributeDef["value"] is js.JsObject) {
        // only expressions can have an object as a value, so...
        blockAttribute.value = blockAttribute.defaultValue;
      } else {
        blockAttribute.value = attributeDef["value"];
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

ExpressionBuilder restoreExpressionBuilder(CodeWorkspace workspace, String type, js.JsObject expressionDef) {
  final builder = new ExpressionBuilder(workspace, type);
  if (expressionDef != null && expressionDef != "") {
    builder.root = restoreExpression(builder, type, expressionDef);
  }
  return builder;
}

Expression restoreExpression(ExpressionBuilder builder, String type, js.JsObject expressionDef) {
  final expression = new Expression(builder, type);
  expression.name = toStr(expressionDef["name"]);
  if (expressionDef["format"] != null) {
    expression.format = expressionDef["format"];
  }

  if (expressionDef["children"] is js.JsArray) {
    for (js.JsObject childDef in expressionDef['children']) {
      Expression child = restoreExpression(builder, type, childDef);
      expression.children.add(child);
    }
  }
  return expression;
}

BlockStyle restoreBlockStyle(js.JsObject styleDef, String blockColorDefault) {
  if (styleDef == null) {
    return new BlockStyle() .. blockColor = blockColorDefault;
  }
  return new BlockStyle() ..
    blockColor  = toStr(styleDef["blockColor"],  blockColorDefault)    ..
    textColor   = toStr(styleDef["textColor"],   BlockStyle.DEFAULT_TEXT_COLOR)   ..
    borderColor = toStr(styleDef["borderColor"], BlockStyle.DEFAULT_BORDER_COLOR) ..
    fontWeight  = toStr(styleDef["fontWeight"],  "") ..
    fontSize    = toStr(styleDef["fontSize"],    "") ..
    fontFace    = toStr(styleDef["fontFace"],    "");
}
