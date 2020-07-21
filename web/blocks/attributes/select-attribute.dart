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

class Option {
  final String actual;
  final String display;

  String get displayValue {
    return this.display == null || this.display == "" ? this.actual : this.display;
  }

  Option(this.actual, this.display);
}

//-------------------------------------------------------------------------
/// Represents a value selected from a list of options
//-------------------------------------------------------------------------
class SelectAttribute extends Attribute {

  String get type => "select";

  String value;
  String defaultValue = "";
  // can be "always-quote", "never-quote", or "smart-quote"
  String quoteValues = "smart-quote";

  String getValue() => value == null ? "" : value;
  void setValue(String valueString) {
    this.value = valueString;
  }

  String getDefaultValue() => defaultValue;
  void setDefaultValue(String defaultString) {
    this.defaultValue = defaultString;
  }

  String getDisplayValue() => "$selectedDisplay$unit \u25BE";

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

  SelectAttribute(Block block, int id) : super(block, id);

  SelectAttribute.clone(Block block, SelectAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.defaultValue = source.defaultValue;
    this.quoteValues = source.quoteValues;
    source.values.forEach( (option) => this.values.add( option ) );
    if (!isSlotBlock) {
      this.value = (source.value == null) ? this.defaultValue : source.value;
    }
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return SelectAttribute.clone(block, this, isSlotBlock);
  }

  bool shouldQuote() {
    switch (this.quoteValues) {

      case "always-quote":
        return true;

      case "never-quote":
        return false;

      case "smart-quote":
      default:
        return (num.tryParse(value) == null && !["true","false"].contains(value));

    }
  }

  void showParameterDialog(int x, int y, Function acceptCallback) {
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
        final formattedValue = CodeFormatter.formatAttributeValue(this);
        block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.value, formattedValue));
        e.stopPropagation();
      });
      row.append(opt);
      table.append(row);
    }
  }
}
