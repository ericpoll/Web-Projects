$(document).ready(function () {

  function createLight() {
    var colorarray=["red","green","blue","teal","yellow","orange","pink","magenta","purple","gold"];
    var posx = (Math.random() * ($(document).width() - 100)).toFixed();
    var posy = (Math.random() * ($(document).height() - 100)).toFixed();
    var lightdiv= $("<div />",{
      "class": "light"
    });
    lightdiv.css("background-color",colorarray[Math.floor((Math.random() * colorarray.length) + 0)]);
    lightdiv.css("position","absolute");
    lightdiv.css("left",posx + "px");
    lightdiv.css("top",posy + "px");
    $("body").append(lightdiv).fadeIn(1000).delay(200).fadeOut(500,function (){
      $("div").remove(); //remove appended div before the next one is created
    });
  }

  setInterval(function () {
    createLight();
  },500); //loop indefinitely every 500ms
});
