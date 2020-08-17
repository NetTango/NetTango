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

class NumUtils {

  static int toInt(var d, [ int defalutValue = 0 ]) {
    if (d == null) {
      return defalutValue;
    }
    else if (d is int) {
      return d;
    }
    else if (d is String) {
      try {
        return int.parse(d);
      } on Exception {
        return defalutValue;
      }
    }
    return defalutValue;
  }

  static num toNum(var d, [ num defalutValue = 0 ]) {
    if (d == null) {
      return defalutValue;
    }
    else if (d is num) {
      return d;
    }
    else if (d is String) {
      try {
        return num.parse(d);
      } on Exception {
        return defalutValue;
      }
    }
    return defalutValue;
  }

}
