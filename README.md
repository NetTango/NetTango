The NetTango project has moved to the NetLogo organization:  https://github.com/NetLogo/NetTango

No further updates will be made to this repository.

# Getting Started with NetTango Modeling

NetTango is published as a package on [the npm package directory](https://www.npmjs.com/package/nettango).  You can include it as a regular JavaScript dependency if your project uses a `package.json` file with the `npm` or `yarn` tools:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "nettango": "0.11.1"
  }
}
```

To create a NetTango workspace, you will need to include the `nettango.js` file in your project, as well as the `nettango.css` file for styling.

A basic HTML example might them look like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>NetTango Example</title>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
  <link href="nettango.css" rel="stylesheet">
  <script src="nettango.js"></script>
</head>
<body>
  <div id="nt-containerish">
    <canvas id="nt-workspace" width="800" height="600" style="background: #fef9f6;"></canvas>
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
  NetTango.restore("nt-workspace", workspaceDefinition);

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

Load this file into a web browser (Chrome, Firefox, or Safari). If everything works, you should see a workspace with just one block available in the menu.

The next step is to try a more full-fledged block definition object. Try replacing workspaceDefinition with this object:

```js
  var workspaceDefinition = {
    "blocks" : [
      {
        "action" : "\uD83D\uDC3A   wolf actions ",
        "type" : "nlogo:procedure",
        "start" : true,
        "limit" : 1,
        "format" : "to wolf-actions",
        "blockColor" : "#b55",
        "required" : true
      },

      {
        "action" : "\uD83D\uDC3A   forward",
        "format" : "forward {0}",
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
        "action" : "\uD83D\uDC3A   left",
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
        "action" : "\uD83D\uDC3A   right",
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

      {
        "action" : "\uD83D\uDC3A   change energy",
        "format" : "set energy energy + {0}",
        "params" : [ { "type" : "range", "min" : -20, "max" : 20, "step" : 0.5, "default" : 1, "name" : "amount" }]
      },

      {
        "action" : "\uD83D\uDC3A   hatch",
        "format" : "hatch 1",
        "blockColor" : "#916da0",
        "params" : [
          { "type" : "int", "min" : 1, "name" : "child count", "default" : 1 }
        ]
      },

      {
        "action" : "die",
        "blockColor" : "#916da0",
      },

      {
        "action" : "\uD83D\uDC3A   if energy <= 0?",
        "format" : "if energy <= 0",
        "blockColor" : "#89a",
        "clauses" : [ ]
      },

      {
        "action" : "\uD83D\uDC11   if sheep-here?",
        "format" : "if any? sheep-here",
        "blockColor" : "#89a",
        "clauses" : [ ]
      },

      {
        "action" : "\uD83D\uDC11   ask sheep-here",
        "blockColor" : "#89a",
        "format" : "ask sheep-here",
        "clauses" : [ ]
      },

      {
        "action" : "chance",
        "blockColor" : "#89a",
        "format" : "if random 100 < {0}",
        "clauses" : [ ],
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
