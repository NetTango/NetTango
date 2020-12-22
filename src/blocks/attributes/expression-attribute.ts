// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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

  // must be "num" or "bool"
  _type: "num" | "bool"
  get type(): "num" | "bool" { return this._type }

  builder: ExpressionBuilder

  defaultValue: string = ""

  getValue(): string { return CodeFormatter.formatExpression(this.builder.root) }
  setValue(valueString: string): void {
    if (valueString === null) {
      this.builder = new ExpressionBuilder(this.block.workspace, this.type)
    }
    if (Number.isNaN(Number.parseFloat(valueString)) && !["true", "false"].includes(valueString)) {
      // not a number or boolean, do not use value
      throw new Error("Expression values can only be set to numbers or booleans.")
    }
    this.builder = new ExpressionBuilder(this.block.workspace, this.type)
    const expression = new Expression(this.builder, this.type)
    expression.name = valueString
    this.builder.root = expression
  }

  getDefaultValue(): string { return this.defaultValue }
  setDefaultValue(defaultString: string): void {
    this.defaultValue = defaultString
  }

  constructor(block: Block, id: number | null, type: "num" | "bool") {
    super(block, id)
    this.builder = new ExpressionBuilder(this.block.workspace, type)
    this._type = type
  }

  static clone(block: Block, source: ExpressionAttribute, isSlotBlock: boolean): ExpressionAttribute {
    const clone = new ExpressionAttribute(block, source.id, source.type)
    Attribute.clone(block, source, isSlotBlock, clone)
    clone.defaultValue = source.defaultValue
    clone.builder = ExpressionBuilder.clone(source.builder)
    if (!isSlotBlock) {
      clone.setValue(clone.defaultValue)
    }
    return clone
  }

  clone(block: Block, isSlotBlock: boolean): Attribute {
    return ExpressionAttribute.clone(block, this, isSlotBlock)
  }

  shouldQuote(): boolean { return false }

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
          <div class="nt-param-label">${this.name}:</div>
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
        const formattedValue = CodeFormatter.formatAttributeValue(this)
        if (this.block.instanceId === null) {
          throw new Error("Cannot show parameter dialog for a non-instance block.")
        }
        this.block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.getValue(), formattedValue))
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
