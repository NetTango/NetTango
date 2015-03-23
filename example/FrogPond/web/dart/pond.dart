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

double MAX_FROG_SIZE = 2.2;
double MIN_FROG_SIZE = 0.2;
int MAX_FROG_COUNT = 1000;


class FrogPond extends Model {

  Plot plot;
  Histogram hist, miniHist;

  /* frog that the user taps on to follow around the screen */
  Frog followFrog = null;

  /* bridge to the magic island */
  LilyPad bridge;

  FrogPond() : super("Frog Pond", "frog") {

    createBreed(LilyPad);
    createBreed(Frog);
    createBreed(Fly);

    //miniPlot = new Plot("mini-plot", true);
    //miniPlot.draw();

    plot = new Plot("big-plot");
    hist = new Histogram("big-hist");
    miniHist = new Histogram("mini-hist", true);

    
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
    workspace.addBlockAction("hunt", (frog, param) { if (frog is Frog) { frog.doHunt(param); } } );
    workspace.addBlockAction("hatch", (frog, param) { if (frog is Frog) { frog.doHatch(param); } } );
    workspace.addBlockAction("die", (frog, param) { if (frog is Frog) { frog.doDie(param); } } );
    workspace.addBlockAction("chance", (frog, param) {
      num value = num.parse(param.substring(0, param.length - 1));
      return (Agent.rnd.nextDouble() * 100.0 < value);
    });
    workspace.addBlockAction("if", (frog, param) {
      if (frog is! Frog) return false;
      if (param == "starving?" && frog.isStarving()) {
        return true;
      } else if (param == "hungry?" && frog.isHungry()) {
        return true;
      } else if (param == "full?" && frog.isFull()) {
        return true;
      } else if (param == "see-water?" && frog.nearWater()) {
        return true;
      } else {
        return false;
      }
    });

    workspace.onProgramChanged = () {
      pause();
      for (Frog frog in getBreed(Frog)) {
        frog.program.restart();
      }
    };


    document.onKeyDown.listen((KeyEvent e) {
      // + key
      if (e.keyCode == 187) {
        patchSize = min(120.0, patchSize / 0.98);
        draw();
      } 
      else if (e.keyCode == 189) {
        patchSize = max(20.0, patchSize * 0.98);
        draw();
      }
      else if (e.keyCode == 37) {
        pan(-5, 0);
        draw();
      }
      else if (e.keyCode == 38) {
        pan(0, 5);
        draw();
      }
      else if (e.keyCode == 39) {
        pan(5, 0);
        draw();
      }
      else if (e.keyCode == 40) {
        pan(0, -5);
        draw();
      }
      // letter 'b'
      else if (e.keyCode == 66) {
        if (bridge != null) {
          pads.remove(bridge);
          bridge = null;
          draw();
        } else {
          bridge = new LilyPad(this, -6, 2.5, 3);
          pads.add(bridge);
          draw();
        }
      }
    });

    setup();
    addTouchable(new BackgroundTouchable(this));

    buildDefaultProgram();
  }


  AgentSet get bugs => getBreed(Fly);

  AgentSet get frogs => getBreed(Frog);

  AgentSet get pads => getBreed(LilyPad);


  void setup() {
    followFrog = null;

    clearTurtles();

    if (spec != null) {
      for (Element t in spec.getElementsByTagName("turtle")) {
        num x = toNum(t.attributes["x"], 0);
        num y = toNum(t.attributes["y"], 0);
        num size = toNum(t.attributes["size"], 0);
        String breed = t.attributes["breed"];
        if (breed == "Frog") {
          frogs.add(new Frog(this, x, y, size));
        }
        else if (breed == "LilyPad") {
          pads.add(new LilyPad(this, x, y, size));
        }
        else if (breed == "Flower") {
          addTurtle(new Flower(this, x, y, size));
        }
      }
    }

    for (int i=0; i<properties["max-flies"]; i++) {
      bugs.add(new Fly(this));
    }
    // this was 5
    for (int i=0; i<properties["max-beetles"]; i++) {
      bugs.add(new Beetle(this));
    }

    plot.clear();
    updatePlots();
  }


/**
 * tick
 */
  void tick() {
    super.tick();

    Sounds.mute = (play_state > 1);

    int fcount = frogs.length;
    if (fcount == 0) {
      pause();
    }
    if (ticks % 50 == 0) {
      updatePlots();
    }
    if (ticks % 20 == 0) {

      int fcount = bugs.count(Fly);
      int bcount = bugs.count(Beetle);

      if (fcount < properties["max-flies"]) {
        //bugs.add(new Fly(this));
        bugs.add(new Fly.withPosition(this, -7.5, 6));
      }

      if (bcount < properties["max-beetles"]) {
        bugs.add(new Beetle(this));
      }
    }
  }


  void updatePlots() {
    plot.update(frogs.length);
    plot.draw();

    List<int> counts = new List<int>.filled(5, 0);
    for (Frog frog in frogs) {
      if (frog.size >= 1.65) {
        counts[4]++;
      } else if (frog.size > 1.3) {
        counts[3]++;
      } else if (frog.size > 0.95) {
        counts[2]++;
      } else if (frog.size >= 0.6) {
        counts[1]++;
      } else {
        counts[0]++;
      }
    }
    hist.update(counts);
    hist.draw();
    miniHist.update(counts);
    miniHist.draw();
  }
  
  
  Frog getFocalFrog() {
    if (frogs.length > 0) {
      return frogs[0];
    } else {
      return null;
    }
  }


  bool backgroundTouch(Contact c) {
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



  void drawBackground(CanvasRenderingContext2D ctx) {
    ctx.beginPath();
    for (int i=minWorldX; i<=maxWorldX; i++) {
      ctx.moveTo(worldToScreenX(i, maxWorldY).toInt() + 0.5, worldToScreenY(i, maxWorldY).toInt());
      ctx.lineTo(worldToScreenX(i, minWorldY).toInt() + 0.5, worldToScreenY(i, minWorldY));
    }
    for (int j=minWorldY; j<=maxWorldY; j++) {
      ctx.moveTo(worldToScreenX(minWorldX, j), worldToScreenY(minWorldX, j).toInt() + 0.5);
      ctx.lineTo(worldToScreenX(maxWorldX, j), worldToScreenY(maxWorldX, j).toInt() + 0.5);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.stroke();
  }


/**
 * Trace the execution of the program for the target frog
 */
  void traceExecution(CanvasRenderingContext2D ctx) {

    Frog frog = followFrog;
    if (frog == null || frog.dead) {
      frog = getFocalFrog();
    }

    if (followFrog != null && !followFrog.dead) {
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

      ctx.textAlign = 'left';
      ctx.font = '200 13px Nunito, sans-serif';
      ctx.fillStyle = '#39a'; //rgba(255, 255, 255, 0.6)';
      ctx.fillText("size: ${followFrog.size.toStringAsFixed(1)}", tx + 15, ty - 93);

      if (followFrog.isHungry()) ctx.fillStyle = 'red';
      ctx.fillText("energy: ${followFrog.energyAsString}", tx + 15, ty - 78);
    }

    else if (frog != null && !frog.dead) {
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

    if (frog != null && !frog.dead) {
      workspace.traceProgram(frog.program.curr.id);
    }
  } 
  
  
/**
 * Returns true if the given point is in the water
 */
  bool inWater(num x, num y) {
    return (pads.getTurtleAtPoint(x, y) == null);
  }
}


class BackgroundTouchable extends Touchable {

  FrogPond pond;
  num lastX = 0, lastY = 0;

  BackgroundTouchable(this.pond);
  

  bool containsTouch(Contact c) {
    return true;
  }
   
  bool touchDown(Contact c) {
    if (pond.followFrog != null) {
      pond.followFrog = null;
    } else {
      num wx = pond.screenToWorldX(c.touchX, c.touchY);
      num wy = pond.screenToWorldY(c.touchX, c.touchY);
      lastX = c.touchX;
      lastY = c.touchY;
      pond.followFrog = pond.frogs.getTurtleAtPoint(wx, wy);
    }
    pond.draw();

    return true;
  }
   
  void touchUp(Contact event) {

  }
   
  void touchDrag(Contact c) {
    if (pond.followFrog == null) {
      pond.pan(lastX - c.touchX, c.touchY - lastY);
      lastX = c.touchX;
      lastY = c.touchY;
      pond.draw();
    }
  }
   
  void touchSlide(Contact event) {
  }
}  
