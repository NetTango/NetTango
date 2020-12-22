// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class BlockStyle {

  static readonly DEFAULT_STARTER_COLOR   = "#bb5555"
  static readonly DEFAULT_CONTAINER_COLOR = "#8899aa"
  static readonly DEFAULT_COMMAND_COLOR   = "#9977aa"
  static readonly DEFAULT_TEXT_COLOR      = "#ffffff"
  static readonly DEFAULT_BORDER_COLOR    = "#ffffff"
  static readonly DEFAULT_FONT_FAMILY     = "Poppins, sans-serif"

  static readonly DEFAULT_STARTER_STYLE   = new BlockStyle({ blockColor: BlockStyle.DEFAULT_STARTER_COLOR })
  static readonly DEFAULT_CONTAINER_STYLE = new BlockStyle({ blockColor: BlockStyle.DEFAULT_CONTAINER_COLOR })
  static readonly DEFAULT_COMMAND_STYLE   = new BlockStyle({ blockColor: BlockStyle.DEFAULT_COMMAND_COLOR })

  constructor(values?: Partial<BlockStyle>) {
    Object.assign(this, values)
  }

  blockColor  = BlockStyle.DEFAULT_COMMAND_COLOR
  textColor   = BlockStyle.DEFAULT_TEXT_COLOR
  borderColor = BlockStyle.DEFAULT_BORDER_COLOR
  fontWeight  = ""
  fontSize    = ""
  fontFace    = ""

  get font() {
    const weight = this.fontWeight === "" ? "" : `font-weight: ${this.fontWeight};`
    const size   = this.fontSize   === "" ? "" : `font-size: ${this.fontSize};`
    const face = `font-family: ${ this.fontFace === "" ? BlockStyle.DEFAULT_FONT_FAMILY : this.fontFace };`
    return `${weight} ${size} ${face}`.trim()
  }

  get cssRule() {
    return `color: ${this.textColor}; border-color: ${this.borderColor}; ${this.font}`.trim()
  }

  appendToSheet(sheet: CSSStyleSheet, blockClass: string) {
    sheet.insertRule(`.${blockClass}-color { background-color: ${this.blockColor}; }`, 0)
    sheet.insertRule(`.${blockClass}-attribute { color: ${this.blockColor}; background-color: ${this.textColor}; }`, 0)
    sheet.insertRule(`.${blockClass} { ${this.cssRule} }`, 0)
  }

}

export { BlockStyle }