/*
 * NetTango
 * Copyright (c) 2014 Michael S. Horn, Uri Wilensky, and Corey Brady
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


// TODO Patchless by default
abstract class Model extends TouchLayer with Runtime {
  
  /* Human-readable name of the model */
  String name = "model";

  /*  
   * Internal id prefix that links this model to associated HTML identifiers
   *   Turtle Canvas:  #${id}-turtles
   *   Patches Canvas: #${id}-patches
   */
  String id = "model";
   
  /* Dimensions of the canvas for the world view */
  int width = 500, height = 500;
  
  /* A collection of turtles in the model */
  AgentSet<Turtle> turtles = new AgentSet<Turtle>();
   
  /* A list of patches */
  AgentSet<Patch> patches = new AgentSet<Patch>();
  
  /* Global variables and properties (defined for the model) */
  Map<String, dynamic> properties = new Map<String, dynamic>();
  
  /* Current tick count */
  int ticks = 0;
  
  /* does the world wrap or not? */
  bool wrap = true;
  
  /* Dimensions of the world in patch coordinates */
  int maxPatchX = 12;
  int minPatchX = -12;
  int maxPatchY = 12;
  int minPatchY = -12;
  
  /* Used to generate unique agent id numbers */
  int AGENT_ID = 1;
   
  /* Random number generator */
  static Random rnd = new Random();
  
  /* Drawing context for turtles */
  CanvasRenderingContext2D tctx = null;
   
  /* Drawing context for patches */
  CanvasRenderingContext2D pctx = null;
  
  /* Blocks workspace */
  CodeWorkspace workspace;
  
  /* Touch event manager */
  TouchManager tmanager = new TouchManager();

  /* Is the mouse or finger down? */
  bool down = false;
  
   
  Model(this.name, this.id) {
    
    // Turtle canvas
    CanvasElement canvas = querySelector("#${id}-turtles");
    width = canvas.width;
    height = canvas.height;
    tctx = canvas.getContext("2d");
    tmanager.registerEvents(querySelector("#${id}-workspace"));
    tmanager.addTouchLayer(this);
 
     // Patch canvas
    canvas = document.query("#${id}-patches");
    if (canvas != null) pctx = canvas.getContext("2d");
 
     // code workspace
    workspace = new CodeWorkspace(this, id);
    tmanager.addTouchLayer(workspace);

     // bind click events for buttons    
    bindClickEvent("play-button", (e) => playPause());
    bindClickEvent("forward-button", (e) => fastForward());
    bindClickEvent("step-button", (e) => stepForward());
    bindClickEvent("restart-button", (e) => restart());

    resize(width, height);
    setup();
  }
  
  
  int nextAgentId() => AGENT_ID++;
   
  num get minWorldY => minPatchY - 0.5;
  num get minWorldX => minPatchX - 0.5;
  num get maxWorldY => maxPatchY + 0.5;
  num get maxWorldX => maxPatchX + 0.5;
  int get worldWidth => maxPatchX - minPatchX + 1;
  int get worldHeight => maxPatchY - minPatchY + 1;
  num get patchSize => width / worldWidth;
  
  

/**
 * Set up the model for a new run (abstract)
 */
  void setup();


/**
 * Called when the block program changes...
 */
  void restartPrograms() {
    turtles.restartProgram();
    patches.restartProgram();
  }
  
  
/**
 * Advance the model by one tick
 */
  void tick() {
    ticks++;  // update the tick count
     
    // remove dead turtles
    for (int i=turtles.length - 1; i >= 0; i--) {
      Turtle t = turtles[i];
      if (t.dead) turtles.remove(t);
    }
    turtles.tick();
    patches.tick();
  }
   
   
  void draw() {
    if (pctx != null) _drawPatches(pctx);
    _drawTurtles(tctx);
  }

   
  void initPatches() { 
    patches.clear();
    /*
    for (int j=0; j < worldHeight; j++) {
      for (int i=0; i < worldWidth; i++) {
        patches[j * worldWidth + i] = new Patch(this, i + minPatchX, j + minPatchY);
      }
    }
    */
  }
  
  
  void resize(int w, int h) {
    patches.clear();
    initPatches();
  }
  
  
  Patch patchAt(num tx, num ty) {
    int i = tx.round().toInt() - minPatchX;
    int j = ty.round().toInt() - minPatchY;
    int index = j * worldWidth + i;
    if (index < patches.length) {
      return patches[index];
    } else {
      return null;
    }
  }
  
  
  void _drawTurtles(CanvasRenderingContext2D ctx) {
    ctx.clearRect(0, 0, width, height);
    num cx = (0.5 - minPatchX) * patchSize;
    num cy = (0.5 - minPatchY) * patchSize;
    ctx.save();
    {
      ctx.translate(cx, cy);
      ctx.scale(patchSize, -patchSize);
      turtles.draw(ctx);
    }
    ctx.restore();
  }
   
   
  void _drawPatches(CanvasRenderingContext2D ctx) {
    if (patches == null) return;
    num cx = (0.5 - minPatchX) * patchSize;
    num cy = (0.5 - minPatchY) * patchSize;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(patchSize, -patchSize);
    patches.draw(ctx);
    ctx.restore();
  }
   
   
  num screenToWorldX(num sx, num sy) {
    num cx = (0.5 - minPatchX) * patchSize;
    return (sx - cx) / patchSize;
  }
   
   
  num screenToWorldY(num sx, num sy) {
    num cy = (0.5 - minPatchY) * patchSize;
    return (cy - sy) / patchSize;      
  }
  
  
  num worldToScreenX(num wx, num wy) {
    num cx = (0.5 - minPatchX) * patchSize;
    return wx * patchSize + cx;
  }
  
  
  num worldToScreenY(num wx, num wy) {
    num cy = (0.5 - minPatchY) * patchSize;
    return wy * patchSize * -1 + cy;
  }
}

