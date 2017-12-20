/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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

/**
 * NetTango functions can be used to create a blocks-based programming interface
 * associated with an HTML canvas. 
 */
var NetTango = {


  /// Call init to instantiate a workspace associated with an HTML canvas. 
  /// TODO: Document JSON specification format--for now see README.md
  init : function(canvasId, json) {
    NetTango_InitWorkspace(canvasId, JSON.stringify(json));
  },


  /// Add a callback function to receive programChanged events from the 
  /// workspace. Callback functions should take one parameter, which is 
  /// the canvasId for the workspace (as a String).
  onProgramChanged : function(canvasId, callback) {
    NetTango._callbacks[canvasId] = callback;
  },


  /// Exports the code for a workspace in a given target language. 
  /// The only language supported now is "NetLogo".
  exportCode : function(canvasId, language) {
    return NetTango_ExportCode(canvasId, language);
  },


  /// Exports the current state of the workspace as a JSON object to be 
  /// restored at a later point.
  save : function(canvasId) {
    return NetTango_Save(canvasId);
  },


  /// Restores a workspace to a previously saved state (json object). 
  /// Note, for now this is just an alias of the NetTango.init function.
  restore : function(canvasId, json) {
    NetTango_InitWorkspace(canvasId, JSON.stringify(json));
  },


  _relayCallback : function(canvasId) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId);
    }
  },

  _callbacks : { }
}