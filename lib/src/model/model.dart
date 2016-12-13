/*
 * NetTango
 * Copyright (c) 2016 Michael S. Horn, Uri Wilensky, and Corey Brady
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
part of NetTango;


abstract class Model extends TouchLayer with Runtime {
  
  /* Human-readable name of the model */
  String name = "model";

  /* Current tick count */
  int ticks = 0;
   
  /* Dimensions of the canvas for the world view */
  int width = 500, height = 500;
  
  /* A list of patches */
  AgentSet<Patch> patches = new AgentSet<Patch>();

  /* Support for multiple breeds of turtles */
  Map<Type, Breed> _breeds = new Map<Type, Breed>();

  /* Global variables and properties (defined for the model) */
  Map<String, dynamic> _properties = new Map<String, dynamic>();
  
  /* does the world wrap or not? */
  bool wrap = true;

  /* use a batch tick model when executing programs? */
  bool batched = false;
  
  /* Used to generate unique agent id numbers */
  int AGENT_ID = 1;
   
  /* Random number generator */
  static Random rnd = new Random();
  
  /* Drawing context for turtles */
  CanvasRenderingContext2D tctx = null;
   
  /* Drawing context for patches */
  CanvasRenderingContext2D pctx = null;

  /* Touch event manager */
  TouchManager tmanager = new TouchManager();
  
  /* Is the mouse or finger down? */
  bool down = false;

  /* size of patches in pixels */  
  num patchSize = 20.0;

  /* center of the model in screen coordinates (used to pan the display) */
  num centerX = 0, centerY = 0;

  /* dimensions of the world regardless of patch size (in world coordinates) */
  num minWorldX = -10.5;
  num minWorldY = -10.5;
  num maxWorldX = 10.5;
  num maxWorldY = 10.5;


   
  Model(Map config) {
    
    // Turtle canvas context
    CanvasElement canvas = querySelector("#${config['turtleCanvas']}");
    width = canvas.width;
    height = canvas.height;
    centerX = width / 2;
    centerY = height / 2;
    tctx = canvas.getContext("2d");
    if (config.containsKey('touchElement')) {
      tmanager.registerEvents(querySelector("#${config['touchElement']}"));
      tmanager.addTouchLayer(this);
    }

    // Patch canvas context
    if (config.containsKey('patchCanvas')) {
      canvas = querySelector("#${config['patchCanvas']}");
      if (canvas != null) {
        pctx = canvas.getContext("2d");
        _initPatches();
      }
    }

    //-------------------------------------------------------------
    // Load model parameters from config map
    //-------------------------------------------------------------
    patchSize = toNum(config["patchSize"], 30);
    minWorldX = toNum(config["minWorldX"], -10.5);
    maxWorldX = toNum(config["maxWorldX"], 10.5);
    minWorldY = toNum(config["minWorldY"], -10.5);
    maxWorldY = toNum(config["maxWorldY"], 10.5);
    if (toBool(config["autoSize"])) {
      int patches = width ~/ patchSize;
      if (patches % 2 == 0) patches++;
      minWorldX = patches / -2;
      maxWorldX = patches / 2;

      patches = height ~/ patchSize;
      if (patches % 2 == 0) patches++;
      minWorldY = patches / -2;
      maxWorldY = patches / 2;
    }

    centerX = width * (-minWorldX / worldWidth);
    centerY = height * (-minWorldY / worldHeight);
    wrap = toBool(config["wrap"]);
    batched = toBool(config["batched"]);

    //-------------------------------------------------------------------
    // load settings from the HTML file. Currently only range and 
    // checkbox input types are supported. Each <input> tag must have
    // an id prefixed with "setting-" and must have class="setting"
    //-------------------------------------------------------------------
    var settings = querySelectorAll(".setting input");
    for (var setting in settings) {
      String name = setting.id.substring(8);
      if (setting.type == "range") {
        this[name] = toNum(setting.value, 0);
      } else if (setting.type == "checkbox") {
        this[name] = setting.checked;
      }
      setting.onInput.listen((e) {
        var out = querySelector("#output-${name}");
        if (out != null) out.value = e.target.value;
        this[name] = toNum(e.target.value, 0);
      });
      setting.onChange.listen((e) {
        if (setting.type == "checkbox") {
          this[name] = e.target.checked;
        }
      });
    }
  }
  

  int nextAgentId() => AGENT_ID++;
  

/**
 * Returns a model property
 */  
  dynamic operator [] (String key) {
    return _properties[key];
  }


/**
 * Assigns a model property
 */ 
  void operator []= (String key, var value) {
    _properties[key] = value;
  } 


/**
 * Registers a new turtle breed (as a subclass of Turtle)
 * Optionally bind breed to a code workspace
 */
  void createBreed(Type turtleType, [CodeWorkspace workspace = null]) {
    _breeds[turtleType] = new Breed(this, turtleType, workspace);
  }


/**
 * Get the agentset for the given breed
 */
  Breed getBreed(Type turtleType) {
    return _breeds[turtleType];
  }


/**
 * Add a turtle to the model. If this matches a registered breed, it will
 * automatically be added to that agentset. Otherwise, a new breed will be 
 * created.
 */
  void addTurtle(Turtle turtle) {
    Type turtleType = turtle.runtimeType;
    if (_breeds[turtleType] == null) {
      _breeds[turtleType] = new Breed(this, turtleType);
    }
    _breeds[turtleType].add(turtle);
  }


/**
 * Removes a turtle from the agentset
 */
  void removeTurtle(Turtle turtle) {
    Type breed = turtle.runtimeType;
    if (_breeds.containsKey(breed)) {
      _breeds[breed].remove(turtle);
    }
  }


/**
 * Removes all turtles
 */
  void clearTurtles([Breed breed = null]) {
    if (breed != null) {
      breed.clear();
    } else {
      _breeds.values.forEach((breed) => breed.clear());
    }
  }

  
/**
 * Called when the block program changes...
 */
  void restartPrograms([Breed breed = null]) {
    if (breed != null) {
      breed.restartProgram();
    } else {
      _breeds.values.forEach((breed) => breed.restartProgram());
    }
  }


/**
 * Set up the model for a new run (abstract)
 */
  void setup();


  bool get isRunning {
    for (Breed breed in _breeds.values) {
      if (breed.isRunning) return true;
    }
    return false;
  }


/**
 * Tick+draw callback loop
 */
  void animate() {
    if (isRunning) {
      tick(); 
      draw();
    }
    window.animationFrame.then((time) => animate());
  }


  void stepForward() {
    tick();
    draw();
  }

  
/**
 * Advance the model by one tick
 */
  void tick() {
    ticks++;  // update the tick count
     
    // remove dead turtles
    _breeds.values.forEach((breed) => breed.removeDead());

    // tick
    _breeds.values.forEach((breed) => breed.tick());
    patches.tick();
  }
   
   
  void draw() {
    tctx.clearRect(0, 0, width, height);
    drawBackground(tctx);
    if (pctx != null) _drawPatches(pctx);
    _drawTurtles(tctx);
    drawForeground(tctx);
  }

/**
 * Subclasses can override this if they want a notification on program changed
 */
  void programChanged() {
    
  }  


/**
 * Parses the XML spec to build a default program
 */
 /*
  void buildDefaultProgram() {
    if (spec != null) {
      for (Element t in spec.getElementsByTagName("defaultProgram")) {
        workspace.fromURLString(t.innerHtml);
      }
    }
  }
*/

  num get worldWidth => maxWorldX - minWorldX; //maxPatchX - minPatchX + 1;
  num get worldHeight => maxWorldY - minWorldY; //maxPatchY - minPatchY + 1;

  num get minScreenX => (minWorldX * patchSize) + width * (-minWorldX / worldWidth);
  num get maxScreenX => (maxWorldX * patchSize) + width * (-minWorldX / worldWidth);
  num get maxScreenY => height * (-minWorldY / worldHeight) - (minWorldY * patchSize);
  num get minScreenY => height * (-minWorldY / worldHeight) - (maxWorldY * patchSize);

  num get randomX => (minWorldX + Model.rnd.nextDouble() * worldWidth);
  num get randomY => (minWorldY + Model.rnd.nextDouble() * worldHeight);

  
  num screenToWorldX(num sx, num sy) {
    return (sx - centerX) / patchSize;
  }
   
   
  num screenToWorldY(num sx, num sy) {
    return ((height - sy) - centerY) / patchSize;      
  }
  
  
  num worldToScreenX(num wx, num wy) {
    return wx * patchSize + centerX;
  }
  
  
  num worldToScreenY(num wx, num wy) {
    return height - (wy * patchSize + centerY);
  }


/**
 * Pan the display by the given screen coordinate deltas
 */
  void pan(num deltaX, num deltaY) {
    centerX = min(maxScreenX, max(minScreenX, centerX - deltaX));
    centerY = min(maxScreenY, max(minScreenY, centerY - deltaY));
  }


/**
 * Subclasses can override this to draw information on top of the model
 */
  void drawForeground(CanvasRenderingContext2D ctx) {  }


/**
 * Subclasses can override this to draw information behind of the model
 */
  void drawBackground(CanvasRenderingContext2D ctx) {  }

  
  Patch patchAt(num worldX, num worldY) {
    int i = (worldX - 0.5 + minWorldX).round().toInt();
    int j = (worldY - 0.5 + minWorldY).round().toInt();
    int index = j * worldWidth + i;
    if (index < patches.length) {
      return patches[index];
    } else {
      return null;
    }
  }


  void _drawTurtles(CanvasRenderingContext2D ctx) {
    ctx.save();
    {
      ctx.translate(worldToScreenX(0, 0), worldToScreenY(0, 0));
      ctx.scale(patchSize, -patchSize);
      _breeds.values.forEach((breed) => breed.draw(ctx));
    }
    ctx.restore();
  }
   
   
  void _drawPatches(CanvasRenderingContext2D ctx) {
    if (patches == null) return;
    num cx = worldToScreenX(0, 0);
    num cy = worldToScreenY(0, 0);
    ctx.save();
    {
      ctx.translate(cx, cy);
      ctx.scale(patchSize, -patchSize);
      patches.draw(ctx);
    }
    ctx.restore();
  }  


  void _initPatches() {
    int index = 0;
    for (int j = 0; j<worldHeight; j++) {
      for (int i = 0; i<worldWidth; i++) {
        int patchX = (i + minWorldX + 0.5).toInt();
        int patchY = (j + minWorldY + 0.5).toInt();

        patches[index++] = new Patch(this, patchX, patchY);
      }
    }
  }
}

