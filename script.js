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
    }
    console.log(total);
  }
}
cakeForm.addEventListener("submit", visualise);

// const parent = document.getElementById("parent");
// let child_nodes = parent.childNodes;
// console.log(child_nodes.length); // let's assume "2"
// parent.appendChild(document.createElement("div"));
// console.log(child_nodes.length); // outputs "3"
