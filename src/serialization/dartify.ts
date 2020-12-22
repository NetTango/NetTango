// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Attribute } from "../blocks/attributes/attribute"
import { ExpressionAttribute } from "../blocks/attributes/expression-attribute"
import { IntAttribute } from "../blocks/attributes/int-attribute"
import { RangeAttribute } from "../blocks/attributes/range-attribute"
import { SelectAttribute, QuoteOptions, SelectOption } from "../blocks/attributes/select-attribute"
import { TextAttribute } from "../blocks/attributes/text-attribute"
import { Block } from "../blocks/block"
import { BlockStyle } from "../blocks/block-style"
import { Chain } from "../blocks/chain"
import { Clause } from "../blocks/clause"
import { CodeFormatter } from "../blocks/code-formatter"
import { CodeWorkspace } from "../blocks/code-workspace"
import { Expression } from "../blocks/expressions/expression"
import { ExpressionBuilder } from "../blocks/expressions/expression-builder"
import { ExpressionDefinition } from "../blocks/expressions/expression-definition"
import { AllowedTags } from "../blocks/tags/allowed-tags"
import { AnyOfTags } from "../blocks/tags/any-of-tags"
import { ConcreteTags } from "../blocks/tags/concrete-tags"
import { InheritTags } from "../blocks/tags/inherit-tags"
import { UnrestrictedTags } from "../blocks/tags/unrestricted-tags"
import { ArrayUtils } from "../utils/array-utils"
import { BoolUtils } from "../utils/bool-utils"
import { NumUtils } from "../utils/num-utils"
import { ObjectUtils } from "../utils/object-utils"
import { StringUtils } from "../utils/string-utils"
import { VersionManager } from "../versions/version-manager"

function restoreWorkspace(containerId: string, workspaceEnc: any, formatter: CodeFormatter): CodeWorkspace {
  if (workspaceEnc["version"] !== VersionManager.VERSION) {
    throw new Error(`The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${workspaceEnc["version"]}.`)
  }

  const workspace = new CodeWorkspace(containerId, formatter)
  workspace.storage.set(workspaceEnc)

  workspace.height = typeof(workspaceEnc["height"]) === "number" ? workspaceEnc["height"] : CodeWorkspace.DEFAULT_HEIGHT
  workspace.width  = typeof(workspaceEnc["width"]) === "number"  ? workspaceEnc["width"]  : CodeWorkspace.DEFAULT_WIDTH

  workspace.chainOpen  = StringUtils.toStrOrNull(workspaceEnc["chainOpen"])
  workspace.chainClose = StringUtils.toStrOrNull(workspaceEnc["chainClose"])

  if (workspaceEnc.hasOwnProperty("blockStyles")) {
    workspace.starterBlockStyle   = restoreBlockStyle(workspaceEnc["blockStyles"]["starterBlockStyle"],   BlockStyle.DEFAULT_STARTER_COLOR)
    workspace.containerBlockStyle = restoreBlockStyle(workspaceEnc["blockStyles"]["containerBlockStyle"], BlockStyle.DEFAULT_CONTAINER_COLOR)
    workspace.commandBlockStyle   = restoreBlockStyle(workspaceEnc["blockStyles"]["commandBlockStyle"],   BlockStyle.DEFAULT_COMMAND_COLOR)
  }

  if (Array.isArray(workspaceEnc["blocks"])) {
    restoreMenuBlocks(workspace, workspaceEnc["blocks"])
  }

  if (Array.isArray(workspaceEnc["variables"])) {
    workspace.variables = workspaceEnc["variables"]
  }

  if (Array.isArray(workspaceEnc["expressions"])) {
    restoreExpressionDefinitions(workspace, workspaceEnc["expressions"])
  }

  if (typeof(workspaceEnc["program"]) === "object") {
    restoreProgram(workspace, workspaceEnc["program"])
  }

  return workspace
}

function restoreMenuBlocks(workspace: CodeWorkspace, blockEncs: any[]): void {
  // pre-check block IDs for our next one, as they may be out of order
  // and we'll need to set any that aren't set (new blocks) while processing
  for (var b of blockEncs) {
    const id = NumUtils.toInt(b["id"], -1)
    if (id >= workspace.nextBlockId) {
      workspace.nextBlockId = id + 1
    }
  }
  for (var b of blockEncs) {
    var block = restoreMenuBlock(workspace, b)
    if (workspace.menu.getBlockById(block.id) !== null) {
      // duplicate block ID - wipe the ID and re-generate a new block with a new ID
      block.id = workspace.nextBlockId
      block = block.clone(true)
      b["id"] = block.id
    }
    const limit = NumUtils.toInt(b["limit"], -1)
    workspace.menu.addBlock(block, limit)
  }
}

function restoreMenuBlock(workspace: CodeWorkspace, blockEnc: any): Block {
  const action = StringUtils.toStr(blockEnc["action"])
  const id = NumUtils.toInt(blockEnc["id"], workspace.nextBlockId)
  const block = new Block(workspace, id, action, true)
  block.storage.set(blockEnc)
  blockEnc["id"] = block.id

  if (Array.isArray(blockEnc["clauses"])) {
    block.clauses = []
    for (var i = 0; i < blockEnc["clauses"].length; i++) {
      const clauseEnc = blockEnc["clauses"][i]
      const chain = restoreClause(workspace, block, clauseEnc, i)
      block.clauses.push(chain)
    }
  }

  block.type = StringUtils.toStr(blockEnc["type"])
  block.format = StringUtils.toStrOrNull(blockEnc["format"])
  block.closeClauses = StringUtils.toStrOrNull(blockEnc["closeClauses"])
  block.closeStarter = StringUtils.toStrOrNull(blockEnc["closeStarter"])
  block.note = StringUtils.toStrOrNull(blockEnc["note"])
  block.blockColor = StringUtils.toStrOrNull(blockEnc["blockColor"])
  block.textColor = StringUtils.toStrOrNull(blockEnc["textColor"])
  block.borderColor = StringUtils.toStrOrNull(blockEnc["borderColor"])
  block.font = StringUtils.toStrOrNull(blockEnc["font"])
  block.isRequired = BoolUtils.toBool(blockEnc["required"], block.isRequired)
  block.isTerminal = BoolUtils.toBoolOrNull(blockEnc["isTerminal"])
  const placement = StringUtils.toStr(blockEnc["placement"], block.placement)
  block.placement = ["starter", "child", "anywhere"].includes(placement) ? (placement as "starter" | "child" | "anywhere") : block.placement

  if (ObjectUtils.isObjectValue(blockEnc["allowedTags"])) {
    block.allowedTags = restoreConcreteTags(blockEnc["allowedTags"])
  }

  ArrayUtils.maybeForEach(blockEnc, "tags", (tag) => {
    if (typeof(tag) === "string") {
      block.tags.push(tag)
    }
  })

  ArrayUtils.maybeForEach(blockEnc, "params", (p) => {
    const param = restoreAttribute(block, p)
    block.params.set(param.id, param)
  })

  ArrayUtils.maybeForEach(blockEnc, "properties", (p) => {
    const prop = restoreAttribute(block, p)
    block.properties.set(prop.id, prop)
  })
  block.propertiesDisplay = restorePropertiesDisplay(blockEnc, block)

  return block
}

function restorePropertiesDisplay(blockEnc: any, block: Block): "shown" | "hidden" {
  const maybeDisplay = StringUtils.toStr(blockEnc["propertiesDisplay"], "shown")
  return (maybeDisplay === "shown" || maybeDisplay === "hidden") ? maybeDisplay : block.propertiesDisplay
}

function restoreClause(workspace: CodeWorkspace, block: Block, clauseEnc: any, clauseIndex: number): Clause {
  const open    = StringUtils.toStrOrNull(clauseEnc["open"])
  const close   = StringUtils.toStrOrNull(clauseEnc["close"])
  const action  = StringUtils.toStrOrNull(clauseEnc["action"])
  const clause = new Clause(block, clauseIndex, action, open, close)
  clause.storage.set(clauseEnc)

  if (ObjectUtils.isObjectValue(clauseEnc["allowedTags"])) {
    clause.allowedTags = restoreAllowedTags(clause, clauseEnc["allowedTags"])
  }

  if (Array.isArray(clauseEnc["children"])) {
    clause.blocks = restoreBlocks(workspace, clauseEnc["children"])
  }

  return clause
}

function restoreBlocks(workspace: CodeWorkspace, children: any[]): Block[] {
  const blocks: Block[] = []
  for (var blockEnc of children) {
    const block = restoreMenuBlock(workspace, blockEnc)
    blocks.push(block)
  }
  return blocks
}

function restoreAttribute(block: Block, attributeEnc: any): Attribute {
  var attribute: Attribute | null = null

  const id = NumUtils.toNumOrNull(attributeEnc["id"])

  switch(StringUtils.toStr(attributeEnc["type"], "num")) {

    case "int": {
      const a = attribute = new IntAttribute(block, id)
      a.random   = BoolUtils.toBoolOrNull(attributeEnc["random"])
      a.stepSize = NumUtils.toNum(attributeEnc["step"], a.stepSize)
      break
    }

    case "num":
      attribute = new ExpressionAttribute(block, id, "num")
      break

    case "bool":
      attribute = new ExpressionAttribute(block, id, "bool")
      break

    case "range": {
      const a = attribute = new RangeAttribute(block, id)
      a.random   = BoolUtils.toBool(attributeEnc["random"], false)
      a.stepSize = NumUtils.toNum(attributeEnc["step"], a.stepSize)
      a.minValue = NumUtils.toNum(attributeEnc["min"], a.minValue)
      a.maxValue = NumUtils.toNum(attributeEnc["max"], a.maxValue)
      break
    }

    case "select": {
      const a = attribute = new SelectAttribute(block, id)
      const maybeQuoteValues = StringUtils.toStrOrNull(attributeEnc["quoteValues"])
      a.quoteValues = (QuoteOptions.NEVER_QUOTE === maybeQuoteValues || QuoteOptions.ALWAYS_QUOTE === maybeQuoteValues || QuoteOptions.SMART_QUOTE === maybeQuoteValues) ? maybeQuoteValues : null
      ArrayUtils.maybeForEach(attributeEnc, "values", (valueEnc) => {
        const value = new SelectOption(valueEnc["actual"], valueEnc["display"])
        a.values.push(value)
      })
      break
    }

    case "text":
      attribute = new TextAttribute(block, id)
      break

    default:
      attribute = new TextAttribute(block, id)
      break

  }

  attribute.name = StringUtils.toStr(attributeEnc["name"], "")
  attribute.unit = StringUtils.toStr(attributeEnc["unit"], "")
  attribute.setDefaultValue(StringUtils.toStr(attributeEnc["default"], ""))

  attribute.storage.set(attributeEnc)
  return attribute
}

function restoreExpressionDefinitions(workspace: CodeWorkspace, definitionEncs: any[]): void {
  if (!Array.isArray(definitionEncs) || definitionEncs.length === 0) {
    return
  }

  for (var definitionEnc of definitionEncs) {
    const definition = new ExpressionDefinition(definitionEnc["name"], definitionEnc["type"])
    definition.format = definitionEnc["format"]
    ArrayUtils.maybeForEach(definitionEnc, "arguments", (argument) => {
      definition.arguments.push(argument)
    })
    workspace.expressionDefinitions.push(definition)
  }
}

function restoreProgram(workspace: CodeWorkspace, programEnc: any): void {
  ArrayUtils.maybeForEach(programEnc, "chains", (chain) => {
    restoreChain(workspace, chain)
  })
}

function restoreChain(workspace: CodeWorkspace, chainEnc: any): void {
  const chain = new Chain(workspace, workspace.chains.length)
  chain.storage.set(chainEnc)

  if (typeof(chainEnc["x"]) === "number" && typeof(chainEnc["y"]) === "number") {
    chain.x = Math.floor(chainEnc["x"])
    chain.y = Math.floor(chainEnc["y"])
  }

  workspace.chains.push(chain)
  ArrayUtils.maybeForEach(chainEnc, "blocks", (b) => {
    const block = restoreChainBlock(workspace, b)
    if (block !== null) {
      chain.blocks.push(block)
    }
  })
}

function restoreChainBlock(workspace: CodeWorkspace, blockEnc: any): Block | null {
  const proto = workspace.menu.getBlockById(blockEnc["id"])
  if (proto === null) {
    console.log(`No prototype block found for id: ${blockEnc["id"]}`)
    console.log(workspace.menu.slots.map( (s) => s.block.id ))
    return null
  }

  const block = proto.clone(false)
  block.storage.set(blockEnc)

  block.propertiesDisplay = restorePropertiesDisplay(blockEnc, block)
  restoreChainBlockAttributeValues(block.params, blockEnc["params"])
  restoreChainBlockAttributeValues(block.properties, blockEnc["properties"])

  ArrayUtils.maybeForEach(blockEnc, "clauses", (clauseEnc) => {

  })

  var clauseIndex = 0
  ArrayUtils.maybeForEach(blockEnc, "clauses", (clauseEnc) => {
    if (clauseIndex >= block.clauses.length) {
      return
    }
    const clause = block.clauses[clauseIndex]
    clause.storage.set(clauseEnc)
    ArrayUtils.maybeForEach(clauseEnc, "children", (childEnc) => {
      const child = restoreChainBlock(workspace, childEnc)
      if (child !== null) {
        clause.blocks.push(child)
      }
    })
    clauseIndex++
  })

  return block
}

// we trust the `attribute.clone()` that made each chain block attribute instance got the rest of the properties
// this just puts the values back in place.
function restoreChainBlockAttributeValues(blockAttributes: Map<number, Attribute>, attributeEncs: any[]): void {
  if (!Array.isArray(attributeEncs)) {
    return
  }

  for (var attributeEnc of attributeEncs) {

    if (!attributeEnc.hasOwnProperty("id") || typeof(attributeEnc["id"]) !== "number" || !blockAttributes.has(attributeEnc["id"])) {
      continue
    }

    const blockAttribute = blockAttributes.get(attributeEnc["id"])!
    blockAttribute.storage.set(attributeEnc)

    if (attributeEnc["value"] === null || attributeEnc["value"] === undefined) {
      continue
    }

    if ([ "bool", "num" ].includes(blockAttribute.type)) {
      if (!(blockAttribute instanceof ExpressionAttribute)) {
        throw new Error("A non-expression attribute cannot have a type of 'num' or 'bool'.")
      }
      const expressionAttibute = blockAttribute as ExpressionAttribute
      if (typeof(attributeEnc["value"]) === "object") {
        const builder = restoreExpressionBuilder(expressionAttibute.block.workspace, expressionAttibute.type, attributeEnc["value"])
        expressionAttibute.builder = builder
      } else {
        const builder = restoreExpressionValue(expressionAttibute.block.workspace, expressionAttibute.type, attributeEnc["value"])
        expressionAttibute.builder = builder
      }
    } else {
      if (!attributeEnc.hasOwnProperty("value") || typeof(attributeEnc["value"]) === "object") {
        // only expressions can have an object as a value, so...
        blockAttribute.setValue(blockAttribute.getDefaultValue())
      } else {
        blockAttribute.setValue(attributeEnc["value"])
      }
    }
  }
}

function restoreExpressionValue(workspace: CodeWorkspace, type: "bool" | "num", value: string): ExpressionBuilder {
  const builder = new ExpressionBuilder(workspace, type)
  const expression = new Expression(builder, type)
  expression.name = value
  builder.root = expression
  return builder
}

function restoreExpressionBuilder(workspace: CodeWorkspace, type: "bool" | "num", expressionEnc: any): ExpressionBuilder {
  const builder = new ExpressionBuilder(workspace, type)
  if (expressionEnc !== null && expressionEnc !== "") {
    builder.root = restoreExpression(builder, type, expressionEnc)
  }
  return builder
}

function restoreExpression(builder: ExpressionBuilder, type: "bool" | "num", expressionEnc: any): Expression {
  const expression = new Expression(builder, type)
  expression.name = StringUtils.toStr(expressionEnc["name"])
  if (ObjectUtils.isObjectValue(expressionEnc["format"])) {
    expression.format = expressionEnc["format"]
  }

  ArrayUtils.maybeForEach(expressionEnc, "children", (childEnc) => {
    const child = restoreExpression(builder, type, childEnc)
    expression.children.push(child)
  })

  return expression
}

function restoreBlockStyle(styleEnc: any, blockColorDefault: string): BlockStyle {
  if (!ObjectUtils.isObjectValue(styleEnc)) {
    const defaultStyle = new BlockStyle()
    defaultStyle.blockColor = blockColorDefault
    return defaultStyle
  }
  const style = new BlockStyle()
  style.blockColor  = StringUtils.toStr(styleEnc["blockColor"],  blockColorDefault)
  style.textColor   = StringUtils.toStr(styleEnc["textColor"],   BlockStyle.DEFAULT_TEXT_COLOR)
  style.borderColor = StringUtils.toStr(styleEnc["borderColor"], BlockStyle.DEFAULT_BORDER_COLOR)
  style.fontWeight  = StringUtils.toStr(styleEnc["fontWeight"],  "")
  style.fontSize    = StringUtils.toStr(styleEnc["fontSize"],    "")
  style.fontFace    = StringUtils.toStr(styleEnc["fontFace"],    "")
  return style
}

function restoreAllowedTags(clause: Clause, allowedTagsEnc: any): AllowedTags {
  const type = allowedTagsEnc["type"]
  switch (type) {

    case "inherit":
      return new InheritTags(clause)

    case "any-of":
    case "unrestricted":
      return restoreConcreteTags(allowedTagsEnc)

    default:
      throw new Error(`Unknown AllowedTags type: ${type}, cannot restore.`)
  }
}

function restoreConcreteTags(concreteTags: any): ConcreteTags {
  if (!Array.isArray(concreteTags["tags"])) {
    return new UnrestrictedTags()
  }
  const tags = (concreteTags["tags"] as string[])
  const anyOf = new AnyOfTags(tags)
  return anyOf
}

export { restoreWorkspace }
