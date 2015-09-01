$(document).ready(function () {

  addEventListener("click", function(event) { //event listener on window
  var colors=["blue","green","yellow","orange","red","pink","violet","purple"];
  var pixcolor=colors[Math.floor(Math.random() * colors.length)];
  var pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.style.left = (event.pageX) + "px"; //get location of mouseclick and set pixel position
  pixel.style.top = (event.pageY) + "px";
  pixel.style.backgroundColor=pixcolor; //set pixel color DOM style
  document.body.appendChild(pixel); //append pixel DOM style
});
});
