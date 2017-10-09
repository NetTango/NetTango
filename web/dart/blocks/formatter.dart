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


  static String formatCode(String language, var parseTree) {
    if (_formatters == null) {
      _formatters = new Map<String, CodeFormatter>();
      _formatters["NetLogo"] = new NetLogoFormatter();
      _formatters["plain"] = new PlainFormatter();
    }
    if (_formatters.containsKey(language)) {
      return _formatters[language]._format(parseTree);
    } else {
      return JSON.encode(parseTree);
    }
  }

  
  /// convert parse tree output from workspace into source code of a target output language
  String _format(var parseTree);


  void _formatOutput(StringBuffer out, int indent, String post) {
    for (int i=0; i<indent; i++) out.write(_indent);
    out.writeln(post);
  }


  void _formatBlock(StringBuffer out, var block, int indent) {
    String fmt = block["format"];
    var params = block["params"];
    int pcount = (params is List) ? params.length : 0;

    if (fmt is! String) {
      fmt = "${block['action']}";
      for (int i=0; i<pcount; i++) fmt += " {$i}";
    }
    for (int i=0; i<pcount; i++) {
      fmt = fmt.replaceAll("{0}", toStr(params[i]["value"]));
    }

    _formatOutput(out, indent, fmt);
  }
}



class PlainFormatter extends CodeFormatter {

  String _format(var parseTree) {
    StringBuffer out = new StringBuffer();
    for (var chain in parseTree["chains"]) {
      _formatChain(out, chain, 0);
      out.writeln();
    }

    return out.toString();
  }


  void _formatChain(StringBuffer out, var chain, int indent) {
    for (var block in chain) {
      _formatBlock(out, block, indent);
      if (block["children"] is List) {
        _formatChain(out, block["children"], indent+1);
      }
      if (block["clauses"] is List) {
        for (var clause in block["clauses"]) {
          _formatBlock(out, clause, indent);
          if (clause["children"] is List) {
            _formatChain(out, clause["children"], indent+1);
          }
        }
      }
    }
  }
}



class NetLogoFormatter extends CodeFormatter {

  NetLogoFormatter();


  String _format(var parseTree) {
    StringBuffer out = new StringBuffer();
    for (var chain in parseTree["chains"]) {
      if (chain.length > 0 && chain[0]["type"] == "nlogo:procedure") {
        var block = chain.removeAt(0);
        _formatBlock(out, block, 0);
        _formatChain(out, chain, 1);
        out.writeln("end");
        out.writeln();
      }
    }
    return out.toString();
  }


  void _formatChain(StringBuffer out, var chain, int indent) {
    for (var block in chain) {
      _formatBlock(out, block, indent);
      if (block["children"] is List) {
        _formatOutput(out, indent, "[");
        _formatChain(out, block["children"], indent+1);
        _formatOutput(out, indent, "]");
      }
      if (block["clauses"] is List) {
        for (var clause in block["clauses"]) {
          _formatBlock(out, clause, indent);
          if (clause["children"] is List) {
            _formatOutput(out, indent, "[");
            _formatChain(out, clause["children"], indent+1);
            _formatOutput(out, indent, "]");
          }
        }
      }
    }
  }
}
