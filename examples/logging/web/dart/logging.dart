part of DesertBeetles;

class Log {
  String appId;
  String postUrl;
  Map data;

  String imagePostUrl = "http://54.69.228.220/reese/image";
  
  String workLogPostUrl = "http://54.69.228.220/reese/postwork";

  //Constructor for log object
  Log(this.appId, this.postUrl, this.data);


  void postFrogPondWork() {

    //In real code would do all 4 images here.  For testing, I'm just doing 2 and repeating
    CanvasElement canv = querySelector("#beetle-workspace");
    String wdata = canv.toDataUrl();
    CanvasElement tcanv = querySelector("#beetle-turtles");
    String idata = tcanv.toDataUrl();

    FormData fdata = new FormData();

    fdata.append('groupId', "agroupid");
    fdata.append('frogCount', "100");
    fdata.append('tickCount', "300");
    fdata.append('avgSize', "1.4");
    fdata.append('settings', "[blah:3]");
    fdata.append('queryString', "HSC");
    fdata.append('userName', "corey");
    
    fdata.append('plotImage', idata);
    fdata.append('histogramImage', wdata);
    fdata.append('worldImage', idata);
    fdata.append('programImage', wdata);

    /* DJANGO CODE WILL EXPECT...
      groupID = request_data['groupId']
      frogCount = request_data['frogCount']
      tickCount = request_data['tickCount']
      avgSize = request_data['avgSize']
      settings = request_data['settings']
      plotImage = request_data['plotImage']
      histogramImage = request_data['histogramImage']
      worldImage = request_data['worldImage']
      programImage = request_data['programImage']
      queryString = request_data['queryString']
      userName = request_data['userName']
     */
    HttpRequest.request(workLogPostUrl, method: 'POST', sendData: fdata).then((HttpRequest r) {
      print("note: request sent");
    });
  }

  void postImageData(String annotation) {

    ImageElement wdata = new ImageElement();
    CanvasElement canv = querySelector("#beetle-workspace");
    wdata.src = canv.toDataUrl("image/png");


    CanvasElement tcanv = querySelector("#beetle-turtles");
    CanvasRenderingContext2D tcontext = tcanv.getContext("2d");
    //ImageData tdata = tcontext.getImageData(0,0,tcanv.width,tcanv.height);
    //tcontext.putImageData(tdata, 0 , 0);
    tcontext.drawImage(wdata, 0, 0);

    String idata = tcanv.toDataUrl();

    FormData fdata = new FormData();

    fdata.append('app_id', "BOTHLAYERS");
    fdata.append('app_annotation', annotation);
    fdata.append('app_imagedata', idata);


    HttpRequest.request(imagePostUrl, method: 'POST', sendData: fdata).then((HttpRequest r) {
      print("note: request sent");
    });
  }


  void OLDpostImageData(String annotation) {
    CanvasElement canv = querySelector("#beetle-workspace");
    String idata = canv.toDataUrl();

    FormData fdata = new FormData();

    fdata.append('app_id', "REESE");
    fdata.append('app_annotation', annotation);
    fdata.append('app_imagedata', idata);


    HttpRequest.request(imagePostUrl, method: 'POST', sendData: fdata).then((HttpRequest r) {
      print("note: request sent");
    });
  }

  void postData() {
    HttpRequest request = new HttpRequest(); // create a new XHR

    // add an event handler that is called when the request finishes
    request.onReadyStateChange.listen((_) {
      if (request.readyState == HttpRequest.DONE && (request.status == 200 || request.status == 0)) {
        // data saved OK.
        print(request.responseText); // output the response from the server
      }
    });

    //setup to POST data to the server
    request.open("POST", postUrl, async: false);
    //request.open("POST","http://127.0.0.1:8000/reese/", async: true);

    //we can set the content type to "application/x-www-form-urlencoded; charset=UTF-8"
    //otherwise the Django side gets an empty POST Query dictionary,
    //If we set the content-type to application/json, we can use the request.body
    //variable in Django
    //request.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");

    request.setRequestHeader("Content-type", "application/json");

    request.send(JSON.encode(data)); // perform the async POST
  }

  void setData(var msg) {
    //Store form data
    data['app_id'] = appId;
    data['app_data'] = msg;
  }
}
