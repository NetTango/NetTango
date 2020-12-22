// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute, AttributeTypes } from "./attribute"

/// Represents the paramter or property options for a block
class TextAttribute extends Attribute {

  get type(): AttributeTypes { return "text" }

  value: string = ""
  defaultValue: string = ""

  getValue(): string { return this.value === null ? "" : this.value }
  setValue(valueString: string): void {
    this.value = valueString
  }

  getDefaultValue(): string { return this.defaultValue }
  setDefaultValue(defaultString: string): void {
    this.defaultValue = defaultString
  }

  constructor(block: Block, id: number | null) {
    super(block, id)
  }

  static clone(block: Block, source: TextAttribute, isSlotBlock: boolean): TextAttribute   {
    const clone = new TextAttribute(block, null)
    Attribute.clone(block, source, isSlotBlock, clone)
    clone.defaultValue = source.defaultValue
    if (!isSlotBlock) {
      clone.value = (source.value === null || source.value === "") ? clone.defaultValue : source.value
    }
    return clone
  }

  // just so we can clone without knowing the type
  clone(block: Block, isSlotBlock: boolean): TextAttribute {
    return TextAttribute.clone(block, this, isSlotBlock)
  }

  shouldQuote(): boolean { return true }

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
          this.value = input.value
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
    const htmlValue = StringUtils.escapeHtml(this.getValue())
    return `
      <input class="nt-param-input" id="nt-param-${this.uniqueId}" type="text" value="${htmlValue}">
      <span class="nt-param-unit">${this.unit}</span>
    `
  }

}

export { TextAttribute }
