// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { CodeFormatter } from "../blocks/code-formatter"
import { CodeWorkspace } from "../blocks/code-workspace"
import { CodeWorkspaceInput } from "../types/types"
import { VersionManager } from "../versions/version-manager"

function restoreWorkspace(containerId: string, workspaceEnc: CodeWorkspaceInput, formatter: CodeFormatter): CodeWorkspace {
  if (workspaceEnc["version"] !== VersionManager.VERSION) {
    throw new Error(`The supported NetTango version is ${VersionManager.VERSION}, but the given definition version was ${workspaceEnc["version"]}.`)
  }

  const workspace = new CodeWorkspace(workspaceEnc, containerId, formatter)

  return workspace
}

export { restoreWorkspace }
