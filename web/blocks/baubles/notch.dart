// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class Notch {

  static DivElement draw(bool isTop, Block block) {
    DivElement div = new DivElement();
    div.classes.add("nt-notch");
    final blockStyle = block.getStyleClass();
    div.classes.add(blockStyle);

    Block.applyStyleOverrides(block, div);

    if (isTop) {
      div.classes.add("nt-notch-top");
    } else {
      div.classes.add("nt-notch-bottom");
    }

    final colorClass = "$blockStyle-color";
    ["filler", "left", "middle", "right"].forEach( (notchClass) {
      final filler = new DivElement() .. classes.addAll(["nt-notch-$notchClass", colorClass]);
      if (!isTop || notchClass != "middle") {
        Block.maybeSetColorOverride(block.blockColor, filler);
      }
      div.append(filler);
    });

    Block.wireDragEvents(block, div, (isOver) => block.isDragNotchOver = isOver );

    return div;
  }

  static DivElement drawClause(bool isTop, Clause clause) {
    DivElement div = new DivElement();
    div.classes.add("nt-notch");
    final blockStyle = clause.owner.getStyleClass();
    div.classes.add(blockStyle);

    Block.applyStyleOverrides(clause.owner, div);

    if (isTop) {
      div.classes.add("nt-notch-top");
    } else {
      div.classes.add("nt-notch-bottom");
    }

    final colorClass = "$blockStyle-color";
    ["filler", "left", "middle", "right"].forEach( (notchClass) {
      final filler = new DivElement() .. classes.addAll(["nt-notch-$notchClass", colorClass]);
      if (!isTop || notchClass != "middle") {
        Block.maybeSetColorOverride(clause.owner.blockColor, filler);
      }
      div.append(filler);
    });

    if (!isTop) {
      final clauseFiller = new DivElement() .. className = "nt-notch-clause-filler";
      div.append(clauseFiller);
    }

    return div;
  }

}
