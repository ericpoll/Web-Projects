$(document).ready(function () {

  for(var i =0; i < wordarray.length; i++) { //loop through array

  var magword=$("<div class=magnet></div>");
  magword.text(wordarray[i]);
  magword.css("bottom",Math.floor(Math.random() * ($(document).height()-600)));
  magword.css("right",Math.floor(Math.random() * ($(document).width()-300)));

  $("#container").append(magword);
}
$(".magnet").draggable({
  scroll:false, //prevent from scrolling outside screen
});
$(".magnet").hover(function () {
  $(".magnet").css("cursor","pointer");
});

});
