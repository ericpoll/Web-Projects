$(document).ready(function () {

  function makeAnagram() {
    var inputword = $("input").val(); //get contents of textbox
    inputword=inputword.toString();
    inputword=inputword.toLowerCase();
    inputword.split();

    if (inputword.match(/^[a-zA-Z]+$/)) //regexp to check for valid word
    {
      if (inputword.length === 1)
      {
        $("label").text(inputword); //one letter word, no anagram possible
      }
      else {
        var anagram=[];
        for (var i=0; i <inputword.length; i++)
        {
          anagram[i]=inputword.charAt(i);
        }
        for (var i=1; i < inputword.length; i++)
        {
          num=Math.floor(Math.random() * inputword.length);
          temp=anagram[i];
          anagram[i]=anagram[num];
          anagram[num]=temp
        }
        $("label").html(anagram);
      }
    }
    else {
      $("label").text("Please enter a valid word");
    }
  }

  $("button").hover(function () {
    $("button").css("cursor","pointer");
  });

  $("button").click(function () {
    makeAnagram();
  });
});
