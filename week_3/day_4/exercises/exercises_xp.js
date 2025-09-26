// ===== Exercise 1
// 
let h1 = document.querySelector("h1");
console.log(h1);
// 
let article = document.querySelector("article");
let lastP = article.lastElementChild;
lastP.remove();
// 
let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
  h2.style.backgroundColor = "red";
});
// 
let h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
  h3.style.display = "none";
});
//
let button = document.getElementById("boldBtn");
button.addEventListener("click", function() {
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.style.fontWeight = "bold";
  });
});
// BONUS 1
h1.addEventListener("mouseover", function() {
  let randomSize = Math.floor(Math.random() * 100) + "px";
  h1.style.fontSize = randomSize;
});
// BONUS 2
let secondP = document.querySelectorAll("p")[1];
secondP.addEventListener("mouseover", function() {
  secondP.style.transition = "opacity 1s";
  secondP.style.opacity = "0";
});

// ===== Exercise 2
// 
let form = document.querySelector("form");
console.log(form);
//
let inputFname = document.getElementById("fname");
let inputLname = document.getElementById("lname");
console.log(inputFname, inputLname);

//
let inputByName = document.getElementsByName("firstname")[0];
let inputByName2 = document.getElementsByName("lastname")[0];
console.log(inputByName, inputByName2);
//
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  // 
  let fnameValue = inputFname.value.trim();
  let lnameValue = inputLname.value.trim();
  // 
  if (fnameValue === "" || lnameValue === "") {
    alert("Please fill in both fields");
    return;
  }
  // 
  let ul = document.querySelector(".usersAnswer");
  ul.innerHTML = ""; 
  // 
  let li1 = document.createElement("li");
  li1.textContent = fnameValue;
  // 
  let li2 = document.createElement("li");
  li2.textContent = lnameValue;
  // 
  ul.appendChild(li1);
  ul.appendChild(li2);
});

// ===== Exercise 3
// 
let allBoldItems;
// 
function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();
// 
function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}
// 
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}
//
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

// ===== Exercise 4
// Target the form
let Form = document.getElementById("MyForm");
Form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  let radiusInput = document.getElementById("radius").value;
  let radius = parseFloat(radiusInput);

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid radius (positive number)");
    return;
  }
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
});

// ===== Exercise ...