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
