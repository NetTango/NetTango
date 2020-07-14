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

abstract class CodeFormatter  {

  String _indent = "  ";
  Function _formatAttribute;
  String _containerId;

  CodeFormatter(Function this._formatAttribute, String this._containerId);

  String formatCode(CodeWorkspace workspace, bool includeRequired, {Function formatAttributeOverride = null}) {
    Function originalFormatAttribute = _formatAttribute;
    if (formatAttributeOverride != null) {
      _formatAttribute = formatAttributeOverride;
    }

    final extraChains = workspace.menu.slots
      .where( (slot) => includeRequired && slot.block.isRequired && slot.block.canBeStarter && workspace.getBlockCount(slot.block.id) == 0)
      .map( (slot) => new List<Block>() .. add(slot.block)).toList();

    // TODO: What to do with required blocks that cannot be starters?

    final result = _formatLanguageCode(workspace, extraChains);

    _formatAttribute = originalFormatAttribute;

    return result;
  }

  String _formatLanguageCode(CodeWorkspace workspace, List<List<Block>> extraChains);

  void formatBlocks(StringBuffer out, List<Block> blocks, int indent);

  void _formatOutput(StringBuffer out, int indent, String post) {
    String fullIndent = "";
    for (int i = 0; i < indent; i++) { fullIndent = fullIndent + _indent; }
    out.write(fullIndent);
    String indentedPost = post.replaceAll("\n", "\n" + fullIndent);
    out.writeln(indentedPost);
  }

  void formatBlock(StringBuffer out, Block block, int indent) {
    String format = block.format;
    if (format == null) {
      format = "${block.action}";
      if (block.params != null) {
        for (int i = 0; i < block.params.length; i++) {
          format += " {$i}";
        }
      }
      if (block.properties != null) {
        for (int i = 0; i < block.properties.length; i++) {
          format += " {P$i}";
        }
      }
    }

    int i = 0;
    if (block.params != null) {
      i = 0;
      for (int key in block.params.keys) {
        format = _replaceAttribute(format, "{$i}", block, block.params[key]);
        i++;
      }
    }

    if (block.properties != null) {
      i = 0;
      for (int key in block.properties.keys) {
        format = _replaceAttribute(format, "{P$i}", block, block.properties[key]);
        i++;
      }
    }

    _formatOutput(out, indent, format);
  }

  String _replaceAttribute(String code, String placeholder, Block block, Attribute parameter) {
    return code.replaceAll(placeholder, _formatAttributeValue(parameter));
  }

  String _formatAttributeValue(Attribute param) {
    if (param is ExpressionParameter) {
      return formatExpression(param.builder.root);
    } else {
      return toStr(param.value);
    }
  }

  static String formatExpression(Expression expression) {
    String name = toStr(expression.name);

    if (expression.format != null) {
      String format = expression.format;
      for (int i = 0; i < expression.children.length; i++) {
        format = format.replaceAll("{$i}", formatExpression(expression.children[i]));
      }
      return format;
    }
    else if (expression.children.length == 1) {
      return "($name ${formatExpression(expression.children[0])})";
    }
    else if (expression.children.length == 2) {
      return "(${formatExpression(expression.children[0])} $name ${formatExpression(expression.children[1])})";
    }
    else {
      return name;
    }
  }

}

class PlainFormatter extends CodeFormatter {

  PlainFormatter(Function formatAttribute, String containerId) : super(formatAttribute, containerId);

  String _formatLanguageCode(CodeWorkspace workspace, List<List<Block>> extraChains) {
    StringBuffer out = new StringBuffer();
    for (Chain chain in workspace.chains) {
      formatBlocks(out, chain.blocks, 0);
      out.writeln();
    }
    for (List<Block> blocks in extraChains) {
      formatBlocks(out, blocks, 0);
    }
    return out.toString();
  }

  void formatBlocks(StringBuffer out, List<Block> blocks, int indent) {
    for (Block block in blocks) {
      if (block.children != null) {
        formatBlocks(out, block.children.blocks, indent + 1);
      }
      if (block.clauses != null) {
        for (Clause clause in block.clauses) {
          if (clause.blocks != null) {
            formatBlocks(out, clause.blocks, indent + 1);
          }
        }
      }
    }
  }

}

int compareChainsByAction(List<Block> a, List<Block> b) {
  if (a.length == 0 || a[0].action == null) {
    return -1;
  }
  if (b.length == 0 || b[0].action == null) {
    return 1;
  }
  return a[0].action.compareTo(b[0].action);
}

class NetLogoFormatter extends CodeFormatter {

  NetLogoFormatter(Function formatAttribute, String containerId) : super(formatAttribute, containerId);

  String _formatLanguageCode(CodeWorkspace workspace, List<List<Block>> extraChains) {
    StringBuffer out = new StringBuffer();

    final chains = workspace.chains.map( (c) => c.blocks ).toList();
    chains.sort(compareChainsByAction);
    for (var chain in chains) {
      formatBlocks(out, chain, 0);
    }

    for (List<Block> blocks in extraChains) {
      formatBlocks(out, blocks, 0);
    }

    return out.toString();
  }

  void formatBlocks(StringBuffer out, List<Block> blocks, int indent) {
    if (blocks.length == 0 || !blocks[0].canBeStarter) {
      return;
    }
    var starter = blocks[0];
    formatBlock(out, starter, indent);
    _formatBlocks(out, blocks.skip(1).toList(), indent + 1);
    out.writeln("end");
    out.writeln();
  }

  void formatBlock(StringBuffer out, Block block, int indent) {
    super.formatBlock(out, block, indent);
    if (block.children != null) {
      formatClause(out, block.children, indent);
    }
    if (block.clauses != null) {
      for (Clause clause in block.clauses) {
        formatClause(out, clause, indent);
      }
    }
  }

  void _formatBlocks(StringBuffer out, List<Block> blocks, int indent) {
    for (var block in blocks) {
      formatBlock(out, block, indent);
    }
  }

  void formatClause(StringBuffer out, Clause clause, int indent) {
    _formatOutput(out, indent, "[");
    _formatBlocks(out, clause.blocks, indent + 1);
    _formatOutput(out, indent, "]");
  }

  String _replaceAttribute(String code, String placeholder, Block block, Attribute attribute) {
    assert (attribute != null);
    var valToPass = (attribute is ExpressionParameter) ? attribute.expressionValue : attribute.value;
    String replacement = _formatAttribute(_containerId, block.id, block.instanceId, attribute.id, valToPass);
    return code.replaceAll(placeholder, replacement);
  }

}
