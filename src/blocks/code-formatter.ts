// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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
  if (c1.blocks.length === 0 || c1.blocks[0].action === null) {
    return -1
  }
  if (c2.blocks.length === 0 || c2.blocks[0].action === null) {
    return 1
  }
  return c1.blocks[0].action.localeCompare(c2.blocks[0].action)
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
      .filter( (slot) => includeRequired && slot.block.isRequired && slot.block.canBeStarter && workspace.getBlockCount(slot.block.id) === 0)
      .map( (slot) => [slot.block] )

    // TODO: What to do with required blocks that cannot be starters?

    const result = this.formatLanguageCode(workspace, extraChains)

    this.formatAttribute = originalFormatAttribute

    return result
  }

  formatLanguageCode(workspace: CodeWorkspace, extraChains: Block[][]): string {
    const out = new StringBuffer()

    const chains = workspace.chains.slice(0)
    chains.sort(compareChainsByAction)
    for (var chain of chains) {
      this.formatChainBlocks(out, chain.blocks, workspace.chainOpen, workspace.chainClose)
    }

    for (var blocks of extraChains) {
      this.formatChainBlocks(out, blocks, workspace.chainOpen, workspace.chainClose)
    }

    return out.toString()
  }

  formatChainBlocks(out: StringBuffer, blocks: Block[], chainOpen: string | null, chainClose: string | null): void {
    if (blocks.length === 0) { return }

    var first = blocks[0]
    if (!first.canBeStarter) { return }

    this.writeFormatOption(out, null, 0, this.formatOptions.chainOpen, chainOpen)
    this.formatBlock(out, 0, first)
    this.formatBlocks(out, 1, blocks.slice(1))
    const override = StringUtils.toStrNotEmpty(first.closeStarter, StringUtils.toStrNotEmpty(chainClose, ""))
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

    var format = block.format
    if (format === null) {
      format = block.action
      for (var i = 0; i < block.params.size; i++) {
        format += ` {${i}}`
      }
      for (var i = 0; i < block.properties.size; i++) {
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

  replaceParamsAndProps(format: string, block: Block): string {
    format = this.replaceAttributes(format, block, block.params, "")
    format = this.replaceAttributes(format, block, block.properties, "P")
    return format
  }

  replaceAttributes(format: string, block: Block, attributes: Map<number, Attribute>, placeholder: string): string {
    var i = 0
    for (var key of attributes.keys()) {
      format = this.replaceAttribute(format, `{${placeholder}${i}}`, block, attributes.get(key)!)
      i++
    }
    return format
  }

  formatClause(out: StringBuffer, block: Block, clause: Clause, indent: number): void {
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseOpen, clause.open)
    this.formatBlocks(out, indent + 1, clause.blocks)
    this.writeFormatOption(out, block, indent, this.formatOptions.clauseClose, clause.close)
  }

  replaceAttribute(code: string, placeholder: string, block: Block, attribute: Attribute): string {
    // assert (attribute != null)
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

  writeFormatOption(out: StringBuffer, block: Block | null, indent: number, formatOption: string, override: string | null): void {
    const option = StringUtils.toStr(override, formatOption)
    if (StringUtils.isNotNullOrEmpty(option) && option.trim() !== "") {
      const optionFormat = block === null ? option : this.replaceParamsAndProps(option, block)
      this.writeIndentedLine(out, indent, optionFormat)
    }
  }

  static formatAttributeValue(attribute: Attribute): string {
    const value = StringUtils.toStr(attribute.getValue(), "")
    const quoteIt = attribute.shouldQuote()
    const formatValue = quoteIt ? `\"${value}\"` : value
    return formatValue
  }

  static formatExpression(expression: Expression): string {
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

}
