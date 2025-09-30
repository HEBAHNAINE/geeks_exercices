// Exercise 1
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3; // reassigns a from 5 → 3
    }
    alert(`inside the funcOne function ${a}`); 
    // Prediction: "inside the funcOne function 3"
}
// #1.1
funcOne()
// Output: "inside the funcOne function 3"
// #1.2 
// const a = 5;
// Then inside the if, a = 3 would throw an ERROR
// Because const variables cannot be reassigned.
// ============================================
// #2
let a = 0; 

function funcTwo() {
    a = 5; // reassigns the global a (0 → 5)
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree() // alerts 0 (because a = 0 at this moment)
funcTwo()   // changes a → 5
funcThree() // alerts 5 (because a was modified by funcTwo)

// #2.2 
// const a = 0;
// funcTwo() tries to reassign a = 5  ERROR
// ============================================
// #3
function funcFour() {
    window.a = "hello"; 
}
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
// #3.1
funcFour();   // defines window.a = "hello"
funcFive();   // alerts "inside the funcFive function hello"
// ============================================
// #4
let a = 1;
function funcSix() {
    let a = "test"; 
    alert(`inside the funcSix function ${a}`);
    // Prediction: "inside the funcSix function test"
}
// #4.1
funcSix(); 
// Output: "inside the funcSix function test"
// #4.2 
// const a = "test" inside funcSix → still fine (no reassignment).
// Behavior is exactly the same: "inside the funcSix function test"
// ============================================
// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); 
    // Prediction: "in the if block 5"
}
alert(`outside of the if block ${a}`); 
// Prediction: "outside of the if block 2"
// #5.1 
// First alert: "in the if block 5"
// Second alert: "outside of the if block 2"

// #5.2 
// const a = 2 , const a = 5 (block scope).
// Works the same because they are not reassigned.
// Outputs are identical.
// Exercise 2
// 
const winBattle = () => true;
// 
let experiencePoints = winBattle() ? 10 : 1;
// 
console.log(experiencePoints);
// Exercise 3
const isString = (value) => typeof value === 'string';
// Examples
console.log(isString('hello'));      
console.log(isString([1, 2, 4, 0]));          
console.log(isString("123"));         
// Exercise 4
const sum = (a, b) => a + b;
// Example
console.log(sum(5, 3));
// Exercise 5
//
function toGramsDeclaration(kg) {
    return kg * 1000;
  }
  console.log(toGramsDeclaration(5));
  // 
  const toGramsExpression = function(kg) {
    return kg * 1000;
  };
  console.log(toGramsExpression(3)); // 3000
  // Difference:
  // Function declaration is hoisted (you can call it before its definition),
  // while function expression is not hoisted (you must define it before using it).
  const toGramsArrow = (kg) => kg * 1000;
  console.log(toGramsArrow(7)); // 7000
// Exercise 6
(function(children, partner, location, job) {
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML = message;
  })(3, "ali", "Casablanca", "Software Engineer");
// Exercise 7
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome</title>
</head>
<body>
  <nav id="navbar" style="background:#eee; padding:10px;">
  </nav>
  <script src="app.js"></script>
</body>
</html>*/
(function(userName) {
    const navbar = document.getElementById("navbar");

    const userDiv = document.createElement("div");
    userDiv.style.display = "flex";
    userDiv.style.alignItems = "center";
    userDiv.style.gap = "8px";
  
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/40";
    img.alt = userName;
    img.style.borderRadius = "50%";
  
    const name = document.createElement("span");
    name.textContent = `Welcome, ${userName}`;
  
    userDiv.appendChild(img);
    userDiv.appendChild(name);
  
    navbar.appendChild(userDiv);
  
  })("John"); 
// Exercise 8
// Part 1
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
      const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
      document.body.innerHTML += `<p>${sentence}</p>`;
    }
    addIngredients("apple", "banana", "orange");
  }
  makeJuice("large");
  
  // Part 2
  function makeJuiceV2(size) {
    const ingredients = [];
  
    function addIngredients(ing1, ing2, ing3) {
      ingredients.push(ing1, ing2, ing3);
    }
  
    function displayJuice() {
      const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
      document.body.innerHTML += `<p>${sentence}</p>`;
    }
  
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "kiwi", "pineapple");
    displayJuice();
  }
  makeJuiceV2("medium");
  