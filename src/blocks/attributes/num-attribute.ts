// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { IntAttributeInput, NumAttributeInput, RangeAttributeInput } from "../../types/types"
import { NumUtils } from "../../utils/num-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
abstract class NumAttribute extends Attribute {

  readonly na: NumAttributeInput

  setValue(valueString: string) {
    this.na.value = NumUtils.toNum(valueString, this.na.default === null ? 0.0 : this.na.default)
  }

  getDefaultValue(): string {
    return this.na.default === null ? "" : this.na.default.toString()
  }
  setDefaultValue(valueString: string): void {
    this.na.default = NumUtils.toNum(valueString)
  }

  // Perhaps surprisingly, this class does *not* correspond to the `"num"` attribute `type`.
  // That type is for the `ExpressionAttribute`.  This class can be `int` or `range`.
  // -Jeremy B July 2020
  constructor(na: IntAttributeInput | RangeAttributeInput, block: Block, isSlotBlock: boolean) {
    super(na, block)
    this.na = na
    if (!isSlotBlock) {
      na.value = (na.value === null) ? na.default : na.value
    }
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
        const formattedValue = CodeFormatter.formatAttributeValue(this.a)
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.b.id, this.block.b.instanceId, this.na.id, this.a.type, this.na.value, formattedValue))
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
      <div class="nt-param-name">${this.na.name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="number" step="${this.na.step}" value="${this.na.value}">
        <span class="nt-param-unit">${this.na.unit}</span>
      </div>
    `
  }
}

export { NumAttribute }
