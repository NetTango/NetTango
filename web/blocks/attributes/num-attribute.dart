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
/// Represents a number parameter
//-------------------------------------------------------------------------
class NumAttribute extends Attribute {

  num _value = null;

  /// represents a random number?
  bool random = null;

  /// step interval for selections (for numbers and range)
  num stepSize = 1;

  NumAttribute(Block block, int id) : super(block, id);

  NumAttribute.clone(Block block, NumAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock) {
    this.random = source.random;
    this.stepSize = source.stepSize;
  }

  // just so we can clone without knowing the type
  Attribute clone(Block block, bool isSlotBlock) {
    return NumAttribute.clone(block, this, isSlotBlock);
  }

  num get value => _value;
  set value(dynamic v) => _value = toNum(v, 0.0);

  String get displayValue {
    String s = (_value != null ? _value : 0).toStringAsFixed(1);
    s = (s.endsWith('.0')) ? s.substring(0, s.length - 2) : s;
    return "$s$unit";
  }

  String _buildHTMLInput() {
    return """
      <div class="nt-param-name">${name}</div>
      <div class="nt-param-value">
        <input class="nt-param-input" id="nt-param-${uniqueId}" type="number" step="${stepSize}" value="${value}">
        <span class="nt-param-unit">${unit}</span>
      </div>
    """;
  }
}
