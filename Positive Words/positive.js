$(document).ready(function () {
  $("#myinput").fancyInput(); //fancify input

  var messages=[ //array of display messages
    "That's awesome!",
    "That sounds really fun!",
    "Wow, I need to get out more often!",
    "Incredible!",
    "That's such an interesting hobby!",
    "That's some next level stuff right there!",
    "Keep doing awesome stuff!",
    "How are you so cool?"
  ];

  $("#submit").click(function () {
    var inputval=$("#myinput").val();

    if (inputval === "") {
      $("h1").text("Nothing? That's kinda boring... ");
    }
    else {
      $("h1").text(inputval + "? " + messages[messageSelect()]);
    }
  });

  function messageSelect() { //randomly select a message to display
    var selection=Math.floor((Math.random() * messages.length) + 0);
    return selection; //return local variable
  }

});
