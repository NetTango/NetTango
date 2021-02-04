// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class ExpressionDefinition {

  name: string
  type: "num" | "bool"
  arguments: ("num" | "bool")[] = []
  format: string | null = null

  constructor(name: string, type: "num" | "bool") {
    this.name = name
    this.type = type
  }

}

export { ExpressionDefinition }
