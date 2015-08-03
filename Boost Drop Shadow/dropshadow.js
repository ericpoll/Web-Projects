$(document).ready(function () {

var spread=0.2;
function boostShadow() {
  spread= spread + 0.5;
  sdisplay=spread.toString() + "px ";
  $("img").css("box-shadow","0px 0px " + "5px " + spread +"5px #5c5a57");
}

  $("img").hover(function () {
    $("img").css("cursor","pointer");
  });

  $("img").on("click",function () {
    boostShadow();
  });
});
