$(document).ready(function () {
  var date = new Date();
  var day = date.getDay();

  var messages = [
    "Sunday Funday!",
    "Hello Monday!",
    "It's only Tuesday?",
    "Wonderful Wednesday!",
    "Today is Thursday!",
    "Finally Friday!",
    "Sassy Saturday!"];

    $("#" + day).css("background-color","#779ecb");
    $(".message").text(messages[day]);
});
