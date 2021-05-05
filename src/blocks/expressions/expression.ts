// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExpressionDefinition, ExpressionInput } from "../../types/types"
import { NumUtils } from "../../utils/num-utils"
import { StringBuffer } from "../../utils/string-buffer"
import { StringUtils } from "../../utils/string-utils"
import { ExpressionBuilder } from "./expression-builder"

/// TODO
///   limit length of inline expressions on blocks.
class Expression {

  e: ExpressionInput
  builder: ExpressionBuilder
  children: Expression[]

  get isRoot(): boolean { return this.builder.root === this }
  get isEmpty(): boolean { return this.e.name === null }
  get isUnary(): boolean { return this.e.children.length === 1 }
  get isBinary(): boolean { return this.e.children.length === 2 }
  get hasChildren(): boolean { return this.e.children.length > 0 }
  get isChildless(): boolean { return this.e.children.length === 0 }
  get isNum(): boolean {
    if (this.e.name !== null) {
      return !Number.isNaN(Number.parseFloat(this.e.name))
    }
    return false
  }

  constructor(builder: ExpressionBuilder, type: 'num' | 'bool') {
    this.builder = builder
    this.e = Expression.createEmptyExpression(type)
    this.children = []
  }

  static getDefaultValue(type: 'num' | 'bool'): '0' | 'false' {
    return (type === 'num') ? '0' : 'false'
  }

  static createEmptyExpression(type: 'num' | 'bool'): ExpressionInput {
    return {
      name: Expression.getDefaultValue(type)
    , type: type
    , format: null
    , children: []
    }
  }

  static cloneExpressionInput(source: ExpressionInput): ExpressionInput {
    const clone = Expression.createEmptyExpression(source.type)
    source.children.forEach( (child) => clone.children.push(Expression.cloneExpressionInput(child) ))
    return clone
  }

  static clone(builder: ExpressionBuilder, source: Expression): Expression {
    const c = new Expression(builder, source.e.type)
    c.e = Expression.cloneExpressionInput(source.e)
    source.children.forEach( (child) => c.children.push(Expression.clone(c.builder, child)) )
    return c
  }

  displayString(out: StringBuffer): void {
    if (this.isUnary) {
      if (!this.isRoot) {
        out.write("(")
      }
      out.write(`${this.e.name} `)
      this.children[0].displayString(out)
      if (!this.isRoot) {
        out.write(")")
      }
    }
    else if (this.isBinary) {
      if (!this.isRoot) {
        out.write("(")
      }
      this.children[0].displayString(out)
      out.write(` ${this.e.name} `)
      this.children[1].displayString(out)
      if (!this.isRoot) {
        out.write(")")
      }
    }
    else if (this.e.name !== null) {
      out.write(`${this.e.name}`)
    }
  }

  // test to see if the current children match arg list?
  // if so, leave them alone rather than replace them
  childMismatch(args: ("num" | "bool")[]): boolean {
    if (args === null) {
      return this.children.length !== 0
    }
    if (this.children.length !== args.length) {
      return true
    }
    for (var i = 0; i < args.length; i++) {
      if (args[i] !== this.children[i].e.type) {
        return true
      }
    }
    return false
  }

  setChildren(args: ("num" | "bool")[]): void {
    const childless = this.isChildless

    if (this.childMismatch(args)) {
      this.children.splice(0)
      this.e.children.splice(0)
      if (args !== null) {
        for (var i = 0; i < args.length; i++) {
          // chain first expression?
          const e = new Expression(this.builder, args[i])
          if (i === 0 && childless && args[i] === this.e.type) {
            e.e.name = this.e.name
            this.children.push(e)
            this.e.children.push(e.e)
          } else {
            this.children.push(e)
            this.e.children.push(e.e)
          }
        }
      }
    }
  }

  appendOperator(parent: HTMLDivElement): void {
    const div = document.createElement("div")
    div.innerHTML = StringUtils.toStr(this.e.name, "")
    div.classList.add("nt-expression-text")
    div.classList.add("editable")
    div.classList.add(this.e.type)

    div.addEventListener("click", (e) => {
      this.openPulldown(div)
      e.stopPropagation()
    })
    this.electricBrace(div, parent)
    parent.append(div)
  }

  electricBrace(curr: HTMLDivElement, parent: HTMLDivElement): void {
    curr.addEventListener("mouseenter", (e) => { parent.classList.add("highlight") })
    curr.addEventListener("mouseleave", (e) => { parent.classList.remove("highlight") })
  }

  appendParen(parent: HTMLDivElement, left: boolean): void {
    const paren = document.createElement("div")
    paren.innerHTML = left ? "(" : ")"
    paren.classList.add("nt-expression-text")
    paren.classList.add("parenthesis")
    this.electricBrace(paren, parent)
    parent.append(paren)
  }

  appendNumber(parent: HTMLDivElement): void {
    this.e.name = NumUtils.toNum(this.e.name, 0).toString()
    const input = document.createElement("input")
    input.type = "number"
    input.className = "nt-number-input"
    input.value = this.e.name
    input.step = "1"
    input.addEventListener("change", (e) => {
      this.e.name = input.value
      if (this.e.name === "") {
        this.e.name = "0"
        input.value = "0"
      }
    })
    parent.append(input)
  }

  renderHtml(parent: Element): void {
    const div = document.createElement("div")
    div.className = "nt-expression"
    if ((this.isNum || this.isEmpty) && this.e.type === "num") {
      this.appendNumber(div)
    }
    else if (this.isEmpty) {
      div.classList.add("empty")
      div.insertAdjacentHTML("beforeend", "<small>&#9660;</small>")
    }
    else if (this.isUnary) {
      this.appendParen(div, true)
      this.appendOperator(div)
      this.children[0].renderHtml(div)
      this.appendParen(div, false)
    }
    else if (this.isBinary) {
      this.appendParen(div, true)
      this.children[0].renderHtml(div)
      this.appendOperator(div)
      this.children[1].renderHtml(div)
      this.appendParen(div, false)
    }
    else {
      div.insertAdjacentHTML("beforeend", `<div class='nt-expression-text ${this.e.type}'>${this.e.name}</div>`)
    }
    if (this.isChildless) {
      div.classList.add("editable")
      div.addEventListener("click", (e) => {
        this.openPulldown(div)
        e.stopPropagation()
      })
    }
    parent.append(div)
  }

  //-------------------------------------------------------------
  // Creates an expression pulldown menu
  //-------------------------------------------------------------
  openPulldown(expander: Element): void {
    document.querySelectorAll('.nt-pulldown-menu').forEach( (el) => el.remove() )
    const hmenu = document.createElement("div")
    hmenu.classList.add('nt-pulldown-menu')

    // ---------------  expressions ---------------------
    this._addMenuItems(hmenu, this.builder.expressions)

    // ---------------  variables ---------------------
    if (this.builder.variables.length > 0) hmenu.insertAdjacentHTML("beforeend", "<hr>")
    // TODO: get this working again once variables are implemented
    // _addMenuItems(hmenu, builder.variables)

    // ---------------  clear button ---------------------
    hmenu.insertAdjacentHTML("beforeend", "<hr>")
    const link = document.createElement("a")
    link.href = "#"
    link.innerHTML = "Clear"
    link.className = "clear"
    hmenu.append(link)
    link.addEventListener("click", (e) => {
      hmenu.remove()
      this.e.name = Expression.getDefaultValue(this.e.type)
      this.children.splice(0)
      this.e.children.splice(0)
      this.e.format = null
      this.builder.renderHtml()
      e.stopPropagation()
      e.preventDefault()
    })

    expander.append(hmenu)
  }

  _addMenuItems(hmenu: HTMLDivElement, items: ExpressionDefinition[]): void {
    for (const item of items) {
      if (item.type === this.e.type) {
        const link = document.createElement("a")
        link.href = "#"
        link.innerHTML = `${item.name}`
        hmenu.append(link)
        link.addEventListener("click", (e) => {
          hmenu.remove()
          this.setChildren(item.arguments)
          this.e.name = item.name
          this.e.type = item.type
          this.e.format = item.format
          this.builder.renderHtml()
          e.stopPropagation()
          e.preventDefault()
        })
      }
    }
  }

}

export { Expression }
