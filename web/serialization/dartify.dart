/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

part of NetTango;

CodeWorkspace restoreWorkspace(String containerId, js.JsObject workspaceEnc, CodeFormatter formatter) {
  if (workspaceEnc["version"] != VersionManager.VERSION) {
    throw "The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${workspaceEnc["version"]}.";
  }

  final workspace = new CodeWorkspace(containerId, formatter);
  workspace.height = workspaceEnc["height"] is int ? workspaceEnc["height"] : CodeWorkspace.DEFAULT_HEIGHT;
  workspace.width  = workspaceEnc["width"]  is int ? workspaceEnc["width"]  : CodeWorkspace.DEFAULT_WIDTH;

  workspace.chainOpen  = toStr(workspaceEnc["chainOpen"],  null);
  workspace.chainClose = toStr(workspaceEnc["chainClose"], null);

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
    int limit = toInt(b["limit"], -1);
    workspace.menu.addBlock(block, limit);
  }
}

Block restoreMenuBlock(CodeWorkspace workspace, js.JsObject blockEnc) {
  String action = toStr(blockEnc["action"]);
  int id = blockEnc["id"];
  Block block = new Block(workspace, id, action, true);
  blockEnc["id"] = block.id;

  if (blockEnc["clauses"] is js.JsArray) {
    block.clauses = new List<Clause>();
    for (int i = 0; i < blockEnc["clauses"].length; i++) {
      final clauseEnc = blockEnc["clauses"][i];
      Clause chain = restoreClause(workspace, block, clauseEnc, i);
      block.clauses.add(chain);
    }
  }

  block.type = toStr(blockEnc["type"]);
  block.format = toStr(blockEnc["format"], null);
  block.note = toStr(blockEnc["note"], null);
  block.blockColor = toStr(blockEnc["blockColor"], null);
  block.textColor = toStr(blockEnc["textColor"], null);
  block.borderColor = toStr(blockEnc["borderColor"], null);
  block.font = toStr(blockEnc["font"], null);
  block.isRequired = toBool(blockEnc["required"], block.isRequired);
  block.placement = BlockPlacement.values[toInt(blockEnc["placement"], block.placement.index)];

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
    block.propertiesDisplay = toStr(blockEnc["propertiesDisplay"], "shown");
  }

  return block;
}

Clause restoreClause(CodeWorkspace workspace, Block block, js.JsObject clauseEnc, int clauseIndex) {
  final open  = toStr(clauseEnc["open"],  null);
  final close = toStr(clauseEnc["close"], null);
  Clause clause = new Clause(block, clauseIndex, open, close);
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

  switch(toStr(attributeEnc["type"], "num")) {

    case "int":
      IntParameter a = attribute = new IntParameter(block, id);
      a.random   = toBool(attributeEnc["random"], null);
      a.stepSize = toNum(attributeEnc["step"], a.stepSize);
      break;

    case "num":
      attribute = new ExpressionParameter(block, id, "num");
      break;

    case "bool":
      attribute = new ExpressionParameter(block, id, "bool");
      break;

    case "range":
      RangeParameter a = attribute = new RangeParameter(block, id);
      a.random   = toBool(attributeEnc["random"], false);
      a.stepSize = toNum(attributeEnc["step"], a.stepSize);
      a.minValue = toNum(attributeEnc["min"], a.minValue);
      a.maxValue = toNum(attributeEnc["max"], a.maxValue);
      break;

    case "select":
      SelectParameter a = attribute = new SelectParameter(block, id);
      if (attributeEnc["values"] is js.JsArray && attributeEnc["values"].length > 0) {
        for (final valueEnc in attributeEnc["values"]) {
          final value = new Option(valueEnc["actual"], valueEnc["display"]);
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

  attribute.name = toStr(attributeEnc["name"], "");
  attribute.unit = toStr(attributeEnc["unit"], "");
  attribute.defaultValue = attributeEnc["default"];

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

  block.propertiesDisplay = toStr(blockEnc["propertiesDisplay"], "shown");
  restoreChainBlockAttributes(block.params, blockEnc["params"]);
  restoreChainBlockAttributes(block.properties, blockEnc["properties"]);

  if (blockEnc["clauses"] is js.JsArray) {
    block.clauses = new List<Clause>();
    int clauseIndex = 0;
    for (js.JsObject clauseEnc in blockEnc["clauses"]) {
      if (clauseEnc["children"] is! js.JsArray) { continue; }

      final open  = toStr(clauseEnc["open"],  null);
      final close = toStr(clauseEnc["close"], null);
      Clause clause = new Clause(block, clauseIndex, open, close);
      block.clauses.add(clause);
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

void restoreChainBlockAttributes(Map<int, Attribute> blockAttributes, js.JsArray attributeEncs) {
  if (attributeEncs == null) {
    return;
  }

  for (js.JsObject attributeEnc in attributeEncs) {
    if (!attributeEnc.hasProperty('id') || !attributeEnc.hasProperty('value') || !blockAttributes.containsKey(attributeEnc["id"])) {
      continue;
    }

    final blockAttribute = blockAttributes[attributeEnc["id"]];
    if ([ "bool", "num" ].contains(blockAttribute.type)) {
      if (blockAttribute is! ExpressionParameter) {
        throw new Exception("A non-expression attribute cannot have a type of 'num' or 'bool'.");
      }
      final expressionAttibute = blockAttribute as ExpressionParameter;
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
        blockAttribute.value = blockAttribute.defaultValue;
      } else {
        blockAttribute.value = attributeEnc["value"];
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
  expression.name = toStr(expressionEnc["name"]);
  if (expressionEnc["format"] != null) {
    expression.format = expressionEnc["format"];
  }

  if (expressionEnc["children"] is js.JsArray) {
    for (js.JsObject childEnc in expressionEnc['children']) {
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
    blockColor  = toStr(styleEnc["blockColor"],  blockColorDefault)    ..
    textColor   = toStr(styleEnc["textColor"],   BlockStyle.DEFAULT_TEXT_COLOR)   ..
    borderColor = toStr(styleEnc["borderColor"], BlockStyle.DEFAULT_BORDER_COLOR) ..
    fontWeight  = toStr(styleEnc["fontWeight"],  "") ..
    fontSize    = toStr(styleEnc["fontSize"],    "") ..
    fontFace    = toStr(styleEnc["fontFace"],    "");
}
