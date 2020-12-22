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

    if (version < 1) {
      Version1.update(definition)
    }

    if (version < 2) {
      Version2.update(definition)
    }

    if (version < 3) {
      Version3.update(definition)
    }

    if (version < 4) {
      Version4.update(definition)
    }

    if (version < 5) {
      Version5.update(definition)
    }

    definition["version"] = VersionManager.VERSION
  }
}

export { VersionManager }
