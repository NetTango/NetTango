// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute, AttributeTypes } from "./attribute"
import { NumAttribute } from "./num-attribute"

//-------------------------------------------------------------------------
/// Represents a range of numbers
//-------------------------------------------------------------------------
class RangeAttribute extends NumAttribute {

  get type(): AttributeTypes { return "range" }

  /// lowest possible value that the user can select (for numbers and range)
  minValue: number = 0

  /// highest possible value that the user can select (for numbers and range)
  maxValue: number = 10

  constructor(block: Block, id: number | null) {
    super(block, id)
  }

  static clone(block: Block, source: RangeAttribute, isSlotBlock: boolean): RangeAttribute {
    const clone = new RangeAttribute(block, source.id)
    super.clone(block, source, isSlotBlock, clone)
    clone.minValue = source.minValue
    clone.maxValue = source.maxValue
    return clone
  }

  clone(block: Block, isSlotBlock: boolean): Attribute {
    return RangeAttribute.clone(block, this, isSlotBlock)
  }

  showParameterDialog(x: number, y: number, acceptCallback: () => void): void {
    const backdrop = this.block.workspace.backdrop
    backdrop.classList.add("show")
    const dialog = this.block.workspace.dialog
    dialog.style.top = `${y}px`
    dialog.classList.remove("small")
    dialog.innerHTML = ""

    const table = document.createElement("div")
    table.className = "nt-param-table"
    dialog.append(table)

    table.insertAdjacentHTML("beforeend",
      `
        <div class="nt-param-row">
          <div class="nt-param-label">
            ${this.name}:
            <label id="nt-param-label-${this.uniqueId}" for="nt-param-${this.uniqueId}">${this.value}</label>
            <span class="nt-param-unit">${this.unit}</span>
          </div>
        </div>
        <div class="nt-param-row">
          <div class="nt-param-value">
            <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="range" value="${this.value}" min="${this.minValue}" max="${this.maxValue}" step="${this.stepSize}">
          </div>
        </div>
      `)

    const label = document.querySelector(`#nt-param-label-${this.uniqueId}`) as Element
    const input = document.querySelector(`#nt-param-${this.uniqueId}`) as HTMLInputElement
    if (input !== null && label !== null) {
      input.addEventListener("change", (e) => {
        this.setValue(input.value)
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this)
        if (this.block.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue))
        e.stopPropagation()
      })
      input.addEventListener("input", (e) => { label.innerHTML = input.value; })
    }
  }
}

export { RangeAttribute }
