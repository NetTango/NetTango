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
class Attribute<T> {

  /// parameter id - unique per block
  int id;

  get uniqueId => "${block.workspace.containerId}-${block.id}-${id}";

  /// parent block
  Block block;

  /// current parameter value
  dynamic value;

  /// default / initial value (can be null)
  dynamic defaultValue;

  /// parameter type: can be "bool", "num", "int", "range", "text", or "selection"
  String type = "text";

  /// name of the parameter (e.g. degrees, length)
  String name = "";

  /// short unit name that will be displayed after the value (e.g. %, px, m, mm, s)
  String unit = "";

  String get displayValue => "${value.toString()}$unit";

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
    this.defaultValue = source.defaultValue;
    if (!isSlotBlock) {
      this.value = (source.value == null) ? this.defaultValue : source.value;
    }
  }

  // just so we can clone without knowing the type
  Attribute clone(Block block, bool isSlotBlock) {
    return Attribute.clone(block, this, isSlotBlock);
  }

  // parameters are meant to display inline with just a value
  DivElement drawParameter() {
    DivElement paramDiv = new DivElement();
    paramDiv.innerText = displayValue;
    paramDiv.classes.add("nt-attribute-value");
    paramDiv.classes.add("${block.getStyleClass()}-attribute");
    if (block.blockColor != null) { paramDiv.style.color = block.blockColor; }
    if (block.textColor != null) { paramDiv.style.backgroundColor = block.textColor; }

    final updateValue = () { paramDiv.innerText = displayValue; };
    paramDiv.onClick.listen( (event) {
      final target = (event.target as DivElement);
      final parent = target.offsetParent;
      final left = parent.offsetLeft + target.offsetLeft + event.offset.x;
      final top  = parent.offsetTop  + target.offsetTop  + event.offset.y;
      _showParameterDialog(left.floor(), top.floor(), updateValue);
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

  void _showParameterDialog(int x, int y, Function acceptCallback) {
    final backdrop = block.workspace.backdrop;
    backdrop.classes.add("show");
    final dialog = block.workspace.dialog;
    dialog.style.top = "${y}px";
    dialog.classes.remove("small");
    dialog.innerHtml = "";

    String inputCode = _buildHTMLInput();

    dialog.appendHtml("""
      <div class="nt-param-table">
        <div class="nt-param-row">${inputCode}</div>
      </div>
      <button class="nt-param-confirm">OK</button>
      <button class="nt-param-cancel">Cancel</button>
    """);

    HtmlElement label = querySelector("#nt-param-label-$uniqueId");
    InputElement input = querySelector("#nt-param-$uniqueId");

    querySelectorAll(".nt-param-confirm").onClick.listen((e) {
      if (input != null) {
        value = input.value;
      }
      backdrop.classes.remove("show");
      acceptCallback();
      block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.value));
    });

    querySelectorAll(".nt-param-cancel").onClick.listen((e) => backdrop.classes.remove("show") );

    if (input != null) {
      input.focus();
      if (label != null) {
        input.onChange.listen((e) { label.innerHtml = input.value; });
        input.onInput.listen((e) { label.innerHtml = input.value; });
      }
    }
  }

  String _buildHTMLInput() {
    final escapedValue = (new HtmlEscape()).convert(value.toString());
    return """
      <input class="nt-param-input" id="nt-param-${uniqueId}" type="text" value="${escapedValue}">
      <span class="nt-param-unit">${unit}</span>
    """;
  }
}
