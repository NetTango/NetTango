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


class LilyPad extends Turtle {
  
  ImageElement img = new ImageElement();
  
  
  LilyPad(FrogPond pond, num x, num y, num size) : super(pond) {
    this.x = x;
    this.y = y;
    this.size = size;
    img.src = "images/lilypad.png";
  }
  

  void draw(CanvasRenderingContext2D ctx) {  
    num iw = size;
    num ih = size;
    ctx.drawImageScaled(img, -iw/2, -ih/2, iw, ih);
    //print("draw");
    //print("$x, $y");
  }
  
  
  Turtle hatch() {
    return null;
  }
}  
