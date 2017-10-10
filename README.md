# Getting Started with NetTango Modeling 

* To create a NetTango workspace, start by downloading the [ntango.js](https://raw.githubusercontent.com/NetTango/NetTango/version_0.7/web/lib/ntango.js) library.

* You'll also need the NetTango stylesheet: [ntango.css](https://raw.githubusercontent.com/NetTango/NetTango/version_0.7/web/css/ntango.css).

* Then create a test HTML file in the same directory as the library file (you can copy this code):

```html
<!DOCTYPE html>
<html> 
<head> 
  <title>NetTango Example</title>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">   
  <link href="ntango.css" rel="stylesheet">
  <script src="ntango.js"></script>
</head>
<body>
  <div id="nt-container">
    <canvas id="nt-workspace" width="800" height="800" style="background: #e9e5cd;"></canvas>
  </div>

<script>

document.body.onload = function() {

  // STEP 1: Define the blocks in the workspace
  var workspaceDefinition = {
    "blocks" : [
      {
        "action" : "test block"
      }
    ]
  };


  // STEP 2: Initialize the workspace (with the canvasId and the list of blocks)
  NetTango.init("nt-workspace", workspaceDefinition);


  // STEP 3: Add a callback to catch program changed events
  NetTango.addProgramChangedCallback("nt-workspace", function(canvasId) {
    var code = NetTango.exportCode(canvasId, "NetLogo");
    console.log(code); 

    // send code to NetLogo Web here!
  });
}
</script>
</body>
</html>
```

* Load this file into a browser (Chrome or Firefox). If everything works, you should see a workspace with just one block available in the menu.

* The next step is to try a more full-fledged block definition object. Try replacing workspaceDefinition with this object:

```javascript

  var workspaceDefinition = {
    "blocks" : [
      {
        "action" : "wolf actions",
        "type" : "nlogo:procedure",
        "start" : true,
        "limit" : 1,
        "format" : "to wolf-actions",
        "blockColor" : "#b86f4c"
      },

      {
        "action" : "wolf setup",
        "type" : "nlogo:procedure",
        "start" : true,
        "limit" : 1,
        "format" : "to wolf-setup",
        "blockColor" : "#b86f4c"
      },

      {
        "action" : "create wolves",
        "limit" : 1,
        "format" : "create-wolves {0} [ set size {P0} set color {P1} ]",
        "params" : [
          { "type" : "range", "min" : 0, "max" : 50, "step" : 1, "default" : 20, "name" : "count" }
        ],
        "properties" : [
          { "type" : "range", "name" : "size", "min" : "0.2", "max" : "5", "step" : 0.1, "default" : 1 },
          { "type" : "select", "name" : "color", "values" : [ "black", "brown", "red", "green", "blue", "yellow" ] },
          { "type" : "select", "name" : "position", "values" : [ "random", "centered"] }
        ]
      },
    
      {
        "action" : "forward",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 3,
            "step" : 0.1,
            "default" : 1,
            "name" : "steps"
          }
        ]
      },

      {
        "action" : "left",
        "format" : "left random {0}",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 90,
            "step" : 1,
            "default" : 50,
            "random" : true,
            "name" : "amount",
            "unit" : "\u00B0"
          }
        ]
      },

      {
        "action" : "right",
        "format" : "right random {0}",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 90,
            "step" : 1,
            "default" : 50,
            "random" : true,
            "name" : "amount",
            "unit" : "\u00B0"
          }
        ]
      },

      { "action" : "hatch" },

      { "action" : "die" },

      {
        "action" : "decrease energy",
        "format" : "set energy energy - {0}",
        "params" : [ { "type" : "range", "min" : 0, "max" : 5, "step" : 0.5, "default" : 1, "name" : "amount" }]
      },

      {
        "action" : "increase energy",
        "format" : "set energy energy + {0}",
        "params" : [ { "type" : "range", "min" : 0, "max" : 50, "step" : 1, "default" : 10, "name" : "amount" }]
      },

      {
        "action" : "if energy depleted",
        "format" : "if energy < 0",
        "clauses" : [ ]
      },

      {
        "action" : "chance",
        "format" : "ifelse random 100 < {0}",
        "clauses" : [
          {
            "name" : "else",
            "action" : "chance-else",
            "format" : ""
          }
        ],
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 100,
            "step" : 0.5,
            "default" : 20,
            "unit" : "%",
            "name" : "percent"
          }
        ]
      }
    ]
  };

```