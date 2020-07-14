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

class ExpressionDefinition {
  String name;
  String type;
  List<String> arguments = new List<String>();
  String format;

  ExpressionDefinition(this.name, this.type) {
    if (this.name == null) {
      throw new ArgumentError.notNull("name");
    }
    if (this.type == null) {
      throw new ArgumentError.notNull("type");
    }
    if (![ "num", "bool" ].contains(this.type)) {
      throw new ArgumentError.value(this.type, "type", "Expression definition type can only be 'num' or 'bool'.");
    }

  }
}
