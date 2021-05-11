// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { IntAttributeInput, NumAttributeInput, NumberValueInput, RangeAttributeInput } from "../../types/types"
import { NumUtils } from "../../utils/num-utils"
import { Block } from "../block-instance"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
abstract class NumAttribute extends Attribute {

  readonly numDef: NumAttributeInput
  readonly na: NumberValueInput

  setValue(valueString: string) {
    this.na.value = NumUtils.toNum(valueString, this.numDef.default)
  }

  // Perhaps surprisingly, this class does *not* correspond to the `"num"` attribute `type`.
  // That type is for the `ExpressionAttribute`.  This class can be `int` or `range`.
  // -Jeremy B July 2020
  constructor(numDef: IntAttributeInput | RangeAttributeInput, na: NumberValueInput, block: Block) {
    super(numDef, na, block)
    this.numDef = numDef
    this.na = na
  }

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
        const formattedValue = NumAttribute.numberValue(this.numDef, this.na)
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.def.id, this.block.b.instanceId, this.def.id, this.a.type, this.na.value, formattedValue))
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
      <div class="nt-param-name">${this.def.name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="number" step="${this.numDef.step}" value="${this.na.value}">
        <span class="nt-param-unit">${this.def.unit}</span>
      </div>
    `
  }

  getDisplayValue(): string { return `${NumAttribute.numberValue(this.numDef, this.na)}${this.def.unit}` }

  static numberValue(def: NumAttributeInput, na: NumberValueInput): string {
    const valueString: string = na.value.toFixed(NumAttribute.stepSizePrecision(def)).toString()
    return (valueString.endsWith(".0")) ? valueString.substring(0, valueString.length - 2) : valueString
  }

  static stepSizePrecision(def: NumAttributeInput): number {
    if (Number.isInteger(def.step)) {
      return 0
    } else {
      const text = def.step.toString()
      return text.length - text.indexOf('.') - 1
    }
  }

}

export { NumAttribute }
