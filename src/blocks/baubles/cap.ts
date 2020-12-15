// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class Cap {

  static draw(isTop: Boolean, block: Block): HTMLDivElement {
    const div = new HTMLDivElement()
    div.classList.add("nt-cap")
    const blockStyle = block.getStyleClass()
    const classes = [blockStyle, `${blockStyle}-color`]
    classes.forEach( (bs) => div.classList.add(bs) )

    Block.applyStyleOverrides(block, div)
    Block.maybeSetColorOverride(block.blockColor, div)

    if (isTop) {
      div.classList.add("nt-cap-top")
    } else {
      div.classList.add("nt-cap-bottom")
    }

    Block.wireDragEvents(block, div, (isOver) => block.isDragNotchOver = isOver)

    return div
  }

}
