// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { ConcreteTags } from "./concrete-tags"

class UnrestrictedTags extends ConcreteTags {
  clone(): ConcreteTags {
    return this
  }

  check(blocks: Block[]): boolean {
    return true
  }
}

export { UnrestrictedTags }