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

int toInt(var d, [ int defalutValue = 0 ]) {
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

num toNum(var d, [ num defalutValue = 0 ]) {
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

bool toBool(var b, [bool defaultValue = false]) {
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

String toStr(var o, [ String defaultValue = "" ]) {
  return (o == null) ? defaultValue : o.toString();
}

String toStrNotEmpty(String s, String defaultValue) {
  return isNullOrEmpty(s) ? defaultValue : s;
}

bool isNullOrEmpty(String s) {
  return s == null || s == "";
}

bool isNotNullOrEmpty(String s) {
  return !isNullOrEmpty(s);
}

bool containsAny(List<String> allowedTags, List<String> tags) {
  for (String tag in tags) {
    if (allowedTags.contains(tag)) {
      return true;
    }
  }
  return false;
}
