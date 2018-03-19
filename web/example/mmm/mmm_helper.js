
// <script src="mmm_helper.js"></script>
// <link href="../css/codefirst.css" rel="stylesheet">

var mdown = false;
var dragged = false;

$(".netlogo-canvas")

.click(function() {
  if (!dragged) {
    window.procedures.mouseclick();
  }
  dragged = false;
})

.mousedown(function() {
  mdown = true;
})

.mousemove(function() {
  if (mdown) {
    dragged = true;
    window.procedures.mousedrag();
  }
})

.mouseup(function() {
  mdown = false;
});


$(function() {
  window.procedures.setup();
});
