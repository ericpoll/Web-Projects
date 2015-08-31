$(document).ready(function () {

  $("#switch").click(function () {
    var topactive=$("#switch").filter(".topbtn");
    var btmactive=$("#switch").filter(".btmbtn");

    if (topactive.length === 1) {
      $("#switch").removeClass("topbtn"); //remove the current arrow direction
      $("#switch").addClass("btmbtn");
      $("#container").slideUp("slow"); //slide form up to hide from view

    }
    else if (btmactive.length === 1) {
      $("#switch").removeClass("btmbtn");
      $("#switch").addClass("topbtn");
      $("#container").slideDown("slow");
    }
  });

  $("form").on("submit",function (e) {
    e.preventDefault(); //prevent page from refreshing
    var usrinput=$("#userinput").val(); //get form input
    $('<p class="textscroll"></p>').text(usrinput).appendTo($("body"));
  });

});
