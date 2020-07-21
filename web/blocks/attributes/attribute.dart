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

/// Represents the paramter or property options for a block
abstract class Attribute {

  /// parameter id - unique per block
  int id;

  get uniqueId => "${block.workspace.containerId}-${block.id}-${id}";

  /// parent block
  Block block;

  /// parameter type: can be "bool", "num", "int", "range", "text", or "select"
  String get type;

  /// name of the parameter (e.g. degrees, length)
  String name = "";

  /// short unit name that will be displayed after the value (e.g. %, px, m, mm, s)
  String unit = "";

  String getValue();
  void setValue(String valueString);

  String getDefaultValue();
  void setDefaultValue(String defaultString);

  String getDisplayValue() => "${this.getValue()}${this.unit}";

  Attribute(this.block, this.id) {
    if (this.id != null) {
      if (id >= this.block.nextParamId) {
        this.block.nextParamId = id + 1;
      }
    } else {
      id = this.block.nextParamId++;
    };
  }

  Attribute.clone(this.block, Attribute source, bool isSlotBlock) {
    this.id = source.id;
    this.name = source.name;
    this.unit = source.unit;
  }

  // just so we can clone without knowing the type
  Attribute clone(Block block, bool isSlotBlock);

  // should the value for this attribute be quoted in code?
  bool shouldQuote();

  // parameters are meant to display inline with just a value
  DivElement drawParameter() {
    DivElement paramDiv = new DivElement();
    paramDiv.innerText = this.getDisplayValue();
    paramDiv.classes.add("nt-attribute-value");
    paramDiv.classes.add("${block.getStyleClass()}-attribute");
    if (block.blockColor != null) { paramDiv.style.color = block.blockColor; }
    if (block.textColor != null) { paramDiv.style.backgroundColor = block.textColor; }

    final updateValue = () { paramDiv.innerText = this.getDisplayValue(); };
    paramDiv.onClick.listen( (event) {
      final target = (event.target as DivElement);
      final parent = target.offsetParent;
      final left = parent.offsetLeft + target.offsetLeft + event.offset.x;
      final top  = parent.offsetTop  + target.offsetTop  + event.offset.y;
      showParameterDialog(left.floor(), top.floor(), updateValue);
    });
    return paramDiv;
  }

  // properties display stand-alone with an identifier
  DivElement drawProperty() {
    DivElement propDiv = new DivElement();
    propDiv.classes.add("nt-property");
    DivElement propName = new DivElement();
    propName.classes.add("nt-property-name");
    propName.innerText = "\u2022 $name";
    propDiv.append(propName);
    propDiv.append(drawParameter());
    return propDiv;
  }

  showParameterDialog(int x, int y, Function acceptCallback);
}
