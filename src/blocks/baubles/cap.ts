// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"

class Cap {

  static draw(isTop: Boolean, block: Block): HTMLDivElement {
    const div = document.createElement("div")
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

    Block.wireDragEvents(block, div)

    return div
  }

}

export { Cap }
