// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class BoolUtils {

  static toBool(b: any, defaultValue: boolean = false): boolean {
    if (b === null) {
      return defaultValue
    }
    switch (typeof(b)) {

      case "boolean":
        return b

      case "string":
        const lower = b.toLowerCase()
        if (["t", "true"].includes(lower)) {
          return true
        }
        if (["f", "false"].includes(lower)) {
          return false
        }
        return defaultValue

      default:
        return defaultValue

    }
  }

  static allAreTrue(values: boolean[]) {
    return values.reduce( (a, b) => a && b )
  }

}
