// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class ListUtils {

  static bool containsAny<T>(List<T> allowed, List<T> items) {
    for (T item in items) {
      if (allowed.contains(item)) {
        return true;
      }
    }
    return false;
  }

}
