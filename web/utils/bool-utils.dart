// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class BoolUtils {

  static bool toBool(var b, [bool defaultValue = false]) {
    if (b == null) {
      return defaultValue;
    }
    else if (b is bool) {
      return b;
    }
    else if (b is String) {
      if (b.toLowerCase() == "true" || b.toLowerCase() == "t") {
        return true;
      }
      else if (b.toLowerCase() == "false" || b.toLowerCase() == "f") {
        return false;
      }
    }
    return defaultValue;
  }

  static bool allAreTrue(Iterable<bool> values) {
    return values.reduce( (a, b) => a && b );
  }

}
