// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

// For now we're just doing this basic AnyOf implementation, but we could split this out into
// a few different subclasses with AllOf, NotOneOf, NotAllOf, etc, or even a fancier full-blown
// logic operator version.  -Jeremy B August 2020
class AnyOfTags extends ConcreteTags {
  final List<String> tags = new List<String>();

  AnyOfTags(Iterable<String> tags) {
    this.tags.addAll(tags);
  }

  ConcreteTags clone() {
    return new AnyOfTags(this.tags);
  }

  bool check(Iterable<Block> blocks) {
    final areBlocksAllowed = blocks.map(checkBlock);
    return BoolUtils.allAreTrue( areBlocksAllowed );
  }

  bool checkBlock(Block block) {
    if (!ListUtils.containsAny(this.tags, block.tags)) {
      return false;
    }
    if (block.clauses.isEmpty) {
      return true;
    }
    final areClausesAllowed = block.clauses.map( (clause) {
      if (clause.allowedTags is! InheritTags || clause.blocks.isEmpty) {
        return true;
      }
      return this.check(clause.blocks);
    });
    return BoolUtils.allAreTrue( areClausesAllowed );
  }
}
