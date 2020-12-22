// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { AttributeTypes } from "./blocks/attributes/attribute"
import { CodeFormatter } from "./blocks/code-formatter"
import { CodeWorkspace } from "./blocks/code-workspace"
import { restoreWorkspace } from "./serialization/dartify"
import { encodeWorkspace } from "./serialization/jsonify"
import { VersionManager } from "./versions/version-manager"

const _workspaces: Map<string, CodeWorkspace> = new Map()

type FormatAttributeType = (containerId: string, blockId: number, instanceId: number, attributeId: number, value: any, attributeType: AttributeTypes) => string

function GetWorkspace(containerId: string): CodeWorkspace {
  const workspace = _workspaces.get(containerId)
  if (workspace === undefined) {
    throw new Error("Could not find workspace.")
  }
  return workspace
}

function _initializeJS(language: string, formatAttributeJS: FormatAttributeType, containerId: string, definition: any): void {
  const formatAttribute = (containerId: string, blockId: number, instanceId: number, attributeId: number, value: any, attributeType: AttributeTypes) => {
    if (formatAttributeJS === null) {
      return (value.toString() as string)
    } else {
      return formatAttributeJS(containerId, blockId, instanceId, attributeId, value, attributeType)
    }
  }

  _initialize(language, formatAttribute, containerId, definition)
}

function _initialize(language: string, formatAttribute: FormatAttributeType, containerId: string, definition: any) {
  VersionManager.updateWorkspace(definition)

  const formatter = new CodeFormatter(language, formatAttribute, containerId)

  try {
    if (_workspaces.has(containerId)) {
      _workspaces.get(containerId)!.removeEventListeners()
    }
    const workspace = restoreWorkspace(containerId, definition, formatter)
    _workspaces.set(containerId, workspace)
    workspace.draw()
  } catch (e) {
    throw new Error("There was an error initializing the workspace with the given NetTango model JSON.")
  }
}

/// Javascript hook to initialize a workspace
function JSInitWorkspaceJS(language: string, containerId: string, jsonString: string, formatAttributeJS: FormatAttributeType): void {
  if (_workspaces.has(containerId)) {
    _workspaces.get(containerId)!.unload()
  }
  const pojo = JSON.parse(jsonString)
  _initializeJS(language, formatAttributeJS, containerId, pojo)
}

function JSInitWorkspace(language: string, containerId: string, pojo: any, formatAttribute: FormatAttributeType): void {
  if (_workspaces.has(containerId)) {
    _workspaces.get(containerId)!.unload()
  }
  _initialize(language, formatAttribute, containerId, pojo)
}

/// Javascript hook to initialize all workspaces based on containerId names
function JSInitAllWorkspacesJS(language: string, jsonString: string, formatAttributeJS: FormatAttributeType): void {
  const pojo = JSON.parse(jsonString)
  for (var key in pojo) {
    JSInitWorkspaceJS(language, key, jsonString, formatAttributeJS)
  }
}

/// Javascript hook to export code from a workspace
function JSExportCode(containerId: string, formatAttributeJS: FormatAttributeType | null): string {
  if (!_workspaces.has(containerId)) {
    throw new Error("Cannot find workspace for given container ID.")
  }
  return _workspaces.get(containerId)!.exportCode(formatAttributeJS)
}

function JSFormatAttributeValue(containerId: string, instanceId: number, attributeId: number) {
  if (!_workspaces.has(containerId)) {
    throw new Error(`Unknown container ID: ${containerId}`)
  }
  const workspace = _workspaces.get(containerId)!
  const block     = workspace.getBlockInstance(instanceId)
  const attribute = block.getAttribute(attributeId)
  return CodeFormatter.formatAttributeValue(attribute)
}

/// Javascript hook to export the entire state of a workspace
function JSSaveWorkspace(containerId: string): string {
  if (_workspaces.has(containerId)) {
    const definition = encodeWorkspace(_workspaces.get(containerId)!)
    return JSON.stringify(definition)
  } else {
    return "{}"
  }
}

/// Javascript hook to export all workspaces
function JSSaveAllWorkspaces(): string {
  const definitions: any = {}
  for (var containerId in _workspaces.keys) {
    const definition = encodeWorkspace(_workspaces.get(containerId)!)
    definitions[containerId] = definition;
  }
  return JSON.stringify(definitions)
}

/// Expose core API functions to Javascript
const NetTango_InitWorkspace = JSInitWorkspaceJS
const NetTango_InitAllWorkspaces = JSInitAllWorkspacesJS
const NetTango_ExportCode = JSExportCode
const NetTango_FormatAttributeValue = JSFormatAttributeValue
const NetTango_Save = JSSaveWorkspace
const NetTango_SaveAll = JSSaveAllWorkspaces

export {
    FormatAttributeType
  , NetTango_InitWorkspace
  , NetTango_InitAllWorkspaces
  , NetTango_ExportCode
  , NetTango_FormatAttributeValue
  , NetTango_Save
  , NetTango_SaveAll
}
