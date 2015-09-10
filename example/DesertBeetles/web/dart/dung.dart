part of DesertBeetles;

class Dung extends Turtle {

	num age = 0;

	ImageElement img = new ImageElement();

	Dung(Model model) : super(model) {
		this.x = model.minWorldX + Agent.rnd.nextDouble() * model.worldWidth;
    this.y = model.minWorldY + Agent.rnd.nextDouble() * model.worldHeight;
    this.size = 3;
    this.heading = 0;
		img.src = "${STATIC_ROOT}images/dung.png";
	}

	draw(CanvasRenderingContext2D ctx) {
		num iw = size;
		num ih = size;
		ctx.drawImageScaled(img, -iw/2, -ih/2, iw, ih);
	}

	Turtle hatch() {
		return null;
	}

	void tick() {
		age++;

		if (age >= DUNG_LIFE) {
			females_leave();
			die();
		}
	}

	void females_leave() {
    for (Tunnel tunnel in model.tunnels) {
      if (distance(tunnel.x, tunnel.y, x, y) < 3) {
        Female female = new Female(model);
        female.x = tunnel.x;
        female.y = tunnel.y;
        female.age = tunnel.female_age;
        if (tunnel.isOccupied) {
	        tunnel.guard.tunneled = false;
	        tunnel.guard.my_tunnel = null;
	      }
        tunnel.die();
        model.beetles.add(female);
        model.females.add(female);
      }
    }
  }
}