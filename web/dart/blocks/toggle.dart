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

class Toggle {
  DivElement div;

  String onGlyph = "\u25B2";
  String offGlyph = "\u25BC";
  bool isOn;
  Function onChange;

  Toggle(Function this.onChange) {
    isOn = true;

    div = new DivElement();
    div.classes.add("nt-toggle");
    div.innerText = onGlyph;

    div.onClick.listen( click );
  }

  void click(MouseEvent event) {
    event.stopPropagation();
    toggle();
  }

  void toggle() {
    isOn = !isOn;
    if (isOn) {
      div.innerText = onGlyph;
    } else {
      div.innerText = offGlyph;
    }
    onChange(isOn);
  }
}
