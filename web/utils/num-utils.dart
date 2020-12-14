// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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

  static int sum(Iterable<int> values) {
    return values.reduce( (a, b) => a + b );
  }

}
