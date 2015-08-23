$(document).ready(function () {
  $("#btn").hover(function () {
    $("#btn").css("cursor","pointer");
  });

  $("form").on("submit",function (e) {
    var textval=$("textarea").val(); //get input from textarea
    e.preventDefault(); //prevents page from refreshing
    $("#container").remove(); //remove original div container
    $("body").css("background-color","#000000");
    $("body").append('<div id="telecontainer"></div>');
    $("#telecontainer").text(textval); //put user input into teleprompter
  });
});
