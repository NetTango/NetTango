// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { QuoteOptions } from "./blocks/attributes/select-attribute"
import { BlockPlacement } from "./blocks/block"
import { ProgramChangedEvent } from "./blocks/program-changed-event"
import { AttributeTypes } from "./blocks/attributes/attribute"
import { CodeFormatter } from "./blocks/code-formatter"
import { CodeWorkspace } from "./blocks/code-workspace"
import { restoreWorkspace } from "./serialization/dartify"
import { encodeWorkspace } from "./serialization/jsonify"
import { VersionManager } from "./versions/version-manager"

type FormatAttributeType = (containerId: string, blockId: number, instanceId: number, attributeId: number, value: any, attributeType: AttributeTypes) => string

/**
 * NetTango functions can be used to create a blocks-based programming interface
 * associated with an HTML canvas.
 */
class NetTango {

  static blockPlacementOptions = BlockPlacement
  static selectQuoteOptions    = QuoteOptions

  private static readonly workspaces: Map<string, CodeWorkspace> = new Map()
  private static readonly callbacks: any = {}

  static relayCallback(canvasId: string, event: ProgramChangedEvent): void {
    if (canvasId in NetTango.callbacks) {
      NetTango.callbacks[canvasId](canvasId, event)
    }
  }

  /// Add a callback function to receive programChanged events from the
  /// workspace. Callback functions should take one parameter, which is
  /// the canvasId for the workspace (as a String).
  static onProgramChanged(canvasId: string, callback: () => void): void {
    NetTango.callbacks[canvasId] = callback
  }

  /// Exports the code for a workspace in a given target language.
  /// The only language supported now is "NetLogo".
  static exportCode(containerId: string, formatAttribute: FormatAttributeType | null): string {
    if (!NetTango.workspaces.has(containerId)) {
      throw new Error("Cannot find workspace for given container ID.")
    }
    return NetTango.workspaces.get(containerId)!.exportCode(formatAttribute)
  }

  static formatAttributeValue(containerId: string, instanceId: number, attributeId: number): string {
    if (!NetTango.workspaces.has(containerId)) {
      throw new Error(`Unknown container ID: ${containerId}`)
    }
    const workspace = NetTango.workspaces.get(containerId)!
    const block     = workspace.getBlockInstance(instanceId)
    const attribute = block.getAttribute(attributeId)
    return CodeFormatter.formatAttributeValue(attribute)
  }

  /// Exports the current state of the workspace as a JSON object to be
  /// restored at a later point.
  static save(containerId: string): any {
    if (!NetTango.workspaces.has(containerId)) {
      throw new Error(`Unknown container ID: ${containerId}`)
    }

    const definition = encodeWorkspace(NetTango.workspaces.get(containerId)!)
    return definition
  }

  /// Call `restore` to instantiate a workspace associated with an HTML canvas.
  /// TODO: Document JSON specification format--for now see README.md
  static restore(language: "NetLogo", containerId: string, definition: any, formatAttribute: FormatAttributeType): void {
    VersionManager.updateWorkspace(definition)

    const formatter = new CodeFormatter(language, formatAttribute, containerId)

    try {
      if (NetTango.workspaces.has(containerId)) {
        NetTango.workspaces.get(containerId)!.removeEventListeners()
      }
      const workspace = restoreWorkspace(containerId, definition, formatter)
      NetTango.workspaces.set(containerId, workspace)
      workspace.draw()
    } catch (e) {
      console.log(e)
      throw new Error("There was an error initializing the workspace with the given NetTango model JSON.")
    }

  }

}

if (window !== undefined && window !== null && !window.hasOwnProperty("NetTango")) {
  const w: any = window
  w["NetTango"] = NetTango
}

export { FormatAttributeType, NetTango }
