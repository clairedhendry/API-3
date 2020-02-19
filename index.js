'use strict'

function getRandomDogs(number) {
   const value = $("input#input-number").val();
   
    if ((number <= 50) && (number > 0)) {
    const fetchNumber = `https://dog.ceo/api/breeds/image/random/${number}`
    fetch(fetchNumber)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert("something's not right."))
    
}  else { 
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert("something's not right."))
}
}

function displayDogs(responseJson) {
   $("dog-images, img").remove();
   console.log(responseJson.message);
   $(".dog-images").removeClass("hidden");
   for (let i = 0; i < responseJson.message.length; i++) {

   let dogImage = generateDogImage(responseJson, i);
  
   $(".dog-images").append(dogImage);
   }
   
}

function generateDogImage(responseJson, i) {
   return `<img src="${responseJson.message[i]}" class="results-image"/>`
}


function getNumber() {
   $("#submit").on("click", function(event) {
       event.preventDefault();
       const value = $("input#input-number").val();
       getRandomDogs(value);
       
   })   
}




// $(getRandomDogs)
$(getNumber)



