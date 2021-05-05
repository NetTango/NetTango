// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { ConcreteTags } from "../../types/types";
import { Block } from "../block";
import { BoolUtils } from "../../utils/bool-utils"
import { ListUtils } from "../../utils/list-utils"

function checkConcreteTags(tags: ConcreteTags, blocks: Block[]): boolean {
  if (tags.type === "unrestricted") {
    return true
  }
  return checkAnyOfTags(tags.tags, blocks)
}

function checkAnyOfTags(tags: string[], blocks: Block[]): boolean {
  const areBlocksAllowed = blocks.map( (b) => checkBlock(tags, b) )
  return BoolUtils.allAreTrue(areBlocksAllowed)
}

function checkBlock(tags: string[], block: Block): boolean {
  if (!ListUtils.containsAny(tags, block.b.tags)) {
    return false
  }
  if (block.clauses.length === 0) {
    return true
  }
  const areClausesAllowed = block.clauses.map( (clause) => {
    if ((clause.c.allowedTags.type === "any-of") || clause.blocks.length === 0) {
      return true
    }
    return checkAnyOfTags(tags, clause.blocks)
  })
  return BoolUtils.allAreTrue(areClausesAllowed)
}


export { checkConcreteTags, checkAnyOfTags }
