/*
 * NetTango
 * Copyright (c) 2016 Michael S. Horn, Uri Wilensky, and Corey Brady
 * 
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu
 
 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */
part of NetTango;


class Color {
  
  int _r = 255, _g = 255, _b = 255, _a = 255;

   
  Color(this._r, this._g, this._b, this._a);
   
   
  Color clone() {
    return new Color(_r, _g, _b, _a);
  }
   
   
  void setColor(int r, int g, int b, int a) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a;
  }
   
   
  int get red => _r;
      set red(int r) { if (r >= 0) { this._r = r < 256? r : 255; }}

   
  int get green => _g;
      set green(int g) { if (g >= 0) { this._g = g < 256? g : 255; }}

      
  int get blue => _b;
      set blue(int b) { if (b >= 0) { this._b = b < 256? b : 255; }}

      
  int get alpha => _a;
      set alpha(int a) { if (a >= 0) { this._a = a < 256? a : 255; }}


/**
 * Converts to a CSS rgba string
 */
  String toString() {
    num ad = _a / 255;
    return "rgba($_r, $_g, $_b, $ad)";
  }
}
