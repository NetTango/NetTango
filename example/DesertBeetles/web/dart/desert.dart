part of DesertBeetles;

double MAX_HORN_SIZE = 2.0;
double MIN_HORN_SIZE = 0.0;
num DAY = 50;
num DUNG_LIFE = DAY * 7;
num LIFE_SPAN = DAY * 40;
num MATURE_TIME = DAY * 20;
num WANDER_TIME = 400;
num DUNG_TIME_MAX = 10;

class DBModel extends Model {

  Plot plot, miniPlot;
  Histogram hist, miniHist;

	AgentSet get beetles => getBreed(Beetle);
	AgentSet get males => getBreed(Male);
	AgentSet get females => getBreed(Female);
  AgentSet get trees => getBreed(Tree);
	AgentSet get tunnels => getBreed(Tunnel);
	AgentSet get dung => getBreed(Dung);
  
  DBModel() : super("Desert Beetles", "beetle") {
  	createBreed(Dung);
  	createBreed(Tunnel);
    createBreed(Tree);
    createBreed(Beetle);
    createBreed(Male);
    createBreed(Female);

    // create histogram
    plot = new Plot("big-plot");
    miniPlot = new Plot("mini-plot", true);
    hist = new Histogram("big-hist");
    miniHist = new Histogram("mini-hist", true);

    ImageElement dungimg = new ImageElement();
    dungimg.src = "${STATIC_ROOT}images/dung.png";
    dungimg.onLoad.listen((e) {
    	draw();
    });

    workspace.addBlockAction("forward", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doForward(param); } } );
    //workspace.addBlockAction("left", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doTurn("left", param); } } );
    //workspace.addBlockAction("right", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doTurn("right", param); } } );
    workspace.addBlockAction("wander", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doWander(); } } );
    workspace.addBlockAction("spin", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doSpin(); } } );
    workspace.addBlockAction("smell", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doSmell(); } } );
    workspace.addBlockAction("tunnel", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doTunnel(); } } );
    workspace.addBlockAction("hatch", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doHatch(param); } } );
    workspace.addBlockAction("die", (beetle, param) { if (beetle is Male) { beetle.tween = beetle.doDie(param); } } );
    workspace.addBlockAction("chance", (beetle, param) {
      num value = num.parse(param.substring(0, param.length - 1));
      return (Agent.rnd.nextDouble() * 100.0 < value);
    });
    workspace.addBlockAction("if-else", (beetle, param) {
    	if (beetle is! Male) return false;
    	if (param == "smell-dung?" && beetle.nearest_dung != null) {
    		return true;
    	} else if (param == "in-tunnel?" && beetle.tunneled) {
    		return true;
    	} else {
    		return false;
    	}
    });

    workspace.onProgramChanged = () {
      pause();
      for (Male beetle in males) {
        beetle.program.restart();
      }
    };

    buildDefaultProgram();

    setup();
  }
  
  void setup() {
    clearTurtles();
    int number_males = (properties["num-beetles"] / 2).floor();
    int number_females = properties["num-beetles"] - number_males;
    for (int i=0; i<number_males; i++) {
    	Male beetle = new Male(this, Agent.rnd.nextDouble()*2);
    	beetles.add(beetle);
    	males.add(beetle);
    }
    for (int i=0; i<number_females; i++) {
    	Female beetle = new Female(this);
    	beetles.add(beetle);
    	females.add(beetle);
    }

    for (int i=0; i<properties["num-dung"]; i++) {
      Dung pile = new Dung(this);
      pile.age = Agent.rnd.nextInt(DUNG_LIFE);
    	dung.add(pile);
    }

    for (int i=0; i<properties["num-trees"]; i++) {
      trees.add(new Tree(this));
    }

    plot.clear();
    miniPlot.clear();
    updatePlots();
  }

  void tick() {
    super.tick();

    num dcount = dung.length;
    if (dcount < properties["num-dung"]) {
      if ((dcount + 1) == properties["num-dung"]) {
        dung.add(new Dung(this));
      } else {
        for (num i=dcount; i<properties["num-dung"]; i++) {
          Dung pile = new Dung(this);
          pile.age = Agent.rnd.nextInt(DUNG_LIFE);
          dung.add(pile);
        }   
      }
    } else if (dcount > properties["num-dung"]) {
      for (num i=dcount; i>properties["num-dung"]; i--) {
        Dung dead = dung.agents[0];
        dead.females_leave();
        dead.die();
      }
    }

    num tcount = trees.length;
    if (tcount < properties["num-trees"]) {
      for (num i=tcount; i<properties["num-trees"]; i++) {
        trees.add(new Tree(this));
      }
    } else if (tcount > properties["num-trees"]) {
      for (num i=tcount; i>properties["num-trees"]; i--) {
        trees.agents[0].die();
      }
    }

    num mcount = males.length;
    if (mcount == 0) {
      pause();
    }

    if (ticks % 50 == 0) {
      updatePlots();
    }
  }

  void updatePlots() {
    num beetles_count = beetles.length;
    for (Tunnel tunnel in tunnels) {
      if (tunnel.isFemale) {
        beetles_count++;
      }
    }
    plot.update(beetles_count);
    plot.draw();
    miniPlot.update(beetles_count);
    miniPlot.draw();

    List<int> counts = new List<int>.filled(5,0);
    for (Male beetle in males) {
      if (beetle.horn_size >= 1.6) {
        counts[4]++;
      } else if (beetle.horn_size > 1.2) {
        counts[3]++;
      } else if (beetle.horn_size > 0.8) {
        counts[2]++;
      } else if (beetle.horn_size > 0.4) {
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

  void drawForeground(CanvasRenderingContext2D ctx) {
    // draw tick count
    ctx.fillStyle = "black";
    ctx.font = "200 15px Nunito, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";

    // tick count
    ctx.fillText("Ticks: ${ticks}", width - 10, 10);

    // beetle count
    num beetles_count = beetles.length;
    num females_count = females.length;
    for (Tunnel tunnel in tunnels) {
      if (tunnel.isFemale) {
        beetles_count++;
        females_count++;
      }
    }
    ctx.fillText("Beetles: ${beetles_count}", width - 10, 35);

    // male count
    ctx.fillText("Males: ${males.length}", width - 10, 60);

    // female count
    ctx.fillText("Females: ${females_count}", width - 10, 85);

    // draw speedup
    if (play_state > 1) {
      ctx.textAlign = "center";
      ctx.fillText("Speedup: x${play_state}", width/2, 10);
    }

    // no more males message
    if (males.length == 0 || females_count == 0) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      roundRect(ctx, width/2 - 200, height/2 - 70, 400, 100, 30);
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "200 30px Nunito, sans-serif";
      if (males.length == 0) {
        ctx.fillText("No more males!", width/2, height/2 - 40);
      } else {
        ctx.fillText("No more females!", width/2, height/2 - 40);    
      }
      ctx.font = "200 20px Nunito, sans-serif";
      ctx.fillText("Press restart to try again", width/2, height/2 + 2);
      if (isRunning) {
        pause();
      }
    }
  }
}