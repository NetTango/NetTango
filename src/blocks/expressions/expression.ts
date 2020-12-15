// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

/// TODO
///   limit length of inline expressions on blocks.
class Expression {

  builder: ExpressionBuilder
  name: string | null = null
  type: "num" | "bool"
  format: string | null = null
  children: Expression[] = []

  get isRoot(): boolean { return this.builder.root === this }
  get isEmpty(): boolean { return this.name === null }
  get isUnary(): boolean { return this.children.length === 1 }
  get isBinary(): boolean { return this.children.length === 2 }
  get hasChildren(): boolean { return this.children.length > 0 }
  get isChildless(): boolean { return this.children.length === 0 }
  get isNum(): boolean {
    if (this.name !== null) {
      return !Number.isNaN(Number.parseFloat(this.name))
    }
    return false
  }

  constructor(builder: ExpressionBuilder, type: "num" | "bool") {
    this.builder = builder
    this.type = type
  }

  static clone(builder: ExpressionBuilder, source: Expression): Expression {
    const c = new Expression(builder, source.type)
    c.name = source.name
    c.format = source.format
    source.children.forEach( (child) => c.children.push(Expression.clone(c.builder, child)) )
    return c
  }

  displayString(out: StringBuffer): void {
    if (this.isUnary) {
      if (!this.isRoot) {
        out.write("(")
      }
      out.write(`${this.name} `)
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
      out.write(` ${this.name} `)
      this.children[1].displayString(out)
      if (!this.isRoot) {
        out.write(")")
      }
    }
    else if (this.name !== null) {
      out.write(`${this.name}`)
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
      if (args[i] !== this.children[i].type) {
        return true
      }
    }
    return false
  }

  setChildren(args: ("num" | "bool")[]): void {
    const childless = this.isChildless

    if (this.childMismatch(args)) {
      this.children.splice(0)
      if (args !== null) {
        for (var i = 0; i < args.length; i++) {
          // chain first expression?
          const e = new Expression(this.builder, args[i])
          if (i === 0 && childless && args[i] === this.type) {
            e.name = this.name
            this.children.push(e)
          } else {
            this.children.push(e)
          }
        }
      }
    }
  }

  appendOperator(parent: HTMLDivElement): void {
    const div = new HTMLDivElement()
    div.innerHTML = StringUtils.toStr(this.name, "")
    div.classList.add("nt-expression-text")
    div.classList.add("editable")
    div.classList.add(this.type)

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
    const paren = new HTMLDivElement()
    paren.innerHTML = left ? "(" : ")"
    paren.classList.add("nt-expression-text")
    paren.classList.add("parenthesis")
    this.electricBrace(paren, parent)
    parent.append(paren)
  }

  appendNumber(parent: HTMLDivElement): void {
    this.name = NumUtils.toNum(this.name, 0).toString()
    const input = new HTMLInputElement()
    input.type = "number"
    input.className = "nt-number-input"
    input.value = this.name
    input.step = "1"
    input.addEventListener("change", (e) => {
      this.name = input.value
      if (this.name === "") {
        this.name = "0"
        input.value = "0"
      }
    })
    parent.append(input)
  }

  renderHtml(parent: Element): void {
    const div = new HTMLDivElement()
    div.className = "nt-expression"
    if ((this.isNum || this.isEmpty) && this.type === "num") {
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
      div.insertAdjacentHTML("beforeend", `<div class='nt-expression-text ${this.type}'>${this.name}</div>`)
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
    const hmenu = new HTMLDivElement()
    hmenu.classList.add('nt-pulldown-menu')

    // ---------------  expressions ---------------------
    this._addMenuItems(hmenu, this.builder.expressions)

    // ---------------  variables ---------------------
    if (this.builder.variables.length > 0) hmenu.insertAdjacentHTML("beforeend", "<hr>")
    // TODO: get this working again once variables are implemented
    // _addMenuItems(hmenu, builder.variables)

    // ---------------  clear button ---------------------
    hmenu.insertAdjacentHTML("beforeend", "<hr>")
    const link = new HTMLAnchorElement
    link.href = "#"
    link.innerHTML = "Clear"
    link.className = "clear"
    hmenu.append(link)
    link.addEventListener("click", (e) => {
      hmenu.remove()
      this.name = null
      this.children.splice(0)
      this.format = null
      this.builder.renderHtml()
      e.stopPropagation()
      e.preventDefault()
    })

    expander.append(hmenu)
  }

  _addMenuItems(hmenu: HTMLDivElement, items: ExpressionDefinition[]): void {
    for (const item of items) {
      if (item.type === this.type) {
        const link = new HTMLAnchorElement()
        link.href = "#"
        link.innerHTML = `${item.name}`
        hmenu.append(link)
        link.addEventListener("click", (e) => {
          hmenu.remove()
          this.setChildren(item.arguments)
          this.name = item.name
          this.type = item.type
          this.format = item.format
          this.builder.renderHtml()
          e.stopPropagation()
          e.preventDefault()
        })
      }
    }
  }

}
