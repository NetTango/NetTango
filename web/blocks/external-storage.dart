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
