// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

class UnrestrictedTags extends ConcreteTags {
  ConcreteTags clone() {
    return this;
  }

  bool check(Iterable<Block> blocks) {
    return true;
  }
}
