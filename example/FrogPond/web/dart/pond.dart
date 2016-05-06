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

class FrogPond extends Model {

  Plot plot, miniPlot;
  Histogram hist, miniHist;

  /* frog that the user taps on to follow around the screen */
  Frog followFrog = null;

  /* bridge to the magic island */
  LilyPad bridge;

  /* how many generations of frogs in this simulation */
  int generations = 1;

  /* unique group identifier */
  int groupSymbol = 9812;

  /* challenge number (0 - 5) from the URL path */
  int challenge = 0;


  Breed get bugs => getBreed(Fly);

  Breed get frogs => getBreed(Frog);

  Breed get pads => getBreed(LilyPad);



  FrogPond() : super("Frog Pond", "frog") {

    createBreed(LilyPad);
    createBreed(Frog, workspace);
    createBreed(Fly);


    //-----------------------------------------------------
    // load the challenge number from the URL path
    //-----------------------------------------------------
    String path = window.location.pathname;
    int i = path.indexOf("challenge");
    if (i > 0) challenge = toInt(path.substring(i + 9, i + 10), 1);
    print("challenge${challenge}");


    //-----------------------------------------------------
    // create the plots
    //-----------------------------------------------------
    plot = new Plot("big-plot");
    miniPlot = new Plot("mini-plot", true);
    hist = new Histogram("big-hist");
    miniHist = new Histogram("mini-hist", true);

    
    //-----------------------------------------------------
    // trigger a screen refresh once the lilypad image finishes loading */    
    //-----------------------------------------------------
    ImageElement lilypad = new ImageElement();
    lilypad.src = "${STATIC_ROOT}images/lilypad.png";
    lilypad.onLoad.listen((e) {
      draw();
    });


    //-----------------------------------------------------
    // share button to upload programs */
    //-----------------------------------------------------
    /*
    bindClickEvent("share-button", (e) { 
      if (window.confirm("Share your program?")) {
        shareProgram(); 
        new Timer(const Duration(seconds: 1), () { loadShareBoard(); });
      }
    });
    */


    //-----------------------------------------------------
    // bind click events for buttons    
    //-----------------------------------------------------
    //bindClickEvent("play-button", (e) { if (isRunning) shareProgram(false); playPause(); });
    //bindClickEvent("forward-button", (e) => fastForward());
    //bindClickEvent("step-button", (e) => stepForward());
    //bindClickEvent("restart-button", (e) { if (isRunning) shareProgram(false); restart(); draw(); });
    //window.onBeforeUnload.listen((e) { if (isRunning) shareProgram(false); });


    //-----------------------------------------------------
    // block functionality
    //-----------------------------------------------------
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


    //-----------------------------------------------------
    // keyboard shortcuts
    //-----------------------------------------------------
    document.onKeyDown.listen((var e) {
      // + key
      if (e.keyCode == 187 || e.keyCode == 61) {
        patchSize = min(120.0, patchSize / 0.98);
        draw();
      } 
      else if (e.keyCode == 189 || e.keyCode == 173) {
        patchSize = max(20.0, patchSize * 0.98);
        draw();
      }

      // space bar
      else if (e.keyCode == 32) {
        playPause();
      }

      // letter 'b' for bridge in challenge 5
      else if (e.keyCode == 66 && challenge == 5) {
        if (bridge != null) {
          pads.remove(bridge);
          bridge = null;
          draw();
        } else {
          bridge = new LilyPad(this, -6, 2.5, 4);
          pads.add(bridge);
          draw();
        }
      }
    });


    //initGroupId();

    //loadShareBoard();
    //new Timer.periodic(const Duration(seconds: 20), (timer) { loadShareBoard(); });

    addTouchable(new BackgroundTouchable(this));

    buildDefaultProgram();

    setup();
  }


  void setup() {
    followFrog = null;
    generations = 1;

    clearTurtles();

    if (challenge == 5) {
      bridge = new LilyPad(this, -6, 2.5, 4);  // bridge to magic island
      pads.add(bridge);
    }

    if (spec != null) {
      for (Element t in spec.getElementsByTagName("turtle")) {
        num x = toNum(t.attributes["x"], 0);
        num y = toNum(t.attributes["y"], 0);
        num size = toNum(t.attributes["size"], 0);

        // TODO: Would be nice to have a factory constructor here.
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
    miniPlot.clear();
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
        if (challenge < 5) {
          bugs.add(new Fly(this));
        } else {
          bugs.add(new Fly.withPosition(this, -7.5, 6));
        }
      }

      if (bcount < properties["max-beetles"]) {
        bugs.add(new Beetle(this));
      }

      for (Frog frog in frogs) { generations = max(generations, frog.generations); }
    }
  }


  void updatePlots() {
    plot.update(frogs.length);
    plot.draw();
    miniPlot.update(frogs.length);
    miniPlot.draw();

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


/**
 * Post a message to the share board. If sharing is false, the post
 * only goes to the unshared log data.
 */
  void shareProgram([bool sharing = true]) {
/*
// TODO: Move sharing to another codebase or make optional 
    String workLogPostUrl = "/reese/postwork";

    // disable the share button temporarily
    setHtmlAttribute("share-button", "disabled", "true");
    addHtmlClass("share-button", "disabled");

    // get the PNG images from the various canvases
    String ihist = (querySelector("#mini-hist") as CanvasElement).toDataUrl();
    String iplot = (querySelector("#mini-plot") as CanvasElement).toDataUrl();
    String iworld = (querySelector("#frog-turtles") as CanvasElement).toDataUrl();
    String iprog = (querySelector("#frog-workspace") as CanvasElement).toDataUrl();

    // average frog size
    double afs = 0.0;
    if (frogs.length > 0) {
      for (Frog frog in frogs) { afs += frog.size; }
      afs /= frogs.length;
    }

    FormData fdata = new FormData();
    fdata.append('groupId', "team${window.localStorage["frogpond-group-id"]}");
    fdata.append('groupName', "${groupSymbol}");
    fdata.append('challenge', "challenge${challenge}");
    fdata.append('frogCount', "${frogs.length}");
    fdata.append('tickCount', "${ticks}");
    fdata.append('generations', "${generations}");
    fdata.append('avgSize', "${afs.toStringAsFixed(2)}");
    fdata.append('settings', JSON.encode(properties));
    fdata.append('queryString', "${workspace.toURLString()}");
    fdata.append('userName', "mike");
    fdata.append('plotImage', iplot);
    fdata.append('histogramImage', ihist);
    fdata.append('worldImage', iworld);
    fdata.append('programImage', iprog);
    fdata.append('share', "$sharing");

    HttpRequest.request(workLogPostUrl, method: 'POST', sendData: fdata).then((HttpRequest r) {
      removeHtmlClass("share-button", "disabled");
      removeHtmlAttribute("share-button", "disabled");
    })
    .catchError((Error error) {
      print(error.toString());
      removeHtmlClass("share-button", "disabled");
      removeHtmlAttribute("share-button", "disabled");
    });

*/
  }


  void drawForeground(CanvasRenderingContext2D ctx) {
    // draw tick count
    ctx.fillStyle = "white";
    ctx.font = "200 15px Nunito, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";

    // tick count
    ctx.fillText("Ticks: ${ticks}", width - 10, 10);

    // frog count
    ctx.fillText("Frogs: ${frogs.length}", width - 10, 35);

    // generation count
    ctx.fillText("Generations: ${generations}", width - 10, 60);

    // draw speedup
    if (play_state > 1) {
      ctx.textAlign = "center";
      ctx.fillText("Speedup: x${play_state}", width/2, 10);
    }

    // trace execution for focal frog
    traceExecution(ctx);

    // too many frogs message
    if (frogs.length > properties["max-frogs"]) {
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
      if (frog.program != null) {
        workspace.traceProgram(frog.program.curr.id);
      }
    }
  }
  
  
/**
 * Returns true if the given point is in the water
 */
  bool inWater(num x, num y) {
    return (pads.getTurtleAtPoint(x, y) == null);
  }


/**
 * Dynamically load the share board
 */
  void loadShareBoard() {
    Element el = querySelector("#shareboard-ajax");
    if (el != null) {
      print("loading shareboard for challenge${challenge}");
      String path = "/frogpond/share${challenge}";

      HttpRequest.getString(path)
      .then((String html) {
        el.setInnerHtml( html, 
          validator: new NodeValidatorBuilder.common()
          .. allowInlineStyles()
          .. allowNavigation()
          .. allowElement("script")
          );
      })
      .catchError((Error error) {
        print(error.toString());
      });
    }
  }


  void initGroupId() {
    // group name (fun unicode characters)
    groupSymbol = 9812 + Agent.rnd.nextInt(27);
    String key = "frogpond-group-symbol";
    String path = '/frogpond/groupinit';

    if (!window.localStorage.containsKey(key)) {
      HttpRequest.getString(path).then((String r) {
        var json = JSON.decode(r);
        groupSymbol = json["groupSymbol"];
        window.localStorage[key] = "${groupSymbol}";
        window.localStorage["frogpond-group-id"] = "${json["groupId"]}";
        print("${key}: ${groupSymbol}");
      })
      .catchError((Error error) {
        print(error.toString());
      });
    } else {
      groupSymbol = toInt(window.localStorage[key], groupSymbol);
      print("${key}: ${groupSymbol}");
    }
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
