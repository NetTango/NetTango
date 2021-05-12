// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import {
  Attribute
, AttributeValue
, BlockDefinition
, BlockInstance
, CodeWorkspace
} from "../types/types"

import {
  makeAttributeDefault
, makeStringDefault
, makeNumberDefault
, makeExpressionDefault
} from "../blocks/attributes/attribute-factory"

import { Version1 } from "./version-1"
import { Version2 } from "./version-2"
import { Version3 } from "./version-3"
import { Version4 } from "./version-4"
import { Version5 } from "./version-5"
import { Version6 } from "./version-6"
import { Version7 } from "./version-7"

class VersionManager {
  static readonly VERSION = 7

  static updateWorkspace(definition: any): CodeWorkspace {
    const version: number = definition.hasOwnProperty("version") ? definition.version : 0

    if (version > VersionManager.VERSION) {
      throw new Error(`Somehow the given model version (${version}) is greater than the supported NetTango version (${VersionManager.VERSION}).`)
    }

    const unvalidatedVersions = [Version1, Version2, Version3, Version4, Version5]
    unvalidatedVersions.slice(version).forEach( (v) => v.update(definition) )

    // TODO we'll need a better way to handle chaining together version updates and validations as their
    // `validate()` types change.
    if (version < 6) {
      Version6.update(definition)
    }
    if (version < 7) {
      definition.version = 6
      definition = Version6.validate(definition)
      Version7.update(definition)
    }
    definition.version = VersionManager.VERSION

    const validated = Version7.validate(definition)

    VersionManager.fixupUntypedIssues(validated)

    return validated
  }

  // Even though the data types are validated, the clauses and attributes also need to correspond
  // between definitions and instances, so we reset them here to be sure they are correct.
  // TODO: See if Zod can handle this validation as well.
  // -Jeremy B May 2021.
  static fixupUntypedIssues(model: CodeWorkspace) {
    const getDefById = (id: number): BlockDefinition | undefined =>
      model.blocks.filter( (b) => b.id === id )[0]

    const processInstance = (instance: BlockInstance) => {
      const definition = getDefById(instance.definitionId)
      VersionManager.resetBlock(definition!, instance)
      instance.clauses.forEach( (clause) => {
        clause.blocks = clause.blocks.filter( (b) => getDefById(b.definitionId) !== undefined )
        clause.blocks.forEach(processInstance)
      })
    }

    model.program.chains.forEach( (chain) => {
      chain.blocks = chain.blocks.filter( (b) => getDefById(b.definitionId) !== undefined )
      chain.blocks.forEach(processInstance)
    })
  }

  static resetBlock(definition: BlockDefinition, instance: BlockInstance) {
    instance.clauses = definition.clauses.map( (_, i) => {
      return instance.clauses.length > i ? instance.clauses[i] : { blocks: [] }
    })
    instance.params = definition.params.map( (a, i) => {
      return instance.params.length > i ? VersionManager.resetAttribute(a, instance.params[i]) : makeAttributeDefault(a)
    })
    instance.properties = definition.properties.map( (a, i) => {
      return instance.properties.length > i ? VersionManager.resetAttribute(a, instance.properties[i]) : makeAttributeDefault(a)
    })
  }

  static resetAttribute(attribute: Attribute, value: AttributeValue): AttributeValue {
    switch (attribute.type) {
      case "text":
      case "select":
        return (["text", "select"].includes(value.type) ? value : makeStringDefault(attribute))

      case "int":
      case "range":
        return (["int", "range"].includes(value.type) ? value : makeNumberDefault(attribute))

      case "num":
      case "bool":
        return (["num", "bool"].includes(value.type) ? value : makeExpressionDefault(attribute))
    }
  }

}

export { VersionManager }
