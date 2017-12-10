

var config = { "blocks" : [ ] };
var pcount = 0;   // parameter count


$(function () {

  //--------------------------------------
  // Load the block template dialog
  //--------------------------------------
  $("#block-dialog").loadTemplate("templates/block.html", { },
  {
    success : loadBlockTemplate
  });

  //--------------------------------------
  // Refresh callback
  //--------------------------------------
  $("#refresh-button").click(function() {
    try {
      var json = JSON.parse($("#json-preview").val());
      if (json["blocks"] instanceof Array) {
        config = json;
        initWorkspace();
      }
    }
    catch (err) { }
  });

  //--------------------------------------
  // Setup the blocks workspace
  //--------------------------------------
  initWorkspace();

  NetTango.onProgramChanged("preview", function(canvasId) {
    var lang = $("#code-formatter").val();
    var code = NetTango.exportCode(canvasId, lang);
    $("#code-preview").text(code);
  });

  $("#code-formatter").change(function() {
    var lang = $("#code-formatter").val();
    var code = NetTango.exportCode("preview", lang);
    $("#code-preview").text(code);
  });
});


//------------------------------------------------------------------------
// Trigger popovers, buttons, and onChange events 
//------------------------------------------------------------------------
function loadBlockTemplate() {

  //--------------------------------
  // Trigger popovers
  //--------------------------------
  $(".nt-field").each(function (index) {
    var popover = $(this).data('popover');
    $(this).popover({
      trigger: 'focus', 
      html: true,
      animation: false,
      content: popover
    })
    .blur(function () { $(this).popover('hide'); });
  });
  /*
  $(".nt-field").popover({
    trigger: 'focus', 
    html: true,
    content: $(this).data('popover')
  })
  .blur(function () { $(this).popover('hide'); });
  */

  $("#add-block").click(updateBlockList);
  $('#add-parameter').click(addParameter);
  $('#add-property').click(addParameter);
  $('#add-clause').click(addClause);

  $('#clause-options').hide();
  $('#block-control').change(function() { 
    if ($(this).val() == "Yes") {
      $('#clause-options').show();
    } else {
      $('#clause-options').hide();
    }
  });
}


//------------------------------------------------------------------------
// Add a clause to the block
//------------------------------------------------------------------------
function addClause() {

  var pid = "clause" + pcount;

  $("#clause-list")
    .append($("<div class='clause-group' id='" + pid + "-row' data-prefix='" + pid + "'></div>")
      .loadTemplate("templates/clause.html",
        {
          "clause-name" : (pid + "-name"),
          "clause-format" : (pid + "-format"),
          "clause-delete" : (pid + "-delete")
        },
        { async : false }
      )
    );

  $("#" + pid + "-delete").click(function () {
    $("#" + pid + "-row").remove();
  });

  pcount++;
}


//------------------------------------------------------------------------
// Add a parameter or property to the block
//------------------------------------------------------------------------
function addParameter() {

  var prefix = $(this).data('prefix');
  var pid = prefix + pcount;

  $("#" + prefix + "-list")
    .append($("<div class='" + prefix + "-group' id='" + pid + "-row' data-prefix='" + pid + "'></div>")
      .loadTemplate("templates/parameter.html", 
        {
          "param-name" : (pid + "-name"),
          "param-type" : (pid + "-type"),
          "param-unit" : (pid + "-unit"),
          "param-default" : (pid + "-default"),
          "param-delete" : (pid + "-delete"),
          "param-min" : (pid + "-min"),
          "param-max" : (pid + "-max"),
          "param-step" : (pid + "-step"),
          "param-options" : (pid + "-options"),
          "param-range-options" : (pid + "-range-options"),
          "param-select-options" : (pid + "-select-options")
        },
        { async: false }
      )
    );

  $("#" + pid + "-range-options").hide();
  $("#" + pid + "-select-options").hide();

  $("#" + pid + "-type").change(function() {
    if ($(this).val() == "range") {
      $("#" + pid + "-range-options").show();
    } else {
      $("#" + pid + "-range-options").hide();
    }
    if ($(this).val() == "select") {
      $("#" + pid + "-select-options").show();
    } else {
      $("#" + pid + "-select-options").hide();
    }
  });
  $("#" + pid + "-delete").click(function () {
    $("#" + pid + "-row").remove();
  });

  pcount++;
}


//------------------------------------------------------------------------
// (Re)initialize the workspace
//------------------------------------------------------------------------
function initWorkspace() {
  // resize canvas
  $("#preview").attr("width", "500");
  $("#preview").attr("height", "500");

  NetTango.init("preview", config);
  $("#json-preview").text(JSON.stringify(config, null, 3));
}



//------------------------------------------------------------------------
// Update preview of the block
//------------------------------------------------------------------------
function updateBlockList() {

  //--------------------------------
  // convert form data to a map
  //--------------------------------
  var formArray = $("#block-form").serializeArray();
  var fob = { };
  for (var i=0; i<formArray.length; i++) {
    fob[formArray[i]['name']] = formArray[i]['value'].trim();
  }


  //--------------------------------
  // create block object
  //--------------------------------
  var ntBlock = { };
  ntBlock['action'] = fob['action'] ? fob['action'] : "My Block";
  if (fob['type']) ntBlock['type'] = fob['type'];
  if (fob['format']) ntBlock['format'] = fob['format'];
  if (fob['limit']) ntBlock['limit'] = parseInt(fob['limit']);
  if (fob['blockColor'] != "#6b9bc3") ntBlock["blockColor"] = fob['blockColor'];
  if (fob['textColor'] != "#ffffff") ntBlock["textColor"] = fob['textColor'];
  if (fob['borderColor'] != "#ffffff") ntBlock["borderColor"] = fob['borderColor'];
  if (fob['start'] == "Yes") ntBlock["start"] = true;
  if (fob['type'] == "nlogo:procedure") ntBlock["required"] = true;
  if (fob['control'] == "Yes" || fob['clause']) ntBlock["clauses"] = [];


  //--------------------------------
  // build font spec
  //--------------------------------
  var ntFont = fob['font-weight'] + " " + fob['font-size'] + "px " + fob['font'];
  if (ntFont != "400 14px 'Poppins', sans-serif") {
    ntBlock['font'] = ntFont;
  }


  //--------------------------------
  // parameter list
  //--------------------------------
  var params = [];
  $(".param-group").each(function(index) {
    var param = loadParameter($(this).data('prefix'));
    if (param) params.push(param);
  });
  $(".param-group").remove();
  if (params.length > 0) ntBlock['params'] = params;


  //--------------------------------
  // property list
  //--------------------------------
  var props = [];
  $(".prop-group").each(function(index) {
    var prop = loadParameter($(this).data('prefix'));
    if (prop) props.push(prop);
  });
  $(".prop-group").remove();
  if (props.length > 0) ntBlock['properties'] = props;


  //--------------------------------
  // clause list
  //--------------------------------
  var clauses = [];
  $(".clause-group").each(function (index) {
    var clause = { };
    var prefix = $(this).data('prefix');
    var cname = $("#" + prefix + "-name").val().trim();
    var cformat = $("#" + prefix + "-format").val().trim();
    if (cname) {
      clause["action"] = cname;
      if (cformat) clause["format"] = cformat;
      clauses.push(clause);
    }
  });
  $(".clause-group").remove();
  if (clauses.length > 0) ntBlock['clauses'] = clauses;


  //--------------------------------
  // add block to the list of blocks
  //--------------------------------
  config["blocks"].push(ntBlock);
  initWorkspace();
  
}


//------------------------------------------------------------------------
// Load parameter or property values from the form
//------------------------------------------------------------------------
function loadParameter(prefix) {
  var param = { };
  var pname = $("#" + prefix + "-name").val().trim();
  var ptype = $("#" + prefix + "-type").val();
  var punit = $("#" + prefix + "-unit").val();
  var pdefault = $("#" + prefix + "-default").val();
  var pmin = $("#" + prefix + "-min").val();
  var pmax = $("#" + prefix + "-max").val();
  var pstep = $("#" + prefix + "-step").val();
  var popts = $("#" + prefix + "-options").val();

  if (pname) {
    param['name'] = pname;
    param['type'] = ptype;
    if (punit) param['unit'] = punit;
    if (pdefault) param['default'] = pdefault;
    if (ptype == "range") {
      if (pmin) param['min'] = parseFloat(pmin);
      if (pmax) param['max'] = parseFloat(pmax);
      if (pstep) param['step'] = parseFloat(pstep);
    }
    if (ptype == "select") {
      param['values'] = popts.split('\n');
    }
    return param;
  }
  return null;
}
