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
library NetTango;

import 'dart:math';
import 'dart:html';
import 'dart:convert';
import 'dart:web_audio';
import 'dart:js' as js;


var EXPRESSIONS = [
      { "name" : "true", "type" : "bool", "form" : "literal" },
      { "name" : "false", "type" : "bool", "form" : "literal" },
      { "name" : "AND", "type" : "bool", "form" : "operator", "arguments" : [ "bool", "bool"] },
      { "name" : "OR", "type" : "bool", "form" : "operator", "arguments" : [ "bool", "bool" ] },
      { "name" : "NOT", "type" : "bool", "form" : "operator", "arguments" : [ "bool"] },
      { "name" : ">", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : ">=", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : "<", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : "<=", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : "!=", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : "=", "type" : "bool", "form" : "operator", "arguments" : [ "num", "num" ] },
      { "name" : "energy?", "type" : "bool", "form" : "variable" },
      { "name" : "mouseX", "type" : "num", "form" : "variable" },
      { "name" : "mouseY", "type" : "num", "form" : "variable" },
      { "name" : "NUMBER", "type" : "num", "form" : "literal" },
      { "name" : "+", "type" : "num", "form" : "operator", "arguments" : [ "num", "num"] },
      { "name" : "-", "type" : "num", "form" : "operator", "arguments" : [ "num", "num"] },
      { "name" : "&times;", "type" : "num", "form" : "operator", "arguments" : [ "num", "num"] },
      { "name" : "/", "type" : "num", "form" : "operator", "arguments" : [ "num", "num"] }
    ];




class Expression {

  ExpressionBuilder builder;

  String name = null;

  String type = "";

  String form = "";

  bool get isEmpty => (name == null);

  bool get isUnary => (children.length == 1);

  bool get isBinary => (children.length == 2);

  bool get isChildless => (children.length == 0);

  List<Expression> children = new List<Expression>();


  Expression(this.builder, this.type);


  // test to see if the current children match arg list?
  // if so, leave them alone rather than replace them
  bool childMismatch(List args) {
    if (args == null) return children.isNotEmpty;
    if (children.length != args.length) return true;
    for (int i=0; i<args.length; i++) {
      if (args[i] != children[i].type) return true;
    }
    return false;
  }


  void setChildren(List args) {
    if (childMismatch(args)) {
      children.clear();
      if (args != null) {
        for (int i=0; i<args.length; i++) {
          children.add(new Expression(builder, args[i]));
        }
      }
    }
  }


  void appendOperator(DivElement parent) {
    DivElement div = new DivElement()
      .. innerHtml = "$name"
      .. classes.add("nt-expression-text")
      .. classes.add("editable")
      .. classes.add("$type");

    div.onClick.listen((e) { 
      openPulldown(div); 
      e.stopPropagation();
    });
    electricBrace(div, parent);
    parent.append(div);
  }


  void electricBrace(DivElement curr, DivElement parent) {
    curr.onMouseEnter.listen((e) { parent.classes.add("highlight"); });
    curr.onMouseLeave.listen((e) { parent.classes.remove("highlight"); });
  }


  void appendParen(DivElement parent, bool left) {
    DivElement paren = new DivElement()
      .. innerHtml = left ? "(" : ")"
      .. classes.add("nt-expression-text")
      .. classes.add("parenthesis");
    electricBrace(paren, parent);
    parent.append(paren);
  }


  void appendNumber(DivElement parent) {
    NumberInputElement input = new NumberInputElement()
      .. className = "nt-number-input"
      .. value = (num.parse(name, (e) => 0)).toString()
      .. step = "1";
    input.onChange.listen((e) { 
      name = input.value; 
      if (name == "") {
        name = "0";
        input.value = "0";
      }
    });
    parent.append(input);
  }


  void renderHtml(DivElement parent) {
    DivElement div = new DivElement() .. className = "nt-expression";
    if (isEmpty) {
      div.classes.add("empty");
      div.appendHtml("<small>&#9660;</small>");
    } 
    else if (form == "literal" && type == "num") {
      appendNumber(div);
    }
    else if (isUnary) {
      appendParen(div, true);
      appendOperator(div);
      children[0].renderHtml(div);
      appendParen(div, false);
    } 
    else if (isBinary) {
      appendParen(div, true);
      children[0].renderHtml(div);
      appendOperator(div);
      children[1].renderHtml(div);
      appendParen(div, false);
    } 
    else {
      div.appendHtml("<div class='nt-expression-text $type'>$name</div>");
    }
    if (isChildless) {
      div.classes.add("editable");
      div.onClick.listen((e) {
        openPulldown(div);
        e.stopPropagation();
      });
    }
    parent.append(div);
  }


 //-------------------------------------------------------------
 // Creates an expression pulldown menu 
 //-------------------------------------------------------------
  void openPulldown(Element expander) {
    querySelectorAll('.nt-pulldown-menu').forEach((el) => el.remove());
    DivElement hmenu = new DivElement() .. classes.add('nt-pulldown-menu');

    for (var item in EXPRESSIONS) {
      if (item['type'] == type) {
        AnchorElement link = new AnchorElement(href : "#") 
          .. innerHtml = "${item['name']}";
        hmenu.append(link);
        link.onClick.listen((e) {
          hmenu.remove();
          name = item['name'];
          type = item['type'];
          form = item['form'];
          setChildren(item['arguments']);
          builder.renderHtml();
          e.stopPropagation();
          e.preventDefault();
        });
      }
    }
    hmenu.appendHtml("<hr>");
    AnchorElement link = new AnchorElement(href : "#") 
      .. innerHtml = "Clear"
      .. className = "clear";
    hmenu.append(link);
    link.onClick.listen((e) {
      hmenu.remove();
      name = null;
      form = "";
      children.clear();
      builder.renderHtml();
      e.stopPropagation();
      e.preventDefault();
    });
      

    expander.append(hmenu);
  }
}


class ExpressionBuilder {

  Element parent;

  Expression root;


  ExpressionBuilder(this.parent) {
    root = new Expression(this, "bool");
    renderHtml();
    parent.onClick.listen((e) {
      querySelectorAll('.nt-pulldown-menu').forEach((el) => el.remove());
    });
  }


  renderHtml() {
    parent.children.clear();
    root.renderHtml(parent);
  }
}


void main() {

  ExpressionBuilder builder = new ExpressionBuilder(querySelector("#expression-holder"));

  var okButton = querySelector("#confirm-button");
  if (okButton != null) {
    okButton.onMouseDown.listen((e) { 
      querySelectorAll(".nt-expression.empty").forEach((el) => el.classes.add('warn'));
    });
    okButton.onMouseUp.listen((e) { 
      querySelectorAll(".nt-expression.empty").forEach((el) => el.classes.remove('warn'));
    });
    okButton.onClick.listen((e) {
      var empties = querySelectorAll(".nt-expression.empty");
      if (empties.length > 0) return false;
    });
  }
}  

