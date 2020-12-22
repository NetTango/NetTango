// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExternalStorage } from "../../utils/external-storage"
import { Block } from "../block"

type AttributeTypes = "bool" | "num" | "int" | "range" | "text" | "select"

/// Represents the paramter or property options for a block
abstract class Attribute {

  readonly storage = new ExternalStorage(["id", "type", "name", "unit", "value", "default", "quoteValues", "values", "step", "random", "min", "max", "expressionValue"])

  /// parameter id - unique per block
  id: number

  get uniqueId(): string { return `${this.block.workspace.containerId}-${this.block.id}-${this.id}` }

  /// parent block
  block: Block

  /// parameter type: can be "bool", "num", "int", "range", "text", or "select"
  abstract get type(): AttributeTypes

  /// name of the parameter (e.g. degrees, length)
  name: string = ""

  /// short unit name that will be displayed after the value (e.g. %, px, m, mm, s)
  unit: string = ""

  abstract getValue(): string
  abstract setValue(valueString: string): void

  abstract getDefaultValue(): string
  abstract setDefaultValue(defaultString: string): void

  getDisplayValue(): string { return `${this.getValue()}${this.unit}` }

  constructor(block: Block, id: number | null) {
    this.block = block
    if (id !== null) {
      this.id = id
      if (this.id >= this.block.nextParamId) {
        this.block.nextParamId = this.id + 1
      }
    } else {
      this.id = this.block.nextParamId++
    }
  }

  static clone(block: Block, source: Attribute, isSlotBlock: boolean, clone: Attribute): void {
    clone.id = source.id
    clone.name = source.name
    clone.unit = source.unit
  }

  // just so we can clone without knowing the type
  abstract clone(block: Block, isSlotBlock: boolean): Attribute

  // should the value for this attribute be quoted in code?
  abstract shouldQuote(): boolean

  // parameters are meant to display inline with just a value
  drawParameter(): HTMLDivElement {
    const paramDiv = new HTMLDivElement()
    paramDiv.innerText = this.getDisplayValue()
    paramDiv.classList.add("nt-attribute-value")
    paramDiv.classList.add("${block.getStyleClass()}-attribute")
    if (this.block.blockColor !== null) { paramDiv.style.color = this.block.blockColor; }
    if (this.block.textColor !== null) { paramDiv.style.backgroundColor = this.block.textColor; }

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
    const propDiv = new HTMLDivElement()
    propDiv.classList.add("nt-property")
    const propName = new HTMLDivElement()
    propName.classList.add("nt-property-name")
    propName.innerText = `\u2022 ${this.name}`
    propDiv.append(propName)
    propDiv.append(this.drawParameter())
    return propDiv
  }

  abstract showParameterDialog(x: number, y: number, acceptCallback: () => void): void
}

export { Attribute, AttributeTypes }
