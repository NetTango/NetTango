/*
 * Frog Pond Evolution
 * Copyright (c) 2015 Michael S. Horn
 * 
 *           Michael S. Horn (michael-horn@northwestern.edu)
 *           Northwestern University
 *           2120 Campus Drive
 *           Evanston, IL 60613
 *           http://tidal.northwestern.edu
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */
part of FrogPond2;

class FrogPond extends Model {

  Plot miniPlot;

  /* frog that the user taps on to follow around the screen */
  Frog followFrog = null;

  FrogPond() : super("Frog Pond", "frog") {

    createBreed(LilyPad);
    createBreed(Frog);
    createBreed(Fly);

    miniPlot = new Plot("mini-plot", true);
    miniPlot.draw();
    
    /* Trigger a screen refresh once the lilypad image finishes loading */    
    ImageElement lilypad = new ImageElement();
    lilypad.src = "images/lilypad.png";
    lilypad.onLoad.listen((e) {
      draw();
    });
    
    workspace.addBlockAction("hop", (frog, param) { if (frog is Frog) { frog.doHop(param); } } );
    workspace.addBlockAction("chirp", (frog, param) { if (frog is Frog) { frog.doChirp(); } } );
    workspace.addBlockAction("left", (frog, param) { if (frog is Frog) { frog.doTurn('left', param); } } );
    workspace.addBlockAction("right", (frog, param) { if (frog is Frog) { frog.doTurn('right', param); } } );
    workspace.addBlockAction("spin", (frog, param) { if (frog is Frog) { frog.doSpin(); } } );
    workspace.addBlockAction("hunt", (frog, param) { if (frog is Frog) { frog.doHunt(); } } );
    workspace.addBlockAction("hatch", (frog, param) { if (frog is Frog) { frog.doHatch(param); } } );
    workspace.addBlockAction("die", (frog, param) { if (frog is Frog) { frog.doDie(param); } } );
    workspace.addBlockAction("chance", (frog, param) {
      num value = num.parse(param.substring(0, param.length - 1));
      return (Agent.rnd.nextDouble() * 100.0 < value);
    } );

    workspace.onProgramChanged = () {
      pause();
      for (Frog frog in getBreed(Frog)) {
        frog.program.restart();
      }
    };

    document.onKeyDown.listen((KeyEvent e) {
      // + key
      if (e.keyCode == 187) {
        patchSize /= 0.98;
        draw();
      } 
      else if (e.keyCode == 189) {
        patchSize *= 0.98;
        draw();
      }
    });

    setup();
  }


  AgentSet get bugs => getBreed(Fly);

  AgentSet get frogs => getBreed(Frog);

  AgentSet get pads => getBreed(LilyPad);


  void tick() {
    super.tick();
    int fcount = frogs.length;
    if (ticks % 20 == 0) {
      miniPlot.update(fcount);
      miniPlot.draw();
    }
    if (ticks % 500 == 0) {
      bugs.add(new Fly(this));
      if (bugs.length > 10) {
        bugs[0].die();
      }
    }
  }
  
  
  void setup() {
    patchSize = 60;
    wrap = false;
    followFrog = null;
    if (miniPlot != null) miniPlot.clear();

    // add the lily pads
    /*
    addLilyPad(5.4, 3.5, 4.2);
    addLilyPad(2.2, 3.0, 4.4);
    addLilyPad(-1.3, 3.7, 4.7);
    addLilyPad(6, 0, 4.5);
    addLilyPad(2.2, 0, 4.2);
    addLilyPad(-1.0, 0.0, 3.6);
    addLilyPad(-4.0, 1.0, 3.5);
    addLilyPad(3.4, -3.0, 4.0);
    addLilyPad(0, -3.2, 3.5);
    addLilyPad(-3.3, -2.8, 4.2);
    */
    /*
    addLilyPad(0, -2, 4);
    addLilyPad(4, 0, 7.5);
    addLilyPad(-2, 1, 6);
    addLilyPad(-3, -2, 4);
    */


    clearTurtles();
    addLilyPad(1, 0, 9);

    addTurtle(new Frog(this));

    // start with 10 flies
    for (int i=0; i<10; i++) {
      addTurtle(new Fly(this));
    }
  }


  Frog getFocalFrog() {
    if (frogs.length > 0) {
      return frogs[0];
    } else {
      return null;
    }
  }


  bool backgroundTouch(Contact c) {
    if (followFrog != null) {
      followFrog = null;
    } else {
      num wx = screenToWorldX(c.touchX, c.touchY);
      num wy = screenToWorldY(c.touchX, c.touchY);
      followFrog = frogs.getTurtleAtPoint(wx, wy);
    }
    draw();
    return false;
  }  


  void drawForeground(CanvasRenderingContext2D ctx) {
    // draw tick count
    ctx.fillStyle = "white";
    ctx.font = "200 15px Nunito, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Ticks: ${ticks}", 10, 10);

    // draw frog count
    ctx.fillText("Frogs: ${frogs.length}", 10, 30);

    // draw speedup
    if (play_state > 1) {
      ctx.textAlign = "center";
      ctx.fillText("Speedup: x${play_state}", width/2, 10);
    }

    // trace execution for focal frog
    traceExecution(ctx);

    // too many frogs message
    if (frogs.length > MAX_FROG_COUNT) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      roundRect(ctx, width/2 - 200, height/2 - 70, 400, 100, 30);
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "200 30px Nunito, sans-serif";
      ctx.fillText("Too Many Frogs!", width/2, height/2 - 40);
      ctx.font = "200 20px Nunito, sans-serif";
      ctx.fillText("Press restart to try again", width/2, height/2 + 2);
      if (isRunning) {
        pause();
      }
    }

  }


/**
 * Trace the execution of the program for the target frog
 */
  void traceExecution(CanvasRenderingContext2D ctx) {

    Frog frog = (followFrog != null) ? followFrog : getFocalFrog();

    if (followFrog != null) {
      double tx = worldToScreenX(followFrog.x, followFrog.y);
      double ty = worldToScreenY(followFrog.x, followFrog.y);
      double r = followFrog.radius * patchSize;

      // halo effect
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.arc(tx, ty, r * 2, 0, PI*2, true);
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(tx, ty, r * 2, 0, PI*2, true);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // speech bubble for frog
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      drawBubble(ctx, tx, ty - 130, 120, 85, 20);
      ctx.fill();

      if (followFrog.label != null) {
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'white';
        ctx.font = '200 16px Nunito, sans-serif';
        ctx.fillText("${followFrog.label}", tx + 15, ty - 118);
      }

      ctx.font = '200 13px Nunito, sans-serif';
      ctx.fillStyle = '#39a'; //rgba(255, 255, 255, 0.6)';
      ctx.fillText("size: ${followFrog.size.toStringAsFixed(1)}", tx + 15, ty - 93);

      if (followFrog.energyPercent < 5) ctx.fillStyle = 'red';
      ctx.fillText("energy: ${followFrog.energyAsString}", tx + 15, ty - 78);
    }

    else if (frog != null) {
      double tx = worldToScreenX(frog.x, frog.y);
      double ty = worldToScreenY(frog.x, frog.y);
      double r = frog.radius * patchSize;
      if (frog.label != null) {
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.font = '200 14px Nunito, sans-serif';
        ctx.fillText("${frog.label}", tx, ty + r * 2);
      }
    }

    if (frog != null) {
      workspace.traceProgram(frog.program.curr);
    }
  } 
  
  
  void addLilyPad([num lx = null, num ly = null, num ls = null]) {
    LilyPad pad = new LilyPad(this);
    if (lx == null) lx = Agent.rnd.nextDouble() * worldWidth + minWorldX;
    if (ly == null) ly = Agent.rnd.nextDouble() * worldHeight + minWorldY;
    if (ls == null) ls = 5.0 + Agent.rnd.nextDouble() * 3.0;
    pad.x = lx;
    pad.y = ly;
    pad.size = ls;
    addTurtle(pad);
  }

  
/**
 * Returns true if the given point is in the water
 */
  bool inWater(num x, num y) {
    return (pads.getTurtleAtPoint(x, y) == null);
  }  
}