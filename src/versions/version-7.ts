// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { CodeWorkspace, codeWorkspaceSchema } from "../types/types"
import { allBlockProps, blockInstanceProps } from "./version-6"
import { VersionUtils } from "./version-utils"

class Version7 {

  static update(workspaceEnc: any): void {
    workspaceEnc.blocks.forEach( (b: any) => Version7.makeBlockDefinition(b) )
    workspaceEnc.program.chains.forEach( (c: any) => c.blocks.forEach( (b: any) => Version7.makeBlockInstance(b) ) )
    VersionUtils.updateBlocks(workspaceEnc, () => {}, Version7.setBlockInstanceIds())
    VersionUtils.updateBlocks(workspaceEnc, () => {}, Version7.updateBlockExpressionStringValues)
  }

  static makeBlockDefinition(b: any): void {
    delete b.instanceId
    delete b.propertiesDisplay
    b.clauses.forEach( (c: any) => Version7.makeClauseDefinition(c) )
    b.params.forEach( (a: any) => Version7.makeAttributeDefinition(a) )
    b.properties.forEach( (a: any) => Version7.makeAttributeDefinition(a) )
  }

  static makeClauseDefinition(c: any): void {
    delete c.children
  }

  static makeAttributeDefinition(a: any): void {
    delete a.value
    if (["num", "bool"].includes(a.type)) {
      delete a.expressionValue
    }
  }

  static makeBlockInstance(b: any): void {
    b.definitionId = b.id
    allBlockProps.filter( (k) => !blockInstanceProps.includes(k) ).forEach( (k) => {
      delete b[k]
    })
    b.clauses.forEach( (c: any) => Version7.makeClauseInstance(c) )
    b.params.forEach( (a: any) => Version7.makeAttributeInstance(a) )
    b.properties.forEach( (a: any) => Version7.makeAttributeInstance(a) )
  }

  static makeClauseInstance(c: any): void {
    c.children.forEach( (b: any) => Version7.makeBlockInstance(b) )
    c.blocks = c.children
    const clauseProps = ["action", "children", "open", "close", "allowedTags"]
    clauseProps.forEach( (k) => delete c[k] )
  }

  static makeAttributeInstance(a: any): void {
    switch (a.type) {
      case "select":
        (["quoteValues", "values"].forEach( (k) => delete a[k] ))
        break

      case "range":
        (["min", "max"].forEach( (k) => delete a[k] ))
      case "int":
        (["step", "random"].forEach( (k) => delete a[k] ))
        break
    }
    (["id", "name", "unit", "default"].forEach( (k) => delete a[k] ))
  }

  static setBlockInstanceIds() {
    const definitionIdToNextInstanceId: Map<number, number> = new Map()
    return (b: any) => {
      if (!definitionIdToNextInstanceId.has(b.definitionId)) {
        definitionIdToNextInstanceId.set(b.definitionId, 0)
      }
      b.instanceId = definitionIdToNextInstanceId.get(b.definitionId)!
      definitionIdToNextInstanceId.set(b.definitionId, b.instanceId + 1)
    }
  }

  static updateBlockExpressionStringValues(b: any): void {
    b.params.forEach(Version7.updateExpressionStringValues)
    b.properties.forEach(Version7.updateExpressionStringValues)
  }

  static updateExpressionStringValues(a: any): void {
    if (!["num", "bool"].includes(a.type)) {
      return
    }
    if (typeof a.value !== "string") {
      return
    }
    a.value = {
      name: a.value
    , format: null
    , type: a.type
    , children: []
    }
  }

  static validate(workspaceEnc: any): CodeWorkspace {
    const result = codeWorkspaceSchema.safeParse(workspaceEnc)
    if (result.success) {
      return result.data
    }
    throw new Error(`The NetTango project data was invalid.  ${result.error.toString()}`)
  }
}

export { Version7 }
