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

class Histogram {
  
  int width = 300;
  int height = 300;
  bool mini = false;
  
  /* graph dimensions */
  int MARGIN = 10;
  int gx, gy, gw, gh;
  int bins = 5;
  
  CanvasElement canvas;
  CanvasRenderingContext2D ctx;

  String foreground = "white";
  String background = "black";
  
  ImageElement frog = new ImageElement();
  
  List<double> values;
  
  
  Histogram(String id, [bool mini = false]) {
    this.mini = mini;
    canvas = querySelector("#$id");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    values = new List<double>.filled(bins, 0.0);
    foreground = canvas.getComputedStyle().color;
    background = canvas.getComputedStyle().backgroundColor;
    frog.src = "${STATIC_ROOT}images/whitefrog.png";
    frog.onLoad.listen((e) => draw());
  }


  void update(List<int> counts) {
    if (counts.length != bins) return;
    int total = 0;
    for (int i=0; i<bins; i++) {
      total += counts[i];
      values[i] = 0.0;
    }
    if (total > 0) {
      for (int i=0; i<bins; i++) {
        values[i] = counts[i] / total;
      }
    }
  }
  
  
  void draw() {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);


    MARGIN = width ~/ 10;
    int GAP = width ~/ 50; //mini? 2 : 10;

    gx = MARGIN;
    gy = MARGIN;
    gw = width - MARGIN * 2;
    gh = mini ? height - MARGIN * 2 : height - MARGIN * 3;
    
    ctx.strokeStyle = foreground;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gx + 0.5, gy + gh + 0.5);
    ctx.lineTo(gx + gw + 0.5, gy + gh + 0.5);
    ctx.stroke();

    gx += MARGIN ~/ 4;
    gw -= MARGIN ~/ 2;

    num iw = frog.width;
    num ih = frog.height;

    int bw = gw ~/ bins;
    int bx = gx;
    int by, bh;

    if (iw == 0) return;

    double minf = 0.5;
    double maxf = 1.2;
    double step = (maxf - minf) / bins;

    ctx.fillStyle = foreground;
    ctx.font = "200 12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    for (int i=0; i<bins; i++) {
      
      bh = (gh * values[i]).round().toInt();
      by = gy + gh - bh;

      iw = bw * (minf + step * i);
      ih = bw * (minf + step * i);

      ctx.fillRect(bx + GAP + 0.5, by + 0.5, bw - GAP * 2, bh);
      ctx.strokeRect(bx + GAP + 0.5, by + 0.5, bw - GAP * 2, bh);
      if ((values[i] * 100) >= 1 && !mini) {
        ctx.fillStyle = "white";
        ctx.fillText("${(values[i] * 100).round().toInt()}%", bx + bw/2, by - 4);
      }
      if (!mini) {
        ctx.globalAlpha = 0.9;
        ctx.drawImageScaled(frog, bx + bw/2 - iw/2, gy + gh + 8, iw, ih);
        ctx.globalAlpha = 1.0;
      }
      bx += bw;
    }
  }
}

