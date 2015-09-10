part of DesertBeetles;

class Tunnel extends Turtle {
	num female_age;

	bool isFemale = true;

	Male guard = null;

	bool get isOccupied => (guard != null);

	Tunnel(Model model, female_age) : super(model) {
		this.female_age = female_age;
		this.size = 1;
		this.heading = 0;
	}

	draw(CanvasRenderingContext2D ctx) {
		ctx.fillStyle = "#999";
		ctx.fillRect(-size/2, -size/2, size, size);
	}

	Turtle hatch() {
		return null;
	}

	void tick() {
		female_age++;
	}
}