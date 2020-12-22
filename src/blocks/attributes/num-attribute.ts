// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { NumUtils } from "../../utils/num-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
abstract class NumAttribute extends Attribute {

  value: number | null = null
  defaultValue: number | null = null

  getValue(): string {
    if (this.value === null) { return "" }
    const valueString: string = (this.value !== null ? this.value : 0).toFixed(1).toString()
    return (valueString.endsWith(".0")) ? valueString.substring(0, valueString.length - 2) : valueString
  }
  setValue(valueString: string) {
    this.value = NumUtils.toNum(valueString, 0.0)
  }

  getDefaultValue(): string {
    return this.defaultValue === null ? "" : this.defaultValue.toString()
  }
  setDefaultValue(valueString: string): void {
    this.defaultValue = NumUtils.toNumOrNull(valueString)
  }

  /// represents a random number?
  random: boolean | null = null

  /// step interval for selections (for numbers and range)
  stepSize: number = 1

  // Perhaps surprisingly, this class does *not* correspond to the `"num"` attribute `type`.
  // That type is for the `ExpressionAttribute`.  This class can be `int` or `range`.
  // -Jeremy B July 2020
  constructor(block: Block, id: number) {
    super(block, id)
  }

  static clone(block: Block, source: NumAttribute, isSlotBlock: boolean, clone: NumAttribute): NumAttribute {
    Attribute.clone(block, source, isSlotBlock, clone)
    clone.random = source.random
    clone.stepSize = source.stepSize
    clone.defaultValue = source.defaultValue
    if (!isSlotBlock) {
      clone.value = (source.value === null) ? clone.defaultValue : source.value
    }
    return clone
  }

  shouldQuote(): boolean { return false }

  showParameterDialog(x: number, y: number, acceptCallback: () => void): void {
    const backdrop = this.block.workspace.backdrop
    backdrop.classList.add("show")
    const dialog = this.block.workspace.dialog
    dialog.style.top = `${y}px`
    dialog.classList.remove("small")
    dialog.innerHTML = ""

    const inputCode = this.buildHTMLInput()

    dialog.insertAdjacentHTML("beforeend", `
      <div class="nt-param-table">
        <div class="nt-param-row">${inputCode}</div>
      </div>
      <button class="nt-param-confirm" type="button">OK</button>
      <button class="nt-param-cancel" type="button">Cancel</button>
    `)

    const label = document.querySelector(`#nt-param-label-${this.uniqueId}`) as Element
    const input = document.querySelector(`#nt-param-${this.uniqueId}`) as HTMLInputElement

    document.querySelectorAll(".nt-param-confirm").forEach( (el) =>
      el.addEventListener("click", (e) => {
        if (input !== null) {
          this.setValue(input.value)
        }
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this)
        if (this.block.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue))
      })
    )

    document.querySelectorAll(".nt-param-cancel").forEach( (el) =>
      el.addEventListener("click", (e) =>
        backdrop.classList.remove("show")
      )
    )

    if (input !== null) {
      input.focus()
      if (label !== null) {
        input.addEventListener("change", (e) => { label.innerHTML = input.value; })
        input.addEventListener("input", (e) => { label.innerHTML = input.value; })
      }
    }
  }

  buildHTMLInput(): string {
    return `
      <div class="nt-param-name">${this.name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="number" step="${this.stepSize}" value="${this.value}">
        <span class="nt-param-unit">${this.unit}</span>
      </div>
    `
  }
}

export { NumAttribute }