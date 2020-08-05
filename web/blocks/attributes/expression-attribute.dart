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

//-------------------------------------------------------------------------
/// Represents an expression (boolean or number)
//-------------------------------------------------------------------------
class ExpressionAttribute extends Attribute {

  // must be "num" or "bool"
  String _type;
  String get type => _type;

  ExpressionBuilder builder;

  String defaultValue = "";

  String getValue() => CodeFormatter.formatExpression(this.builder.root);
  void setValue(String valueString) {
    if (valueString == null) {
      this.builder = new ExpressionBuilder(block.workspace, type);
    }
    if (num.tryParse(valueString) == null && !["true", "false"].contains(valueString)) {
      // not a number or boolean, do not use value
      throw new ArgumentError.value(valueString, "valueString", "Expression values can only be set to numbers or booleans.");
    }
    this.builder = new ExpressionBuilder(block.workspace, type);
    final expression = new Expression(builder, type);
    expression.name = valueString;
    this.builder.root = expression;
  }

  String getDefaultValue() => defaultValue;
  void setDefaultValue(String defaultString) {
    this.defaultValue = defaultString;
  }

  ExpressionAttribute(Block block, int id, String type) : super(block, id) {
    if (!["num", "bool"].contains(type)) {
      throw new ArgumentError.value(type, "type", "The expression type can only be num or bool");
    }
    this.builder = new ExpressionBuilder(block.workspace, type);
    this._type = type;
  }

  ExpressionAttribute.clone(Block block, ExpressionAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.defaultValue = source.defaultValue;
    this._type = source._type;
    this.builder = ExpressionBuilder.clone(source.builder);
    if (!isSlotBlock) {
      this.setValue(this.defaultValue);
    }
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return ExpressionAttribute.clone(block, this, isSlotBlock);
  }

  bool shouldQuote() { return false; }

  void showParameterDialog(int x, int y, Function acceptCallback) {
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
      <button class="nt-param-confirm" type="button">OK</button>
      <button class="nt-param-cancel" type="button">Cancel</button>
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
      final formattedValue = CodeFormatter.formatAttributeValue(this);
      block.workspace.programChanged(new AttributeChangedEvent(this.block.id, this.block.instanceId, this.id, this.type, this.getValue(), formattedValue));
      return false;
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
