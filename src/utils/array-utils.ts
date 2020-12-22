// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class ArrayUtils {

  static maybeForEach(o: any, prop: string, func: (item: any) => void): void {
    if (o.hasOwnProperty(prop) && Array.isArray(o[prop])) {
      for (var item of o[prop]) {
        func(item)
      }
    }
  }

}

export { ArrayUtils }