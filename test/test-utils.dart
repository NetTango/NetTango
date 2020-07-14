import 'dart:js';
import 'dart:convert';

class TestUtils {
  static dynamic dartify(dynamic value) {
    if (value is JsArray) {
      return value.toList();
    }

    if (value is JsObject) {
      // What is that?  This is the dumbest thing you have ever seen?
      // Thank you.  Thank you very much.
      // (I cannot find another way to quickly convert JsObjects to Maps)
      String json = context['JSON'].callMethod('stringify', [value]);
      return jsonDecode(json);
    }

    return value;
  }
}
