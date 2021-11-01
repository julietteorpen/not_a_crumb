let cakeForm = document.querySelector("form");
let tier = document.querySelector("#tier");
let flavour1 = document.querySelector("#flavour1");
let flavour2 = document.querySelector("#flavour2");
let flavour3 = document.querySelector("#flavour3");
let flavour4 = document.querySelector("#flavour4");
let flavour5 = document.querySelector("#flavour5");

//create empty variable to hold total value

//check form to see flavour selected - e.g. vanilla selected
//if vanilla select, loop through vanilla array images

//look at number of tiers. Times total by no. of tiers entered

//look at decoration and add value to total - none = 0, sprinkles = 1,

let decorations = Array.from(document.querySelectorAll("input[type=checkbox]"));
let vanillaCake = [];
let chocCake = [];

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
      console.log("The cake will cost £" + total);
    }
  }
}
cakeForm.addEventListener("submit", visualise);
cakeForm.addEventListener("submit", changeVanillaTier);

//select the contents of all the cake images
const vanillaImages = Array.from(document.querySelectorAll(".vanilla-image"));
console.log(vanillaImages);

function changeVanillaTier(event) {
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
