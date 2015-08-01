$(document).ready(function () {

  function setColor () {
    var ranhexnum = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    return ranhexnum;
  }

  function setFont () {
    var font = Math.floor((Math.random() * 36) + 24); //random int from 1-36
    font=font.toString() + "px";
    return font;
  }

  function setRadius() {
    var radius = Math.floor((Math.random() * 12) + 0);
    radius=radius.toString() + "px";
    return radius;
  }

  function setposWidth() {
    var poswidth = Math.floor((Math.random() * (window.innerWidth - 100) + 1));
    poswidth=poswidth.toString() + "px";
    return poswidth;
  }

  function setposHeight() {
    var posheight = Math.floor((Math.random() * (window.innerHeight - 100) + 1));
    posheight=posheight.toString() + "px";
    return posheight;
  }

  $(".clickme").hover(function () {
    $(".clickme").css("cursor","pointer");
  });

  $(".clickme").click(function () {
    $(".clickme").css("background-color",setColor());
    $(".clickme").css("color",setColor());
    $(".clickme").css("font-size",setFont());
    $(".clickme").css("border-radius",setRadius());
    $("#container").css("top",setposHeight());
    $("#container").css("bottom",setposHeight());
    $("#container").css("left",setposWidth());
    $("#container").css("right",setposHeight());


  });

});
