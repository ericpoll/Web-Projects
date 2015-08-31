$(document).ready(function () {
  $("#btn").on("mousedown",function () {
    $("#btn").css("border-style","inset");
    displayBar();
  });

  function displayBar() {
    var progressbar = $( "#progbar" ),
    progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "Your problem should be fixed!" ).fadeOut(1500);
      $("#btn").css("border-style","outset");
      setTimeout(function () {
        window.location.replace("fixit.html");
      },1600);
    }
  });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
    setTimeout( progress, 1000 );
  }

});
