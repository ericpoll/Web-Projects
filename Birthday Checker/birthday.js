$(document).ready(function () {
  $("#birthdate").datepicker({ //create jquery ui datepicker
    changeMonth:true,
    changeYear:true,
    yearRange:"1900:2015"
  });

  $("form").on("submit",function(event) {
    event.preventDefault(); //prevent auto refresh
    checkDate();
  });

  function checkDate() {
    var currdate=new Date(); //create Date object
    var curday=currdate.getDate();
    var curmonth=currdate.getMonth() + 1; //+1 for weird formatting
    var curyear=currdate.getFullYear();

    var userdate=$("#birthdate").val();
    var userday=userdate.slice(3,5); //extracts the input day
    var usermonth=userdate.slice(0,2); //extracts the input month
    var useryear=userdate.slice(6); //extracts the input year
    var userage=eval(curyear - useryear); //get the age of the user

    if ((userday == curday) && (usermonth == curmonth)) {
      displayBirthday();
      $('<p></p>').text("Congratulations! You are now" + userage + "years old.");
    }
    else {
      $("header").text("Aww, no birthday today :(");
    }
  }

  function displayBirthday() {
    var bcolors=["red","orange","yellow","green","blue","indigo","violet"];
    //7 rainbow colors for the text
    var happy=["H","a","p","p","y"];
    var birthday=["B","i","r","t","h","d","a","y","!"];

    $("header").text("");
    for (var i=0; i < happy.length; i++) {
      $('<span></span>').text(happy[i]).addClass(bcolors[i]).appendTo("header");
    }
    $('<span></span').text(" ").appendTo("header");
    for (var j=0; j < birthday.length; j++) {
      $('<span></span>').text(birthday[j]).addClass(bcolors[j]).appendTo("header");
    }
  }
});
