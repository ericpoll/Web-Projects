$(document).ready(function () {

  $(function () {
      var reknobint;
      $("#reknob").knob({
          change: function (v) {
              reset(+v); //need to reset setInterval when value gets changed
          }
      });
      reset(+$("#reknob").val()); //+ is a unary operator that converts the string into a number

      function reset(value) {
          $("#rediv").stop(true, true).show();
          clearInterval(reknobint);
          reknobint = setInterval(fadeRed, value * 1000); //convert the delay to seconds
      }

      function fadeRed() {
          $("#rediv").fadeOut().fadeIn();
      }
  });

  $(function () {
      var grknobint;
      $("#grknob").knob({
          change: function (v) {
              reset(+v);
          }
      });
      reset(+$("#grknob").val());

      function reset(value) {
          $("#grdiv").stop(true, true).show();
          clearInterval(grknobint);
          grknobint = setInterval(fadeGreen, value * 1000);
      }

      function fadeGreen() {
          $("#grdiv").fadeOut().fadeIn();
      }
  });

  $(function () {
      var blknobint;
      $("#blknob").knob({
          change: function (v) {
              reset(+v);
          }
      });
      reset(+$("#blknob").val());

      function reset(value) {
          $("#bldiv").stop(true, true).show();
          clearInterval(blknobint);
          blknobint = setInterval(fadeBlue, value * 1000);
      }

      function fadeBlue() {
          $("#bldiv").fadeOut().fadeIn();
      }
  });

});
