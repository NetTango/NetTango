// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { SelectAttributeInput, SelectOptionInput } from "../../types/types"
import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

type QuoteOptionTypes = "smart-quote" | "always-quote" | "never-quote"

class QuoteOptions {
  static readonly SMART_QUOTE  = "smart-quote"
  static readonly ALWAYS_QUOTE = "always-quote"
  static readonly NEVER_QUOTE  = "never-quote"
}

function selectOptionDisplay(o: SelectOptionInput): string {
  return (o.display === null || o.display === "") ? o.actual : o.display
}

//-------------------------------------------------------------------------
/// Represents a value selected from a list of options
//-------------------------------------------------------------------------
class SelectAttribute extends Attribute {

  readonly sa: SelectAttributeInput

  setValue(valueString: string): void {
    this.sa.value = valueString
  }

  getDefaultValue(): string { return this.sa.default }
  setDefaultValue(defaultString: string): void {
    this.sa.default = defaultString
  }

  getDisplayValue(): string { return `${this.selectedDisplay}${this.sa.unit} \u25BE` }

  /// list of possible values for select type
  get selectedDisplay(): string {
    const valueOptions = this.sa.values.filter( (o) => o.actual === this.sa.value && o.display !== null && o.display !== "")
    if (valueOptions.length === 1) {
      return selectOptionDisplay(valueOptions[0])
    } else {
      return this.sa.value
    }
  }

  constructor(sa: SelectAttributeInput, block: Block, isSlotBlock: boolean) {
    super(sa, block)
    this.sa = sa
    if (!isSlotBlock) {
      sa.value = StringUtils.toStrNotEmpty(sa.value, sa.default)
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

    const makeClickListener = (v: SelectOptionInput): ((e: MouseEvent) => void) => {
      return (e) => {
        this.sa.value = v.actual
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this.a)
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.b.id, this.block.b.instanceId, this.sa.id, this.sa.type, this.sa.value, formattedValue))
        e.stopPropagation()
      }
    }

    for (var v of this.sa.values) {
      const row = document.createElement("div")
      row.className = "nt-param-row"
      const opt = document.createElement("div")
      opt.className = "nt-select-option"
      opt.innerHTML = selectOptionDisplay(v)
      if (v.actual === this.sa.value) { opt.classList.add("selected") }
      opt.addEventListener("click", makeClickListener(v))
      row.append(opt)
      table.append(row)
    }
  }
}

export { SelectAttribute, QuoteOptions, QuoteOptionTypes }
