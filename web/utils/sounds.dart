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

// At the moment this file isn't used by NetTango, so removed from the library and added
// the improrts to avoid extra errors by tooling.  -Jeremy B 2019-12

//part of NetTango;
import "dart:web_audio";
import "dart:html";

class Sounds {

  static AudioContext audio = new AudioContext();
  static Map sounds = new Map();
  static bool mute = false;


  static void loadSound(String name, String url) {
    if (!sounds.containsKey(name)) {
      HttpRequest request = new HttpRequest();
      request.open("GET", url, async: true);
      request.responseType = "arraybuffer";
      request.onLoad.listen((e) {
        try {
          audio.decodeAudioData(request.response).then((AudioBuffer buffer) {
            if (buffer != null) sounds[name] = buffer;
          });
        } catch (x) { ; }
      });
      request.onError.listen((e) => print("BufferLoader: XHR error"));
      request.send();
    }
  }


  static void playSound(String name) {
    if (sounds[name] != null && !mute) {
      AudioBufferSourceNode source = audio.createBufferSource();
      source.buffer = sounds[name];
      source.connectNode(audio.destination, 0, 0);
      source.loop = false;
      source.playbackRate.value = 1;
      source.start(0);
    }
  }
}
