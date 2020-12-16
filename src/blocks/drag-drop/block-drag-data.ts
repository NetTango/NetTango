// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class BlockDragData {
  chainIndex: number | null = null
  parentType: "new-block" | "workspace-chain" | "block-clause" | null = null
  parentInstanceId: number | null = null
  clauseIndex: number | null = null
  blockIndex: number | null = null
  slotIndex: number | null = null
  newInstance: Block | null = null
  siblings: Block[] = []

  get isLastInCollection(): boolean {
    switch (this.parentType) {

      case "new-block":
        return true

      case "workspace-chain":
      case "block-clause":
        return this.siblings.length === 0

      default:
        throw new Error(`Unknown block removal type: ${this.parentType}`)

    }
  }

  reset(): void {
    this.chainIndex       = null
    this.parentType       = null
    this.parentInstanceId = null
    this.clauseIndex      = null
    this.blockIndex       = null
    this.slotIndex        = null
    this.newInstance      = null
    this.siblings         = []
  }

  static newBlock(newInstance: Block, index: number): BlockDragData {
    const dragData = new BlockDragData()
    dragData.parentType  = "new-block"
    dragData.slotIndex   = index
    dragData.newInstance = newInstance
    return dragData
  }

  resetWorkspaceChain(chainIndex: number, blockIndex: number, siblings: Block[]): void {
    this.reset()
    this.chainIndex = chainIndex
    this.parentType = "workspace-chain"
    this.blockIndex = blockIndex
    this.siblings   = siblings
  }

  static workspaceChain(chainIndex: number, blockIndex: number, siblings: Block[]): BlockDragData {
    const dragData = new BlockDragData()
    dragData.resetWorkspaceChain(chainIndex, blockIndex, siblings)
    return dragData
  }

  resetBlockOwned(chainIndex: number, blockIndex: number, parentInstanceId: number, siblings: Block[], clauseIndex: number): void {
    this.reset()
    this.chainIndex       = chainIndex
    this.parentType       = "block-clause"
    this.parentInstanceId = parentInstanceId
    this.blockIndex       = blockIndex
    this.clauseIndex      = clauseIndex
    this.siblings         = siblings
  }

  static blockOwned(chainIndex: number, blockIndex: number, parentInstanceId: number, siblings: Block[], clauseIndex: number): BlockDragData {
    const dragData = new BlockDragData()
    dragData.resetBlockOwned(chainIndex, blockIndex, parentInstanceId, siblings, clauseIndex)
    return dragData
  }
}
