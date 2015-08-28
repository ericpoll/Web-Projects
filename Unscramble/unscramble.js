$(document).ready(function () {

  $("#start").click(function () {
    score=0;
    $("#messagecontainer").remove();
    $('<div id="wordcontainer"></div>').appendTo("body");
    $('<div id="scorecontainer"></div>').appendTo("body");
    $("#scorecontainer").text("Score:" + score);
    $('<form></form>').appendTo("body");
    $('<input id="inputguess" type="text" placeholder="Enter your guess here">').appendTo("form");
    $('<input id="sbtn" type="submit" value="Submit">').appendTo("form");
    $('<div id="correctword"></div>').appendTo("body");

    wordGen();
    resetGuess();
  });

  $("body").on("submit","form",function(e) { //need to target body due to late form creation
    e.preventDefault(); //prevent page from refreshing
    checkInput();
  });

  function resetGuess() {
     guesses=3;
   }

  function checkInput() {
     var userinput=$("#inputguess").val();

     if (userinput != theword.scrword) {
       guesses=guesses-1;

       if (guesses === 0) { //user is out of guesses
         $("#correctword").css("display","block");
         $("#correctword").text("The correct word was " + theword.scrword).fadeOut(3500);
         wordGen(); //bring in a new scrambled word
         resetGuess();
         score=score-1;
         $("#scorecontainer").text("Score:" + score);
       }
     }

    else {
         $("#correctword").css("display","block");
         $("#correctword").text("You are correct!").fadeOut(3500);
         wordGen();
         resetGuess();
         score=score+1;
         $("#scorecontainer").text("Score:" + score);
    }
   }

  function wordGen() { //grab a new word
    theword=new Scramble();
    $("#wordcontainer").text(theword.scrambleWord());
  }

  var Scramble=function () { //Scramble object
    this.scrword=wordarray[Math.floor(Math.random() * wordarray.length)];
    this.scrambleWord=function () { //scrambleWord method shuffles characters around
    var scrambled=[];
      for (var i=0; i < this.scrword.length; i++) {
        scrambled[i]=this.scrword.charAt(i);
      }
      for (var j=0; j < this.scrword.length; j++) {
        var num=Math.floor(Math.random() * this.scrword.length);
        var temp=scrambled[j];
        scrambled[j]=scrambled[num];
        scrambled[num]=temp;
      }
      return scrambled.join(" "); //remove delimiting commas from result
    };
  };
});
