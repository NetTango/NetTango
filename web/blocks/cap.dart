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

class Cap {

  static DivElement draw(bool isTop, Block block) {
    DivElement div = new DivElement();
    div.classes.add("nt-cap");
    final blockStyle = block.getStyleClass();
    div.classes.addAll([blockStyle, "$blockStyle-color"]);

    Block.applyStyleOverrides(block, div);

    if (isTop) {
      div.classes.add("nt-cap-top");
    } else {
      div.classes.add("nt-cap-bottom");
    }

    Block.wireDragEvents(block, div, (isOver) => block.isDragNotchOver = isOver);

    return div;
  }

}
