$(document).ready(function () {
  $("div").on("click",function() {
    var thisdiv=this; //need to save 'this' to variable due to scoping issue with setTimeout below
    var animate=["skewed","flipped","translated"];
    var canimation=Math.floor(Math.random() * animate.length);
    $(this).addClass(animate[canimation]); //add random class

    setTimeout(function () {
      $(thisdiv).removeClass(animate[canimation]);
    },5000);


  });
});
