// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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
