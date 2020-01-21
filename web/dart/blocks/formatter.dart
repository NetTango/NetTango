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
  Function _formatAttribute;
  String _containerId;

  CodeFormatter(Function this._formatAttribute, String this._containerId);

  /// convert parse tree output from workspace into source code of a target output language
  String formatCode(var parseTree, {Function formatAttributeOverride = null}) {
    Function originalFormatAttribute = _formatAttribute;
    if (formatAttributeOverride != null) {
      _formatAttribute = formatAttributeOverride;
    }

    final result = _formatLanguageCode(parseTree);

    _formatAttribute = originalFormatAttribute;

    return result;
  }

  String _formatLanguageCode(var parseTree);

  void formatChain(StringBuffer out, var chain, int indent);

  void _formatOutput(StringBuffer out, int indent, String post) {
    String fullIndent = "";
    for (int i = 0; i < indent; i++) { fullIndent = fullIndent + _indent; }
    out.write(fullIndent);
    String indentedPost = post.replaceAll("\n", "\n" + fullIndent);
    out.writeln(indentedPost);
  }

  void formatBlock(StringBuffer out, var block, int indent) {
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
      fmt = _replaceAttribute(fmt, "{$i}", block, params[i]);
    }
    for (int i=0; i < rcount; i++) {
      fmt = _replaceAttribute(fmt, "{P$i}", block, props[i]);
    }

    _formatOutput(out, indent, fmt);
  }

  String _replaceAttribute(String code, String placeholder, var block, var parameter) {
    return code.replaceAll(placeholder, _formatAttributeValue(parameter));
  }

  String _formatAttributeValue(var param) {
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

  PlainFormatter(Function formatAttribute, String containerId) : super(formatAttribute, containerId);

  String _formatLanguageCode(var parseTree) {
    StringBuffer out = new StringBuffer();
    for (var chain in parseTree["chains"]) {
      formatChain(out, chain, 0);
      out.writeln();
    }

    return out.toString();
  }

  void formatChain(StringBuffer out, var chain, int indent) {
    for (var block in chain) {
      if (block["children"] is List) {
        formatChain(out, block["children"], indent+1);
      }
      if (block["clauses"] is List) {
        for (var clause in block["clauses"]) {
          formatBlock(out, clause, indent);
          if (clause["children"] is List) {
            formatChain(out, clause["children"], indent+1);
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

  NetLogoFormatter(Function formatAttribute, String containerId) : super(formatAttribute, containerId);

  String _formatLanguageCode(var parseTree) {
    StringBuffer out = new StringBuffer();
    if (parseTree["chains"] is! List || parseTree["chains"].length == 0) {
      return out.toString();
    }
    List chains = parseTree["chains"];
    chains.sort(compareChainsByAction);
    for (var chain in chains) {
      formatChain(out, chain, 0);
    }

    return out.toString();
  }

  void formatChain(StringBuffer out, var chain, int indent) {
    if (chain.length == 0 || chain[0]["type"] != "nlogo:procedure") {
      return;
    }
    var starter = chain[0];
    formatBlock(out, starter, indent);
    _formatBlocks(out, chain.skip(1), indent+1);
    out.writeln("end");
    out.writeln();
  }

  void formatBlock(StringBuffer out, var block, int indent) {
    super.formatBlock(out, block, indent);
    if (block["children"] is List) {
      formatClause(out, block["children"], indent);
    }
    if (block["clauses"] is List) {
      for (var clause in block["clauses"]) {
        if (clause["children"] is List) {
          formatClause(out, clause["children"], indent);
        }
      }
    }
  }

  void _formatBlocks(StringBuffer out, var blocks, int indent) {
    for (var block in blocks) {
      formatBlock(out, block, indent);
    }
  }

  void formatClause(StringBuffer out, var clause, int indent) {
    _formatOutput(out, indent, "[");
    _formatBlocks(out, clause, indent + 1);
    _formatOutput(out, indent, "]");
  }

  String _replaceAttribute(String code, String placeholder, var block, var attribute) {
    var valToPass = attribute["expressionValue"] == null ? attribute["value"] : attribute["expressionValue"];
    String replacement = _formatAttribute(_containerId, block["id"], block["instanceId"], attribute["id"], valToPass);
    return code.replaceAll(placeholder, replacement);
  }

}
