// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { Clause } from "../clause"

class Notch {

  static draw(isTop: boolean, block: Block): HTMLDivElement {

    const div = new HTMLDivElement()
    div.classList.add("nt-notch")
    const blockStyle = block.getStyleClass()
    div.classList.add(blockStyle)

    Block.applyStyleOverrides(block, div)

    if (isTop) {
      div.classList.add("nt-notch-top")
    } else {
      div.classList.add("nt-notch-bottom")
    }

    const colorClass = `${blockStyle}-color`
    const posClasses = ["filler", "left", "middle", "right"]
    posClasses.forEach( (notchClass) => {
      const filler = new HTMLDivElement()
      const notchClasses = [`nt-notch-${notchClass}`, colorClass]
      notchClasses.forEach( (cl) => filler.classList.add(cl) )
      if (!isTop || notchClass !== "middle") {
        Block.maybeSetColorOverride(block.blockColor, filler)
      }
      div.append(filler)
    })

    Block.wireDragEvents(block, div, (isOver) => block.isDragNotchOver = isOver )

    return div
  }

  static drawClause(isTop: boolean, clause: Clause): HTMLDivElement {
    const div = new HTMLDivElement()
    div.classList.add("nt-notch")
    const blockStyle = clause.owner.getStyleClass()
    div.classList.add(blockStyle)

    Block.applyStyleOverrides(clause.owner, div)

    if (isTop) {
      div.classList.add("nt-notch-top")
    } else {
      div.classList.add("nt-notch-bottom")
    }

    const colorClass = `${blockStyle}-color`
    const posClasses = ["filler", "left", "middle", "right"]
    posClasses.forEach( (notchClass) => {
      const filler = new HTMLDivElement()
      const notchClasses = [`nt-notch-${notchClass}`, colorClass]
      notchClasses.forEach( (cl) => filler.classList.add(cl) )
      if (!isTop || notchClass !== "middle") {
        Block.maybeSetColorOverride(clause.owner.blockColor, filler)
      }
      div.append(filler)
    });

    if (!isTop) {
      const clauseFiller = new HTMLDivElement()
      clauseFiller.className = "nt-notch-clause-filler"
      div.append(clauseFiller)
    }

    return div
  }

}

export { Notch }
