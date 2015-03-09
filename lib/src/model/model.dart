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


abstract class Model extends TouchLayer with Runtime {
  
  /* Human-readable name of the model */
  String name = "model";

  /*  
   * Internal id prefix that links this model to associated HTML identifiers
   *   Turtle Canvas:  #${id}-turtles
   *   Patches Canvas: #${id}-patches
   *   Block Workspace Canvas: #${id}-workspace
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
  
  /* does the world wrap or not? */
  bool wrap = true;
  
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
  
  /* Is the mouse or finger down? */
  bool down = false;
  
   
  Model(this.name, this.id) {
    
    // Turtle canvas
    CanvasElement canvas = querySelector("#${id}-turtles");
    width = canvas.width;
    height = canvas.height;
    tctx = canvas.getContext("2d");

     // Patch canvas
    canvas = querySelector("#${id}-patches");
    if (canvas != null) pctx = canvas.getContext("2d");
 
     // code workspace
    workspace = new CodeWorkspace("${id}-workspace");
    workspace.tmanager.addTouchLayer(this);

     // bind click events for buttons    
    bindClickEvent("play-button", (e) => playPause());
    bindClickEvent("forward-button", (e) => fastForward());
    bindClickEvent("step-button", (e) => stepForward());
    bindClickEvent("restart-button", (e) { restart(); draw(); });

    resize(width, height);
    setup();
  }
  
  int nextAgentId() => AGENT_ID++;
  
  num patchSize = 20.0;


  /* Dimensions of the world in patch coordinates */
  /* Assume an infinte and fluidly zoomable world */
  /*
  int get minPatchX => (width ~/ patchSize) ~/ -2;
  int get maxPatchX => (width ~/ patchSize) + minPatchX - 1;
  int get minPatchY => (height ~/ patchSize) ~/ -2;
  int get maxPatchY => (height ~/ patchSize) + minPatchY - 1;
  */
  num get minWorldY => screenToWorldY(0, height);
  num get minWorldX => screenToWorldX(0, 0);
  num get maxWorldY => screenToWorldY(0, 0);
  num get maxWorldX => screenToWorldX(width, 0);
  num get worldWidth => maxWorldX - minWorldX; //maxPatchX - minPatchX + 1;
  num get worldHeight => maxWorldY - minWorldY; //maxPatchY - minPatchY + 1;

  
  num screenToWorldX(num sx, num sy) {
    num cx = width / 2; // (0.5 - minPatchX) * patchSize;
    return (sx - cx) / patchSize;
  }
   
   
  num screenToWorldY(num sx, num sy) {
    num cy = height / 2; //(0.5 - minPatchY) * patchSize;
    return ((height - sy) - cy) / patchSize;      
  }
  
  
  num worldToScreenX(num wx, num wy) {
    num cx = width / 2; //(0.5 - minPatchX) * patchSize;
    return wx * patchSize + cx;
  }
  
  
  num worldToScreenY(num wx, num wy) {
    num cy = height / 2; //(0.5 - minPatchY) * patchSize;
    return height - (wy * patchSize + cy);
  }
  

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
    _drawPatches(tctx);
    _drawTurtles(tctx);
    drawForeground(tctx);
  }


/**
 * Subclasses can override this to draw information on top of the model
 */
  void drawForeground(CanvasRenderingContext2D ctx) {  }


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
    initPatches();
  }
  
  
  Patch patchAt(num tx, num ty) {
    /*
    int i = tx.round().toInt() - minPatchX;
    int j = ty.round().toInt() - minPatchY;
    int index = j * worldWidth + i;
    if (index < patches.length) {
      return patches[index];
    } else {
      return null;
    }
    */
    return null;  // FIX ME
  }
  
  
  void _drawTurtles(CanvasRenderingContext2D ctx) {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    {
      ctx.translate(worldToScreenX(0, 0), worldToScreenY(0, 0));
      ctx.scale(patchSize, -patchSize);
      turtles.draw(ctx);
    }
    ctx.restore();

    /*
    {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      for (int x = minPatchX; x <= maxPatchX + 1; x++) {
        ctx.moveTo(worldToScreenX(x - 0.5, minPatchY - 0.5),
                   worldToScreenY(x - 0.5, minPatchY - 0.5));
        ctx.lineTo(worldToScreenX(x - 0.5, maxPatchY + 0.5),
                   worldToScreenY(x - 0.5, maxPatchY + 0.5));
      }
      for (int y = minPatchY; y <= maxPatchY + 1; y++) {
        ctx.moveTo(worldToScreenX(minPatchX - 0.5, y - 0.5),
                   worldToScreenY(minPatchX - 0.5, y - 0.5));
        ctx.lineTo(worldToScreenX(maxPatchX + 0.5, y - 0.5),
                   worldToScreenY(maxPatchX + 0.5, y - 0.5));
      }
      ctx.stroke();
    }
    */
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
}

