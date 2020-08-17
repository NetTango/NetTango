/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

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
