/* function favoriteFunction() {
    let music = document.favoriteStuff.favoriteSong.value;
    let seasonal = document.favoriteStuff.favoriteSeason.value;
    let animalgrr = document.favoriteStuff.favoriteAnimal.value;


    let favArray = [music, seasonal, animalgrr];

    document.getElementById("favoriteResults").innerHTML = favArray;
} */

/*function favoriteFunction() {
    var songValue = document.getElementById.('favoriteSong').value;
    var seasonValue = document.getElementById.('favoriteSeason').value;
    var animalValue = document.getElementById.('favoriteAnimal').value;

    favArray.push(songValue);
    favArray.push(seasonValue);
    favArray.push(animalValue);

    alert(favArray);
}*/

/* var favArray = new Array();

function favoriteFunction() {
    var music = document.getElementById.('#favoriteSong').value;
    var seasonal = document.getElementById.('#favoriteSeason').value;
    var animalgrr = document.getElementById.('#favoriteAnimal').value;

    favArray.push(music);
    favArray.push(seasonal);
    favArray.push(animalgrr);

    alert(favArray);
}*/


$(document).ready(function () {
  $("#favoriteStuff").submit(function (event) {
    event.preventDefault();
    $("#fav").text("");
    const favSong = $("#favoriteSong").val();
    const favSeason = $("#favoriteSeason").val();
    const favAnimal = $("#favoriteAnimal").val();

    const originalArray = [favSong, favSeason, favAnimal];
    // const modifiedArray = originalArray.concat();
    // $('#fav').text(modifiedArray);
    originalArray.forEach(function(favoriteThing) {
      $('#fav').append(favoriteThing + " ");
    });
    for(let index = 0; index <= originalArray.length-1; index++) {
      $('#fav').append(originalArray[index]);
    }
    // arrayBeingCalled.forEach(function(element) {
    //    element
    // });
  });
  $('#result').show();
});
