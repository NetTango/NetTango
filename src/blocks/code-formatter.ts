// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import {
  AttributeInput
, AttributeValueInput
, BlockInstanceInput
, BlockDefinitionInput
, ClauseInput
, NumAttributeInput
, SelectAttributeInput
, ClauseInstanceInput
} from "../types/types"

import { FormatAttributeType } from "../nettango"
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
import { ExpressionAttribute } from "./attributes/expression-attribute"
import { NumAttribute } from "./attributes/num-attribute"
import { SelectAttribute } from "./attributes/select-attribute"
import { BlockDefinition } from "./block-definition"
import { BlockRules } from "./block-rules"
import { Chain } from "./chain"
import { CodeWorkspace } from "./code-workspace"

// TODO: This is an over-simplification, but it works for our big use-case (NetLogo)
// If we want to look at custom per-language code formatters again, I think it makese
// more sense for them to be provided by the end users, as opposed to included in the
// NetTango runtime directly.  -Jeremy B July 2020
class FormatOptions {
  readonly chainOpen: string
  readonly chainClose: string
  readonly clauseOpen: string
  readonly clauseClose: string

  constructor(chainOpen: string, chainClose: string, clauseOpen: string, clauseClose: string) {
    this.chainOpen = chainOpen
    this.chainClose = chainClose
    this.clauseOpen = clauseOpen
    this.clauseClose = clauseClose
  }
}

type Block     = { def: BlockDefinitionInput, b: BlockInstanceInput }
type Attribute = { def: AttributeInput, a: AttributeValueInput }
type Clause    = { def: ClauseInput, c: ClauseInstanceInput }

function compareChainsByAction(c1: Chain, c2: Chain) {
  if (c1.blocks.length === 0) {
    return -1
  }
  if (c2.blocks.length === 0) {
    return 1
  }
  return c1.blocks[0].def.action.localeCompare(c2.blocks[0].def.action)
}

class CodeFormatter  {

  indentString: string = "  "
  formatOptions: FormatOptions
  formatAttribute: FormatAttributeType
  readonly workspace: CodeWorkspace

  constructor(workspace: CodeWorkspace, language: string, formatAttribute: FormatAttributeType) {
    this.workspace = workspace
    this.formatAttribute = formatAttribute

    switch (language) {

      case "NetLogo":
        this.formatOptions = new FormatOptions("", "end", "[", "]")
        break

      default:
        this.formatOptions = new FormatOptions("", "", "", "")
        break

    }
  }

  formatCode(includeRequired: boolean, formatAttributeOverride: FormatAttributeType | null = null): string {
    const originalFormatAttribute = this.formatAttribute
    if (formatAttributeOverride !== null) {
      this.formatAttribute = formatAttributeOverride
    }

    const shouldIncludeInExtra = (slot: BlockDefinition) =>
      includeRequired && slot.def.isRequired && BlockRules.canBeStarter(slot.def) && this.workspace.getBlockCount(slot.def.id) === 0

    const extraChains = this.workspace.menu.slots
      .filter(shouldIncludeInExtra)
      .map( (slot) => [{ def: slot.def, b: slot.makeInstance() }] )

    // TODO: What to do with required blocks that cannot be starters?

    const result = this.formatLanguageCode(extraChains)

    this.formatAttribute = originalFormatAttribute

    return result
  }

  formatLanguageCode(extraChains: Block[][]): string {
    const out = new StringBuffer()

    const chains = this.workspace.chains.slice(0)
    chains.sort(compareChainsByAction)
    for (var chain of chains) {
      const blocks = chain.blocks.map( (b) => { return { def: b.def, b: b.b }} )
      this.formatChainBlocks(out, blocks, this.workspace.ws.chainOpen, this.workspace.ws.chainClose)
    }

    for (var blocks of extraChains) {
      this.formatChainBlocks(out, blocks, this.workspace.ws.chainOpen, this.workspace.ws.chainClose)
    }

    return out.toString()
  }

  formatChainBlocks(out: StringBuffer, blocks: Block[], chainOpen: string | null, chainClose: string | null): void {
    if (blocks.length === 0) { return }

    var first = blocks[0]
    if (!BlockRules.canBeStarter(first.def)) { return }

    this.writeFormatOption(out, null, 0, this.formatOptions.chainOpen, chainOpen)
    this.formatBlock(out, 0, first)
    this.formatBlocks(out, 1, blocks.slice(1))
    const override = StringUtils.isNotNullOrEmpty(first.def.closeStarter) ? first.def.closeStarter : chainClose
    this.writeFormatOption(out, null, 0, this.formatOptions.chainClose, override)
    out.writeln()
  }

  formatBlocks(out: StringBuffer, indent: number, blocks: Block[]): void {
    if (blocks.length === 0) { return }

    for (var block of blocks) {
      this.formatBlock(out, indent, block)
    }
  }

  formatBlock(out: StringBuffer, indent: number, block: Block): void {
    var format = block.def.format
    if (format === null) {
      format = block.def.action
      for (var i = 0; i < block.def.params.length; i++) {
        format += ` {${i}}`
      }
      for (var i = 0; i < block.def.properties.length; i++) {
        format += ` {P${i}}`
      }
    }

    format = this.replaceParamsAndProps(format, block)

    this.writeIndentedLine(out, indent, format)

    block.b.clauses.forEach( (c, i) =>
      this.formatClause(out, block, { def: block.def.clauses[i], c: c }, indent)
    )

    if (StringUtils.isNotNullOrEmpty(block.def.closeClauses)) {
      const closeFormat = this.replaceParamsAndProps(block.def.closeClauses!, block)
      this.writeIndentedLine(out, indent, closeFormat)
    }
  }

  replaceParamsAndProps(format: string, block: Block): string {
    const params = block.b.params.map( (a, i) => { return { def: block.def.params[i], a: a }} )
    format = this.replaceAttributes(format, block, params, "")
    const properties = block.b.properties.map( (a, i) => { return { def: block.def.properties[i], a: a }} )
    format = this.replaceAttributes(format, block, properties, "P")
    return format
  }

  replaceAttributes(format: string, block: Block, attributes: Attribute[], placeholder: string): string {
    attributes.forEach( (a, i) => {
      format = this.replaceAttribute(format, `{${placeholder}${i}}`, block, a)
    })
    return format
  }

  formatClause(out: StringBuffer, block: Block, clause: Clause, indent: number): void {
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseOpen, clause.def.open)
    const clauseBlocks = clause.c.blocks.map( (b) => { return { def: this.workspace.menu.getBlockById(b.definitionId), b: b }} )
    this.formatBlocks(out, indent + 1, clauseBlocks)
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseClose, clause.def.close)
  }

  replaceAttribute(code: string, placeholder: string, block: Block, a: Attribute): string {
    const formattedValue = CodeFormatter.formatAttributeValue(a)
    const replacement = this.formatAttribute(this.workspace.containerId, block.def.id, block.b.instanceId, a.def.id, formattedValue, a.def.type)
    return StringUtils.replaceAll(code, placeholder, replacement)
  }

  writeIndentedLine(out: StringBuffer, indent: number, line: string): void {
    var fullIndent = ""
    for (var i = 0; i < indent; i++) { fullIndent = fullIndent + this.indentString }
    out.write(fullIndent)
    const indentedPost = StringUtils.replaceAll(line, "\n", "\n" + fullIndent)
    out.writeln(indentedPost)
  }

  writeFormatOption(out: StringBuffer, block: Block | null, indent: number, formatOption: string, override: string | null): void {
    const option = StringUtils.toStr(override, formatOption)
    if (StringUtils.isNotNullOrEmpty(option) && option.trim() !== "") {
      const optionFormat = block === null ? option : this.replaceParamsAndProps(option, block)
      this.writeIndentedLine(out, indent, optionFormat)
    }
  }

  static formatAttributeValue(a: Attribute): string {
    const value = CodeFormatter.getAttributeValue(a)
    const quoteIt = CodeFormatter.shouldQuote(a)
    const formatValue = quoteIt ? `"${value}"` : value
    return formatValue
  }

  static getAttributeValue(a: Attribute): string {
      switch (a.a.type) {
        case 'text':
        case 'select':
          return a.a.value

        case 'int':
        case 'range':
          return NumAttribute.numberValue(a.def as NumAttributeInput, a.a)

        case 'num':
        case 'bool':
          return ExpressionAttribute.expressionValue(a.a)
        }
    }

    // should the value for this attribute be quoted in code?
    static shouldQuote(a: Attribute): boolean {
      switch (a.a.type) {
        case 'text':
          return true

        case 'int':
        case 'range':
          return false

        case 'select':
          return SelectAttribute.shouldQuote(a.def as SelectAttributeInput, a.a)

        case 'num':
        case 'bool':
          return false

      }
    }

}

export { CodeFormatter }
