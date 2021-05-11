// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { SelectAttributeInput, SelectOptionInput, StringValueInput } from "../../types/types"
import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block-instance"
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

  readonly selectDef: SelectAttributeInput
  readonly sa: StringValueInput

  getDisplayValue(): string { return `${this.selectedDisplay}${this.def.unit} \u25BE` }

  /// list of possible values for select type
  get selectedDisplay(): string {
    const valueOptions = this.selectDef.values.filter( (o) => o.actual === this.sa.value && o.display !== null && o.display !== "")
    if (valueOptions.length === 1) {
      return selectOptionDisplay(valueOptions[0])
    } else {
      return this.sa.value
    }
  }

  constructor(selectDef: SelectAttributeInput, sa: StringValueInput, block: Block) {
    super(selectDef, sa, block)
    this.selectDef = selectDef
    this.sa = sa
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
        const formattedValue = SelectAttribute.shouldQuote(this.selectDef, this.sa) ? `"${this.sa.value}"` : this.sa.value
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.def.id, this.block.b.instanceId, this.def.id, this.sa.type, this.sa.value, formattedValue))
        e.stopPropagation()
      }
    }

    for (var v of this.selectDef.values) {
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

  static shouldQuote(def: SelectAttributeInput, sa: StringValueInput): boolean {
    switch (def.quoteValues) {

      case "always-quote":
        return true

      case "never-quote":
        return false

      case "smart-quote":
      default:
        const maybeNum = Number.parseFloat(sa.value)
        return Number.isNaN(maybeNum) && !["true", "false"].includes(sa.value)

    }
  }

}

export { SelectAttribute, QuoteOptions, QuoteOptionTypes }
