$(document).ready(function (){



  for (var i=1; i < 91; i++) {
      $("body").append("<div class='divcreate'></div>");

      if (i % 10 === 0)
      {
        $("body").append("<br></br>"); //issue line break for formatting
      }
 }

 $("div").hover(function () {
   $(this).css("border-color","#eed202");
   var ranhexnum = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
   $(this).css("background-color",ranhexnum);


 },
   function () {
   $(this).css("border-color","black");
 });




});
