part of NetTango;

js.JsObject encodeWorkspace(CodeWorkspace workspace) {
  // TODO: It'd be nice to just to do a `JsObject.jsify(workspace)` and be done, right?
  // maybe that is possible, but at the moment there are slight differences in property names
  // for the exported JSON, and we'd have to do a ton of testing, so stick to the
  // bespoke method for now.
  final definition = js.JsObject.jsify({
    "version": workspace.version,
    "height":  workspace.height,
    "width":   workspace.width,
    "blocks":  [],
    "program": {
      "chains": []
    }
  });

  // block styles
  if (workspace.starterBlockStyle != BlockStyle.DEFAULT_STARTER_STYLE || workspace.containerBlockStyle != BlockStyle.DEFAULT_CONTAINER_STYLE || workspace.commandBlockStyle != BlockStyle.DEFAULT_COMMAND_STYLE) {
    definition["blockStyles"] = js.JsObject.jsify({});
    definition["blockStyles"]["starterBlockStyle"]   = encodeBlockStyle(workspace.starterBlockStyle);
    definition["blockStyles"]["containerBlockStyle"] = encodeBlockStyle(workspace.containerBlockStyle);
    definition["blockStyles"]["commandBlockStyle"]   = encodeBlockStyle(workspace.commandBlockStyle);
  }

  // blocks
  for (Slot slot  in workspace.menu.slots) {
    final blockDef = encodeBlock(slot.block, slot.limit == -1 ? null : slot.limit);
    definition["blocks"].add(blockDef);
  }

  // variables
  if (workspace.variables != null && workspace.variables.isNotEmpty) {
    final variables = definition["variables"] = js.JsArray.from([]);
    // TODO: actually save those variables
   }

  // expressions
  if (workspace.expressionDefinitions != null && workspace.expressionDefinitions.isNotEmpty) {
    final expressions = definition["expressions"] = js.JsArray.from([]);
    for (ExpressionDefinition expressionDef in workspace.expressionDefinitions) {
      expressions.add(encodeExpressionDefinition(expressionDef));
    }
  }

  // program
  final chains = definition["program"]["chains"];
  for (Chain chain in workspace.chains) {
    final chainDef = js.JsObject.jsify({
      "x": chain.x, "y": chain.y,
      "blocks": []
    });
    for (Block block in chain.blocks) {
      final blockDef = encodeBlock(block, null);
      chainDef["blocks"].add(blockDef);
    }
    chains.add(chainDef);
  }

  return definition;
}

js.JsObject encodeBlockStyle(BlockStyle style) {
  return js.JsObject.jsify({
    "blockColor":  style.blockColor,
    "textColor":   style.textColor,
    "borderColor": style.borderColor,
    "fontWeight":  style.fontWeight,
    "fontSize":    style.fontSize,
    "fontFace":    style.fontFace
  });
}

js.JsObject encodeBlock(Block block, int limit) {
  var blockDef = js.JsObject.jsify({
    "id":       block.id,
    "action":   block.action,
    "required": block.required
  });
  setIfNotNullOrEmpty(blockDef, "type", block.type);
  setIfNotNullOrEmpty(blockDef, "format", block.format);
  setIfNotNull(blockDef, "limit", limit);
  setIfNotNullOrEmpty(blockDef, "note", block.note);
  setIfNotNullOrEmpty(blockDef, "blockColor", block.blockColor);
  setIfNotNullOrEmpty(blockDef, "textColor", block.textColor);
  setIfNotNullOrEmpty(blockDef, "borderColor", block.borderColor);
  setIfNotNullOrEmpty(blockDef, "font", block.font);

  if (block.children != null) {
    final children = blockDef["children"] = js.JsArray.from([]);
    for (Block child in block.children.blocks) {
      final childDef = encodeBlock(child, null);
      children.add(childDef);
    }
  }

  if (block.clauses != null) {
    final clauses = blockDef["clauses"] = js.JsArray.from([]);
    for (Clause clause in block.clauses) {
      final clauseDef = encodeClause(clause);
      clauses.add(clauseDef);
    }
  }

  if (block.params.isNotEmpty) {
    final params = blockDef["params"] = js.JsArray.from([]);
    for (Attribute param in block.params.values) {
      final paramDef = encodeAttribute(param);
      params.add(paramDef);
    }
  }

  if (block.properties.isNotEmpty) {
    final properties = blockDef["properties"] = js.JsArray.from([]);
    for (Attribute property in block.properties.values) {
      final propertyDef = encodeAttribute(property);
      properties.add(propertyDef);
    }
    blockDef["propertiesDisplay"] = block.propertiesDisplay;
  }

  return blockDef;
}

js.JsObject encodeClause(Clause clause) {
  final clauseDef = js.JsObject.jsify({
    "children": []
  });
  final children = clauseDef["children"];
  for (Block block in clause.blocks) {
    final blockDef = encodeBlock(block, null);
    children.add(blockDef);
  }
  return clauseDef;
}

setIfNotNull<T>(js.JsObject def, String key, T value) {
  if (value != null) {
    def[key] = value;
  }
}

setIfNotNullOrEmpty(js.JsObject def, String key, String value) {
  if (value != null && value != "") {
    def[key] = value;
  }
}

js.JsObject encodeAttribute(Attribute attribute) {
  final attributeDef = js.JsObject.jsify({
    "id" :      attribute.id,
    "type" :    attribute.type,
  });
  setIfNotNull(attributeDef, "value", attribute.value);
  setIfNotNull(attributeDef, "default", attribute.defaultValue);
  setIfNotNullOrEmpty(attributeDef, "name", attribute.name);
  setIfNotNullOrEmpty(attributeDef, "unit", attribute.unit);

  if (attribute is NumParameter) {
    setIfNotNull(attributeDef, "random", attribute.random);
    attributeDef["step"] = attribute.stepSize;
  }

  if (attribute is RangeParameter) {
    attributeDef["min"] = attribute.minValue;
    attributeDef["max"] = attribute.maxValue;
  }

  if (attribute is SelectParameter) {
    final values = attributeDef["values"] = js.JsArray.from([]);
    for (final value in attribute.values) {
      final valueDef = js.JsObject.jsify({ "actual": value.actual, "display": value.display });
      values.add(valueDef);
    }
  }

  if (attribute is ExpressionParameter) {
    if (attribute.builder.root != null && !attribute.builder.root.isEmpty) {
      // this is to maintain the same structure as versions prior to 4.  It could be
      // switched out to only use the encoded expression at some point.
      if (attribute.builder.root.children.isEmpty) {
        attributeDef["value"] = attribute.expressionValue;
      } else {
        attributeDef["value"] = encodeExpression(attribute.builder.root);
        attributeDef["expressionValue"] = attribute.expressionValue;
      }
    }
  }

  return attributeDef;
}

js.JsObject encodeExpression(Expression expression) {
    final expressionDef = js.JsObject.jsify({
      "name" : expression.name,
      "type" : expression.type
    });
    setIfNotNull(expressionDef, "format", expression.format);

    if (expression.hasChildren) {
      expressionDef["children"] = js.JsArray.from([]);
      for (Expression child in expression.children) {
        expressionDef["children"].add(encodeExpression(child));
      }
    }

    return expressionDef;
}

js.JsObject encodeExpressionDefinition(ExpressionDefinition definition) {
  final definitionDef = js.JsObject.jsify({
    "name": definition.name,
    "type": definition.type
  });
  if (definition.arguments.length > 0) {
    definitionDef["arguments"] = js.JsArray.from(definition.arguments);
  }
  if (definition.format != null) {
    definitionDef["format"] = definition.format;
  }
  return definitionDef;
}
