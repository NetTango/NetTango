# Getting Started with NetTango Modeling 

###What You'll Need to Get Started
* Dart Programming Language (http://dartlang.org/downloads)

Start by creating a project directory for your NetTango model. In this example, we'll explore a Gas Law model, so we'll use the name `GasLaw` for the top-level directory. Then create empty files and a directory structure that looks like this:
    
    GasLaw/
        pubspec.yaml
        web/
            css/
            dart/
            images/
            index.html

Next we'll set up the `pubspec.yaml` file. This is a file used by the Dart programming language to build your project and compile your dart files into JavaScript. The file format isn't too complicated. The main thing to note is that the project depends on the NetTango repository which gets pulled from GitHub. 

```
name: GasLaw

dependencies:
  browser: any
  
  NetTango:
    git:
      url: https://github.com/NetTango/NetTango.git
      ref: version_0.4
```

Once you have your `pubspec.yaml` file ready, this is a good chance to test your Dart installation. Try these commands from your 
`GasLaw` directory. If everything's working correctly, you should see something that looks like this:

```
$ cd GasLaw
$ pub get
Resolving dependencies... 
Got dependencies!
```
```
$ pub build
Loading source assets... 
Building GasLaw... 
Built 39 files to "build".
```

If this isn't working for you, make sure that you've installed Dart correctly (or at all)! Go to https://www.dartlang.org/downloads/ for an installation guide. Make sure to also install Dartium.

Moving right along... let's set up our rudimentary HTML page for the NetTango model. Open your `GasLaw/web/index.html` file in a text editor and copy in the following code. 

```html
<html> 
<head> 
  <title>NetTango: Gas Law</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/default.css"/>
</head>
<body>
  <h1>Gas Law Model</h1>
  <p>Check out my new model of gas molecules in a box...</p>
  <div id="model-container">
    <canvas id="turtles" width="800" height="600"></canvas>
    <canvas id="workspace" width="800" height="600"></canvas>
  </div>
  <script type="application/dart" src="dart/main.dart"></script>
  <script src="packages/browser/dart.js"></script>
</body>
</html>
```

I recommend opening this up in the Google Dartium web browser that comes as an optional part of your Dart installation. Dartium is a speical version of Chrome that will run dart code directly (without you having to recompile after every change). Later I'll show you how to compile your code so that it will work on any browser, but for now you can open the file from a shell using this command:

```
$ cd web
$ dartium index.html &
```

This won't look all that interesting, so let's set up a stylesheet. Create a file called `GasLaw\web\css\default.css` and add these rules.

```css
* {
  box-sizing: border-box;
}

#model-container {
  position: relative;
  width: 800px;
  height: 600px;
  margin-top: 10px;
  background-color: #eee;
}

#model-container canvas {
  position: absolute;
  top: 0; left: 0;
}
```

The main point of this is to stack the two canvas elements (one for the turtles and one of the programming blocks) directly on top of one another. You don't have to lay out your HTML page this way, but it's fun to do with NetTango!

##Building Blocks

Now that we have our basic web page set up, we can start adding NetTango components. There are two elements that we can add to a model. The first element is the visual programming workspace that will appear on the `workspace` canvas. The other is an agent-based environment with turtles that interact with one another. We're going to start with coding blocks. The first thing to do is create JSON object that tells the workspace what kind of blocks we want. Copy and paste this script tag into your `index.html` just file before the `</body>` tag.

```html
  <script id="blocks-spec" type="application/json">
  {
    "name" : "model",
    "canvasId" : "workspace",
    "blocks" : [
      {
        "name" : "forward",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 3,
            "step" : 0.5,
            "default" : 1,
            "label" : "distance"
          }
        ]
      },

      {
        "name" : "right",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 30,
            "step" : 1,
            "default" : 5,
            "unit" : "°",
            "label" : "turn angle",
            "random" : true
          }
        ]
      },

      {
        "name" : "left",
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 30,
            "step" : 1,
            "default" : 5,
            "unit" : "°",
            "label" : "turn angle",
            "random" : true
          }
        ]
      },

      {
        "name" : "reflect",
        "instances" : 2,
        "params" : [
          {
            "values" : [ "x-axis", "y-axis" ]
          }
        ]
      },

      {
        "name" : "if",
        "type" : "if",
        "instances" : 3,
        "params" : [ 
          {
            "values": [ "hit-wall?", "hit-particle?" ]
          }
        ]
      },

      {
        "name" : "chance",
        "type" : "chance",
        "instances" : 2,
        "params" : [
          {
            "type" : "range",
            "min" : 0,
            "max" : 10,
            "step" : 0.1,
            "default" : 2,
            "unit" : "%",
            "label" : "probability"
          }
        ]
      }
    ]
  }  
  </script>  
```  

This specifies a workspace with a few simple blocks with names like *forward*,  *left*, and *right*. We'll learn how to customize these blocks later on, but for now let's add a little dart code to the mix to process our block specification and turn it into an interactive workspace. Create a file called `GasLaw\web\dart\main.dart` and add this code:

```dart
import 'dart:html';
import 'dart:convert';
import 'package:NetTango/ntango.dart';

void main() {

  // load the JSON string from the <script> tag in the HTML document
  String s = querySelector('#blocks-spec').innerHtml;

  // convert from a string to a JSON object
  Map json = JSON.decode(s);

  // Add the NetTango workspace using the JSON specification
  CodeWorkspace workspace = new CodeWorkspace(json);
}
```

OK. If everything works, you should be able to refresh the Dartium page and see an interactive blocks workspace at the bottom. If you can't drag the blocks on the screen, add this to the end of the URL `index.html?debug=true` to enable mouse interaction. If nothing happens, you can bring up the JavaScript console on your browser to see if there are any errors. 

##Creating the Model

Let's keep working in `main.dart` and start setting up the agents we'll need for our Gas Law simulation. First we're going to create a simple Dart class to represent our gas particles. Just copy this class definition into your dart file. 

```dart
class Particle extends Turtle {

  Particle(Model model) : super(model) {
    color = new Color(200, 0, 200, 255);  // magenta color
  }


  // draw the turtles as a purple circle
  void draw(CanvasRenderingContext2D ctx) {
    ctx.fillStyle = "$color";
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, PI * 2, true);
    ctx.fill();
  }


  // we'll fill this function in later. 
  // it connects the coding blocks to turtle behavior
  dynamic doAction(String action, List params) {
    return null;
  }
}
```

Now we need to create a class that represents the model itself. This will be very simple to start---it's just a setup function that creates 100 randomly located gas particles.

```dart
class GasModel extends Model {

  GasModel(Map config) : super(config);


  void setup() {
    clearTurtles();
    for (int i=0; i<100; i++) {
      addTurtle(new Particle(this) .. forward(1000));  
      // calling forward(1000) randomizes the x/y coordinates of new particles
    }
    draw();
  }
}
```

A NetTango model needs a few configuration settings that we can set up with a JSON object. Switch back to your `index.html` file and add this script tag right before the `</body>` line. 

```html
<script id="model-spec" type="application/json">
  {
    "name" : "GasModel",
    "canvasId" : "turtles",
    "patchSize" : 10,
    "autoSize" : true,
    "batched" : true,
    "wrap" : true
  }
  </script>
```

Don't worry about these configuration settings too much for now. It's mainly specifying the patch size (in pixels) and whether or not the world should wrap. The canvasId setting tells the model which `<canvas>` tag to use for drawing. OK, let's switch back to the `main.dart` file and add our last bit of code to the main function.

```dart
void main() {

  // load the JSON string from the <script> tag in the HTML document
  String s = querySelector('#blocks-spec').innerHtml;

  // convert from a string to a JSON object
  Map json = JSON.decode(s);

  // Add the workspace to our model using the JSON object 
  CodeWorkspace workspace = new CodeWorkspace(json);

  // Load the JSON string for the model configuration
  json = JSON.decode(querySelector('#model-spec').innerHtml);

  // Create the model
  GasModel model = new GasModel(json);

  // Create a Particle breed that's controlled by our workspace blocks
  model.createBreed(Particle, workspace);

  // Call setup to get things stated
  model.setup();
}
```

