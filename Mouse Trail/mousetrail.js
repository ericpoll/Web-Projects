$(document).ready(function () {

    addEventListener("mousemove",function(event) {
      var mousearray=["#part1"]; //array of css ids
      moveDiv(mousearray[0],event.pageX,event.pageY); //pass data to moveDiv
    });

    function moveDiv(element,xpos,ypos) {
      var moveloop=setTimeout(function () {
        $(element).css("left",xpos -25);
        $(element).css("top",ypos -25);
        $(element).css({left:xpos-25,top:ypos-25}).fadeOut(1000).fadeIn(1000);
      },60);
    }
});
