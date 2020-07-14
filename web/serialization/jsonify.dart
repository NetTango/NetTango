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

js.JsObject encodeWorkspace(CodeWorkspace workspace) {
  // TODO: It'd be nice to just to do a `JsObject.jsify(workspace)` and be done, right?
  // maybe that is possible, but at the moment there are slight differences in property names
  // for the exported JSON, and we'd have to do a ton of testing, so stick to the
  // bespoke method for now.
  final workspaceEnc = js.JsObject.jsify({
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
    workspaceEnc["blockStyles"] = js.JsObject.jsify({});
    workspaceEnc["blockStyles"]["starterBlockStyle"]   = encodeBlockStyle(workspace.starterBlockStyle);
    workspaceEnc["blockStyles"]["containerBlockStyle"] = encodeBlockStyle(workspace.containerBlockStyle);
    workspaceEnc["blockStyles"]["commandBlockStyle"]   = encodeBlockStyle(workspace.commandBlockStyle);
  }

  // blocks
  for (Slot slot  in workspace.menu.slots) {
    final blockEnc = encodeBlock(slot.block, slot.limit == -1 ? null : slot.limit);
    workspaceEnc["blocks"].add(blockEnc);
  }

  // variables
  if (workspace.variables != null && workspace.variables.isNotEmpty) {
    final variables = workspaceEnc["variables"] = js.JsArray.from([]);
    // TODO: actually save those variables
   }

  // expressions
  if (workspace.expressionDefinitions != null && workspace.expressionDefinitions.isNotEmpty) {
    final expressions = workspaceEnc["expressions"] = js.JsArray.from([]);
    for (ExpressionDefinition expressionEnc in workspace.expressionDefinitions) {
      expressions.add(encodeExpressionDefinition(expressionEnc));
    }
  }

  // program
  final chains = workspaceEnc["program"]["chains"];
  for (Chain chain in workspace.chains) {
    final chainEnc = js.JsObject.jsify({
      "x": chain.x, "y": chain.y,
      "blocks": []
    });
    for (Block block in chain.blocks) {
      final blockEnc = encodeBlock(block, null);
      chainEnc["blocks"].add(blockEnc);
    }
    chains.add(chainEnc);
  }

  return workspaceEnc;
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
  var blockEnc = js.JsObject.jsify({
    "id":       block.id,
    "action":   block.action,
    "required": block.required
  });
  setIfNotNull(blockEnc, "instanceId", block.instanceId);
  setIfNotNullOrEmpty(blockEnc, "type", block.type);
  setIfNotNullOrEmpty(blockEnc, "format", block.format);
  setIfNotNull(blockEnc, "limit", limit);
  setIfNotNullOrEmpty(blockEnc, "note", block.note);
  setIfNotNullOrEmpty(blockEnc, "blockColor", block.blockColor);
  setIfNotNullOrEmpty(blockEnc, "textColor", block.textColor);
  setIfNotNullOrEmpty(blockEnc, "borderColor", block.borderColor);
  setIfNotNullOrEmpty(blockEnc, "font", block.font);

  if (block.children != null) {
    final children = blockEnc["children"] = js.JsArray.from([]);
    for (Block child in block.children.blocks) {
      final childEnc = encodeBlock(child, null);
      children.add(childEnc);
    }
  }

  if (block.clauses != null) {
    final clauses = blockEnc["clauses"] = js.JsArray.from([]);
    for (Clause clause in block.clauses) {
      final clauseEnc = encodeClause(clause);
      clauses.add(clauseEnc);
    }
  }

  if (block.params.isNotEmpty) {
    final params = blockEnc["params"] = js.JsArray.from([]);
    for (Attribute param in block.params.values) {
      final paramEnc = encodeAttribute(param);
      params.add(paramEnc);
    }
  }

  if (block.properties.isNotEmpty) {
    final properties = blockEnc["properties"] = js.JsArray.from([]);
    for (Attribute property in block.properties.values) {
      final propertyEnc = encodeAttribute(property);
      properties.add(propertyEnc);
    }
    blockEnc["propertiesDisplay"] = block.propertiesDisplay;
  }

  return blockEnc;
}

js.JsObject encodeClause(Clause clause) {
  final clauseEnc = js.JsObject.jsify({
    "children": []
  });
  final children = clauseEnc["children"];
  for (Block block in clause.blocks) {
    final blockEnc = encodeBlock(block, null);
    children.add(blockEnc);
  }
  return clauseEnc;
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
  final attributeEnc = js.JsObject.jsify({
    "id" :      attribute.id,
    "type" :    attribute.type,
  });
  setIfNotNull(attributeEnc, "value", attribute.value);
  setIfNotNull(attributeEnc, "default", attribute.defaultValue);
  setIfNotNullOrEmpty(attributeEnc, "name", attribute.name);
  setIfNotNullOrEmpty(attributeEnc, "unit", attribute.unit);

  if (attribute is NumParameter) {
    setIfNotNull(attributeEnc, "random", attribute.random);
    attributeEnc["step"] = attribute.stepSize;
  }

  if (attribute is RangeParameter) {
    attributeEnc["min"] = attribute.minValue;
    attributeEnc["max"] = attribute.maxValue;
  }

  if (attribute is SelectParameter) {
    final values = attributeEnc["values"] = js.JsArray.from([]);
    for (final value in attribute.values) {
      final valueEnc = js.JsObject.jsify({ "actual": value.actual, "display": value.display });
      values.add(valueEnc);
    }
  }

  if (attribute is ExpressionParameter) {
    if (attribute.builder.root != null && !attribute.builder.root.isEmpty) {
      // this is to maintain the same structure as versions prior to 4.  It could be
      // switched out to only use the encoded expression at some point.
      if (attribute.builder.root.children.isEmpty) {
        attributeEnc["value"] = attribute.expressionValue;
      } else {
        attributeEnc["value"] = encodeExpression(attribute.builder.root);
        attributeEnc["expressionValue"] = attribute.expressionValue;
      }
    }
  }

  return attributeEnc;
}

js.JsObject encodeExpression(Expression expression) {
    final expressionEnc = js.JsObject.jsify({
      "name" : expression.name,
      "type" : expression.type
    });
    setIfNotNull(expressionEnc, "format", expression.format);

    if (expression.hasChildren) {
      expressionEnc["children"] = js.JsArray.from([]);
      for (Expression child in expression.children) {
        expressionEnc["children"].add(encodeExpression(child));
      }
    }

    return expressionEnc;
}

js.JsObject encodeExpressionDefinition(ExpressionDefinition definition) {
  final definitionEnc = js.JsObject.jsify({
    "name": definition.name,
    "type": definition.type
  });
  if (definition.arguments.length > 0) {
    definitionEnc["arguments"] = js.JsArray.from(definition.arguments);
  }
  if (definition.format != null) {
    definitionEnc["format"] = definition.format;
  }
  return definitionEnc;
}