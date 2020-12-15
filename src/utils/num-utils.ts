// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class NumUtils {

  static toInt(d: any, defaultValue: number = 0): number {
    return Math.floor(NumUtils.toNum(d, defaultValue))
  }

  static toNum(d: any, defaultValue: number = 0): number {
    if (d === null) {
      return defaultValue
    }
    switch (typeof(d)) {

      case "number":
        return d

      case "string":
        const result = Number.parseFloat(d)
        if (Number.isNaN(result)) {
          return defaultValue
        }
        return result

      default:
        return defaultValue

    }

  }

  static sum(values: number[]): number {
    return values.reduce( (a, b) => a + b )
  }

}
