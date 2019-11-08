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


/// TODO
///   limit length of inline expressions on blocks.
class Expression {

  ExpressionBuilder builder;

  String name = null;

  String type = "num";

  String format = null;

  bool get isRoot => (builder.root == this);

  bool get isEmpty => (name == null);

  bool get isUnary => (children.length == 1);

  bool get isBinary => (children.length == 2);

  bool get hasChildren => (children.isNotEmpty);

  bool get isChildless => (children.length == 0);

  List<Expression> children = new List<Expression>();


  Expression(this.builder, this.type);


  void displayString(StringBuffer out) {
    if (isUnary) {
      if (!isRoot) out.write("(");
      out.write("$name ");
      children[0].displayString(out);
      if (!isRoot) out.write(")");
    }
    else if (isBinary) {
      if (!isRoot) out.write("(");
      children[0].displayString(out);
      out.write(" $name ");
      children[1].displayString(out);
      if (!isRoot) out.write(")");
    }
    else if (name != null) {
      out.write("$name");
    }
  }


  Map toJSON() {
    Map data = { "name" : name, "type" : type };
    if (hasChildren) {
      data["children"] = [];
      for (Expression child in children) {
        data["children"].add(child.toJSON());
      }
    }
    if (format != null) data["format"] = format;
    return data;
  }


  void fromJSON(Map json) {
    name = toStr(json['name']);
    type = toStr(json['type'], "num");
    if (json['format'] != null) {
      format = json['format'];
    }
    children.clear();
    if (json['children'] is List) {
      for (var c in json['children']) {
        Expression child = new Expression(builder, c['type']);
        children.add(child);
        child.fromJSON(c);
      }
    }
  }


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
    bool childless = isChildless;

    if (childMismatch(args)) {
      children.clear();
      if (args != null) {
        for (int i=0; i<args.length; i++) {

          // chain first expression?
          if (i == 0 && childless && args[i] == type) {
            children.add(new Expression(builder, args[i]) .. name = name);
          } else {
            children.add(new Expression(builder, args[i]));
          }
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
    name = toNum(name, 0).toString();
    NumberInputElement input = new NumberInputElement()
      .. className = "nt-number-input"
      .. value = name
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


  bool get isNum {
    if (name != null) {
      return num.parse(name, (e) => null) != null;
    }
    return false;
  }


  void renderHtml(DivElement parent) {
    DivElement div = new DivElement() .. className = "nt-expression";
    if ((isNum || isEmpty) && type == "num") {
      appendNumber(div);
    }
    else if (isEmpty) {
      div.classes.add("empty");
      div.appendHtml("<small>&#9660;</small>");
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

    // ---------------  expressions ---------------------
    _addMenuItems(hmenu, builder.expressions);

    // ---------------  variables ---------------------
    if (builder.variables.isNotEmpty) hmenu.appendHtml("<hr>");
    _addMenuItems(hmenu, builder.variables);

    // ---------------  clear button ---------------------
    hmenu.appendHtml("<hr>");
    AnchorElement link = new AnchorElement(href : "#")
      .. innerHtml = "Clear"
      .. className = "clear";
    hmenu.append(link);
    link.onClick.listen((e) {
      hmenu.remove();
      name = null;
      children.clear();
      format = null;
      builder.renderHtml();
      e.stopPropagation();
      e.preventDefault();
    });

    expander.append(hmenu);
  }


  void _addMenuItems(DivElement hmenu, List items) {
    for (var item in items) {
      if (item['type'] == type) {
        AnchorElement link = new AnchorElement(href : "#")
          .. innerHtml = "${item['name']}";
        hmenu.append(link);
        link.onClick.listen((e) {
          hmenu.remove();
          setChildren(item['arguments']);
          name = item['name'];
          type = item['type'];
          format = item['format'];
          builder.renderHtml();
          e.stopPropagation();
          e.preventDefault();
        });
      }
    }
  }

}


class ExpressionBuilder {

  CodeWorkspace workspace;

  Element parent;

  Expression root;

  List get expressions => workspace.expressions;

  List get variables => workspace.variables;


  ExpressionBuilder(this.workspace, String type) {
    root = new Expression(this, type);
  }


  String toString() {
    StringBuffer out = new StringBuffer();
    root.displayString(out);
    return out.toString();
  }


  Map toJSON() {
    return root.toJSON();
  }


  void fromJSON(var json) {
    if (json is Map) {
      root.fromJSON(json);
    } else if (json != null) {
      root.name = json.toString();
    }
  }


  void open(String parentSelector) {
    this.parent = querySelector(parentSelector);
    renderHtml();
  }


  renderHtml() {
    if (parent != null && root != null) {
      parent.children.clear();
      root.renderHtml(parent);
    }
  }
}
