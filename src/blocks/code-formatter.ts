// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { FormatAttributeType } from "../nettango"
import { AttributeInput, BlockInput, ClauseInput, ExpressionInput, NumAttributeInput } from "../types/types"
import { StringBuffer } from "../utils/string-buffer"
import { StringUtils } from "../utils/string-utils"
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

function compareChainsByAction(c1: Chain, c2: Chain) {
  if (c1.blocks.length === 0) {
    return -1
  }
  if (c2.blocks.length === 0) {
    return 1
  }
  return c1.blocks[0].b.action.localeCompare(c2.blocks[0].b.action)
}

class CodeFormatter  {

  indentString: string = "  "
  formatOptions: FormatOptions
  formatAttribute: FormatAttributeType
  readonly containerId: string

  constructor(language: string, formatAttribute: FormatAttributeType, containerId: string) {
    this.formatAttribute = formatAttribute
    this.containerId = containerId
    switch (language) {

      case "NetLogo":
        this.formatOptions = new FormatOptions("", "end", "[", "]")
        break

      default:
        this.formatOptions = new FormatOptions("", "", "", "")
        break

    }
  }

  formatCode(workspace: CodeWorkspace, includeRequired: boolean, formatAttributeOverride: FormatAttributeType | null = null): string {
    const originalFormatAttribute = this.formatAttribute
    if (formatAttributeOverride !== null) {
      this.formatAttribute = formatAttributeOverride
    }

    const extraChains = workspace.menu.slots
      .filter( (slot) => includeRequired && slot.b.isRequired && BlockRules.canBeStarter(slot.b) && workspace.getBlockCount(slot.b.id) === 0)
      .map( (slot) => [slot.b] )

    // TODO: What to do with required blocks that cannot be starters?

    const result = this.formatLanguageCode(workspace, extraChains)

    this.formatAttribute = originalFormatAttribute

    return result
  }

  formatLanguageCode(workspace: CodeWorkspace, extraChains: BlockInput[][]): string {
    const out = new StringBuffer()

    const chains = workspace.chains.slice(0)
    chains.sort(compareChainsByAction)
    for (var chain of chains) {
      this.formatChainBlocks(out, chain.blocks.map( (block) => block.b ), workspace.ws.chainOpen, workspace.ws.chainClose)
    }

    for (var blocks of extraChains) {
      this.formatChainBlocks(out, blocks, workspace.ws.chainOpen, workspace.ws.chainClose)
    }

    return out.toString()
  }

  formatChainBlocks(out: StringBuffer, blocks: BlockInput[], chainOpen: string | null, chainClose: string | null): void {
    if (blocks.length === 0) { return }

    var first = blocks[0]
    if (!BlockRules.canBeStarter(first)) { return }

    this.writeFormatOption(out, null, 0, this.formatOptions.chainOpen, chainOpen)
    this.formatBlock(out, 0, first)
    this.formatBlocks(out, 1, blocks.slice(1))
    const override = StringUtils.isNotNullOrEmpty(first.closeStarter) ? first.closeStarter : chainClose
    this.writeFormatOption(out, null, 0, this.formatOptions.chainClose, override)
    out.writeln()
  }

  formatBlocks(out: StringBuffer, indent: number, blocks: BlockInput[]): void {
    if (blocks.length === 0) { return }

    for (var block of blocks) {
      this.formatBlock(out, indent, block)
    }
  }

  formatBlock(out: StringBuffer, indent: number, block: BlockInput): void {

    var format = block.format
    if (format === null) {
      format = block.action
      for (var i = 0; i < block.params.length; i++) {
        format += ` {${i}}`
      }
      for (var i = 0; i < block.properties.length; i++) {
        format += ` {P${i}}`
      }
    }

    format = this.replaceParamsAndProps(format, block)

    this.writeIndentedLine(out, indent, format)

    for (var clause of block.clauses) {
      this.formatClause(out, block, clause, indent)
    }

    if (StringUtils.isNotNullOrEmpty(block.closeClauses)) {
      const closeFormat = this.replaceParamsAndProps(block.closeClauses!, block)
      this.writeIndentedLine(out, indent, closeFormat)
    }
  }

  replaceParamsAndProps(format: string, block: BlockInput): string {
    format = this.replaceAttributes(format, block, block.params, "")
    format = this.replaceAttributes(format, block, block.properties, "P")
    return format
  }

  replaceAttributes(format: string, block: BlockInput, attributes: AttributeInput[], placeholder: string): string {
    var i = 0
    attributes.forEach( (a, i) => {
      format = this.replaceAttribute(format, `{${placeholder}${i}}`, block, a)
    })
    return format
  }

  formatClause(out: StringBuffer, block: BlockInput, clause: ClauseInput, indent: number): void {
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseOpen, clause.open)
    this.formatBlocks(out, indent + 1, clause.children)
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseClose, clause.close)
  }

  replaceAttribute(code: string, placeholder: string, block: BlockInput, attribute: AttributeInput): string {
    const formattedValue = CodeFormatter.formatAttributeValue(attribute)
    if (block.instanceId === null) {
      throw new Error("Cannot generate attribute code for block instance without an instance ID.")
    }
    const replacement = this.formatAttribute(this.containerId, block.id, block.instanceId, attribute.id, formattedValue, attribute.type)
    return StringUtils.replaceAll(code, placeholder, replacement)
  }

  writeIndentedLine(out: StringBuffer, indent: number, line: string): void {
    var fullIndent = ""
    for (var i = 0; i < indent; i++) { fullIndent = fullIndent + this.indentString }
    out.write(fullIndent)
    const indentedPost = StringUtils.replaceAll(line, "\n", "\n" + fullIndent)
    out.writeln(indentedPost)
  }

  writeFormatOption(out: StringBuffer, block: BlockInput | null, indent: number, formatOption: string, override: string | null): void {
    const option = StringUtils.toStr(override, formatOption)
    if (StringUtils.isNotNullOrEmpty(option) && option.trim() !== "") {
      const optionFormat = block === null ? option : this.replaceParamsAndProps(option, block)
      this.writeIndentedLine(out, indent, optionFormat)
    }
  }

  static formatAttributeValue(attribute: AttributeInput): string {
    const value = StringUtils.toStr(CodeFormatter.getAttributeValue(attribute), "")
    const quoteIt = CodeFormatter.shouldQuote(attribute)
    const formatValue = quoteIt ? `"${value}"` : value
    return formatValue
  }

  static formatExpression(expression: ExpressionInput): string {
    if (expression.format !== null) {
      var format = expression.format
      for (var i = 0; i < expression.children.length; i++) {
        format = StringUtils.replaceAll(format, `{${i}}`, CodeFormatter.formatExpression(expression.children[i]))
      }
      return format
    }
    else if (expression.children.length === 1) {
      return `(${expression.name} ${CodeFormatter.formatExpression(expression.children[0])})`
    }
    else if (expression.children.length === 2) {
      return `(${CodeFormatter.formatExpression(expression.children[0])} ${expression.name} ${CodeFormatter.formatExpression(expression.children[1])})`
    }
    else {
      return StringUtils.toStr(expression.name, "")
    }
  }

  static stepSizePrecision(na: NumAttributeInput): number {
    if (Number.isInteger(na.step)) {
      return 0
    } else {
      const text = na.step.toString()
      return text.length - text.indexOf('.') - 1
    }
  }

  static getAttributeValue(a: AttributeInput): string {
      switch (a.type) {
        case 'text':
          return a.value === null ? "" : a.value

        case 'int':
        case 'range':
          if (a.value === null) {
            return ""
          }
          const valueString: string = a.value.toFixed(CodeFormatter.stepSizePrecision(a)).toString()
          return (valueString.endsWith(".0")) ? valueString.substring(0, valueString.length - 2) : valueString

        case 'select':
          return StringUtils.toStr(a.value, "")

        case 'num':
        case 'bool':
          return typeof a.value === 'string' ? a.value : CodeFormatter.formatExpression(a.value)
        }
    }

    // should the value for this attribute be quoted in code?
    static shouldQuote(a: AttributeInput): boolean {
      switch (a.type) {
        case 'text':
          return true

        case 'int':
        case 'range':
          return false

        case 'select':
          switch (a.quoteValues) {

            case "always-quote":
              return true

            case "never-quote":
              return false

            case "smart-quote":
            default:
              const maybeNum = Number.parseFloat(a.value)
              return Number.isNaN(maybeNum) && !["true", "false"].includes(a.value)

          }

        case 'num':
        case 'bool':
          return false

      }
    }

}

export { CodeFormatter }
