$(document).ready(function () {
  var textval= $(".toggleswitch").text();

  $(".toggleswitch").hover(function () {
    $(".toggleswitch").css("cursor","pointer");
  });

  $(".toggleswitch").click(function () {

    if (textval === "OFF") {
      $(".toggleswitch").css("margin-top","0"); /*reset margin-top*/
      $(".toggleswitch").css("margin-bottom","auto");
      $(".toggleswitch").text("ON");
      textval=$(".toggleswitch").text();
      $(".lightbulb").attr("src","images/lighton.png");
      $("body").css("background-color","#fcfbe3");
    }
    else {
      $(".toggleswitch").css("margin-bottom","0"); /*reset margin-top*/
      $(".toggleswitch").css("margin-top","auto");
      $(".toggleswitch").text("OFF");
      textval=$(".toggleswitch").text();
      $(".lightbulb").attr("src","images/lightoff.png");
      $("body").css("background-color","#252425");
    }
  });
});
