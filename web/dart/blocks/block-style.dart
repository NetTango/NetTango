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

class BlockStyle {
  static final String DEFAULT_STARTER_COLOR   = "#bb5555";
  static final String DEFAULT_CONTAINER_COLOR = "#8899aa";
  static final String DEFAULT_COMMAND_COLOR   = "#9977aa";
  static final String DEFAULT_TEXT_COLOR      = "#ffffff";
  static final String DEFAULT_BORDER_COLOR    = "#ffffff";
  static final String DEFAULT_FONT_FAMILY     = "Poppins, sans-serif";

  static BlockStyle DEFAULT_STARTER_STYLE   = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_STARTER_COLOR;
  static BlockStyle DEFAULT_CONTAINER_STYLE = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_CONTAINER_COLOR;
  static BlockStyle DEFAULT_COMMAND_STYLE   = new BlockStyle() .. blockColor = BlockStyle.DEFAULT_COMMAND_COLOR;

  String blockColor  = DEFAULT_COMMAND_COLOR;
  String textColor   = DEFAULT_TEXT_COLOR;
  String borderColor = DEFAULT_BORDER_COLOR;
  String fontWeight  = "";
  String fontSize    = "";
  String fontFace    = "";

  String get font {
    final weight = fontWeight == "" ? "" : "font-weight: $fontWeight;";
    final size   = fontSize   == "" ? "" : "font-size: $fontSize;";
    final face = "font-family: ${ fontFace == "" ? DEFAULT_FONT_FAMILY : fontFace };";
    return "$weight $size $face".trim();
  }

  String get cssRule =>
    "color: $textColor; border-color: $borderColor; $font".trim();

  appendToSheet(CssStyleSheet sheet, String blockClass) {
    sheet.insertRule(".$blockClass-color { background-color: $blockColor; }", 0);
    sheet.insertRule(".$blockClass-attribute { color: $blockColor; }", 0);
    sheet.insertRule(".$blockClass { $cssRule }", 0);
  }

}
