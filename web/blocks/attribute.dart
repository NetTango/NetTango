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

//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
class NumParameter extends Attribute {

  num _value = null;

  /// represents a random number?
  bool random = null;

  /// step interval for selections (for numbers and range)
  num stepSize = 1;

  NumParameter(Block block, int id) : super(block, id);

  NumParameter.clone(Block block, NumParameter source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.random = source.random;
    this.stepSize = source.stepSize;
  }

  // just so we can clone without knowing the type
  Attribute clone(Block block, bool isSlotBlock) {
    return NumParameter.clone(block, this, isSlotBlock);
  }

  num get value => _value;
  set value(dynamic v) => _value = toNum(v, 0.0);

  String get displayValue {
    String s = (_value != null ? _value : 0).toStringAsFixed(1);
    s = (s.endsWith('.0')) ? s.substring(0, s.length - 2) : s;
    return "$s$unit";
  }

  String _buildHTMLInput() {
    return """
      <div class="nt-param-name">${name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${uniqueId}" type="number" step="${stepSize}" value="${value}">
        <span class="nt-param-unit">${unit}</span>
      </div>
    """;
  }
}


//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntParameter extends NumParameter {

  String type = "int";

  IntParameter(Block block, int id) : super(block, id) { stepSize = 1; }

  IntParameter.clone(Block block, IntParameter source, bool isSlotBlock) : super.clone(block, source, isSlotBlock);

  Attribute clone(Block block, bool isSlotBlock) {
    return IntParameter.clone(block, this, isSlotBlock);
  }

}

//-------------------------------------------------------------------------
/// Represents a range of numbers
//-------------------------------------------------------------------------
class RangeParameter extends NumParameter {

  String type = "range";

  /// lowest possible value that the user can select (for numbers and range)
  num minValue = 0;

  /// highest possible value that the user can select (for numbers and range)
  num maxValue = 10;

  RangeParameter(Block block, int id) : super(block, id);

  RangeParameter.clone(Block block, RangeParameter source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.minValue = source.minValue;
    this.maxValue = source.maxValue;
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return RangeParameter.clone(block, this, isSlotBlock);
  }

  void _showParameterDialog(int x, int y, Function acceptCallback) {
    final backdrop = block.workspace.backdrop;
    backdrop.classes.add("show");
    final dialog = block.workspace.dialog;
    dialog.style.top = "${y}px";
    dialog.classes.remove("small");
    dialog.innerHtml = "";

    DivElement table = new DivElement() .. className = "nt-param-table";
    dialog.append(table);

    table.appendHtml(
      """
        <div class="nt-param-row">
          <div class="nt-param-label">
            ${name}:
            <label id="nt-param-label-${uniqueId}" for="nt-param-${uniqueId}">${value}</label>
            <span class="nt-param-unit">${unit}</span>
          </div>
        </div>
        <div class="nt-param-row">
          <div class="nt-param-value">
            <input class="nt-param-input" id="nt-param-${uniqueId}" type="range" value="${value}" min="$minValue" max="$maxValue" step="$stepSize">
          </div>
        </div>
      """);

    HtmlElement label = querySelector("#nt-param-label-$uniqueId");
    InputElement input = querySelector("#nt-param-$uniqueId");
    if (input != null && label != null) {
      input.onChange.listen((e) {
        value = input.value;
        backdrop.classes.remove("show");
        acceptCallback();
        block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.value));
        e.stopPropagation();
      });
      input.onInput.listen((e) { label.innerHtml = input.value; });
    }
  }
}


class Option {
  final String actual;
  final String display;

  get displayValue {
    return this.display == null || this.display == "" ? this.actual : this.display;
  }

  Option(this.actual, this.display);
}

//-------------------------------------------------------------------------
/// Represents a value selected from a list of options
//-------------------------------------------------------------------------
class SelectParameter extends Attribute {

  String type = "select";

  /// list of possible values for select type
  final values = new List<Option>();
  String get selectedDisplay {
    final valueOptions = values.where( (o) => o.actual == value && o.display != null && o.display != "");
    if (valueOptions.length == 1) {
      return valueOptions.elementAt(0).displayValue;
    } else {
      return value;
    }
  }

  String get displayValue => "$selectedDisplay$unit \u25BE";

  SelectParameter(Block block, int id) : super(block, id);

  SelectParameter.clone(Block block, SelectParameter source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    source.values.forEach( (option) => this.values.add( option ) );
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return SelectParameter.clone(block, this, isSlotBlock);
  }

  void _showParameterDialog(int x, int y, Function acceptCallback) {
    final backdrop = block.workspace.backdrop;
    backdrop.classes.add("show");
    final dialog = block.workspace.dialog;
    dialog.style.top = "${y}px";
    dialog.classes.add("small");
    dialog.innerHtml = "";

    DivElement table = new DivElement() .. className = "nt-param-table";
    dialog.append(table);

    for (Option v in values) {
      DivElement row = new DivElement() .. className = "nt-param-row";
      DivElement opt = new DivElement()
        .. className = "nt-select-option"
        .. innerHtml = v.displayValue;
      if (v.actual == value) { opt.classes.add("selected"); }
      opt.onClick.listen((e) {
        value = v.actual;
        backdrop.classes.remove("show");
        acceptCallback();
        block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.value));
        e.stopPropagation();
      });
      row.append(opt);
      table.append(row);
    }
  }
}

//-------------------------------------------------------------------------
/// Represents an expression (boolean or number)
//-------------------------------------------------------------------------
class ExpressionParameter extends Attribute {

  ExpressionBuilder builder;

  String get displayValue => (builder != null) ? builder.toString() : "";

  String get expressionValue => CodeFormatter.formatExpression(builder.root);

  ExpressionParameter(Block block, int id, String type) : super(block, id) {
    this.builder = new ExpressionBuilder(block.workspace, type);
    this.type = type;
  }

  ExpressionParameter.clone(Block block, ExpressionParameter source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.type = source.type;
    this.builder = ExpressionBuilder.clone(source.builder);
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return ExpressionParameter.clone(block, this, isSlotBlock);
  }

  void _showParameterDialog(int x, int y, Function acceptCallback) {
    final backdrop = block.workspace.backdrop;
    backdrop.classes.add("show");
    final dialog = block.workspace.dialog;
    dialog.style.top = "${y}px";
    dialog.classes.remove("small");
    dialog.innerHtml = "";

    dialog.appendHtml("""
      <div class="nt-param-table">
        <div class="nt-param-row">
          <div class="nt-param-label">${name}:</div>
        </div>
        <div class="nt-param-row">
          <div id="nt-expression-${uniqueId}" class="nt-expression-root"></div>
        </div>
      </div>
      <button class="nt-param-confirm">OK</button>
      <button class="nt-param-cancel">Cancel</button>
    """);

    final pulldownCloserStream = dialog.onClick.listen((e) {
      querySelectorAll('.nt-pulldown-menu').forEach((el) => el.remove());
    });

    querySelectorAll(".nt-param-confirm").onClick.listen((e) {
      var empties = querySelectorAll(".nt-expression.empty");
      if (empties.length > 0) return false;
      pulldownCloserStream.cancel();
      backdrop.classes.remove("show");
      acceptCallback();
      block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.expressionValue));
    });

    querySelectorAll(".nt-param-confirm").onMouseDown.listen((e) {
      querySelectorAll(".nt-expression.empty").forEach((el) => el.classes.add('warn'));
    });
    querySelectorAll(".nt-param-confirm").onMouseUp.listen((e) {
      querySelectorAll(".nt-expression.empty").forEach((el) => el.classes.remove('warn'));
    });
    querySelectorAll(".nt-param-cancel").onClick.listen((e) {
      pulldownCloserStream.cancel();
      backdrop.classes.remove("show");
    });

    builder.open("#nt-expression-${uniqueId}");
  }
}
