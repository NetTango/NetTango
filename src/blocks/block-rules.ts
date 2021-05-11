// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { BlockDefinitionInput } from "../types/types"
import { BlockPlacement } from "./block-placement"

class BlockRules {

  static canBeChild(b: BlockDefinitionInput): boolean {
    return [BlockPlacement.CHILD, BlockPlacement.ANYWHERE].includes(b.placement)
  }

  static canBeStarter(b: BlockDefinitionInput): boolean {
    return [BlockPlacement.STARTER, BlockPlacement.ANYWHERE].includes(b.placement)
  }

  static hasClauses(b: BlockDefinitionInput): boolean {
    return b.clauses.length > 0
  }

  static maybeSetColorOverride(backgroundColor: string | null, div: HTMLDivElement): void {
    if (backgroundColor !== null) { div.style.backgroundColor = backgroundColor }
  }

  static applyStyleOverrides(block: BlockDefinitionInput, div: HTMLDivElement): void {
    if (block.borderColor !== null) { div.style.borderColor = block.borderColor; }
    if (block.textColor !== null)   { div.style.color       = block.textColor; }
    if (block.font !== null) {
      // lineHeight gets reset by the `font` property
      const lineHeight     = div.style.lineHeight
      div.style.font       = block.font
      div.style.lineHeight = lineHeight
    }
  }

}

export { BlockRules }
