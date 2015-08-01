var correct=0; //counter for correct guesses
var incorrect=0; //counter for incorrect guesses

$(document).ready(function () {

  $("#start").hover ( function () {
    $("#start").css("cursor","pointer");
  });

  $("#start").click(function () {
    $("#before").css("display","none");
    $("#after").css("display", "inline");
  });

  $("button").hover(function () {
    $(this).css("cursor","pointer");
  });

function randnum() { //generate random number between 1 and 1000
  var num=Math.floor((Math.random() * 1000) + 1);
  $("#curnum").text(num);
}

function greatjob() {
  $("#message").fadeIn();
  $("#message").text("Great Job!");
  $("#message").fadeOut(2000);
}

function notquite() {
  $("#message").fadeIn();
  $("#message").text("Not Quite!");
  $("#message").fadeOut(2000);
}

randnum(); //generate initial random number

$("#fizz").click(function () {
  if (($("#curnum").html() % 3 === 0) && ($("#curnum").html() % 5 === 0))
  {
      incorrect=incorrect+1;
      $("#incorrect").text(incorrect);
      notquite();
      randnum();
  }
  else if ($("#curnum").html() % 3 != 0)
  {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
  else {
    correct=correct+1;
    $("#correct").text(correct);
    greatjob();
    randnum();
  }
});

$("#buzz").click(function () {
  if (($("#curnum").html() % 5 === 0) && ($("#curnum").html() % 3 === 0))
  {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
  else if ($("#curnum").html() % 5 != 0)
  {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
  else {
    correct=correct+1;
    $("#correct").text(correct);
    greatjob();
    randnum();
  }
});

$("#fizzbuzz").click(function () {
  if (($("#curnum").html() % 5 === 0) && ($("#curnum").html() % 3 === 0))
  {
    correct=correct+1;
    $("#correct").text(correct);
    greatjob();
    randnum();
  }
  else {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
});

$("#pass").click(function () {
  if ($("#curnum").html() % 3 === 0)
  {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
  else if ($("#curnum").html() % 5 === 0)
  {
    incorrect=incorrect+1;
    $("#incorrect").text(incorrect);
    notquite();
    randnum();
  }
  else {
    correct=correct+1;
    $("#correct").text(correct);
    greatjob();
    randnum();
  }
});
});
