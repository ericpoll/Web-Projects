$(document).ready (function () {

  $(".start").hover(function () {
    $(".start").css("cursor","pointer");
  });

  $(".clickbutton").hover(function () {
    $(".clickbutton").css("cursor","pointer");
  });

  $(".clickbutton").on("mousedown",function () {
    $(".clickbutton").css("border-style","inset");
  });

  $(".clickbutton").on("mouseup",function () {
    $(".clickbutton").css("border-style","outset");
  });

  var clickcounter=0;
  $(".clickbutton").click(function () {
    clickcounter=clickcounter + 1;
  });

  $("a").hover(function () {
    $("a").css("color","#3399ff");
  },
    function () {
      $("a").css("color","#000000");
    });

  $(".start").on("click",function () {
    $(".container").css("display","none");
    $(".circle").css("display","block");
    $(".clickbutton").css("display","block");
    $(".circle").TimeCircles({ time: {
      Days: {show:false},
      Hours:{show:false},
      Minutes:{show:false},
      Seconds:{text:"", color:"#3399ff"}
    }})
    .addListener(function (unit,value,total)
    {
      if (total === 0) {
        $(".circle").TimeCircles().destroy();
        $(".clickbutton").css("display","none");
        $(".results").css("display","block");
        $("label").text(clickcounter + " times!");
      }
    });
     $(".circle").TimeCircles({total_duration:30});
     $(".circle").TimeCircles({count_past_zero:false});
});
});
