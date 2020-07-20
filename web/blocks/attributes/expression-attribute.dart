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

  ExpressionBuilder builder;

  String get displayValue => (builder != null) ? builder.toString() : "";

  String get expressionValue => CodeFormatter.formatExpression(builder.root);

  ExpressionAttribute(Block block, int id, String type) : super(block, id) {
    this.builder = new ExpressionBuilder(block.workspace, type);
    this.type = type;
  }

  ExpressionAttribute.clone(Block block, ExpressionAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.type = source.type;
    this.builder = ExpressionBuilder.clone(source.builder);
  }

  Attribute clone(Block block, bool isSlotBlock) {
    return ExpressionAttribute.clone(block, this, isSlotBlock);
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
