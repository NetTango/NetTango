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
	int MARGIN = 10;
	int gx, gy, gw, gh;

	/* Plot scale (TODO: autoscale) */
	int maxY = 10;
	int minY = 0;

	String fillStyle = "rgba(255, 255, 255, 0.7)";
	String strokeStyle = "rgba(255, 255, 255, 0.7)";

	CanvasElement canvas;
	CanvasRenderingContext2D ctx;

	/* fixed length sliding window of data points */
	int _len = 0;
	List<num> data;


	Plot(String id, [bool mini = false]) {
		this.mini = mini;
		canvas = querySelector("#$id");
		ctx = canvas.getContext("2d");
		resize(canvas.width, canvas.height);
		data = new List<num>.filled(50, 0);

		strokeStyle = canvas.getComputedStyle().color;
		fillStyle = canvas.getComputedStyle().backgroundColor;

/*
		canvas.onClick.listen((e) {
			CanvasElement tc = new CanvasElement(width: width ~/ 2, height: height);
			tc.getContext("2d").drawImage(canvas, 0, 0);
			var dataUrl = tc.toDataUrl();
			window.open(dataUrl, "test", "width=${tc.width}, height=${tc.height}");
		});
*/
	}


	void resize(int w, int h) {
		width = w;
		height = h;
		MARGIN = w ~/ 8;
		gx = MARGIN;
		gy = MARGIN;
		gw = width - MARGIN * 2;
		gh = height - MARGIN * 2;
	}


	void update(num value) {
    data[_len % data.length] = value;
    _len++;
	}


	void clear() {
		_len = 0;
		for (int i=0; i<data.length; i++) data[i] = 0;
		resize(width, height);
		draw();
	}


	num get lastValue {
		return data[ (_len - 1) % data.length ];
	}



	void draw() {
		ctx.fillStyle = fillStyle;
		ctx.fillRect(0, 0, width, height);

		if (_len == 0) return;

		// autoscale 
		maxY = 0;
		for (int i=0; i<data.length; i++) { maxY = max(data[i], maxY); }
		int l10 = pow(10, (log(maxY) / log(10)).floor()).toInt();
		maxY = (l10 * 5 > maxY) ? l10 * 5 : l10 * 10;

		// data fill
		int start = (_len < data.length) ? 0 : _len % data.length;
		num dx = gw / (data.length - 1);
		ctx.strokeStyle = strokeStyle;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth = 1;
		ctx.fillStyle = strokeStyle;
		ctx.beginPath();
		ctx.moveTo(gx + 0.5, gy + gh + 0.5);
		int l = min(data.length, _len);
		int tx = 0;
		for (int i=0; i<l; i++) {
			tx = (gx + 0.5 + dx * i).toInt();
			ctx.lineTo(tx + 0.5, _valueToScreenY(data[(start + i) % data.length]));
		}
		tx = (gx + 0.5 + dx * (l - 1)).toInt();
		ctx.lineTo(tx + 0.5, gy + gh + 0.5);
		ctx.closePath();
		ctx.globalAlpha = mini ? 1.0 : 0.5;
		ctx.fill();
		ctx.globalAlpha = 1.0;
		ctx.stroke();

		// axis lines 
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(gx + 0.5, gy + 0.5);
		ctx.lineTo(gx + 0.5, gy + gh + 0.5);
		ctx.lineTo(gx + gw - 0.5, gy + gh + 0.5);
		ctx.strokeStyle = "white";
		ctx.stroke();

		// scale tick marks
		if (!mini) {
			ctx.beginPath();
			ctx.moveTo(gx - 4, gy + 0.5);
			ctx.lineTo(gx + 0.5, gy + 0.5);
			ctx.strokeStyle = "white";
			ctx.stroke();

			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			ctx.font = "200 12px Nunito, sans-serif";
			ctx.fillStyle = "white";
			ctx.fillText("${maxY}", gx - 5, gy);

			int ty = _valueToScreenY(lastValue).toInt();
			ctx.textAlign = "left";
			ctx.fillText("${lastValue}", tx + 5, ty);		
		}
	}


	num _valueToScreenY(num value) {
		num p = value / (maxY - minY);
		p = (gy + gh) - (p * gh);
		return p.round().toInt() + 0.5;
	}

}