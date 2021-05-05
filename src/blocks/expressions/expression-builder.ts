// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ExpressionDefinition } from "../../types/types"
import { StringBuffer } from "../../utils/string-buffer"
import { CodeWorkspace } from "../code-workspace"
import { Expression } from "./expression"

class ExpressionBuilder {

  workspace: CodeWorkspace
  parent?: Element
  root: Expression

  get expressions(): ExpressionDefinition[] {
    return this.workspace.ws.expressions
  }

  get variables(): string[] {
    return this.workspace.ws.variables
  }

  constructor(workspace: CodeWorkspace, type: "num" | "bool") {
    this.workspace = workspace
    this.root = new Expression(this, type)
  }

  static clone(source: ExpressionBuilder): ExpressionBuilder {
    const c = new ExpressionBuilder(source.workspace, source.root.e.type)
    c.workspace = source.workspace
    c.root = Expression.clone(c, source.root)
    return c
  }

  toString(): string {
    const out = new StringBuffer()
    this.root.displayString(out)
    return out.toString()
  }

  open(parentSelector: string): void {
    const p = document.querySelector(parentSelector)
    if (p === null) {
      throw new Error("Count not find a parent HTML element for the expression builder.")
    }
    this.parent = p
    this.renderHtml()
  }

  renderHtml(): void {
    if (this.parent !== undefined) {
      while (this.parent.lastChild !== null) {
        this.parent.removeChild(this.parent.lastChild)
      }
      this.root.renderHtml(this.parent)
    }
  }

}

export { ExpressionBuilder }
