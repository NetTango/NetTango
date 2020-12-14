// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class ExternalStorage {
  static js.JsArray getKeys(js.JsObject item) =>
    js.context["Object"].callMethod("keys", [item]);

  final List<String> propertyNames;
  js.JsObject storage;

  void set(js.JsObject storage) { this.storage = storage; }

  ExternalStorage(List<String> this.propertyNames);

  restore(js.JsObject export) {
    if (this.storage == null) {
      return;
    }
    for (String propertyName in ExternalStorage.getKeys(this.storage)) {
      if (!this.propertyNames.contains(propertyName)) {
        if (export.hasProperty(propertyName)) {
          throw new Exception("Found existing property when restoring external data for export: ${propertyName}");
        }
        export[propertyName] = storage[propertyName];
      }
    }
  }
}
