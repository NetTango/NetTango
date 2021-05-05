// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { CodeWorkspaceInput } from "../types/types"
import { Version1 } from "./version-1"
import { Version2 } from "./version-2"
import { Version3 } from "./version-3"
import { Version4 } from "./version-4"
import { Version5 } from "./version-5"
import { Version6 } from "./version-6"

class VersionManager {
  static readonly VERSION = 6

  static updateWorkspace(definition: any): CodeWorkspaceInput {
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
    definition.version = VersionManager.VERSION
    return Version6.validate(definition)
  }
}

export { VersionManager }
