// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Arrow {

  static DivElement draw() {
    final arrow = new DivElement();
    arrow.innerText = "➔";
    arrow.classes.add("nt-arrow");
    return arrow;
  }

}
