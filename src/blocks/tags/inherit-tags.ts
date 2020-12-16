// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

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
    switch (clause.owner.dragData.parentType) {

      case "workspace-chain":
        if (clause.owner.dragData.chainIndex === null) {
          throw new Error("No chain index for a workspace chain block?")
        }
        const first = clause.owner.workspace.chains[clause.owner.dragData.chainIndex].blocks[0]
        return first.canBeStarter ? first.allowedTags : null

      case "block-clause":
        if (clause.owner.dragData.parentInstanceId === null || clause.owner.dragData.clauseIndex === null) {
          throw new Error("No parent block ID or clause index for a clause block?")
        }
        const ownerClause = clause.owner.workspace.getBlockInstance(clause.owner.dragData.parentInstanceId).clauses[clause.owner.dragData.clauseIndex]
        if (ownerClause.allowedTags instanceof InheritTags) {
          return InheritTags.getConcreteTags(ownerClause)
        }
        return (ownerClause.allowedTags as ConcreteTags)

      // I guess a new block is a fragment?  But we shouldn't be calling this, really.
      case "new-block":
        return null

      default:
        throw new Error(`Unknown block parent type: ${clause.owner.dragData.parentType}`)

    }
  }

}
