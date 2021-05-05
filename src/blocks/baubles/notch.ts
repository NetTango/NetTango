// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { BlockRules } from "../block-rules"
import { Clause } from "../clause"

class Notch {

  static draw(isTop: boolean, block: Block): HTMLDivElement {

    const div = document.createElement("div")
    div.classList.add("nt-notch")
    const blockStyle = block.getStyleClass()
    div.classList.add(blockStyle)

    BlockRules.applyStyleOverrides(block.b, div)

    if (isTop) {
      div.classList.add("nt-notch-top")
    } else {
      div.classList.add("nt-notch-bottom")
    }

    const colorClass = `${blockStyle}-color`
    const posClasses = ["filler", "left", "middle", "right"]
    posClasses.forEach( (notchClass) => {
      const filler = document.createElement("div")
      const notchClasses = [`nt-notch-${notchClass}`, colorClass]
      notchClasses.forEach( (cl) => filler.classList.add(cl) )
      if (!isTop || notchClass !== "middle") {
        BlockRules.maybeSetColorOverride(block.b.blockColor, filler)
      }
      div.append(filler)
    })

    Block.wireDragEvents(block, div)

    return div
  }

  static drawClause(isTop: boolean, clause: Clause): HTMLDivElement {
    const div = document.createElement("div")
    div.classList.add("nt-notch")
    const blockStyle = clause.owner.getStyleClass()
    div.classList.add(blockStyle)

    BlockRules.applyStyleOverrides(clause.owner.b, div)

    if (isTop) {
      div.classList.add("nt-notch-top")
    } else {
      div.classList.add("nt-notch-bottom")
    }

    const colorClass = `${blockStyle}-color`
    const posClasses = ["filler", "left", "middle", "right"]
    posClasses.forEach( (notchClass) => {
      const filler = document.createElement("div")
      const notchClasses = [`nt-notch-${notchClass}`, colorClass]
      notchClasses.forEach( (cl) => filler.classList.add(cl) )
      if (!isTop || notchClass !== "middle") {
        BlockRules.maybeSetColorOverride(clause.owner.b.blockColor, filler)
      }
      div.append(filler)
    });

    if (!isTop) {
      const clauseFiller = document.createElement("div")
      clauseFiller.className = "nt-notch-clause-filler"
      div.append(clauseFiller)
    }

    return div
  }

}

export { Notch }
