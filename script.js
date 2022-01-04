/* TO DO:
* Create question carousel 
* Improve CSS
* finish inspiration fetch - get image from recipe page

/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/

/* Cake visualiser form */
let cakeForm = document.querySelector("cake-form");
let tier = document.querySelector("#tier");
let flavour1 = document.querySelector("#flavour1");
let flavour2 = document.querySelector("#flavour2");
let flavour3 = document.querySelector("#flavour3");
let flavour4 = document.querySelector("#flavour4");
let flavour5 = document.querySelector("#flavour5");
let calculateBtn = document.getElementById("#calculate-btn");

/* Cake images */
let vanillaImages = Array.from(document.querySelectorAll(".vanilla-image"));
console.log(vanillaImages);
let coffeeImages = Array.from(document.querySelectorAll(".coffee-images"));
console.log(coffeeImages);
let decorations = Array.from(document.querySelectorAll("input[type=checkbox]"));
console.log("decorations array", decorations);
let vanillaCake = [];
let chocCake = [];

/* Flavour inspiration*/
let flavourInspo = document.querySelector(".inspiration");
let inspoInput = document.querySelector("#flavour-inspo");
let submitInspo = document.querySelector("#submit-inspo");
const guardianKey = "ffb6c45e-9bcc-4828-b865-e4f13ac02107";
let inspoResult = document.querySelector(".fetch-inspiration");

/*----------------------------------------------------*\
  EVENT LISTENERS
\*----------------------------------------------------*/

//cake visualiser
//calculateBtn.addEventListener("submit", calculatePrice);
//calculateBtn.addEventListener("click", changeVanillaTier);

//flavour inspiration
//flavourInspo.addEventListener("submit", fetchRecipe);
//fetch inspiration
submitInspo.addEventListener("click", fetchRecipe);

//CAKE FORM MAX TIERS WARNING
calculateBtn.addEventListener("submit", maxTiers);

function maxTiers(e) {
  e.preventDefault();
  let minMaxTierVal = tier.value;
  if (minMaxTierVal >= 4) {
    alert("Cakes must be a maximum of 4 tiers to stop any caketastrophes!");
  }
}

//Fetch and update DOM with random recipe title and link
//Function to fetch random recipe from the Guardian
function fetchRecipe(event) {
  event.preventDefault();
  let url = "";
  const ingredient = inspoInput.value;

  fetch(
    `https://content.guardianapis.com/search?section=food&q=${ingredient} cake&api-key=${guardianKey}`
  )
    .then(response => response.json())
    .then(data => {
      url = `${data.response.results[0].webUrl}`;
      let html = `<a href =${url}> ${data.response.results[0].webTitle} <p>`;
      inspoResult.innerHTML = html;
    })

    // add a second fetch of the URL generated? maybe try as separated function?

    // .then(fetch`${url}`)
    // .then(response => response.json())
    // .then(data => console.log(data))
    .catch(error => console.log(error));
}

/*----------------------------------------------------*\
  APP FUNCTIONS TO DISPLAY FETCHED CONTENT
\*----------------------------------------------------*/

//create empty variable to hold total value
//check form to see flavour selected - e.g. vanilla selected
//if vanilla select, loop through vanilla array images
//look at number of tiers. Times total by no. of tiers entered
//look at decoration and add value to total - none = 0, sprinkles = 1,

function calculatePrice(event) {
  event.preventDefault();
  let total = 0;
  console.log(total);
  const value = event.target.elements.tier.value;
  total = parseInt(total) + parseInt(value);
  console.log(total);
  console.log(decorations);
  for (let i = 0; i < decorations.length; i++) {
    if (decorations[i].checked === true) {
      total++;
    }
  }
  console.log("The cake will cost £" + total);
}

//select the contents of all the cake images
// function changeVanillaTier(event) {
//   event.preventDefault();
//   //access value as an integer through a variable
//   const value = event.target.elements.tier.value;
//   const flavour = event.target.elements.flavour;
//   console.log(flavour, value)`<img src="images/visualiser/${flavour}/${flavour +
//     value}.jpg" class="vanilla-image one-tier" alt="An image of a 1 tier vanilla buttercream cake with candles is shown">`;
// }
