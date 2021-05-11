// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { BlockStyleUI } from "../blocks/block-style";
import { CodeWorkspaceUI } from "../blocks/code-workspace";
import { ExpressionUI } from "../blocks/expressions/expression";
import { codeWorkspaceInputSchema, CodeWorkspaceInput, BlockInput, AttributeInput, ClauseInput } from "../types/types-6";
import { ObjectUtils } from "../utils/object-utils";

const unrestrictedTags = Object.freeze({ type: "unrestricted" })

const blockInstanceProps: (keyof BlockInput)[] = [
  "instanceId", "clauses", "params", "properties", "propertiesDisplay"
]
const allBlockProps: (keyof BlockInput)[] = [
  "id", "action", "isRequired", "placement", "instanceId", "type", "format", "isTerminal"
, "closeClauses", "closeStarter", "limit", "note", "blockColor", "textColor", "borderColor"
, "font", "allowedTags", "tags", "clauses", "params", "properties", "propertiesDisplay"
]

function setIfUndefined(o: any, prop: string, value: any | null = null) {
  if (!o.hasOwnProperty(prop)) {
    o[prop] = value
  }
}

class Version6 {

  static update(workspaceEnc: any): void {
    Version6.resetDefaults(workspaceEnc)
    Version6.setBlockDefinitionIds(workspaceEnc.blocks)
    Version6.resetBlockInstancesToDefinitions(workspaceEnc)
  }

  // In version <=5 some null values, empty strings, and empty collections were stripped in the
  // data export.  To ease the process of making changes we're no longer doing that in version 6+.
  // But to do so we need to restore any defaults that would've been stripped it in older versions.
  // -Jeremy B May 2021
  static resetDefaults(workspaceEnc: any): void {
    setIfUndefined(workspaceEnc, "height", CodeWorkspaceUI.DEFAULT_HEIGHT)
    setIfUndefined(workspaceEnc, "width", CodeWorkspaceUI.DEFAULT_WIDTH)
    setIfUndefined(workspaceEnc, "chainOpen")
    setIfUndefined(workspaceEnc, "chainClose")
    setIfUndefined(workspaceEnc, "blockStyles", {
      starterBlockStyle: BlockStyleUI.DEFAULT_STARTER_STYLE
    , containerBlockStyle: BlockStyleUI.DEFAULT_CONTAINER_STYLE
    , commandBlockStyle: BlockStyleUI.DEFAULT_COMMAND_STYLE
    })
    setIfUndefined(workspaceEnc, "blocks", [])
    setIfUndefined(workspaceEnc, "variables", [])
    setIfUndefined(workspaceEnc, "expressions", [])
    setIfUndefined(workspaceEnc, "program", { chains: [] })

    workspaceEnc.blocks.forEach( (b: any) => Version6.resetBlockDefaults(b, true) )
    workspaceEnc.expressions.forEach( (ed: any) => Version6.resetExpressionDefinitionDefaults(ed) )
    workspaceEnc.program.chains.forEach( (c: any) => Version6.resetChainDefaults(c) )
  }

  static resetExpressionDefinitionDefaults(ed: any) {
    setIfUndefined(ed, "arguments", [])
    setIfUndefined(ed, "format")
  }

  static resetBlockDefaults(b: any, isDefinition: boolean): void {
    setIfUndefined(b, "instanceId")
    setIfUndefined(b, "type")
    setIfUndefined(b, "format", null)
    if (b.hasOwnProperty("required")) {
      b.isRequired = b.required
      delete b.required
    }
    setIfUndefined(b, "isRequired", false)
    setIfUndefined(b, "isTerminal", false)
    setIfUndefined(b, "closeClauses")
    setIfUndefined(b, "closeStarter")
    setIfUndefined(b, "limit", 0)
    setIfUndefined(b, "note")
    setIfUndefined(b, "blockColor")
    setIfUndefined(b, "textColor")
    setIfUndefined(b, "borderColor")
    setIfUndefined(b, "font")
    setIfUndefined(b, "allowedTags", unrestrictedTags)
    setIfUndefined(b, "propertiesDisplay", "shown")
    setIfUndefined(b, "tags", [])
    setIfUndefined(b, "clauses", [])
    setIfUndefined(b, "params", [])
    setIfUndefined(b, "properties", [])

    b.clauses.forEach( (c: any) => Version6.resetClauseDefaults(c) )
    b.params.forEach( (a: any) => Version6.resetAttributeDefaults(a, isDefinition) )
    b.properties.forEach( (a: any) => Version6.resetAttributeDefaults(a, isDefinition) )
  }

  static resetAttributeDefaults(a: any, isDefinition: boolean) {
    setIfUndefined(a, "name")
    setIfUndefined(a, "unit")

    switch (a.type) {
      case "text":
        setIfUndefined(a, "default", "")
        break

      case "select":
        setIfUndefined(a, "quoteValues", "smart-quote")
        setIfUndefined(a, "default", "")
        a.values.forEach( (v: any) => setIfUndefined(v, "display") )
        break

      case "int":
      case "range":
        setIfUndefined(a, "default", 0)
        setIfUndefined(a, "random", false)
        setIfUndefined(a, "step", 1)
        break

      case "num":
      case "bool":
        setIfUndefined(a, "default", ExpressionUI.getDefaultValue(a.type))
        setIfUndefined(a, "expressionValue", ExpressionUI.getDefaultValue(a.type))
        if (typeof a.value === "object") { Version6.resetExpressionDefaults(a.value) }
        break

      default:
         console.log(`Unknown attribute type ${a.type}, skipping setting values.`)
         break

    }

    if (isDefinition) {
      a.value = a.default
    }

  }

  static resetExpressionDefaults(e: any) {
    setIfUndefined(e, "format")
    setIfUndefined(e, "children", [])
    e.children.forEach( (ce: any) => Version6.resetExpressionDefaults(ce) )
  }

  static resetClauseDefaults(c: any) {
    setIfUndefined(c, "action")
    setIfUndefined(c, "open")
    setIfUndefined(c, "close")
    setIfUndefined(c, "allowedTags", unrestrictedTags)
    setIfUndefined(c, "children", [])
    c.children.forEach( (b: any) => Version6.resetBlockDefaults(b, false) )
  }

  static resetChainDefaults(c: any): void {
    c.blocks.forEach( (b: any) => Version6.resetBlockDefaults(b, false) )
  }

  static setBlockDefinitionIds(blocks: any[]): void {
    if (blocks.length === 0) {
      return
    }

    // get the largest ID number among all block defs to get our next ID
    const ids = blocks.map( (b) => b.hasOwnProperty("id") && b.id !== null ? b.id : -1 )
    var nextId = Math.max(...ids) + 1

    // missing IDs, probably new blocks
    blocks.filter( (b) => !b.hasOwnProperty("id") || b.id === null ).forEach( (b) => {
      b.id = nextId
      nextId = nextId + 1
    })

    // duplicate IDs
    blocks.forEach( (b) => {
      const collisions = blocks.filter( (ob) => ob !== b && ob.id === b.id )
      collisions.forEach( (ob) => {
        ob.id = nextId
        nextId = nextId + 1
      })
    })

    blocks.forEach( (b: any) => b.params.forEach( (a: any, i: number) => a.id = i ) )
    blocks.forEach( (b: any) => b.properties.forEach( (a: any, i: number) => a.id = i + b.params.length ) )
  }

  static resetBlockInstancesToDefinitions(workspaceEnc: any) {
    const getBlockById = (id: number | null, action: string | null = null) => {
      if (id !== null && typeof id !== "undefined") {
        const blockDefs = workspaceEnc.blocks.filter( (b: any) => b.id === id )
        return blockDefs.length === 1 ? blockDefs[0] : null
      } else if (action !== null) {
        // we have to fall back to a direct match on `action`, but we don't have to like it.
        const blockDefs = workspaceEnc.blocks.filter( (b: any) => b.action === action )
        return blockDefs.length === 1 ? blockDefs[0] : null
      }
      return null
    }
    workspaceEnc.program.chains.forEach( (c: any) => {
      const blocks = c.blocks.map( (bIns: any) => {
        const bDef = getBlockById(bIns.id, bIns.action)
        if (bDef === null) {
          return null
        }
        Version6.resetBlockInstanceToDefinition(getBlockById, bDef, bIns)
        return bIns
      })
      c.blocks = blocks.filter( (b: any) => b !== null )
    })
  }

  static resetBlockInstanceToDefinition(getBlockById: (id: number, action: string) => BlockInput, definition: BlockInput, instance: BlockInput): void {
    allBlockProps.filter( (k) => !blockInstanceProps.includes(k) ).forEach( (p) => {
      ObjectUtils.copyProperty(definition, instance, p)
    })

    instance.clauses = definition.clauses.map( (cDef, i) => {
      const cIns = instance.clauses.length > i ? instance.clauses[i] : ObjectUtils.clone(cDef)
      Version6.resetClauseToDefinition(getBlockById, cDef, cIns)
      return cIns
    })

    instance.params = definition.params.map( (aDef, i) =>
      Version6.makeAttributeInstance(aDef, instance.params[i])
    )

    instance.properties = definition.properties.map( (aDef, i) =>
      Version6.makeAttributeInstance(aDef, instance.properties[i])
    )

  }

  static makeAttributeInstance(definition: AttributeInput, oldInstance?: AttributeInput): AttributeInput {
    const instance = ObjectUtils.clone(definition)
    if (typeof oldInstance !== "undefined") {

      if (typeof oldInstance.value === "undefined") {
        instance.value = definition.default

      } else {
        switch (oldInstance.type) {
          case "text":
            if (instance.type === "text") {
              instance.value = oldInstance.value
            }
            break

          case "int":
          case "range":
            if (["int", "range"].includes(instance.type)) {
              instance.value = oldInstance.value
            }
            break

          case "select":
            if (instance.type === "select") {
              instance.value = oldInstance.value
            }
            break

          case "num":
          case "bool":
            if (["num", "bool"].includes(instance.type)) {
              instance.value = oldInstance.value
            }
            break

        }
      }
    }
    return instance
  }

  static resetClauseToDefinition(getBlockById: (id: number, action: string) => BlockInput, definition: ClauseInput, instance: ClauseInput): void {
    const allProps: (keyof ClauseInput)[] = [ "action", "open", "close", "allowedTags" ]
    allProps.forEach( (p) => ObjectUtils.copyProperty(definition, instance, p) )
    const children = instance.children.map( (bIns) => {
      const bDef = getBlockById(bIns.id, bIns.action)
      if (bDef === null) {
        return null
      }
      Version6.resetBlockInstanceToDefinition(getBlockById, bDef, bIns)
      return bIns
    })
    instance.children = children.filter( (bIns) => bIns !== null ) as BlockInput[]
  }

  static validate(workspaceEnc: any): CodeWorkspaceInput {
    const result = codeWorkspaceInputSchema.safeParse(workspaceEnc)
    if (result.success) {
      return result.data
    }
    throw new Error(`The NetTango project data was invalid.  ${result.error.toString()}`)
  }

}

export { Version6, allBlockProps, blockInstanceProps }
