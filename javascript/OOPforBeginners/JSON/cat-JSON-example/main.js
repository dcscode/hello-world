const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo = "";
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
let catJSONObject = JSON.parse(catString);
for (let motherCats of catJSONObject) {
    for (let kittens of motherCats['kittens']) {
        total += 1;
        if (kittens.gender === 'm') {
            male += 1;
        }
    }
    motherInfo += motherCats.name;
    if (catJSONObject.indexOf(motherCats) === catJSONObject.length - 1) {
        motherInfo += ".";
    }
    else if (catJSONObject.indexOf(motherCats) === catJSONObject.length -2 ) {
        motherInfo += ", and "; //oxford comma!!!! 
    }
    else {
        motherInfo += ", ";
    }
}
kittenInfo += "Total Kittens: " + total + " Female Kittens: " + (total - male) + " Male Kittens: " + male + " ";





// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);