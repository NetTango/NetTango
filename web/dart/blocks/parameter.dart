/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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


/// Represents a block's parameter value  
class Parameter implements Touchable {

  /// Used to generate unique, internal parameter id numbers
  static int _PARAM_ID = 0;

  /// unique internal parameter id
  int id;

  /// parent block
  Block block;

  /// current parameter value
  var _value;

  /// default / initial value (can be null)
  var defaultValue;

  /// parameter type: can be "number", "int", "range", "text", or "selection"
  String type = "int";

  /// name of the parameter (e.g. degrees, length)
  String name = "";

  /// short unit name that will be displayed after the value (e.g. %, px, m, mm, s) 
  String unit = "";

  /// position of the parameter
  num _left = 0, _top = 0;
  num width = 28.0; 
  num height = BLOCK_HEIGHT * 0.6;

  /// is the mouse down on the parameter in the block
  bool _down = false;


  /// subclasses override this property definition
  dynamic get value => toStr(_value, "");

  set value(var v) => _value = toStr(v, "");

  String get valueAsString => "${_value.toString()}$unit";


  Parameter(this.block, Map data) {
    id = Parameter._PARAM_ID++;
    type = toStr(data["type"], "number");
    name = toStr(data["name"], "");
    unit = toStr(data["unit"], "");
    defaultValue = data["default"];
    value = defaultValue;
  }


  Parameter clone(Block parent) {
    return new Parameter.fromJSON(parent, toJSON());
  }


  Map toJSON() {
    return {
      "type" : type,
      "name" : name,
      "unit" : unit,
      "value" : value,
      "default" : defaultValue
    };
  }


  factory Parameter.fromJSON(Block parent, Map data) {
    switch(toStr(data["type"], "number")) {
      case "int": return new IntParameter(parent, data);
      
      case "num": 
      case "number": return new NumParameter(parent, data);

      case "range": return new RangeParameter(parent, data);

      case "select": return new SelectParameter(parent, data);

      case "text": 
      default: return new Parameter(parent, data);
    }
  }


  void _resize(CanvasRenderingContext2D ctx) {
    width = BLOCK_PADDING * 2;
    ctx.save();
    {
      ctx.font = block.font;
      width += ctx.measureText(valueAsString).width;      
    }
    ctx.restore();
  }


  num _resizeProperty(CanvasRenderingContext2D ctx) {
    _resize(ctx);
    num w = width;
    ctx.save();
    {
      ctx.font = block.font;
      w += BLOCK_INDENT + ctx.measureText("\u25B8    $name").width + BLOCK_PADDING * 2;
    }
    ctx.restore();
    return w;
  }
  
  
  void draw(CanvasRenderingContext2D ctx, num left, [ num top = 0 ]) {
    this._left = left;
    this._top = top;

    ctx.font = block.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    num x = block.x + _left;
    num y = block.y + _top + BLOCK_HEIGHT / 2 - height/2;
    num w = width;
    num h = height;
    
    ctx.beginPath();
    roundRect(ctx, x, y, w, h, h/2);
    ctx.fillStyle = _down ? block.blockColor : block.textColor;
    ctx.fill();
    ctx.fillStyle = _down ? block.textColor : block.blockColor;
    ctx.fillText(valueAsString, x + w/2, y + h/2);
  }


  void drawProperty(CanvasRenderingContext2D ctx, num top) {
    num left = block.width - (BLOCK_PADDING + width);
    num y = block.y + top + BLOCK_HEIGHT / 2;
    num x = block.x + BLOCK_INDENT;
    ctx.fillStyle = block.textColor;
    ctx.font = block.font;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText("\u25B8    $name", x, y);
    draw(ctx, left, top);
  }
  
  
  bool containsTouch(Contact c) {
    return (
      c.touchX >= block.x + _left &&
      c.touchY >= block.y + _top &&
      c.touchX <= block.x + _left + width &&
      c.touchY <= block.y + _top + BLOCK_HEIGHT);
  }


  void touchUp(Contact c) {
    _down = false;
    _showParameterDialog();
    block.workspace.draw();
  }
  
  Touchable touchDown(Contact c) {
    _down = true;
    block.workspace.draw();
    return this;
  }
  
  void touchDrag(Contact c) { }
  
  void touchSlide(Contact c) { }


  void _showParameterDialog() {
    DivElement backdrop = new DivElement() .. className = "backdrop";
    String inputCode = _buildHTMLInput();
    backdrop.appendHtml("""
      <div class="nt-param-dialog">
        <div class="nt-param-table">
          <div class="nt-param-row">
            <div class="nt-param-name">${name}</div>
            <div class="nt-param-value">${inputCode}</div>
          </div>
        </div>
        <button class="nt-param-confirm">OK</button>
        <button class="nt-param-cancel">Cancel</button>
      </div>""");
    HtmlElement container = querySelector("#${block.workspace.canvasId}").parent;
    if (container == null) return;
    container.append(backdrop);

    HtmlElement label = querySelector("#nt-param-label-$id");
    InputElement input = querySelector("#nt-param-$id");

    querySelectorAll(".nt-param-confirm").onClick.listen((e) { 
      if (input != null) {
        value = input.value;
      }
      backdrop.remove();
      block.workspace.draw();
      block.workspace.programChanged();
    });

    querySelectorAll(".nt-param-cancel").onClick.listen((e) => backdrop.remove());

    backdrop.classes.add("show");

    if (input != null) {
      input.focus();
      if (label != null) {
        input.onChange.listen((e) { label.innerHtml = input.value; });
        input.onInput.listen((e) { label.innerHtml = input.value; });
      }
    }
  }


  String _buildHTMLInput() {
    return """
      <input class="nt-param-input" id="nt-param-${id}" type="text" value="${valueAsString}">
      <span class="nt-param-unit">${unit}</span>
    """;
  }
}


//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
class NumParameter extends Parameter {

  /// represents a random number?
  bool random = false;

  /// step interval for selections (for numbers and range)
  num stepSize = 1;


  NumParameter(Block block, Map data) : super(block, data) {
    random = toBool(data["random"], false);
    stepSize = toNum(data["step"], stepSize);
  }


  Map toJSON() {
    Map json = super.toJSON();
    json["random"] = random;
    json["step"] = stepSize;
    return json;
  }


  dynamic get value => toNum(_value, 0.0);
  set value(var v) => _value = toNum(v, 0.0);

  String get valueAsString {
    String s = (value as num).toStringAsFixed(1);
    s = (s.endsWith('.0')) ? s.substring(0, s.length - 2) : s;
    return "$s$unit";
  }

  String _buildHTMLInput() {
    return """
      <input class="nt-param-input" id="nt-param-${id}" type="number" step="${stepSize}" value="${value}">
      <span class="nt-param-unit">${unit}</span>
    """;
  }
}


//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntParameter extends NumParameter {

  IntParameter(Block block, Map data) : super(block, data) { stepSize = 1; }

  dynamic get value => toInt(_value, 0);
  set value(var v) => _value = toInt(v, 0);
}


//-------------------------------------------------------------------------
/// Represents a range of numbers 
//-------------------------------------------------------------------------
class RangeParameter extends NumParameter {

  /// lowest possible value that the user can select (for numbers and range)
  num minValue = 0;

  /// highest possible value that the user can select (for numbers and range)
  num maxValue = 10;


  RangeParameter(Block block, Map data) : super(block, data) {
    minValue = toNum(data["min"], minValue);
    maxValue = toNum(data["max"], maxValue);
  }


  Map toJSON() {
    Map json = super.toJSON();
    json["min"] = minValue;
    json["max"] = maxValue;
    return json;
  }

  String _buildHTMLInput() {
    return """
      <input class="nt-param-input" id="nt-param-${id}" type="range" value="${value}" min="$minValue" max="$maxValue" step="$stepSize">
      <label class="nt-param-label" id="nt-param-label-${id}" for="nt-param-${id}">${value}</label>
      <span class="nt-param-unit">${unit}</span>
    """;
  }
}


//-------------------------------------------------------------------------
/// Represents a value selected from a list of options
//-------------------------------------------------------------------------
class SelectParameter extends Parameter {

  /// list of possible values for select type
  var values = [ ];

  String get valueAsString => "${_value.toString()}$unit \u25BE";


  SelectParameter(Block block, Map data) : super(block, data) {
    if (data["values"] is List && data["values"].length > 0) {
      values = data["values"];
      _value = values[0];
    }
  }


  Parameter clone(Block parent) {
    return new SelectParameter(parent, toJSON());
  }


  Map toJSON() {
    Map json = super.toJSON();
    json["values"] = values;
    return json;
  }


  String _buildHTMLInput() {
    String input = "<select id='nt-param-${id}'>";
    for (var v in values) {
      input += "<option value='${v}' ${v == value ? 'selected' : ''}>${v}</option>";      
    }
    input += "</select>";
    return input;
  }
}
