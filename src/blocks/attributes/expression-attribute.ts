// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExpressionAttributeInput, ExpressionInput, ExpressionValueInput } from "../../types/types"
import { StringUtils } from "../../utils/string-utils"
import { Block } from "../block-instance"
import { CodeFormatter } from "../code-formatter"
import { Expression } from "../expressions/expression"
import { ExpressionBuilder } from "../expressions/expression-builder"
import { AttributeChangedEvent } from "../program-changed-event"
import { Attribute } from "./attribute"

//-------------------------------------------------------------------------
/// Represents an expression (boolean or number)
//-------------------------------------------------------------------------
class ExpressionAttribute extends Attribute {

  readonly expDef: ExpressionAttributeInput
  readonly ea: ExpressionValueInput
  builder: ExpressionBuilder

  constructor(expDef: ExpressionAttributeInput, ea: ExpressionValueInput, block: Block) {
    super(expDef, ea, block)
    this.expDef = expDef
    this.ea = ea
    this.builder = new ExpressionBuilder(this.block.workspace, this.ea.value)
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
          <div class="nt-param-label">${this.def.name}:</div>
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
        const value = ExpressionAttribute.expressionValue(this.ea)
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.def.id, this.block.b.instanceId, this.def.id, this.ea.type, value, value))
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

  getDisplayValue(): string { return `${ExpressionAttribute.expressionValue(this.ea)}${this.def.unit}` }

  static expressionValue(ea: ExpressionValueInput): string {
    return typeof ea.value === 'string' ? ea.value : ExpressionAttribute.formatExpression(ea.value)
  }

  static formatExpression(expression: ExpressionInput): string {
    if (expression.format !== null) {
      var format = expression.format
      for (var i = 0; i < expression.children.length; i++) {
        format = StringUtils.replaceAll(format, `{${i}}`, ExpressionAttribute.formatExpression(expression.children[i]))
      }
      return format
    }
    else if (expression.children.length === 1) {
      return `(${expression.name} ${ExpressionAttribute.formatExpression(expression.children[0])})`
    }
    else if (expression.children.length === 2) {
      return `(${ExpressionAttribute.formatExpression(expression.children[0])} ${expression.name} ${ExpressionAttribute.formatExpression(expression.children[1])})`
    }
    else {
      return expression.name
    }
  }

}

export { ExpressionAttribute }
