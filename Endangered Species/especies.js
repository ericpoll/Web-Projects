$(document).ready(function() {

  $("button").click(function () {
    var selection=Math.floor(Math.random() * especies.species.length);
    updateInfo(selection);
  });

  function updateInfo(selection) { //fill in with species data
    $("#name").text(especies.species[selection].name);
    $("#status").text(especies.species[selection].status);
    $("#population").text(especies.species[selection].population);
    $("#weight").text(especies.species[selection].weight);
    $("#habitats").text(especies.species[selection].habitats);
    $("#bio").text(especies.species[selection].bio);
    $("#image").attr("src",especies.species[selection].imagepath);
}
});
