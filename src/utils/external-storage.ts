// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class ExternalStorage {

  propertyNames: string[]
  storage: any | null = null

  set(storage: any) {
    if (storage === null || storage === undefined) {
      throw new Error("Cannot set storage to null or undefined.")
    }
    if (typeof(storage) !== "object") {
      throw new Error("Storage must be an object.")
    }
    this.storage = storage
  }

  constructor(propertyNames: string[]) {
    this.propertyNames = propertyNames
  }

  restore(exports: any) {
    if (this.storage === null) {
      // TODO: Hmm, why would we restore without setting the storage?  Maybe handle this better.
      // throw new Error("Cannot restore if the storage is unset.")
      return null
    }
    for (var propertyName of Object.keys(this.storage)) {
      if (!this.propertyNames.includes(propertyName)) {
        if (exports.hasOwnProperty(propertyName)) {
          throw new Error(`Found existing property when restoring external data for export: ${propertyName}`)
        }
        exports[propertyName] = this.storage[propertyName]
      }
    }
  }
}

export { ExternalStorage }
