part of DesertBeetles;

class Log{
  String appId;
  String postUrl;
  Map data;

  //Constructor for log object
  Log(this.appId,this.postUrl, this.data);

  void postData() {
    HttpRequest request = new HttpRequest(); // create a new XHR

    // add an event handler that is called when the request finishes
    request.onReadyStateChange.listen((_) {
      if (request.readyState == HttpRequest.DONE &&
         (request.status == 200 || request.status == 0)) {
        // data saved OK.
        print(request.responseText); // output the response from the server
      }
    });

    //setup to POST data to the server
    request.open("POST",postUrl, async: false);
    //request.open("POST","http://127.0.0.1:8000/reese/", async: true);

    //we can set the content type to "application/x-www-form-urlencoded; charset=UTF-8"
    //otherwise the Django side gets an empty POST Query dictionary,
    //If we set the content-type to application/json, we can use the request.body
    //variable in Django
    //request.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");

    request.setRequestHeader("Content-type","application/json");

    request.send(JSON.encode(data)); // perform the async POST
  }

  void setData(var msg){
    //Store form data
    data['app_id'] = appId;
    data['app_data'] = msg;
  }
}

