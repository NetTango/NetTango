/*
 * Frog Pond Evolution
 * Copyright (c) 2015 Michael S. Horn
 * 
 *       Michael S. Horn (michael-horn@northwestern.edu)
 *       Northwestern University
 *       2120 Campus Drive
 *       Evanston, IL 60613
 *       http://tidal.northwestern.edu
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

class Plot {

	int width = 300;
	int height = 300;
	bool mini = false;  // iconified version

	/* Graph dimensions */
	num MARGIN = 10;
	num gx, gy, gw, gh;

	/* Plot scale (TODO: autoscale) */
	num maxY = 1000;
	num minY = 0;

	String fillStyle = "rgba(255, 255, 255, 0.9)";
	String strokeStyle = "rgba(255, 255, 255, 0.8)";
	num lineWidth = 2;

	CanvasRenderingContext2D ctx;

	List<num> data = new List<num>();
	List<String> labels = new List<String>();


	Plot(String id, [bool mini = false]) {
		CanvasElement canvas = querySelector("#$id");
		ctx = canvas.getContext("2d");
		resize(canvas.width, canvas.height);
	}


	void resize(int w, int h) {
		width = w;
		height = h;
		MARGIN = mini ? 6 : 20;
		gx = MARGIN;
		gy = MARGIN;
		gw = width - MARGIN * 2;
		gh = height - MARGIN * 2;
	}


	void update(num value, [String label = null]) {
		data.add(value);
		labels.add(label);
	}


	void clear() {
		data.clear();
		labels.clear();
		resize(width, height);
		draw();
	}


	void draw() {
		ctx.clearRect(0, 0, width, height);

		if (data.isEmpty) return;

		ctx.strokeStyle = strokeStyle;
		ctx.fillStyle = fillStyle;
		ctx.lineWidth = lineWidth;

		// data fill
		ctx.beginPath();
		ctx.moveTo(gx, gy + gh);
		for (int i=0; i<data.length; i++) {
			ctx.lineTo(_indexToScreenX(i), _valueToScreenY(data[i]));
		}
		ctx.lineTo(_indexToScreenX(data.length - 1), gy + gh);
		ctx.closePath();
		ctx.fill();

		// data line 
		/*
		ctx.beginPath();
		ctx.moveTo(_indexToScreenX(0), _valueToScreenY(data[0]));
		for (int i=1; i<data.length; i++) {
			ctx.lineTo(_indexToScreenX(i), _valueToScreenY(data[i]));
		}
		ctx.stroke();
		*/
	}


	num _valueToScreenY(num value) {
		num p = value / (maxY - minY);
		return (gy + gh) - (p * gh);
	}


	num _indexToScreenX(int index) {
		if (data.isEmpty) return gx;
		num p = index / max(data.length - 1, 10);
		return gx + (p * gw);
	}
}