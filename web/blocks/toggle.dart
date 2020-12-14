// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Toggle {
  DivElement div;

  String onGlyph = "\u25B2";
  String offGlyph = "\u25BC";
  bool isOn;
  Function onChange;

  Toggle(bool this.isOn, Function this.onChange) {
    div = new DivElement();
    div.classes.add("nt-toggle");
    div.innerText = isOn ? onGlyph : offGlyph;
    div.onClick.listen(click);
  }

  void click(MouseEvent event) {
    event.stopPropagation();
    toggle();
  }

  void toggle() {
    isOn = !isOn;
    div.innerText = isOn ? onGlyph : offGlyph;
    onChange(isOn);
  }
}
