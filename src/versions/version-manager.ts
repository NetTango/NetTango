// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Version1 } from "./version-1"
import { Version2 } from "./version-2"
import { Version3 } from "./version-3"
import { Version4 } from "./version-4"
import { Version5 } from "./version-5"

class VersionManager {
  static readonly VERSION = 5

  static updateWorkspace(definition: any): void {
    const version: number = definition.hasOwnProperty("version") ? definition["version"] : 0

    if (version > VersionManager.VERSION) {
      throw new Error(`Somehow the given model version (${version}) is greater than the supported NetTango version (${VersionManager.VERSION}).`)
    }

    const versions = [Version1, Version2, Version3, Version4, Version5]
    versions.slice(version).forEach( (v) => v.update(definition) )
    definition["version"] = VersionManager.VERSION
  }
}

export { VersionManager }
