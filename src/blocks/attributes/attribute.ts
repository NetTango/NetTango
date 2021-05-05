// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { AttributeInput } from "../../types/types"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"

type AttributeTypes = "bool" | "num" | "int" | "range" | "text" | "select"

/// Represents the paramter or property options for a block
abstract class Attribute {

  readonly a: AttributeInput

  get uniqueId(): string { return `${this.block.workspace.containerId}-${this.block.b.id}-${this.a.id}` }

  /// parent block
  readonly block: Block

  abstract setValue(valueString: string): void

  abstract getDefaultValue(): string
  abstract setDefaultValue(defaultString: string): void

  getDisplayValue(): string { return `${CodeFormatter.getAttributeValue(this.a)}${this.a.unit}` }

  constructor(a: AttributeInput, block: Block) {
    this.a = a
    this.block = block
  }

  // parameters are meant to display inline with just a value
  drawParameter(): HTMLDivElement {
    const paramDiv = document.createElement("div")
    paramDiv.innerText = this.getDisplayValue()
    paramDiv.classList.add("nt-attribute-value")
    paramDiv.classList.add(`${this.block.getStyleClass()}-attribute`)
    if (this.block.b.blockColor !== null) { paramDiv.style.color = this.block.b.blockColor; }
    if (this.block.b.textColor !== null) { paramDiv.style.backgroundColor = this.block.b.textColor; }

    const updateValue = () => { paramDiv.innerText = this.getDisplayValue(); }
    paramDiv.addEventListener("click", (event) => {
      const target = (event.target as HTMLDivElement)
      const parent = (target.offsetParent as HTMLDivElement)
      const left = parent.offsetLeft + target.offsetLeft + event.offsetX
      const top  = parent.offsetTop  + target.offsetTop  + event.offsetY
      this.showParameterDialog(Math.floor(left), Math.floor(top), updateValue)
    })
    return paramDiv
  }

  // properties display stand-alone with an identifier
  drawProperty(): HTMLDivElement {
    const propDiv = document.createElement("div")
    propDiv.classList.add("nt-property")
    const propName = document.createElement("div")
    propName.classList.add("nt-property-name")
    propName.innerText = `\u2022 ${this.a.name}`
    propDiv.append(propName)
    propDiv.append(this.drawParameter())
    return propDiv
  }

  abstract showParameterDialog(x: number, y: number, acceptCallback: () => void): void
}

export { Attribute, AttributeTypes }
