part of DesertBeetles;

class Beetle extends Turtle {

  String label = "";

  double smell = null;

  Dung nearest_dung = null;

  Tunnel my_tunnel = null;

  int age = 0;

  double _smell_radius = 0.0;

  bool atDung = false;

  bool tunneled = false;
  
  Beetle(Model model) : super(model) {
  	this.x = model.minWorldX + Agent.rnd.nextDouble() * model.worldWidth;
    this.y = model.minWorldY + Agent.rnd.nextDouble() * model.worldHeight;
  }
  
  void draw(CanvasRenderingContext2D ctx) {
    ctx.fillStyle = color.toString();
    ctx.beginPath();
    ctx.moveTo(0, radius);
    ctx.lineTo(radius * 0.75, -radius);
    ctx.lineTo(0, radius * -0.6);
    ctx.lineTo(-radius * 0.75, -radius);
    ctx.closePath();
    //ctx.arc(0, 0, radius, 0, PI * 2, true);
    ctx.fill();

    //---------------------------------------------
  	// draw smell radius //To be finished
  	//---------------------------------------------
  	if (_smell_radius > 0) {
  		ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 0.05;
      ctx.arc(0, 0, _smell_radius, 0, PI * 2, true);
      ctx.stroke();
  	}
  }

  Turtle hatch() {
    return null;
  }

  void tick() {
    age++;
  }

  void reset() {
    opacity = 1.0;
    label = null;
  }

  Tween doPause() {
    Tween tween = new Tween();
    tween.delay = 0;
    tween.duration = 20;
    tween.onstart = (() { });
    tween.onend = (() { reset(); });
    return tween;
  }

  Tween doForward(param) {
    double step = 5.0;
    if (param is num) {
      step = param;
      if (nearest_dung != null && !atDung) {
        double d = distance(nearest_dung.x, nearest_dung.y, x, y);
        step = min(param, d);
      } 
    }

    Tween tween = new Tween();
    tween.function = TWEEN_SINE2;
    tween.delay = 0;
    tween.duration = 20;
    tween.onstart = (() => label = "forward");
    tween.addControlPoint(0, 0);
    tween.addControlPoint(step, 1);
    tween.ondelta = ((value) {
      forward(value);
    });
    tween.onend = (() {
      if (my_tunnel != null) {
        tunneled = false;
        my_tunnel.guard = null;
        my_tunnel = null;
        reset();
      }
    });
    return tween;
  }
  
  Tween doTurn(String cmd, var param) {
    num angle = 60;
    if (param == "random") {
      angle = Agent.rnd.nextInt(90);
      if (cmd == "right") angle *= -1.0;
    } else if (param is num) {
      angle = param;
      if (cmd == 'right') angle *= -1.0;
    } else if (cmd == 'right') {
      angle = Agent.rnd.nextInt(90) * -1.0;
    } else if (cmd == 'left') {
      angle = Agent.rnd.nextInt(90);
    } else {
      angle = Agent.rnd.nextInt(180).toDouble() - 90.0;
    }
    String s = "$cmd";
    if (param != null) s = "$cmd $param";
    Tween tween = new Tween();
    tween.function = TWEEN_SINE2;
    tween.delay = 0;
    tween.duration = 5;
    tween.onstart = (() => label = s);
    tween.addControlPoint(0, 0);
    tween.addControlPoint(angle, 1);
    tween.ondelta = ((value) => left(value));
    tween.onend = (() { reset(); });
    return tween;
  }

  Tween doSpin() {
    num angle = Agent.rnd.nextInt(360 * 3);
    if (Agent.rnd.nextBool()) angle *= -1;
    String s = "spin";
    Tween tween = new Tween();
    tween.function = TWEEN_SINE2;
    tween.delay = 0;
    tween.duration = 30;
    tween.onstart = (() => label = s);
    tween.addControlPoint(0, 0);
    tween.addControlPoint(angle, 1);
    tween.ondelta = ((value) => left(value));
    tween.onend = (() { reset(); });
    return tween;
  }

  Tween doDie(var param) {
    if (param == null || (param == "always")) {
      Tween tween = new Tween();
      tween.function = TWEEN_DECAY;
      tween.delay = 0;
      tween.duration = 8;
      tween.repeat = 3;
      tween.addControlPoint(1.0, 0);
      tween.addControlPoint(0.0, 0.5);
      tween.addControlPoint(1.0, 1.0);
      tween.onstart = (() => label = "die");
      tween.ondelta = ((value) => opacity += value );
      tween.onend = (() { die(); });
      return tween;
    } else {
      return doPause();
    }
  }

  Tween doSmell() {

    TweenChain chain = new TweenChain();

    if (this is Male) {
    	Tween tween = new Tween();
    	tween.function = TWEEN_SINE2;
    	tween.delay = 0;
    	tween.duration = 40;
    	tween.onstart = (() => label = "smell");
    	tween.addControlPoint(0, 0);
    	tween.addControlPoint(smell, 0.5);
    	tween.addControlPoint(0, 1);
    	tween.ondelta = ((value) {
    		_smell_radius += value;
    	});
      chain.addTween(tween);
    }

	  if (smellDung()) {
      tween = new Tween();
      tween.function = TWEEN_SINE2;
      tween.delay = 0;
      tween.duration = 10;
      tween.addControlPoint(0, 0);
      tween.addControlPoint(angleBetween(nearest_dung), 1);
      tween.ondelta = ((value) {
        left(value);
      });
      chain.addTween(tween);
    }

    chain.onend = (() => reset());
    return chain;
  }

  Tween doWander() {
    TweenChain chain = new TweenChain();
    if (Agent.rnd.nextInt(2) == 0) {
      chain.addTween(doTurn("left", Agent.rnd.nextInt(30)));
    } else {
      chain.addTween(doTurn("right", Agent.rnd.nextInt(30)));
    }
    chain.addTween(doForward(Agent.rnd.nextInt(10)));
    return chain;
  }

  bool smellDung() {
    nearest_dung = null;
    for (Dung dung in model.dung) {
      num d = distance(dung.x, dung.y, x, y) - 1 - sqrt(2);
      if (d <= smell) {
        if (nearest_dung == null) {
          nearest_dung = dung;
        } else {
          if (d < distance(nearest_dung.x, nearest_dung.y, x, y)) {
            nearest_dung = dung;
          }
        }
      }
    }
    return (nearest_dung == null) ? false : true;
  }

  void set_smell();

}

class Male extends Beetle {

	double horn_size;

  bool leaving = false;

  List<Tunnel> near_tunnels = [];

	Male(Model model, double horn_size) : super(model) {
		this.horn_size = horn_size;
	}

  Turtle hatchMale() {
    Male clone = new Male(model, horn_size);
    copyTo(clone);
    clone.program.restart();
    model.beetles.add(clone);
    model.males.add(clone);
    return clone;
  }

  Turtle hatchFemale() {
    Female clone = new Female(model);
    clone.program.restart();
    model.beetles.add(clone);
    model.females.add(clone);
    return clone;
  }

	void set_smell() {
		smell = pow(8, (2 - horn_size + (model.properties["num-trees"] * .02)));
	}

  void tick() {
    super.tick();
    set_smell();
    if (tween != null && tween.isTweening()) {
      tween.animate();
    } else {
      program.step();
    }
  }

	Tween doHatch(var param) {
    Tween tween = doPause();
    tween.onend = (() {
  		Beetle baby;
    	if (Agent.rnd.nextInt(2) == 0) {
     		baby = hatchMale();
     	} else {
     		baby = hatchFemale();
     	}
     	if (baby == null) return;
     	baby.x = x;
     	baby.y = y;
     	baby.opacity = 1;
     	baby.heading = heading;
     	baby.left(Agent.rnd.nextInt(360).toDouble());
     	baby.age = 0;
     	if (baby is Male) {
     		double s = horn_size;
     		if (param == "horn-variation") {
     			double g = nextGaussian() * 0.1;
     			if (g > 0.25) g = 0.25;
     			if (g < -0.25) g = -0.25;
     			s += g;
     		}
     		s = min(MAX_HORN_SIZE, max(MIN_HORN_SIZE, s));
     		horn_size = s;
     	}
     	baby.set_smell();
    });
    return tween;
  }

  Tween doTunnel() {

    TweenChain chain = new TweenChain();

    Tunnel nearest_tunnel = null;
    double nearest_tunnel_angle = 360.0;
    near_tunnels = [];
    if (smellDung() && distance(nearest_dung.x, nearest_dung.y, x, y) < 1) {
      for (Tunnel tunnel in model.tunnels) {
        num d = distance(tunnel.x, tunnel.y, x, y);
        if (d < 3 && tunnel.isFemale) {
          near_tunnels.add(tunnel);
        }
      }
      for (Tunnel tunnel in near_tunnels) {
        double aB = angleBetween(tunnel);
        if (aB < 0) {
          aB = 360 + aB;
        }
        if (aB < nearest_tunnel_angle) {
          nearest_tunnel_angle = aB;
          nearest_tunnel = tunnel;
        }
      }
      nearest_dung = null;
    }
    num duration = (nearest_tunnel_angle * 60 / 360).round();
    Tween tween = new Tween();
    tween.function = TWEEN_LINEAR;
    tween.delay = 0;
    tween.duration = duration;
    tween.onstart = (() => label = "tunnel");
    tween.addControlPoint(0, 0);
    tween.addControlPoint(nearest_tunnel_angle, 1);
    tween.ondelta = ((value) { left(value); });
    chain.addTween(tween);

    if (nearest_tunnel != null) {
      chain.addTween(doForward(distance(nearest_tunnel.x, nearest_tunnel.y, x, y)));
      if (nearest_tunnel.isOccupied) {
        Male opponent = nearest_tunnel.guard;

        // you win
        if (horn_size > opponent.horn_size) {
          nearest_tunnel.guard = this;
          chain.onend = (() {
            tunneled = true;
            my_tunnel = nearest_tunnel;
            opponent.my_tunnel = null;
            opponent.tunneled = false;          
            opponent.tween = opponent.doForward(2);
          });
        }

        // you lose
        else {
          chain.addTween(doForward(2));
        }
      } 

      // tunnel isn't occupied
      else {
        nearest_tunnel.guard = this;
        chain.onend = (() {
          tunneled = true;
          my_tunnel = nearest_tunnel;
        });
      }
    }
    return chain;
  }
}

class Female extends Beetle {
  num time_since_dung = WANDER_TIME;
  num dung_time = 0;

	Female(Model model) : super(model) {
		this.size = 0.7;
		set_smell();
    tween = null;
 	}

	void set_smell() {
		smell = 64.0;
	}

  void tick() {

    super.tick();

    if (age >= LIFE_SPAN) {
      die();
    }
    
    TweenChain chain = new TweenChain();

    time_since_dung++;

    if (tween == null) {
      if (time_since_dung > WANDER_TIME) {
        if (smellDung()) {
          double d = distance(nearest_dung.x, nearest_dung.y, x, y);
          if (d < 4) {
            atDung = true;
            dung_time++;
            if (dung_time > DUNG_TIME_MAX) {
              time_since_dung = 0;
              dung_time = 0;
            }
            if (d < 3) {
              left(angleBetween(nearest_dung));
              right(80);
              bool not_near_tunnel = true;
              for (Tunnel tunnel in model.tunnels) {
                if (distance(tunnel.x, tunnel.y, x, y) < 2) not_near_tunnel = false;
              }
              if (d > 2 && not_near_tunnel) {
                Tunnel female_patch = new Tunnel(model, age);
                model.tunnels.add(female_patch);
                female_patch.x = x;
                female_patch.y = y;
                die();
              }
            } else {
              left(angleBetween(nearest_dung));
              right(55);
            }
            chain.addTween(doForward(2));
          } else {
            atDung = false;
            chain.addTween(doSmell());
            chain.addTween(doForward(7));
          }
        } else {
          chain.addTween(doWander());
        }
      } else {
        chain.addTween(doWander());
      }
      tween = chain;
    }

    if (tween.isTweening()) {
      tween.animate();
    } else {
      this.tween = null;
    }
  }
}