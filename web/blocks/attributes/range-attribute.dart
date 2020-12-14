// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

//-------------------------------------------------------------------------
/// Represents a range of numbers
//-------------------------------------------------------------------------
class RangeAttribute extends NumAttribute {

  String get type => "range";

  /// lowest possible value that the user can select (for numbers and range)
  num minValue = 0;

  /// highest possible value that the user can select (for numbers and range)
  num maxValue = 10;

  RangeAttribute(Block block, int id) : super(block, id);

  RangeAttribute.clone(Block block, RangeAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.minValue = source.minValue;
    this.maxValue = source.maxValue;
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return RangeAttribute.clone(block, this, isSlotBlock);
  }

  void showParameterDialog(int x, int y, Function acceptCallback) {
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
        setValue(input.value);
        backdrop.classes.remove("show");
        acceptCallback();
        final formattedValue = CodeFormatter.formatAttributeValue(this);
        block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue));
        e.stopPropagation();
      });
      input.onInput.listen((e) { label.innerHtml = input.value; });
    }
  }
}
