// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class StringUtils {

  static toStr(o: any, defaultValue: string = ""): string {
    if (o === null) {
      return defaultValue
    }
    switch (typeof(o)) {

      case "string":
        return o

      case "object":
        return o.toString()

      default:
        return defaultValue

    }
  }

  static toStrNotEmpty(s: string, defaultValue: string): string {
    return StringUtils.isNullOrEmpty(s) ? defaultValue : s
  }

  static isNullOrEmpty(s: string): boolean {
    return s === null || s === ""
  }

  static isNotNullOrEmpty(s: string): boolean {
    return !StringUtils.isNullOrEmpty(s)
  }

}
