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

Random rand = new Random();


/**
 * Is the given flag set to true in the URL query string?
 */
bool isFlagSet(String name) {
  return window.location.search.indexOf("${name}=true") > 0;
}


/**
 * Detects whether or not this is an iPad based on the user-agent string
 */
bool isIPad() {
  return window.navigator.userAgent.contains("iPad");
}


/**
 * Binds a click event to a button
 */
void bindClickEvent(String id, Function callback) {
  Element element = querySelector("#${id}");
  if (element != null) {
    if (!isIPad()) {
      element.onClick.listen(callback);
    } else {
      element.onTouchStart.listen(callback);    
    }
  }
}


/**
 * Bind click event to all buttons matching the given class name
 */
void bindClickEvents(String classname, Function callback) {
  var buttons = querySelectorAll(".${classname}");
  for (Element element in buttons) {
    if (!isIPad()) {
      element.onClick.listen(callback);
    } else {
      element.onTouchStart.listen(callback);
    }
  }
}


/**
 * Adds a class to a DOM element
 */
void addHtmlClass(String id, String cls) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.classes.add(cls);
  }
}


/**
 * Removes a class from a DOM element
 */
void removeHtmlClass(String id, String cls) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.classes.remove(cls);
  }
}


/**
 * Sets a class for a DOM element
 */
void setHtmlClass(String id, String cls) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.className = cls;
  }
}


/**
 * Toggles a CSS class for a DOM element
 */
void toggleHtmlClass(String id, String cls) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.classes.toggle(cls);
  }
}


/**
 * Add an attribute to an HTML tag
 */
void setHtmlAttribute(String id, String attrib, String value) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.attributes[attrib] = value;
  }
}


/**
 * Remove an attribute from an HTML tag
 */
void removeHtmlAttribute(String id, String attrib) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.attributes.remove(attrib);
  }
}


/**
 * Sets the inner HTML for the given DOM element 
 */
void setHtmlText(String id, String text) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.innerHtml = text;
  }
}


/**
 * Sets the inner HTML for the given DOM element 
 */
void appendHtmlText(String id, String text) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.innerHtml = el.innerHtml + text;
  }
}


/*
 * Sets the visibility state for the given DOM element
 */
void setHtmlVisibility(String id, bool visible) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.style.visibility = visible ? "visible" : "hidden";
  }
}


/*
 * Sets the opacity state for the given DOM element
 */
void setHtmlOpacity(String id, double opacity) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.style.opacity = "${opacity}";
  }
}


/*
 * Sets the background image for a DOM element
 */
void setHtmlBackground(String id, String url) {
  Element el = querySelector("#${id}");
  if (el != null) {
    el.style.backgroundImage = "url('${url}')";
  }
}


void disableHtmlButton(String id) {
  ButtonElement el = querySelector("#${id}");
  if (el != null) {
    el.disabled = true;
  }
}


void enableHtmlButton(String id) {
  ButtonElement el = querySelector("#${id}");
  if (el != null) {
    el.disabled = false;
  }
}


void drawBubble(CanvasRenderingContext2D ctx, num x, num y, num w, num h, num radius)
{
  num r = x + w;
  num b = y + h;
  ctx.beginPath();
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, b - radius);
  ctx.quadraticCurveTo(r, b, r - radius, b);
  ctx.lineTo(x+radius * 2, b);
  ctx.lineTo(x+radius, b + radius);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
}


void roundRect(CanvasRenderingContext2D ctx, num x, num y, num w, num h, num r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}


void drawLineArrow(CanvasRenderingContext2D ctx,
                   num x0, num y0, num x1, num y1,
                   num width) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = width;
    ctx.lineCap = 'butt';
    ctx.stroke();
    
    double theta = atan2(x1 - x0, y1 - y0);
    num x2 = x1 + sin(theta) * width * 1.2;
    num y2 = y1 + cos(theta) * width * 1.2;
    num x3 = x1 + sin(theta + pi * 0.6) * width * 1.2;
    num y3 = y1 + cos(theta + pi * 0.6) * width * 1.2;
    num x4 = x1 + sin(theta - pi * 0.6) * width * 1.2;
    num y4 = y1 + cos(theta - pi * 0.6) * width * 1.2;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x4, y4);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

  
num distance(num x0, num y0, num x1, num y1) {
  return sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
}


/**
 * Helper function that parses an int from an object (usually a string)
 */
int toInt(var d, [ int defalutValue = 0 ]) {
  if (d == null) {
    return defalutValue;
  } 
  else if (d is int) {
    return d;
  } 
  else if (d is String) {
    try {
      return int.parse(d);
    } on Exception {
      return defalutValue;
    }
  }
  return defalutValue;
}


/**
 * Helper function that parses an int from an object (usually a string)
 */
num toNum(var d, [ num defalutValue = 0 ]) {
  if (d == null) {
    return defalutValue;
  } 
  else if (d is num) {
    return d;
  } 
  else if (d is String) {
    try {
      return num.parse(d);
    } on Exception {
      return defalutValue;
    }
  }
  return defalutValue;
}


/**
 * Helper function that parses a bool from an object (usually string or bool)
 */
bool toBool(var b, [bool defaultValue = false ]) {
  if (b == null) {
    return defaultValue;
  }
  else if (b is bool) {
    return b;
  }
  else if (b is String) {
    if (b.toLowerCase() == "true" || b.toLowerCase() == "t") {
      return true;
    } 
    else if (b.toLowerCase() == "false" || b.toLowerCase() == "f") {
      return false;
    }
  }
  return defaultValue;
}


/**
 * Helper function that converts a value to a string
 */
String toStr(var o, [ String defaultValue = "" ]) {
  return (o == null) ? defaultValue : o.toString();
}


/**
 * Returns a random normally distributed number (mean = 0; SD = 1)
 */
double nextGaussian() { 
  double c, x1, x2, rad;
  do {
    x1 = 2 * rand.nextDouble() - 1;
    x2 = 2 * rand.nextDouble() - 1;
    rad = x1 * x1 + x2 * x2;
  } while (rad >= 1 || rad == 0);
  c = sqrt(-2 * log(rad) / rad);
  return x1 * c;
}

