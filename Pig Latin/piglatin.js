$(document).ready(function (){


  $("button").click(function () {
    var inputstr = $("input").val();
    inputstr=inputstr.toString();
    inputstr.split();
    var vowel="yay";
    var consonant="ay";

    if (inputstr.match(/^[a-zA-Z][a-zA-Z]+$/) !== null)
    {
      if ((inputstr.charAt(0) === "a")  ||
          (inputstr.charAt(0) === "e")  ||
          (inputstr.charAt(0) === "i")  ||
          (inputstr.charAt(0) === "o")  ||
          (inputstr.charAt(0) === "u"))
           {
             var voutput = inputstr + vowel;
             $("#translated").html(voutput);
           }
      else
       {
         var coutput = inputstr.slice(1) + inputstr.charAt(0) + consonant;
         $("#translated").html(coutput);
       }
    }
else
{
  $("#translated").html("Please enter a valid word!");
}

  });

});
