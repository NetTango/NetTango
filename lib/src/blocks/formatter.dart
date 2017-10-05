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
  
  /// destination language format 
  String language = "NetLogo";


  CodeFormatter(this.language);

  String format(CodeWorkspace workspace);
}



class NetLogoFormatter extends CodeFormatter {

  NetLogoFormatter() : super("NetLogo");


  String format(CodeWorkspace workspace) {
    StringBuffer out = new StringBuffer();
    for (Block block in workspace.blocks) {
      if (block.type == "nlogo:procedure") {
        out.writeln("to ${block.action}");
        _formatChain(out, block);
        out.writeln("end");
      } 
    }
    print(out);
    return out.toString();
  }


  void _formatChain(StringBuffer out, Block start) {
    Block block = start.nextChain;

    while (block != null) {
      if (block.type == "nlogo:command") {
        _formatIndent(out, block);
        out.write("${block.action} ");
        _formatParams(out, block);
        out.writeln();
      }
      else if (block.type == "nlogo:chance") {
        _formatIndent(out, block);
        out.write("ifelse random-float 100 < ");
        _formatParams(out, block);
        out.writeln("[");
      }
      else if (block is EndBlock) {
        _formatIndent(out, block);
        out.writeln("]");
      }
      else if (block is ClauseBlock) {
        _formatIndent(out, block);
        out.writeln("]");
        _formatIndent(out, block);
        out.writeln("[");
      }
      block = block.nextChain;
    }
  }


  void _formatParams(StringBuffer out, Block block) {
    for (Parameter param in block.params) {
      if (param is IntParameter && param.random) {
        out.write("random ${param.value} ");
      } 
      else if (param is NumParameter && param.random) {
        out.write("random-float ${param.value} ");
      } 
      else {
        out.write("${param.value} ");
      }
    }
  }


  void _formatIndent(StringBuffer out, Block block) {
    for (int i=0; i<=block.indent; i++) out.write("  ");
  }
}