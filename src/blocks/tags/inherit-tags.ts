// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { Clause } from "../clause"
import { ChainDragData } from "../drag-drop/drag-data/chain-drag-data"
import { ClauseDragData } from "../drag-drop/drag-data/clause-drag-data"
import { NewDragData } from "../drag-drop/drag-data/new-drag-data"
import { AllowedTags } from "./allowed-tags"
import { ConcreteTags } from "./concrete-tags"

class InheritTags extends AllowedTags {
  readonly clause: Clause

  constructor(clause: Clause) {
    super()
    this.clause = clause
  }

  clone(newClause: Clause): AllowedTags {
    return new InheritTags(newClause)
  }

  check(blocks: Block[]): boolean {
    const parent = InheritTags.getConcreteTags(this.clause)
    if (parent === null) {
      // no restrictions at the moment
      return true
    }
    return parent.check(blocks)
  }

  static getConcreteTags(clause: Clause): ConcreteTags | null {
    if (clause.owner.dragData === null) {
      throw new Error("No drag data to use for tags")
    }

    const data = clause.owner.dragData
    if (data instanceof ChainDragData) {
      const first = clause.owner.workspace.chains[data.chainIndex].blocks[0]
      return first.canBeStarter ? first.allowedTags : null
    }

    if (data instanceof ClauseDragData) {
      const ownerClause = clause.owner.workspace.getBlockInstance(data.parentInstanceId).clauses[data.clauseIndex]
      if (ownerClause.allowedTags instanceof InheritTags) {
        return InheritTags.getConcreteTags(ownerClause)
      }
      return (ownerClause.allowedTags as ConcreteTags)
    }

    // I guess a new block is a fragment?  But we shouldn't be calling this, really.
    if (data instanceof NewDragData) {
      return null
    }

    throw new Error(`Unknown block drag data type: ${clause.owner.dragData}`)
  }

}

export { InheritTags }
