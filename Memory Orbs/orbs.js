$(document).ready(function () {
  $("#intro").dialog({
    resizable:false,
    modal:true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });

  Array.prototype.min=function() { //modify so min can be used on arrays
    return Math.min.apply(Math,this);
  };

  $("#container").on("mouseenter",".orb",function () { //need to address parent container first
    $(this).css("cursor","pointer");

    if ($(this).data("num") === checkorb.min()) {
      $(this).addClass("active");
      var orbelem=checkorb.indexOf(checkorb.min()); //index of minimum value
      checkorb.splice(orbelem,1); //remove so the next minimum can be checked
    }

    else {
      $(".orb").removeClass("active");
      checkorb=orbarray.slice(); //reset checkorb
    }
  });

  $("#container").on("mouseleave",".orb",function () { //advance to next level on mouseleave
    var activeorbs=$(".orb").filter(".active");
    var activelength=activeorbs.length;
    if (activelength === numorbs && lvl < 8) {
      $(".orb").remove(); //remove all current orbs and update appropriate variables
      restoreArray();
      shuffleArray();
      updateLvl();
      updateOrbs();
      resetOrbs();
      createOrbs();
    }
    else if ((activelength === numorbs) && (lvl === 8)) { //winning condition
      $(".orb").remove();
      $("#level").text("");
      $("#container").text("Good Job! You Win! ");
      $('<a href="orbs.html">Play Again?</a>').appendTo($("#container"));
    }
  });

  var idarray=[1,2,3,4,5,6,7,8,9,10];
  function restoreArray() {
    idarray=[];
    idarray=[1,2,3,4,5,6,7,8,9,10];
  }
  function shuffleArray() {
    var i=0;
    var j=0;
    var temp=null;

    for (i=idarray.length -1; i > 0; i -= 1) {
      j=Math.floor(Math.random() * (i + 1));
      temp=idarray[i];
      idarray[i]=idarray[j];
      idarray[j]=temp;
    }
  }
  shuffleArray();

  var lvl=1;
  function updateLvl() {
    lvl=lvl+1;
    $("#level").text("Level:" + lvl);
  }

  var numorbs=3;
  function updateOrbs() {
    numorbs=numorbs+1;
  }
  var orbarray=[]; //holds id value assigned to each created orb
  function resetOrbs() {
    orbarray=[];
  }
  //var checkorb=orbarray //this makes checkorb a reference to orbarray
  var checkorb=orbarray.slice(); //get a proper copy of orbarray

  function createOrbs() {
    for (var i=0; i < numorbs; i++) {
      var num=idarray.pop();
      orbarray.push(num);
      var container=$("#container");
      $('<div class="orb"></div>').data("num",num).appendTo(container);
   }
  }
  createOrbs();
});
