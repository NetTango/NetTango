// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { codeWorkspaceInputSchema, CodeWorkspaceInput, BlockInput, AttributeInput, ClauseInput } from "../types/types-6";
import { ArrayUtils } from "../utils/array-utils";
import { ObjectUtils } from "../utils/object-utils";

const blockInstanceProps: (keyof BlockInput)[] = [
  "instanceId", "clauses", "params", "properties", "propertiesDisplay"
]
const allBlockProps: (keyof BlockInput)[] = [
  "id", "action", "isRequired", "placement", "instanceId", "type", "format", "isTerminal"
, "closeClauses", "closeStarter", "limit", "note", "blockColor", "textColor", "borderColor"
, "font", "allowedTags", "tags", "clauses", "params", "properties", "propertiesDisplay"
]

class Version6 {

  static update(workspaceEnc: any): void {
    ObjectUtils.setIfUndefined(workspaceEnc, "blocks", [])
    ObjectUtils.setIfUndefined(workspaceEnc, "program", {})
    ObjectUtils.setIfUndefined(workspaceEnc.program, "chains", [])
    Version6.setBlockDefinitionIds(workspaceEnc.blocks)
    Version6.resetBlockInstancesToDefinitions(workspaceEnc)
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
      Version6.moveRequired(b)
    })

    blocks.forEach( (b: any) => ArrayUtils.maybeForEach(b, "params", (a: any, i: number) => {
      a.id = i
      a.default = Version6.getAttributeDefDefault(a)
      a.value = a.default
    }, (b: any) => b.params = []))

    blocks.forEach( (b: any) => ArrayUtils.maybeForEach(b, "properties", (a: any, i: number) => {
      a.id = i + b.params.length
      a.default = Version6.getAttributeDefDefault(a)
      a.value = a.default
    }, (b: any) => b.properties = []))

  }

  static getAttributeDefDefault(a: any): string | number | null {
    if (a.hasOwnProperty("default")) {
      return a.default
    }

    switch (a.type) {
      case "int":
      case "range":
        return 10

      case "text":
      case "select":
        return ""

      case "num":
      case "bool":
        return "0"

      default:
        return null
    }
  }

  static moveRequired(b: any): void {
    if (b.hasOwnProperty("required")) {
      b.isRequired = b.required
      delete b.required
    }
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
        bIns.isRequired = bDef.isRequired
        delete bIns.required
        return bIns
      })
      c.blocks = blocks.filter( (b: any) => b !== null )
    })
  }

  static resetBlockInstanceToDefinition(getBlockById: (id: number, action: string) => BlockInput, definition: BlockInput, instance: BlockInput): void {
    allBlockProps.filter( (k) => !blockInstanceProps.includes(k) ).forEach( (p) => {
      ObjectUtils.copyProperty(definition, instance, p)
    })

    instance.clauses = ArrayUtils.maybeMap(definition, "clauses", (cDef, i) => {
      const cIns = instance.clauses.length > i ? instance.clauses[i] : ObjectUtils.clone(cDef)
      Version6.resetClauseToDefinition(getBlockById, cDef, cIns)
      return cIns
    })

    instance.params = ArrayUtils.maybeMap(definition, "params", (aDef, i) =>
      Version6.makeAttributeInstance(aDef, instance.params[i])
    )

    instance.properties = ArrayUtils.maybeMap(definition, "properties", (aDef, i) =>
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
