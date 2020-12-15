// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class ExternalStorage {

  propertyNames: string[]
  storage: any | null

  set(storage: any) { this.storage = storage }

  constructor(propertyNames: string[]) {
    this.propertyNames = propertyNames
  }

  restore(exports: any) {
    if (this.storage === null) {
      return
    }
    for (var propertyName of Object.keys(this.storage)) {
      if (!this.propertyNames.includes(propertyName)) {
        if (exports.hasProperty(propertyName)) {
          throw new Error(`Found existing property when restoring external data for export: ${propertyName}`)
        }
        exports[propertyName] = this.storage[propertyName]
      }
    }
  }
}
