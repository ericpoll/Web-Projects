$(document).ready(function () {
  $("#randomcolor").click(function () {
    var ranhexnum = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $("body").css("background-color",ranhexnum);
  });
});
