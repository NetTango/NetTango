// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class ObjectUtils {

  static isObjectValue(o: any): boolean {
    return typeof(o) === "object" && o !== null
  }
}

export { ObjectUtils }
