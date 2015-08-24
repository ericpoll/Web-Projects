$(document).ready(function () {

  function placeLightning () {
    var posx = (Math.random() * ($(document).width() - 100)).toFixed();
    posx=posx.toString(); //random position for lightning strike
    posx=posx+"px";
    $("#lightning").css("margin-left",posx);
    $("#lightning").css("visibility","visible");
  }

  setInterval(placeLightning,1200);
});
