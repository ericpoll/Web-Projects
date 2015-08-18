$(document).ready(function () {
  $("#quarter").hover(function () {
    $("#quarter").css("cursor","pointer");
  });

  var qposition=$("#quarter").position();
  $("#quarter").draggable({
    containment: "body"});

  $("#piggybank").droppable({
    drop: function () {
      $("#quarter").css("left",qposition.left); //reset position of quarter
      $("#quarter").css("top",qposition.top);
      $("#sample")[0].play(); //play sample when dropped over piggybank
    }
  });
});
