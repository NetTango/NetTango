// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Clause } from "../clause"
import { DragManager } from "./drag-manager"

class ClauseAcceptor {

  readonly clause: Clause

  constructor(clause: Clause) {
    this.clause = clause
  }

  checker(dropped: boolean): boolean {
    const dragManager = DragManager.getCurrent()
    return dropped && !dragManager.wasHandled && ClauseAcceptor.isLandingSpot(this.clause)
  }

  static isLandingSpot(clause: Clause): boolean {
    const dragManager = DragManager.getCurrent()
    return (
      clause.owner.workspace.containerId === dragManager.workspace.containerId &&
      dragManager.canBeChild &&
      dragManager.draggingBlocks !== null &&
      clause.allowedTags.check(dragManager.draggingBlocks) &&
      (clause.blocks.length === 0 || dragManager.isInsertable)
    )
  }

}

export { ClauseAcceptor }
