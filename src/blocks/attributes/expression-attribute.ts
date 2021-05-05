// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExpressionAttributeInput } from "../../types/types"
import { Block } from "../block"
import { CodeFormatter } from "../code-formatter"
import { Expression } from "../expressions/expression"
import { ExpressionBuilder } from "../expressions/expression-builder"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

//-------------------------------------------------------------------------
/// Represents an expression (boolean or number)
//-------------------------------------------------------------------------
class ExpressionAttribute extends Attribute {

  readonly ea: ExpressionAttributeInput
  builder: ExpressionBuilder

  setValue(valueString: string): void {
    if (valueString === null) {
      this.builder = new ExpressionBuilder(this.block.workspace, this.ea.type)
    }
    if (Number.isNaN(Number.parseFloat(valueString)) && !["true", "false"].includes(valueString)) {
      // not a number or boolean, do not use value
      throw new Error("Expression values can only be set to numbers or booleans.")
    }
    this.builder = new ExpressionBuilder(this.block.workspace, this.ea.type)
    const expression = new Expression(this.builder, this.ea.type)
    expression.e.name = valueString
    this.builder.root = expression
  }

  getDefaultValue(): string { return this.ea.default }
  setDefaultValue(defaultString: string): void {
    this.ea.default = defaultString
  }

  constructor(ea: ExpressionAttributeInput, block: Block, isSlotBlock: boolean) {
    super(ea, block)
    this.ea = ea
    // TODO: Properly re-instantiate the expression builder, copy old code from Dartify
    this.builder = new ExpressionBuilder(this.block.workspace, this.ea.type)
    if (!isSlotBlock) {
      this.setValue(this.ea.default)
    }
  }

  showParameterDialog(x: number, y: number, acceptCallback: () => void): void {
    const backdrop = this.block.workspace.backdrop
    backdrop.classList.add("show")
    const dialog = this.block.workspace.dialog
    dialog.style.top = `${y}px`
    dialog.classList.remove("small")
    dialog.innerHTML = ""

    dialog.insertAdjacentHTML("beforeend", `
      <div class="nt-param-table">
        <div class="nt-param-row">
          <div class="nt-param-label">${this.ea.name}:</div>
        </div>
        <div class="nt-param-row">
          <div id="nt-expression-${this.uniqueId}" class="nt-expression-root"></div>
        </div>
      </div>
      <button class="nt-param-confirm" type="button">OK</button>
      <button class="nt-param-cancel" type="button">Cancel</button>
    `)

    const dialogClicked = (e: MouseEvent) => {
      document.querySelectorAll(".nt-pulldown-menu").forEach((el) => el.remove())
    }
    dialog.addEventListener("click", dialogClicked)

    document.querySelectorAll(".nt-param-confirm").forEach( (el) =>
      el.addEventListener("click", (e) => {
        var empties = document.querySelectorAll(".nt-expression.empty")
        if (empties.length > 0) return false
        dialog.removeEventListener("click", dialogClicked)
        backdrop.classList.remove("show")
        acceptCallback()
        const formattedValue = CodeFormatter.formatAttributeValue(this.a)
        if (this.block.b.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.b.id, this.block.b.instanceId, this.ea.id, this.ea.type, CodeFormatter.getAttributeValue(this.ea), formattedValue))
        return false
      })
    )

    document.querySelectorAll(".nt-param-confirm").forEach( (conf) => conf.addEventListener("mousedown", (e) => {
      document.querySelectorAll(".nt-expression.empty").forEach((el) => el.classList.add("warn"))
    }))
    document.querySelectorAll(".nt-param-confirm").forEach( (conf) => conf.addEventListener("mouseup", (e) => {
      document.querySelectorAll(".nt-expression.empty").forEach((el) => el.classList.remove("warn"))
    }))
    document.querySelectorAll(".nt-param-cancel").forEach( (cancel) => cancel.addEventListener("click", (e) => {
      dialog.removeEventListener("click", dialogClicked)
      backdrop.classList.remove("show")
    }))

    this.builder.open(`#nt-expression-${this.uniqueId}`)
  }
}

export { ExpressionAttribute }
