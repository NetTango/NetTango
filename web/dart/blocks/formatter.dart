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

abstract class CodeFormatter  {

  String _indent = "  ";

  static Map<String, CodeFormatter> _formatters = null;

  static String formatCode(String language, String canvasId, var parseTree, Function formatAttribute) {
    if (_formatters == null) {
      _formatters = new Map<String, CodeFormatter>();
      _formatters["NetLogo"] = new NetLogoFormatter();
      _formatters["plain"] = new PlainFormatter();
    }
    if (_formatters.containsKey(language)) {
      return _formatters[language]._format(canvasId, parseTree, formatAttribute);
    } else {
      return jsonEncode(parseTree);
    }
  }


  /// convert parse tree output from workspace into source code of a target output language
  String _format(String canvasId, var parseTree, Function formatAttribute);

  void _formatOutput(StringBuffer out, int indent, String post) {
    String fullIndent = "";
    for (int i = 0; i < indent; i++) { fullIndent = fullIndent + _indent; }
    out.write(fullIndent);
    String indentedPost = post.replaceAll("\n", "\n" + fullIndent);
    out.writeln(indentedPost);
  }


  void _formatBlock(Function formatAttribute, StringBuffer out, String canvasId, var block, int indent) {
    String fmt = block["format"];
    var params = block["params"];
    var props = block["properties"];
    int pcount = (params is List) ? params.length : 0;
    int rcount = (props is List) ? props.length : 0;

    if (fmt is! String) {
      fmt = "${block['action']}";
      for (int i = 0; i < pcount; i++) fmt += " {$i}";
      for (int i = 0; i < rcount; i++) fmt += " {P$i}";
    }
    for (int i = 0; i < pcount; i++) {
      fmt = _replaceAttribute(formatAttribute, fmt, "{$i}", canvasId, block, params[i]);
    }
    for (int i=0; i < rcount; i++) {
      fmt = _replaceAttribute(formatAttribute, fmt, "{P$i}", canvasId, block, props[i]);
    }

    _formatOutput(out, indent, fmt);
  }

  String _replaceAttribute(Function formatAttribute, String code, String placeholder, String canvasId, var block, var parameter) {
    return code.replaceAll(placeholder, _formatAttribute(parameter));
  }

  String _formatAttribute(var param) {
    if (param["value"] is Map) {
      return formatExpression(param["value"]);
    } else {
      return toStr(param["value"]);
    }
  }


  static String formatExpression(var expression) {
    var c = expression["children"];
    if (c == null || c is! List) c = [];

    String name = toStr(expression["name"]);

    if (expression["format"] is String) {
      String fmt = expression["format"];
      for (int i=0; i<c.length; i++) {
        fmt = fmt.replaceAll("{$i}", formatExpression(c[i]));
      }
      return fmt;
    }
    else if (c.length == 1) {
      return "($name ${formatExpression(c[0])})";
    }
    else if (c.length == 2) {
      return "(${formatExpression(c[0])} $name ${formatExpression(c[1])})";
    }
    else {
      return name;
    }
  }
}



class PlainFormatter extends CodeFormatter {

  String _format(String canvasId, var parseTree, Function formatAttribute) {
    StringBuffer out = new StringBuffer();
    for (var chain in parseTree["chains"]) {
      _formatChain(formatAttribute, out, canvasId, chain, 0);
      out.writeln();
    }

    return out.toString();
  }


  void _formatChain(Function formatAttribute, StringBuffer out, String canvasId, var chain, int indent) {
    for (var block in chain) {
      if (block["children"] is List) {
        _formatChain(formatAttribute, out, canvasId, block["children"], indent+1);
      }
      if (block["clauses"] is List) {
        for (var clause in block["clauses"]) {
          _formatBlock(formatAttribute, out, canvasId, clause, indent);
          if (clause["children"] is List) {
            _formatChain(formatAttribute, out, canvasId, clause["children"], indent+1);
          }
        }
      }
    }
  }
}

int compareChainsByAction(a, b) {
  if (a is! List || a.length == 0 || a[0]["action"] == null) {
    return -1;
  }
  if (b is! List || b.length == 0 || b[0]["action"] == null) {
    return 1;
  }
  return a[0]["action"].compareTo(b[0]["action"]);
}

class NetLogoFormatter extends CodeFormatter {

  String _format(String canvasId, var parseTree, Function formatAttribute) {
    StringBuffer out = new StringBuffer();
    if (parseTree["chains"] is! List || parseTree["chains"].length == 0) {
      return out.toString();
    }
    List chains = parseTree["chains"];
    chains.sort(compareChainsByAction);
    for (var chain in chains) {
      if (chain.length > 0 && chain[0]["type"] == "nlogo:procedure") {
        var block = chain.removeAt(0);
        _formatBlock(formatAttribute, out, canvasId, block, 0);
        _formatChain(formatAttribute, out, canvasId, chain, 1);
        out.writeln("end");
        out.writeln();
      }
    }
    return out.toString();
  }


  void _formatChain(Function formatAttribute, StringBuffer out, String canvasId, var chain, int indent) {
    for (var block in chain) {
      _formatBlock(formatAttribute, out, canvasId, block, indent);
      if (block["children"] is List) {
        _formatOutput(out, indent, "[");
        _formatChain(formatAttribute, out, canvasId, block["children"], indent+1);
        _formatOutput(out, indent, "]");
      }
      if (block["clauses"] is List) {
        for (var clause in block["clauses"]) {
          _formatBlock(formatAttribute, out, canvasId, clause, indent);
          if (clause["children"] is List) {
            _formatOutput(out, indent, "[");
            _formatChain(formatAttribute, out, canvasId, clause["children"], indent+1);
            _formatOutput(out, indent, "]");
          }
        }
      }
    }
  }

  String _replaceAttribute(Function formatAttribute, String code, String placeholder, String canvasId, var block, var attribute) {
    var valToPass = attribute["expressionValue"] == null ? attribute["value"] : attribute["expressionValue"];
    String replacement = formatAttribute(canvasId, block["id"], block["instanceId"], attribute["id"], valToPass);
    return code.replaceAll(placeholder, replacement);
  }

}
