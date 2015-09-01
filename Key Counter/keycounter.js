$(document).ready(function () {

    $("body").keydown(function (event) { //check for keydown
      if (event.which == 40) {
        var num=$("#container").text();
        var convnum=parseInt(num,10);
        convnum=convnum-1;
        $("#container").text(convnum);
      }
    });

    var counter=setInterval(function () {
      var num=$("#container").text();
      var convnum=parseInt(num,10); //convert to base ten integer
      convnum=convnum+1;
      if (convnum === 100) {
        clearInterval(counter); //stop on end condition
        $("#message").text("You lose! Better luck next time!");
        $('<br />').appendTo("#message");
        $('<a href="keycounter.html">Try again?</a>').appendTo("#message");
      }
      $("#container").text(convnum);
    },50); //update every 50ms for fast response
});
