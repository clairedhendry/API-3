'use strict'


//check if breed is in list

function verifyBreed(breed) {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(responseJson => checkForBreed(responseJson, breed))  
}

function checkForBreed(responseJson, breed) {
    const breedArray = Object.keys(responseJson.message);
    const found = breedArray.find(element => element === breed);
    if (found === breed) {
        fetchDogBreedImage(breed);
    } else {
        alert("dog breed not found");
    }    
}


function fetchDogBreedImage(breed) {
    const fetchBreed = `https://dog.ceo/api/breed/${breed}/images`;
    fetch(fetchBreed)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
}




//display dog img in DOM

function displayDogs(responseJson) {
   $("dog-images, img").remove();
   console.log(responseJson.message);
   $(".dog-images").removeClass("hidden");
   

   let dogImage = generateDogImage(responseJson);
  
   $(".dog-images").append(dogImage);
   
   
}

function generateDogImage(responseJson) {
    let number = Math.floor((Math.random() * responseJson.message.length) + 1);

   return `<img src="${responseJson.message[number]}" class="results-image"/>`
}

//get input value

function getValue() {
   $("#submit").on("click", function(event) {
       event.preventDefault();
       const value = $("input#input-number").val();

       verifyBreed(value);
       
   })   
}




$(getValue);
