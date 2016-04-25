/*
 * NetTango
 * Copyright (c) 2014 Michael S. Horn, Uri Wilensky, and Corey Brady
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


class Sounds {

  static AudioContext audio = new AudioContext();
  static Map sounds = new Map();
  static bool mute = false;


  static void loadSound(String name, [String dir = "sounds"]) {

    /*
    AudioElement audio = new AudioElement();
    audio.src = "$dir/$name.wav";
    sounds[name] = audio;
    */
    String url = "$dir/$name.wav";
    HttpRequest request = new HttpRequest();
    request.open("GET", url, async: true);
    request.responseType = "arraybuffer";
    request.onLoad.listen((e) {
      audio.decodeAudioData(request.response).then((AudioBuffer buffer) {
        if (buffer == null) {
          return;
        }
        sounds[name] = buffer;
      });      
    });
    request.onError.listen((e) => print("BufferLoader: XHR error"));
    request.send();

    /*
    HttpRequest http = new HttpRequest();
    http.responseType = "arraybuffer";
    http.onLoad.listen((e) {
      audio.decodeAudioData(
          http.response,
          (buffer) { sounds[name] = buffer; },
          (err) => print(err));
    });
    http.open('GET', "$dir/$name.wav");
    http.send();
    */

  }


  static void playSound(String name) {
    /*
    if (sounds[name] != null && !mute) {
      sounds[name].volume = 0.4;
      sounds[name].play();
    }
    */

    if (sounds[name] == null) return;
    AudioBufferSourceNode source = audio.createBufferSource();
    source.buffer = sounds[name];
    source.connectNode(audio.destination, 0, 0);
    source.loop = false;
    source.playbackRate.value = 1;
    source.start(0);

  }

}