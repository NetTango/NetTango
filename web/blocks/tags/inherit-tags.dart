/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

part of NetTango;

class InheritTags extends AllowedTags {
  Clause clause;

  InheritTags(Clause clause) {
    this.clause = clause;
  }

  AllowedTags clone(Clause newClause) {
    return new InheritTags(newClause);
  }

  bool check(Iterable<Block> blocks) {
    final parent = InheritTags.getConcreteTags(this.clause);
    if (parent == null) {
      // no restrictions at the moment
      return true;
    }
    return parent.check(blocks);
  }

  static ConcreteTags getConcreteTags(Clause clause) {
    switch (clause.owner.dragData.parentType) {

      case "workspace-chain":
        final first = clause.owner.workspace.chains[clause.owner.dragData.chainIndex].blocks.first;
        return first.canBeStarter ? first.allowedTags : null;

      case "block-clause":
        final ownerClause = clause.owner.workspace.getBlockInstance(clause.owner.dragData.parentInstanceId).clauses[clause.owner.dragData.clauseIndex];
        if (ownerClause.allowedTags is InheritTags) {
          return InheritTags.getConcreteTags(ownerClause);
        }
        return ownerClause.allowedTags;

      // I guess a new block is a fragment?  But we shouldn't be calling this, really.
      case "new-block":
        return null;

      default:
        throw new Exception("Unknown block parent type: ${clause.owner.dragData.parentType}");

    }
  }

}
