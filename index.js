var dogCount = 0;

'use strict';



function getDogImages(breed) {
    console.log(breed);
 let url = `https://dog.ceo/api/breed/${breed}/images/random`;
 //let url = `https://dog.ceo/api/breed/husky/images/random`;
 console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson));
}

function displayResults(responseJson) {
  console.log(responseJson);

  if(responseJson.code === 404)
  {
    alert('breed not found');
  }
  else{
  //replace the existing image with the new one
  $('.results-img').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}
}

function watchForm() {
    var breed;
  $('form').submit(event => {
    breed=$('.dog-number').val();
    event.preventDefault();
 
    getDogImages(breed);
  
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $(".dog-number").attr("value", "hound");
  watchForm();
});