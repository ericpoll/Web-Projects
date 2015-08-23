$(document).ready(function () {

  $(".btn").hover(function () {
    $(".btn").css("cursor","pointer");
  });

  $("#catbtn").click(function () {
    $(".dog").remove(); //remove any elements with the dog class
    if ($("#container").children("img").hasClass("cat")) {
      return; //only allow 5 cats
    }
    else {
      for (var i=0; i < 5; i++) {
        $("#container").append('<img class="animate cat" src="images/cat.png" width="75" height="75" />');
    }
    }
  });

  $("#dogbtn").click(function () {
    $(".cat").remove(); //remove any elements with the cat class
    if ($("#container").children("img").hasClass("dog")) {
      return; //only allow 5 dogs
    }
    else {
      for (var i=0; i < 5; i++) {
        $("#container").append('<img class="animate dog" src="images/dog.png" width="75" height="75" />');
      }
    }
  });
});
