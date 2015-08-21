$(document).ready(function () {

  $(".buttons").hover(function () {
    $(".buttons").css("cursor","pointer");
  });

  $(".buttons").on("mousedown",function () {
    $(this).css("border-style","inset");
  });
  $(".buttons").on("mouseup",function () {
    $(this).css("border-style","outset");
  });

  $(".buttons").click(function () {
    var info=$(this).text();
    $("#display").text($("#display").text() + info);
  });

  $("#AC").click(function () {
    $("#display").text(""); /*clear the display*/
  });

  $("#clear").click(function () {
    var original=$("#display").text();
    var sliced=original.slice(0,original.length - 2); /*remove last character*/
    $("#display").text(sliced); /*set the display*/
  });

  $("#subtract").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length -1); //slice off "-" for accurate check
    var operators=["+","-","*","/"];
    var lcharval=origslice.charAt(origslice.length -1); //get the true last char

    if (operators.indexOf(lcharval) != -1) { //if last char was an operator, don't allow another
      $("#display").text(origslice);
    }
});

  $("#add").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length -1); //slice off "+" for accurate check
    var operators=["+","-","*","/"];
    var lcharval=origslice.charAt(origslice.length -1); //get the true last char

    if (operators.indexOf(lcharval) != -1) {
      $("#display").text(origslice);
    }
  });

  $("#multiply").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length -1); //slice off "*" for accurate check
    var operators=["+","-","*","/"];
    var lcharval=origslice.charAt(origslice.length -1); //get the true last char

    if (operators.indexOf(lcharval) != -1) {
      $("#display").text(origslice);
    }
  });

  $("#divide").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length -1); //slice off "/" for accurate check
    var operators=["+","-","*","/"];
    var lcharval=origslice.charAt(origslice.length -1); //get the true last char

    if (operators.indexOf(lcharval) != -1) {
      $("#display").text(origslice);
    }
  });

  $("#decimal").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length -1); //slice off "." for accurate check
    var operators=["."];
    var lcharval=origslice.charAt(origslice.length -1); //get the true last char

    if (operators.indexOf(lcharval) != -1) {
      $("#display").text(origslice);
    }
  });

  $("#equals").click(function () {
    var orig=$("#display").text();
    var origslice=orig.slice(0,orig.length - 1);
    var operators=["+","-","*","/"];
    var lcharval=origslice.charAt(origslice.length -1);

    if (origslice === "" || origslice === null || origslice === undefined || operators.indexOf(lcharval) != -1) {
        $("#display").text("");
    }

    var evaluated=eval(origslice);
    $("#display").text(evaluated);
  });

});
