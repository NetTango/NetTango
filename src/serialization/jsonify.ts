// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Attribute } from "../blocks/attributes/attribute"
import { ExpressionAttribute } from "../blocks/attributes/expression-attribute"
import { NumAttribute } from "../blocks/attributes/num-attribute"
import { RangeAttribute } from "../blocks/attributes/range-attribute"
import { SelectAttribute } from "../blocks/attributes/select-attribute"
import { Block } from "../blocks/block"
import { BlockStyle } from "../blocks/block-style"
import { Clause } from "../blocks/clause"
import { CodeWorkspace } from "../blocks/code-workspace"
import { Expression } from "../blocks/expressions/expression"
import { ExpressionDefinition } from "../blocks/expressions/expression-definition"
import { AllowedTags } from "../blocks/tags/allowed-tags"
import { AnyOfTags } from "../blocks/tags/any-of-tags"
import { InheritTags } from "../blocks/tags/inherit-tags"
import { UnrestrictedTags } from "../blocks/tags/unrestricted-tags"

function encodeWorkspace(workspace: CodeWorkspace): any {
  // TODO: It'd be nice to just to do a `JsObject.jsify(workspace)` and be done, right?
  // maybe that is possible, but at the moment there are slight differences in property names
  // for the exported JSON, and we'd have to do a ton of testing, so stick to the
  // bespoke method for now.
  const workspaceEnc: any = {
    "version": workspace.version,
    "height":  workspace.height,
    "width":   workspace.width,
    "blocks":  [],
    "program": {
      "chains": []
    }
  }
  workspace.storage.restore(workspaceEnc)

  setIfNotNull(workspaceEnc, "chainOpen",  workspace.chainOpen)
  setIfNotNull(workspaceEnc, "chainClose", workspace.chainClose)

  // block styles
  if (workspace.starterBlockStyle !== BlockStyle.DEFAULT_STARTER_STYLE || workspace.containerBlockStyle !== BlockStyle.DEFAULT_CONTAINER_STYLE || workspace.commandBlockStyle !== BlockStyle.DEFAULT_COMMAND_STYLE) {
    workspaceEnc["blockStyles"] = {}
    workspaceEnc["blockStyles"]["starterBlockStyle"]   = encodeBlockStyle(workspace.starterBlockStyle)
    workspaceEnc["blockStyles"]["containerBlockStyle"] = encodeBlockStyle(workspace.containerBlockStyle)
    workspaceEnc["blockStyles"]["commandBlockStyle"]   = encodeBlockStyle(workspace.commandBlockStyle)
  }

  // blocks
  for (var slot of workspace.menu.slots) {
    const blockEnc = encodeBlock(slot.block, slot.limit === -1 ? null : slot.limit)
    workspaceEnc["blocks"].push(blockEnc)
  }

  // variables
  if (workspace.variables !== null && workspace.variables.length > 0) {
    const variables = workspaceEnc["variables"] = []
    // TODO: actually save those variables
   }

  // expressions
  if (workspace.expressionDefinitions !== null && workspace.expressionDefinitions.length > 0) {
    const expressions: any[] = workspaceEnc["expressions"] = []
    for (var expressionEnc of workspace.expressionDefinitions) {
      expressions.push(encodeExpressionDefinition(expressionEnc))
    }
  }

  // program
  const chains: any[] = workspaceEnc["program"]["chains"]
  for (var chain of workspace.chains) {
    const chainEnc: any = {
      "x": chain.x, "y": chain.y,
      "blocks": []
    }
    chain.storage.restore(chainEnc)

    for (var block of chain.blocks) {
      const blockEnc = encodeBlock(block, null)
      chainEnc.blocks.push(blockEnc)
    }
    chains.push(chainEnc)
  }

  return workspaceEnc
}

function encodeBlockStyle(style: BlockStyle): any {
  return {
    "blockColor":  style.blockColor,
    "textColor":   style.textColor,
    "borderColor": style.borderColor,
    "fontWeight":  style.fontWeight,
    "fontSize":    style.fontSize,
    "fontFace":    style.fontFace
  }
}

function encodeBlock(block: Block, limit: number | null): any {
  var blockEnc: any = {
    "id":        block.id,
    "action":    block.action,
    "required":  block.isRequired,
    "placement": block.placement
  }
  block.storage.restore(blockEnc)

  setIfNotNull(blockEnc, "instanceId", block.instanceId)
  setIfNotNullOrEmpty(blockEnc, "type", block.type)
  setIfNotNullOrEmpty(blockEnc, "format", block.format)
  setIfNotNull(blockEnc, "isTerminal", block.isTerminal)
  setIfNotNullOrEmpty(blockEnc, "closeClauses", block.closeClauses)
  setIfNotNullOrEmpty(blockEnc, "closeStarter", block.closeStarter)
  setIfNotNull(blockEnc, "limit", limit)
  setIfNotNullOrEmpty(blockEnc, "note", block.note)
  setIfNotNullOrEmpty(blockEnc, "blockColor", block.blockColor)
  setIfNotNullOrEmpty(blockEnc, "textColor", block.textColor)
  setIfNotNullOrEmpty(blockEnc, "borderColor", block.borderColor)
  setIfNotNullOrEmpty(blockEnc, "font", block.font)

  if (!(block.allowedTags instanceof UnrestrictedTags)) {
    blockEnc["allowedTags"] = encodeAllowedTags(block.allowedTags)
  }

  if (block.tags.length > 0) {
    blockEnc["tags"] = block.tags.slice(0)
  }

  if (block.hasClauses) {
    const clauses: any[] = blockEnc["clauses"] = []
    for (var clause of block.clauses) {
      const clauseEnc = encodeClause(clause)
      clauses.push(clauseEnc)
    }
  }

  if (block.params.size > 0) {
    const params: any[] = blockEnc["params"] = []
    for (var param of block.params.values()) {
      const paramEnc = encodeAttribute(param)
      params.push(paramEnc)
    }
  }

  if (block.properties.size > 0) {
    const properties: any[] = blockEnc["properties"] = []
    for (var property of block.properties.values()) {
      const propertyEnc = encodeAttribute(property)
      properties.push(propertyEnc)
    }
    blockEnc["propertiesDisplay"] = block.propertiesDisplay
  }

  return blockEnc
}

function encodeClause(clause: Clause): any {
  const clauseEnc: any = {
    "children": []
  }
  clause.storage.restore(clauseEnc)

  setIfNotNullOrEmpty(clauseEnc, "action", clause.action)
  setIfNotNullOrEmpty(clauseEnc, "open",   clause.open)
  setIfNotNullOrEmpty(clauseEnc, "close",  clause.close)

  if (!(clause.allowedTags instanceof UnrestrictedTags)) {
    clauseEnc["allowedTags"] = encodeAllowedTags(clause.allowedTags)
  }

  clauseEnc.children = clause.blocks.map( (block) => encodeBlock(block, null) )

  return clauseEnc
}

function setIfNotNull<T>(def: any, key: string, value: T) {
  if (value !== null) {
    def[key] = value
  }
}

function setIfNotNullOrEmpty(def: any, key: string, value: string | null) {
  if (value !== null && value !== "") {
    def[key] = value
  }
}

function encodeAttribute(attribute: Attribute): any {
  const attributeEnc: any = {
    "id" :      attribute.id,
    "type" :    attribute.type,
  }
  attribute.storage.restore(attributeEnc)

  setIfNotNullOrEmpty(attributeEnc, "name", attribute.name)
  setIfNotNullOrEmpty(attributeEnc, "unit", attribute.unit)

  switch (attribute.type) {
    case "text":
      setIfNotNullOrEmpty(attributeEnc, "value", attribute.getValue())
      setIfNotNullOrEmpty(attributeEnc, "default", attribute.getDefaultValue())
      break

    case "select":
      const selectAttribute = attribute as SelectAttribute
      setIfNotNullOrEmpty(attributeEnc, "quoteValues", selectAttribute.quoteValues)
      setIfNotNullOrEmpty(attributeEnc, "value", attribute.getValue())
      setIfNotNullOrEmpty(attributeEnc, "default", attribute.getDefaultValue())
      const values = attributeEnc["values"] = selectAttribute.values.map( (value) => {
        return { "actual": value.actual, "display": value.display }
      })
      break

    case "int":
    case "range":
      const numAttribute = attribute as NumAttribute
      attributeEnc["step"] = numAttribute.stepSize
      setIfNotNull(attributeEnc, "random", numAttribute.random)
      setIfNotNull(attributeEnc, "value", numAttribute.value)
      setIfNotNull(attributeEnc, "default", numAttribute.defaultValue)
      if (numAttribute instanceof RangeAttribute) {
        attributeEnc["min"] = numAttribute.minValue
        attributeEnc["max"] = numAttribute.maxValue
      }
      break

    case "num":
    case "bool":
      const expAttribute = attribute as ExpressionAttribute
      setIfNotNullOrEmpty(attributeEnc, "default", attribute.getDefaultValue())

      if (expAttribute.builder.root !== null && !expAttribute.builder.root.isEmpty) {
        // this is to maintain the same structure as versions prior to 4.  It could be
        // switched out to only use the encoded expression at some point.
        if (expAttribute.builder.root.children.length === 0) {
          attributeEnc["value"] = attribute.getValue()
        } else {
          attributeEnc["value"] = encodeExpression(expAttribute.builder.root)
          attributeEnc["expressionValue"] = attribute.getValue()
        }
      }
      break

    default:
      throw new Error(`Unknown attribute type ${attribute.type}`)

  }

  return attributeEnc
}

function encodeExpression(expression: Expression): any {
    const expressionEnc:any = {
      "name" : expression.name,
      "type" : expression.type
    }
    setIfNotNull(expressionEnc, "format", expression.format)

    if (expression.hasChildren) {
      expressionEnc["children"] = expression.children.map( (c) => encodeExpression(c) )
    }

    return expressionEnc
}

function encodeExpressionDefinition(definition: ExpressionDefinition): any {
  const definitionEnc: any = {
    "name": definition.name,
    "type": definition.type
  }
  if (definition.arguments.length > 0) {
    definitionEnc["arguments"] = definition.arguments.slice(0)
  }
  if (definition.format !== null) {
    definitionEnc["format"] = definition.format
  }
  return definitionEnc
}

function encodeAllowedTags(allowedTags: AllowedTags): any {
  if (allowedTags instanceof InheritTags) {
    return { "type": "inherit" }
  }
  if (allowedTags instanceof UnrestrictedTags) {
    return { "type": "unrestricted" }
  }
  if (allowedTags instanceof AnyOfTags) {
    const allowedTagsEnc: any = { "type": "any-of" }
    allowedTagsEnc["tags"] = allowedTags.tags.slice(0)
    return allowedTagsEnc
  }
  throw new Error("Unknown AllowedTags type, cannot encode it.")
}

export { encodeWorkspace }