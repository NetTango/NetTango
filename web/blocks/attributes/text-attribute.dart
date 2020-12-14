// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

/// Represents the paramter or property options for a block
class TextAttribute extends Attribute {

  String get type => "text";

  String value = "";
  String defaultValue = "";

  String getValue() => value == null ? "" : value;
  void setValue(String valueString) {
    this.value = valueString;
  }

  String getDefaultValue() => defaultValue;
  void setDefaultValue(String defaultString) {
    this.defaultValue = defaultString;
  }

  TextAttribute(Block block, int id) : super(block, id);

  TextAttribute.clone(Block block, TextAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.defaultValue = source.defaultValue;
    if (!isSlotBlock) {
      this.value = (source.value == null || source.value == "") ? this.defaultValue : source.value;
    }
  }

  // just so we can clone without knowing the type
  TextAttribute clone(Block block, bool isSlotBlock) {
    return TextAttribute.clone(block, this, isSlotBlock);
  }

  bool shouldQuote() { return true; }

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
        value = input.value;
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
    final htmlValue = (new HtmlEscape()).convert(getValue());
    return """
      <input class="nt-param-input" id="nt-param-${uniqueId}" type="text" value="${htmlValue}">
      <span class="nt-param-unit">${unit}</span>
    """;
  }

}
