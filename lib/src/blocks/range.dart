/*
 * NetTango
 * Copyright (c) 2015 Michael S. Horn, Uri Wilensky, and Corey Brady
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

	/* current value and last value set by the user */
	num _value = 0, _lastValue = 0;

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


	RangeParameter(Block block, this.minValue, this.maxValue, this.stepSize) : super(block) {
		_value = minValue;
		_lastValue = minValue;
	}


	Parameter clone(Block parent) {
		RangeParameter p = new RangeParameter(parent, minValue, maxValue, stepSize);
		p.stepSize = stepSize;
		p.randomOption = randomOption;
		p.unit = unit;
    p.label = label;
		copyTo(p);
		return p;
	}


	dynamic get value {
		if (randomOption && randomChecked) {
			return "random";
		} 
		else if (unit != null && unit != "") {
			return "${_valueToString(_value)}${unit}";
		}
		else {
			return _value;
		}
	}


  String _valueToString(num v) {
    String s = _value.toStringAsFixed(1);
    return (s.endsWith('.0')) ? s.substring(0, s.length - 2) : s;
  }


	String get valueAsString {
    return (value is String) ? value : _valueToString(_value);
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
    menuH = randomOption ? 90 : 80;
    menuY = max(block.y + block.height/2 - menuH/2, 0);

    ctx.fillStyle = '#3399aa';
    ctx.strokeStyle = 'white';
    calloutRect(ctx, menuX, menuY, menuW, menuH, 10, block.y + centerY);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.strokeStyle = 'rgba(0, 30, 50, 0.4)';
    num mx = menuX + 5;
    num my = menuY + 5;
    num mw = menuW - 10;
    num mh = menuH - 10;
    num tx;
    roundRect(ctx, mx, my, mw, mh, 8);
    ctx.fill();
    ctx.stroke();

    trackX = mx + 25;
    trackW = mw - 50;
    trackY = menuY + 40;

    // draw the track
    if (!randomOption || !randomChecked) {
    	ctx.fillStyle = '#aaa';
    	ctx.fillRect(trackX, trackY - 1, trackW, 2);
    }

    // draw the old thumb
    if (!randomOption || !randomChecked) {
    	tx = _valueToScreenX(_lastValue);
    	ctx.fillStyle = 'rgba(51, 153, 170, 0.5)';
    	ctx.beginPath();
    	ctx.arc(tx, trackY, 10, 0, PI*2, true);
    	ctx.fill();
    }

    // draw the current thumb
  	tx = _valueToScreenX(_value);
  	if (!randomOption || !randomChecked) {
  		ctx.fillStyle = '#39a';
  		ctx.beginPath();
    	ctx.arc(tx, trackY, 10, 0, PI*2, true);
    	ctx.fill();
    } else {
    	ctx.fillStyle = 'rgba(51, 153, 170, 0.5)';
    	ctx.beginPath();
    	roundRect(ctx, trackX, trackY - 10, trackW, 20, 10);
    	ctx.fill();
    }


    // draw the current value
    ctx.fillStyle = '#39a';
    ctx.font = '400 13px Nunito, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    if (!randomOption || !randomChecked) {
    	ctx.fillText("${valueAsString}", tx, trackY - 13);
    }
    else {
    	ctx.fillText("between ${minValue} and ${maxValue} ${unit}", trackX + trackW / 2, trackY - 13);
    }
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
 * is the touch over the random checkbox?
 */
  bool isOverRandom() {
  	num cx = trackX + trackW;
   	num cy = menuY + menuH - 20;
  	return (
  		menuOpen &&	block.isInProgram &&
  		lastX > cx - 90 && lastX < cx + 5 &&
  		lastY > cy - 12 && lastY < cy + 12);
  }


/**
 * is the touch over the thumb
 */
  bool isOverThumb() {
  	num tx = _valueToScreenX(_value);
  	return (
  		menuOpen && block.isInProgram &&
  		lastX > tx - 15 && 
  		lastX < tx + 15 &&
  		lastY > trackY - 15 && 
  		lastY < trackY + 15);
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


	bool _captureThumb = false;
	bool _captureRandom = false;


	void touchUp(Contact c) {
		if (down && menuOpen) {
			dragging = false;
			down = false;
			if (_captureThumb) {
				if (_value != _lastValue) changed = true;
				_lastValue = _value;
				menuOpen = false;
			} 
			else if (_captureRandom && isOverRandom()) {
				randomChecked = !randomChecked;
				changed = true;
			}
		}
		_captureThumb = false;
		_captureRandom = false;
		block.workspace.draw();
	}


	bool touchDown(Contact c) {
		lastX = c.touchX;
		lastY = c.touchY;

		// if the menu is open
		if (menuOpen) {
			down = true;
			dragging = false;
			if (isOverRandom()) {
				_captureRandom = true;
			}
			else if (isOverThumb()) {
				_captureThumb = true;
			}
			else if (isOnTrack()) {
				_value = _screenXToValue(lastX);
				_captureThumb = true;
			}
		}

		// otherwise open the menu
		else {
			down = false;
			dragging = false;
			menuX = block.x + block.width + 30;
			menuOpen = true;
			block.workspace.moveToTop(block);
		}
		block.workspace.draw();
		return true;
	}


	void touchDrag(Contact c) {
		dragging = true;
		lastX = c.touchX;
		lastY = c.touchY;
    if (_captureThumb) {
    	_value = _screenXToValue(lastX);
    }
		block.workspace.draw();
	}
}
