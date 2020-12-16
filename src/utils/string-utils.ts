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

  // Taken from Mustache.js: https://github.com/janl/mustache.js/blob/16ffa430a111dc293cd9ed899ecf9da3729f58bd/mustache.js#L62
  static readonly entityMap: any = Object.freeze({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  })

  static escapeHtml(s: string) {
    return s.replace(/[&<>"'\/]/g, (s) => StringUtils.entityMap[s])
  }

  static replaceAll(s: string, find: string, replace: string) {
    return s.split(find).join(replace)
  }

}
