// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

//-------------------------------------------------------------------------
/// Represents a number parameter
//-------------------------------------------------------------------------
abstract class NumAttribute extends Attribute {

  num value = null;
  num defaultValue = null;

  String getValue() {
    if (value == null) { return ""; }
    String valueString = (value != null ? value : 0).toStringAsFixed(1);
    return (valueString.endsWith(".0")) ? valueString.substring(0, valueString.length - 2) : valueString;
  }
  void setValue(String valueString) => value = NumUtils.toNum(valueString, 0.0);

  String getDefaultValue() => defaultValue == null ? "" : defaultValue.toString();
  void setDefaultValue(String valueString) => defaultValue = NumUtils.toNum(valueString, null);

  /// represents a random number?
  bool random = null;

  /// step interval for selections (for numbers and range)
  num stepSize = 1;

  // Perhaps surprisingly, this class does *not* correspond to the `"num"` attribute `type`.
  // That type is for the `ExpressionAttribute`.  This class can be `int` or `range`.
  // -Jeremy B July 2020
  NumAttribute(Block block, int id) : super(block, id);

  NumAttribute.clone(Block block, NumAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.random = source.random;
    this.stepSize = source.stepSize;
    this.defaultValue = source.defaultValue;
    if (!isSlotBlock) {
      this.value = (source.value == null) ? this.defaultValue : source.value;
    }
  }

  bool shouldQuote() { return false; }

  void showParameterDialog(int x, int y, Function acceptCallback) {
    final backdrop = block.workspace.backdrop;
    backdrop.classes.add("show");
    final dialog = block.workspace.dialog;
    dialog.style.top = "${y}px";
    dialog.classes.remove("small");
    dialog.innerHtml = "";

    String inputCode = buildHTMLInput();

    dialog.appendHtml("""
      <div class="nt-param-table">
        <div class="nt-param-row">${inputCode}</div>
      </div>
      <button class="nt-param-confirm" type="button">OK</button>
      <button class="nt-param-cancel" type="button">Cancel</button>
    """);

    HtmlElement label = querySelector("#nt-param-label-$uniqueId");
    InputElement input = querySelector("#nt-param-$uniqueId");

    querySelectorAll(".nt-param-confirm").onClick.listen((e) {
      if (input != null) {
        setValue(input.value);
      }
      backdrop.classes.remove("show");
      acceptCallback();
      final formattedValue = CodeFormatter.formatAttributeValue(this);
      block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue));
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

  String buildHTMLInput() {
    return """
      <div class="nt-param-name">${name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${uniqueId}" type="number" step="${stepSize}" value="${value}">
        <span class="nt-param-unit">${unit}</span>
      </div>
    """;
  }
}
