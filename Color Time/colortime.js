$(document).ready(function () {
  function getTime() {
  var d=new Date();
  var hour=d.getHours();
  var minute=d.getMinutes();
  var second=d.getSeconds();
  var hexcolor=hexColor(hour,minute,second); //pass in date arguments to get corresponding hex value
  
  if (hour > 12) {
    hour=hour - 12;
  }

  hour=formatTime(hour);
  minute=formatTime(minute);
  second=formatTime(second);

  $("#time").text(hour.toString() + ":" + minute.toString() + ":" + second.toString());
  $("#color").text(hexcolor.toString());
  $("body").css("background-color","#" + hexcolor.toString());

  setTimeout(function () {
    getTime();
  },500); //loop every 500 ms
}

function formatTime(input) {
  if (input < 10) { //check for proper digital display formatting
    input = "0" + input; //prefix with 0 if necessary
  }
  return input; //return inside getTime
}
function formatHex(input) {
  if (input.length < 2) {
    input = "0" + input;
  }
  return input;
}

function hexColor(hour, minute, second) {
  red = Math.round(255 * (hour / 23)).toString(16); //hex base 16 calculations
  green = Math.round(255 * (minute / 59)).toString(16);
  blue = Math.round(255 * (second / 59)).toString(16);

  red = formatHex(red);
  green = formatHex(green);
  blue = formatHex(blue);

  return (red + green + blue).toUpperCase();
}

getTime();

});
