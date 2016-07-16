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



class RangeParameter extends Parameter {

  /* lowest possible value that the user can select */
  num minValue = 0;

  /* highest possible value that the user can select */
  num maxValue = 10;

  /* default start value */
  num initialValue = 0;

  /* step interval for selections */
  num stepSize = 1;

  /* short unit that will be displayed on the slider (e.g. %, px, m, mm, s) */
  String unit = "";

  /* descriptive label that will be displayed on the bottom left (e.g. degrees) */
  String label = "";

  /* used internally to draw the track for the thumb slider */
  num trackX = 0, trackY = 0;
  num trackW = 100;

  /* allow user to select a random value with a checkbox */
  bool randomOption = false;

  /* is the random box checked or not? */
  bool randomChecked = false;


  Random _rnd = new Random();

  /* control thumbs */
  RangeThumb _low, _high, _captureThumb = null;

  bool _captureRandom = false;



	RangeParameter(Block block, this.minValue, this.maxValue, this.stepSize, num initialValue) : super(block) {
    _low = new RangeThumb(initialValue, this);
    _high = new RangeThumb(maxValue, this);
    _high.visible = false;
	}


  RangeParameter.fromJSON(Block block, Map data) : super(block) {
    minValue = toNum(data["min"], 0);
    maxValue = toNum(data["max"], 10);
    stepSize = toNum(data["step"], 1);
    initialValue = toNum(data["default"], 5);
    randomOption = toBool(data["random"], false);
    unit = toStr(data["unit"], "");
    label = toStr(data["label"], "");
    _low = new RangeThumb(initialValue, this);
    _high = new RangeThumb(maxValue, this);
    _high.visible = false;
  }


	Parameter clone(Block parent) {
		RangeParameter p = new RangeParameter(parent, minValue, maxValue, stepSize, initialValue);
    p.randomOption = randomOption;
		p.unit = unit;
    p.label = label;
		copyTo(p);
		return p;
	}


	dynamic get value {
    if (randomOption && randomChecked) {
      return _low.value + _rnd.nextDouble() * (_high.value - _low.value);
    } else {
      return _low.value;
    }
	}


  String _valueToString(num v) {
    String s = v.toStringAsFixed(1);
    s = (s.endsWith('.0')) ? s.substring(0, s.length - 2) : s;
    return "$s$unit";
  }


	String get valueAsString {
    if (_low.value == _high.value || !randomChecked) {
      return _valueToString(_low.value);
    } else {
      return "between ${_valueToString(_low.value)} and ${_valueToString(_high.value)}";
    }
	}

  num get valueRange => maxValue - minValue;


/**
 * converts a screen pixel position to a range value
 */ 
  num _screenXToValue(num sx) {
    num p = (sx - trackX) / trackW;
    num v = min(maxValue, max(minValue, minValue + p * valueRange));
    int steps = valueRange ~/ stepSize;
    for (int i=0; i<steps; i++) {
      num bottom = minValue + i * stepSize;
      num top = minValue + (i+1) * stepSize;
      if (v >= bottom && v < top) {
        return (v - bottom < top - v) ? bottom : top;
      }
    }
    return maxValue;
  }


/**
 * converts a value to a screen pixel position
 */
  num _valueToScreenX(num v) {
    num p = (v - minValue) / valueRange;
    return min(trackX + trackW, max(trackX, trackX + trackW * p));
  }  


	void drawMenu(CanvasRenderingContext2D ctx) {
    menuW = 400; 
    menuH = 100;
    menuY = max(block.y + block.height/2 - menuH/2, 0);


    // outer blue box
    ctx.fillStyle = '#3399aa';
    ctx.strokeStyle = 'white';
    calloutRect(ctx, menuX, menuY, menuW, menuH, 10, block.y + centerY);
    ctx.fill();
    ctx.stroke();

    
    // inner white box
    num mx = menuX + 5;
    num my = menuY + 5;
    num mw = menuW - 10;
    num mh = menuH - 10;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.strokeStyle = 'rgba(0, 30, 50, 0.4)';
    roundRect(ctx, mx, my, mw, mh, 8);
    ctx.fill();
    ctx.stroke();


    // draw track
    trackX = mx + 25;
    trackW = mw - 50;
    trackY = menuY + 40;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(trackX, trackY - 1, trackW, 2);


    // draw the thumbs
    num rx1 = _valueToScreenX(_low.value);
    num rx2 = _valueToScreenX(_high.value);
    if (randomChecked) {
      ctx.fillStyle = '#5bc';
      ctx.beginPath();
      ctx.fillRect(rx1, trackY - 10, rx2 - rx1, 20);
    }
    _low.draw(ctx, trackY);
    _high.draw(ctx, trackY);


    // draw the current value
    ctx.fillStyle = '#39a';
    ctx.font = '400 13px Nunito, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    num tx = (_low.value == _high.value || !randomChecked) ? rx1 : trackX + trackW / 2;
   	ctx.fillText(valueAsString, tx, trackY - 13);
    if (label != null && label != "") {
    	ctx.textBaseline = 'middle';
    	ctx.textAlign = 'left';
    	ctx.fillText("${label}", trackX, menuY + menuH - 20);
    }


    // draw the random checkbox
    if (randomOption) {
      ctx.save();
      num cx = trackX + trackW;
      num cy = menuY + menuH - 20;
      ctx.fillStyle = '#39a';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText("random?", cx - 24, cy);
      ctx.beginPath();
      roundRect(ctx, cx - 19, cy - 9, 18, 18, 3);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#39a';
      ctx.fillStyle = (_captureRandom && isOverRandom()) ? '#39a' : 'rgba(51, 153, 170, 0.3)';
      ctx.fill();
      ctx.stroke();

      if (randomChecked) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#555';
        ctx.beginPath();
        ctx.moveTo(cx - 16, cy - 5);
        ctx.lineTo(cx - 10, cy + 4);
        ctx.lineTo(cx + 4, cy - 10);
        ctx.stroke();
      }
      ctx.restore();
    }    
	}


/**
 * is the touch on the track
 */  
  bool isOnTrack() {
  	return (
  		menuOpen && block.isInProgram &&
  		lastX >= trackX && lastX <= trackX + trackW &&
  		lastY >= trackY - 15 && lastY <= trackY + 15);
  }


/**
 * is the touch over the random checkbox?
 */
  bool isOverRandom() {
    num cx = trackX + trackW;
    num cy = menuY + menuH - 20;
    return (
      menuOpen && block.isInProgram &&
      lastX > cx - 90 && lastX < cx + 5 &&
      lastY > cy - 12 && lastY < cy + 12);
  }


	void touchUp(Contact c) {
		if (down && menuOpen) {
			dragging = false;
			down = false;
			if (_captureThumb != null) {

        if (_captureThumb.value != _captureThumb.lastValue) {
          changed = true;
          block.workspace.programChanged();
          menuOpen = false;
        }
				_captureThumb.lastValue = _captureThumb.value;
			} 
      else if (_captureRandom && isOverRandom()) {
        randomChecked = !randomChecked;
        _high.visible = randomChecked;
        _high.value = randomChecked ? min(maxValue, _low.value + stepSize * 4) : maxValue;
        _high.lastValue = _high.value;
        changed = true;
        block.workspace.programChanged();
      }
		}
		_captureThumb = null;
    _captureRandom = false;
		block.workspace.draw();
	}


  RangeThumb _getThumb(num tx, num ty) {
    if (_low.overlaps(tx, ty)) {
      return _low;
    } else if (_high.overlaps(tx, ty)) {
      return _high;
    } else {
      return null;
    }
  }


	bool touchDown(Contact c) {
		lastX = c.touchX;
		lastY = c.touchY;

		// if the menu is open
		if (menuOpen) {
			down = true;
			dragging = false;
      _captureThumb = _getThumb(c.touchX, c.touchY);
      if (isOverRandom()) {
        _captureRandom = true;
      }
		}

		// otherwise open the menu
		else {
			down = false;
			dragging = false;
			menuX = block.x + block.width + 30;
      block.workspace.closeAllParameterMenus();
			menuOpen = true;
			block.workspace._moveToTop(block);
		}
		block.workspace.draw();
		return true;
	}


	void touchDrag(Contact c) {
		dragging = true;
		lastX = c.touchX;
		lastY = c.touchY;
    if (_captureThumb != null) {
      num newValue = _screenXToValue(lastX);
      if ((_captureThumb == _low && newValue <= _high.value) ||
          (_captureThumb == _high && newValue >= _low.value)) {
        _captureThumb.value = newValue;
        block.workspace.programChanged();
      }
    }
		block.workspace.draw();
	}
}


class RangeThumb {
  num value = 0;
  num lastValue = 0;
  bool visible = true;

  RangeParameter param;

  RangeThumb(this.value, this.param) {
    lastValue = value;
  }


  bool overlaps(num tx, num ty) {
    if (!visible) return false;
    num x = param._valueToScreenX(value);
    num y = param.trackY;
    return (tx > x - 15 && tx < x + 15 && ty > y - 15 && ty < y + 15);
  }


  void draw(CanvasRenderingContext2D ctx, num trackY) {
    if (!visible) return;

    // draw the old thumb
    ctx.fillStyle = 'rgba(51, 153, 170, 0.5)';
    ctx.beginPath();
    num tx = param._valueToScreenX(lastValue);
    ctx.arc(tx, trackY, 10, 0, PI*2, true);
    ctx.fill();

    tx = param._valueToScreenX(value);
    ctx.fillStyle = '#39a';
    ctx.beginPath();
    ctx.arc(tx, trackY, 10, 0, PI*2, true);
    ctx.fill();
  }
}


