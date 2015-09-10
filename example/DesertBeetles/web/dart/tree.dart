part of DesertBeetles;

class Tree extends Turtle {
	Tree(Model model) : super(model) {
		this.x = model.minWorldX + Agent.rnd.nextDouble() * model.worldWidth;
		this.y = model.minWorldY + Agent.rnd.nextDouble() * model.worldHeight;
		this.size = 1;
		this.heading = 0;
	}

	draw(CanvasRenderingContext2D ctx) {
		ctx.fillStyle = "green";
		ctx.fillRect(-size/2, -size/2, size, size);
	}

	Turtle hatch() {
		return null;
	}
}