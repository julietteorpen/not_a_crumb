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
let calculateBtn = document.querySelector("#calculate-btn");

/* Cake images */
const vanillaImages = Array.from(document.querySelectorAll(".vanilla-image"));
console.log(vanillaImages);
let decorations = Array.from(document.querySelectorAll("input[type=checkbox]"));
let vanillaCake = [];
let chocCake = [];

/* Flavour inspiration*/
let flavourInspo = document.querySelector(".inspiration");
let inspoInput = document.querySelector("#flavour-inspo");
let submitInspo = document.querySelector("#submit-inspo");
const guardianKey = "ffb6c45e-9bcc-4828-b865-e4f13ac02107";
let inspoResult = document.querySelector(".fetch-inspiration");
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

function visualise(event) {
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
function changeVanillaTier(event) {
  event.preventDefault();
  //access value as an integer through a variable
  const value = event.target.elements.tier.value;
  //hide all userBios
  for (let i = 0; i < vanillaImages.length; i++) {
    vanillaImages[i].classList.add("hidden");
    if (parseInt(value) === 1) {
      vanillaImages[0].classList.remove("hidden");
    } else if (parseInt(value) === 2) {
      vanillaImages[1].classList.remove("hidden");
    } else if (parseInt(value) === 3) {
      vanillaImages[2].classList.remove("hidden");
    } else if (parseInt(value) === 4) {
      vanillaImages[3].classList.remove("hidden");
    }
  }
}

/*----------------------------------------------------*\
  EVENT LISTENERS
\*----------------------------------------------------*/

//cake visualiser
calculateBtn.addEventListener("submit", visualise);
calculateBtn.addEventListener("submit", changeVanillaTier);

//flavour inspiration
//flavourInspo.addEventListener("submit", fetchRecipe);
//fetch inspiration
submitInspo.addEventListener("click", fetchRecipe);

//CAKE FORM MAX TIERS WARNING
calculateBtn.addEventListener("click", e => {
  e.preventDefault();
  let minMaxTierVal = tier.value;
  if (minMaxTierVal >= 4) {
    alert("Cakes must be a maximum of 4 tiers to stop any caketastrophes!");
  }
});
