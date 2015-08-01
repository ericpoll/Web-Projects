$(document).ready(function () {

  var speed=12;
  function changeSpeed() {
    speed = speed - 0.5;
    displayspeed=speed.toString() + "s infinite";
    $("#ball").css("-webkit-animation","bounce "+ displayspeed);
    $("#ball").css("-moz-animation","bounce " + displayspeed);
    $("#ball").css("-o-animation","bounce " + displayspeed);
    $("#ball").css("animation","bounce " + displayspeed);
  }

  $("#ball").hover(function () {
    $("#ball").css("cursor","pointer");
  });

  $("#ball").click(function () {
    changeSpeed();
  });
});
