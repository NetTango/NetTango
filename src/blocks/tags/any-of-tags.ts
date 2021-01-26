// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { BoolUtils } from "../../utils/bool-utils"
import { ListUtils } from "../../utils/list-utils"
import { Block } from "../block"
import { ConcreteTags } from "./concrete-tags"
import { InheritTags } from "./inherit-tags"

// For now we're just doing this basic AnyOf implementation, but we could split this out into
// a few different subclasses with AllOf, NotOneOf, NotAllOf, etc, or even a fancier full-blown
// logic operator version.  -Jeremy B August 2020
class AnyOfTags extends ConcreteTags {
  readonly tags: string[] = []

  constructor(tags: string[]) {
    super()
    this.tags.push(...tags)
  }

  clone(): ConcreteTags {
    return new AnyOfTags(this.tags)
  }

  check(blocks: Block[]): boolean {
    const areBlocksAllowed = blocks.map( (b) => this.checkBlock(b) )
    return BoolUtils.allAreTrue( areBlocksAllowed )
  }

  checkBlock(block: Block): boolean {
    if (!ListUtils.containsAny(this.tags, block.tags)) {
      return false
    }
    if (block.clauses.length === 0) {
      return true
    }
    const areClausesAllowed = block.clauses.map( (clause) => {
      if ((clause.allowedTags instanceof InheritTags) || clause.blocks.length === 0) {
        return true
      }
      return this.check(clause.blocks)
    })
    return BoolUtils.allAreTrue(areClausesAllowed)
  }
}

export { AnyOfTags }
