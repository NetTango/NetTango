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

// TODO: This is an over-simplification, but it works for our big use-case (NetLogo)
// If we want to look at custom per-language code formatters again, I think it makese
// more sense for them to be provided by the end users, as opposed to included in the
// NetTango runtime directly.  -Jeremy B July 2020
class FormatOptions {
  final String chainOpen;
  final String chainClose;
  final String clauseOpen;
  final String clauseClose;

  FormatOptions(this.chainOpen, this.chainClose, this.clauseOpen, this.clauseClose);
}

int compareChainsByAction(Chain c1, Chain c2) {
  if (c1.blocks.length == 0 || c1.blocks[0].action == null) {
    return -1;
  }
  if (c2.blocks.length == 0 || c2.blocks[0].action == null) {
    return 1;
  }
  return c1.blocks[0].action.compareTo(c2.blocks[0].action);
}

class CodeFormatter  {

  String indentString = "  ";
  FormatOptions formatOptions;
  Function formatAttribute;
  final String containerId;

  CodeFormatter(String language, Function this.formatAttribute, String this.containerId) {
    switch (language) {

      case "NetLogo":
        this.formatOptions = new FormatOptions("", "end", "[", "]");
        break;

      default:
        this.formatOptions = new FormatOptions("", "", "", "");
        break;

    }
  }

  String formatCode(CodeWorkspace workspace, bool includeRequired, {Function formatAttributeOverride = null}) {
    Function originalFormatAttribute = this.formatAttribute;
    if (formatAttributeOverride != null) {
      this.formatAttribute = formatAttributeOverride;
    }

    final extraChains = workspace.menu.slots
      .where( (slot) => includeRequired && slot.block.isRequired && slot.block.canBeStarter && workspace.getBlockCount(slot.block.id) == 0)
      .map( (slot) => new List<Block>() .. add(slot.block)).toList();

    // TODO: What to do with required blocks that cannot be starters?

    final result = formatLanguageCode(workspace, extraChains);

    formatAttribute = originalFormatAttribute;

    return result;
  }

  String formatLanguageCode(CodeWorkspace workspace, List<List<Block>> extraChains) {
    StringBuffer out = new StringBuffer();

    final chains = workspace.chains.toList();
    chains.sort(compareChainsByAction);
    for (final chain in chains) {
      formatChainBlocks(out, chain.blocks, workspace.chainOpen, workspace.chainClose);
    }

    for (final blocks in extraChains) {
      formatChainBlocks(out, blocks, workspace.chainOpen, workspace.chainClose);
    }

    return out.toString();
  }

  void formatChainBlocks(StringBuffer out, List<Block> blocks, String chainOpen, String chainClose) {
    if (blocks.isEmpty) { return; }

    var first = blocks[0];
    if (!first.canBeStarter) { return; }

    writeFormatOption(out, 0, this.formatOptions.chainOpen, chainOpen);
    formatBlock(out, 0, first);
    formatBlocks(out, 1, blocks.skip(1).toList());
    writeFormatOption(out, 0, this.formatOptions.chainClose, chainClose);
    out.writeln();
  }

  void formatBlocks(StringBuffer out, int indent, List<Block> blocks) {
    if (blocks.isEmpty) { return; }

    for (var block in blocks) {
      formatBlock(out, indent, block);
    }
  }

  void formatBlock(StringBuffer out, int indent, Block block) {

    String format = block.format;
    if (format == null) {
      format = "${block.action}";
      for (int i = 0; i < block.params.length; i++) {
        format += " {$i}";
      }
      for (int i = 0; i < block.properties.length; i++) {
        format += " {P$i}";
      }
    }

    int i = 0;
    for (int key in block.params.keys) {
      format = replaceAttribute(format, "{$i}", block, block.params[key]);
      i++;
    }

    i = 0;
    for (int key in block.properties.keys) {
      format = replaceAttribute(format, "{P$i}", block, block.properties[key]);
      i++;
    }

    writeIndentedLine(out, indent, format);

    for (Clause clause in block.clauses) {
      formatClause(out, clause, indent);
    }
  }

  void formatClause(StringBuffer out, Clause clause, int indent) {
    writeFormatOption(out, indent, this.formatOptions.clauseOpen, clause.open);
    formatBlocks(out, indent + 1, clause.blocks);
    writeFormatOption(out, indent, this.formatOptions.clauseClose, clause.close);
  }

  String replaceAttribute(String code, String placeholder, Block block, Attribute attribute) {
    assert (attribute != null);
    final formattedValue = CodeFormatter.formatAttributeValue(attribute);
    final replacement = this.formatAttribute(this.containerId, block.id, block.instanceId, attribute.id, formattedValue, attribute.type);
    return code.replaceAll(placeholder, replacement);
  }

  void writeIndentedLine(StringBuffer out, int indent, String line) {
    String fullIndent = "";
    for (int i = 0; i < indent; i++) { fullIndent = fullIndent + indentString; }
    out.write(fullIndent);
    String indentedPost = line.replaceAll("\n", "\n" + fullIndent);
    out.writeln(indentedPost);
  }

  void writeFormatOption(StringBuffer out, int indent, String formatOption, String override) {
    final option = (override != null) ? override : formatOption;
    if (option != null && option != "") { writeIndentedLine(out, indent, option); }
  }

  static String formatAttributeValue(Attribute attribute) {
    final value = toStr(attribute.getValue(), "");
    final quoteIt = attribute.shouldQuote();
    final formatValue = quoteIt ? "\"$value\"" : value;
    return formatValue;
  }

  static String formatExpression(Expression expression) {
    if (expression.format != null) {
      String format = expression.format;
      for (int i = 0; i < expression.children.length; i++) {
        format = format.replaceAll("{$i}", formatExpression(expression.children[i]));
      }
      return format;
    }
    else if (expression.children.length == 1) {
      return "(${expression.name} ${formatExpression(expression.children[0])})";
    }
    else if (expression.children.length == 2) {
      return "(${formatExpression(expression.children[0])} ${expression.name} ${formatExpression(expression.children[1])})";
    }
    else {
      return expression.name;
    }
  }

}
