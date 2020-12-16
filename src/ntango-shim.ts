// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

/**
 * NetTango functions can be used to create a blocks-based programming interface
 * associated with an HTML canvas.
 */
class NetTango {

  blockPlacementOptions = BlockPlacement
  selectQuoteOptions    = QuoteOptions

  /// Call init to instantiate a workspace associated with an HTML canvas.
  /// TODO: Document JSON specification format--for now see README.md
  static init(language: "NetLogo", canvasId: string, json: any, formatAttributeJS: () => string): void {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttributeJS)
  }

  /// Add a callback function to receive programChanged events from the
  /// workspace. Callback functions should take one parameter, which is
  /// the canvasId for the workspace (as a String).
  static onProgramChanged(canvasId: string, callback: () => void): void {
    NetTango._callbacks[canvasId] = callback
  }

  /// Exports the code for a workspace in a given target language.
  /// The only language supported now is "NetLogo".
  static exportCode(canvasId: string, formatAttributeJS: FormatAttributeType): string {
    return NetTango_ExportCode(canvasId, formatAttributeJS)
  }

  static formatAttributeValue(canvasId: string, instanceId: number, attributeId: number): string {
    return NetTango_FormatAttributeValue(canvasId, instanceId, attributeId)
  }

  /// Exports the current state of the workspace as a JSON object to be
  /// restored at a later point.
  static save(canvasId: string): string {
    return JSON.parse(NetTango_Save(canvasId))
  }

  /// Exports the state of all workspaces as a JSON object to be restored
  /// at a later point.
  static saveAll(): string {
    return JSON.parse(NetTango_SaveAll())
  }

  /// Restores a workspace to a previously saved state (json object).
  /// Note, for now this is just an alias of the NetTango.init function.
  static restore(language: string, canvasId: string, json: any, formatAttribute: () => string): void {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttribute)
  }

  /// Restores all workspaces from a previously saved state.
  static restoreAll(language: string, json: any, formatAttribute: () => string): void {
    NetTango_InitAllWorkspaces(language, JSON.stringify(json), formatAttribute)
  }

  static _relayCallback(canvasId: string, event: ProgramChangedEvent): void {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId, event)
    }
  }

  static _callbacks: any = {}
}
