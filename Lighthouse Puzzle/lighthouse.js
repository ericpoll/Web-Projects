$(document).ready(function () {

  $("img").draggable({
    snap:".dropbox",
    snapMode:"inner"
  });
  $(".dropbox").droppable();

  $(".dropbox").on("drop",function(event,ui) {
    var dropdata=$(this).data("idval");
    var dragdata=$(ui.draggable).data("idval"); //get data value of draggable item

    if (dropdata === dragdata) { //add border if there is a correct match
      $(this).addClass("rightcontainer");
    }
  });

  $(".dropbox").on("dropout",function (event,ui) {
    if ($(this).hasClass("rightcontainer")) {
      $(this).removeClass("rightcontainer"); //remove border if draggable moved outside
    }
  });
  //assign values below so the draggable items can be matched with their containers
  $("#light1").data("idval",1);
  $("#light2").data("idval",2);
  $("#light3").data("idval",3);
  $("#light4").data("idval",4);
  $("#light5").data("idval",5);
  $("#light6").data("idval",6);

  $("#drop1").data("idval",1);
  $("#drop2").data("idval",2);
  $("#drop3").data("idval",3);
  $("#drop4").data("idval",4);
  $("#drop5").data("idval",5);
  $("#drop6").data("idval",6);

});
