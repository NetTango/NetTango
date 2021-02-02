// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute, AttributeTypes } from "./attribute"

type QuoteOptionTypes = "smart-quote" | "always-quote" | "never-quote"

class QuoteOptions {
  static readonly SMART_QUOTE  = "smart-quote"
  static readonly ALWAYS_QUOTE = "always-quote"
  static readonly NEVER_QUOTE  = "never-quote"
}

class SelectOption {
  readonly actual: string
  readonly display: string

  get displayValue(): string {
    return this.display === null || this.display === "" ? this.actual : this.display
  }

  constructor(actual: string, display: string) {
    this.actual = actual
    this.display = display
  }
}

//-------------------------------------------------------------------------
/// Represents a value selected from a list of options
//-------------------------------------------------------------------------
class SelectAttribute extends Attribute {

  get type(): AttributeTypes { return "select" }

  value: string = ""
  defaultValue: string = ""
  quoteValues: QuoteOptionTypes | null = QuoteOptions.SMART_QUOTE

  getValue(): string { return StringUtils.toStr(this.value, "") }
  setValue(valueString: string): void {
    this.value = valueString
  }

  getDefaultValue(): string { return this.defaultValue }
  setDefaultValue(defaultString: string): void {
    this.defaultValue = defaultString
  }

  getDisplayValue(): string { return `${this.selectedDisplay}${this.unit} \u25BE` }

  /// list of possible values for select type
  readonly values: SelectOption[] = []
  get selectedDisplay(): string {
    const valueOptions = this.values.filter( (o) => o.actual === this.value && o.display !== null && o.display !== "")
    if (valueOptions.length === 1) {
      return valueOptions[0].displayValue
    } else {
      return this.value
    }
  }

  constructor(block: Block, id: number | null) {
    super(block, id)
  }

  static clone(block: Block, source: SelectAttribute, isSlotBlock: boolean): SelectAttribute {
    const clone = new SelectAttribute(block, null)
    Attribute.clone(block, source, isSlotBlock, clone)
    clone.defaultValue = source.defaultValue
    clone.quoteValues = source.quoteValues
    source.values.forEach( (option) => clone.values.push(option) )
    if (!isSlotBlock) {
      clone.value = StringUtils.toStrNotEmpty(source.value, clone.defaultValue)
    }
    return clone
  }

  clone(block: Block, isSlotBlock: boolean): Attribute {
    return SelectAttribute.clone(block, this, isSlotBlock)
  }

  shouldQuote(): boolean {
    switch (this.quoteValues) {

      case "always-quote":
        return true

      case "never-quote":
        return false

      case "smart-quote":
      default:
        const maybeNum = Number.parseFloat(this.value)
        return Number.isNaN(maybeNum) && !["true","false"].includes(this.value)

    }
  }

  showParameterDialog(x: number, y: number, acceptCallback: () => void): void {
    const backdrop = this.block.workspace.backdrop
    backdrop.classList.add("show")
    const dialog = this.block.workspace.dialog
    dialog.style.top = `${y}px`
    dialog.classList.add("small")
    dialog.innerHTML = ""

    const table = document.createElement("div")
    table.className = "nt-param-table"
    dialog.append(table)

    const makeClickListener = (v: SelectOption): ((e: MouseEvent) => void) => {
      return (e) => {
        this.value = v.actual
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this)
        if (this.block.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue))
        e.stopPropagation()
      }
    }

    for (var v of this.values) {
      const row = document.createElement("div")
      row.className = "nt-param-row"
      const opt = document.createElement("div")
      opt.className = "nt-select-option"
      opt.innerHTML = v.displayValue
      if (v.actual === this.value) { opt.classList.add("selected") }
      opt.addEventListener("click", makeClickListener(v))
      row.append(opt)
      table.append(row)
    }
  }
}

export { SelectAttribute, SelectOption, QuoteOptions, QuoteOptionTypes }
