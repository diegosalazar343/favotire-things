/* function favoriteFunction() {
    let music = document.favoriteStuff.favoriteSong.value;
    let seasonal = document.favoriteStuff.favoriteSeason.value;
    let animalgrr = document.favoriteStuff.favoriteAnimal.value;


    let favArray = [music, seasonal, animalgrr];

    document.getElementById("favoriteResults").innerHTML = favArray;



} */

function favoriteFunction() {
    let music = document.favoriteStuff.favoriteSong.value;
    let seasonal = document.favoriteStuff.favoriteSeason.value;
    let animalgrr = document.favoriteStuff.favoriteAnimal.value;
    let favArray = [];
    favArray.push(music);
    favArray.push(seasonal);
    favArray.push(animalgrr);

    document.getElementById("favoriteResults").innerHTML = favArray;
}
