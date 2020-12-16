// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class UnrestrictedTags extends ConcreteTags {
  clone(): ConcreteTags {
    return this
  }

  check(blocks: Block[]): boolean {
    return true
  }
}
