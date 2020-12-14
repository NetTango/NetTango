// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Cap {

  static DivElement draw(bool isTop, Block block) {
    DivElement div = new DivElement();
    div.classes.add("nt-cap");
    final blockStyle = block.getStyleClass();
    div.classes.addAll([blockStyle, "$blockStyle-color"]);

    Block.applyStyleOverrides(block, div);
    Block.maybeSetColorOverride(block.blockColor, div);

    if (isTop) {
      div.classes.add("nt-cap-top");
    } else {
      div.classes.add("nt-cap-bottom");
    }

    Block.wireDragEvents(block, div, (isOver) => block.isDragNotchOver = isOver);

    return div;
  }

}
