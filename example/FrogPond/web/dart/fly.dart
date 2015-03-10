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

class Fly extends Turtle {
  
  
  /* pond that contains this frog */
  FrogPond pond;  

  /* flies make lazy circles around the pond */
  double _turn = 3.0;
  
  /* Image for drawing */
  ImageElement img = new ImageElement();

  /* fly can only be captured by one frog at a time */
  bool captured = false;
  

  Fly(FrogPond pond) : super(pond) {
    this.pond = pond;
    this.img.src = "images/dragonfly.png";
    this.x = pond.minWorldX + Agent.rnd.nextDouble() * pond.worldWidth;
    this.y = pond.minWorldY + Agent.rnd.nextDouble() * pond.worldHeight;
    this.size = 0.3;
  }
  
  
  Fly hatch() {
    Fly clone = new Fly(pond);
    copyTo(clone);
    return clone;
  }


  void forward(num distance) {
    super.forward(distance);
    if (x < model.minWorldX) {
      x += model.worldWidth;
    }
    else if (x > model.maxWorldX) {
      x -= model.worldWidth;
    }
    if (y < model.minWorldY) {
      y += model.worldHeight;
    }
    else if (y > model.maxWorldY) {
      y -= model.worldHeight;
    }
  }
  
  
  void tick() {
    forward(size * 0.2);
    left(_turn);
    if (Agent.rnd.nextInt(100) > 98) {
      _turn = Agent.rnd.nextDouble() * 6.0 - 3.0;
    }
  }
  
  
  void draw(CanvasRenderingContext2D ctx) {
    if (dead) return;
    num iw = size;
    num ih = size;
    ctx.drawImageScaled(img, -iw/2, -ih/2, iw, ih);
  }
}
