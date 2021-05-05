// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { TextAttributeInput } from "../../types/types"
import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

/// Represents the paramter or property options for a block
class TextAttribute extends Attribute {

  readonly ta: TextAttributeInput

  setValue(valueString: string): void {
    this.ta.value = valueString
  }

  getDefaultValue(): string { return this.ta.default }
  setDefaultValue(defaultString: string): void {
    this.ta.default = defaultString
  }

  constructor(ta: TextAttributeInput, block: Block, isSlotBlock: boolean) {
    super(ta, block)
    this.ta = ta
    if (!isSlotBlock) {
      ta.value = (ta.value === "") ? ta.default : ta.value
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
          this.ta.value = input.value
        }
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this.a)
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.b.id, this.block.b.instanceId, this.ta.id, this.ta.type, this.ta.value, formattedValue))
      })
    )

    document.querySelectorAll(".nt-param-cancel").forEach( (el) => el.addEventListener("click", (e) => backdrop.classList.remove("show") ) )

    if (input !== null) {
      input.focus()
      if (label !== null) {
        input.addEventListener("change", (e) => { label.innerHTML = input.value })
        input.addEventListener("input", (e) => { label.innerHTML = input.value })
      }
    }
  }

  buildHTMLInput(): string {
    const htmlValue = StringUtils.escapeHtml(CodeFormatter.getAttributeValue(this.ta))
    return `
      <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="text" value="${htmlValue}">
      <span class="nt-param-unit">${this.ta.unit}</span>
    `
  }

}

export { TextAttribute }
