// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { CodeWorkspace } from "../blocks/code-workspace"
import { CodeWorkspaceInput } from "../types/types"
import { ObjectUtils } from "../utils/object-utils"

function encodeWorkspace(workspace: CodeWorkspace): CodeWorkspaceInput {
  return ObjectUtils.clone(workspace.ws)
}

export { encodeWorkspace }
