// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class StringUtils {

  static String toStr(var o, [ String defaultValue = "" ]) {
    return (o == null) ? defaultValue : o.toString();
  }

  static String toStrNotEmpty(String s, String defaultValue) {
    return isNullOrEmpty(s) ? defaultValue : s;
  }

  static bool isNullOrEmpty(String s) {
    return s == null || s == "";
  }

  static bool isNotNullOrEmpty(String s) {
    return !isNullOrEmpty(s);
  }

}
