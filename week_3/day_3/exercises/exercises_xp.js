// ===== Exercise 1
function displayNumbersDivisible(){
    let sum = 0;
      for(let i=0; i<=500; i++){
          if(i % 23 === 0){
              console.log(`${i} is divisible by 23`);
              sum += i;
          }
      }
       console.log(`The sum so far is ${sum}`);
  }
  displayNumbersDivisible();
  console.log("End of program");
  //Bonus
  function displayNumbersDivisible(divisor){
    let sum = 0; 
      for(let i=0; i<=500; i++){
          if(i % divisor === 0){
              console.log(`${i} is divisible by ${divisor}`);
              sum += i;
          }
      }
       console.log(`The sum so far is ${sum}`);
  }
  displayNumbersDivisible(45);
// ===== Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
shoppingList=["banana","orange","apple"];

function myBill(){
    let total = 0;
    for(let i=0;i<shoppingList.length;i++){
       if(stock[shoppingList[i]]>0){
        total+=prices[shoppingList[i]];
        stock[shoppingList[i]]-=1;
       }
    }
    return total;
}
console.log(myBill());
// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {
    let totalChange = 0;
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    for (let i = 0; i < amountOfChange.length; i++) {
      totalChange += amountOfChange[i] * coinValues[i];
    }
    return totalChange >= itemPrice;
  }
// ===== Exercise 4
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(nights) || nights === "" || nights === null);

    nights = Number(nights);
    let cost = nights * 140;
    return cost;
}
console.log("Total hotel cost: $" + hotelCost());
function planeRideCost() {
    let destination;  
    do {
        destination=prompt("What is your destination?");
    } while (!isNaN(destination) || destination === "" || destination === null);
      }
    destination = destination.toLowerCase();
    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
console.log("Total plane ride cost: $" + planeRideCost());
function rentalCarCost() {
    let days; 
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === "" || days === null);

    days = Number(days);
    let cost = days * 40;
    if (days >= 10) {
        cost *= 0.05;
    return cost;
}
}

console.log("Total rental car cost: $" + rentalCarCost());

function totalVacationCost() {
    let totalCost = hotelCost() + planeRideCost() + rentalCarCost();
    return totalCost;
}
console.log("Total vacation cost: $" + totalVacationCost());
// ===== Exercise 5
//2
const containerDiv = document.getElementById("container");
console.log(containerDiv);
const firstelement = document.getElementsByTagName("ul")[0].children[1];
firstelement.textContent = "Richard";
const secondelement = document.getElementsByTagName("ul")[1].children[1];
secondelement.remove();
const alllist = document.getElementsByClassName("list");
for (let i = 0; i < alllist.length; i++) {
    alllist[i].children[0].textContent = "Heba";
}
//3
const allUl = document.querySelectorAll("ul");
allUl.forEach(ul => {
    ul.classList.add("student_list");
});
allUl[0].classList.add("university", "attendance");

//4
const containeDiv = document.getElementById("container");
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "20px";
// 
const allLists = document.querySelectorAll("ul");
const danLi = allLists[1].lastElementChild; 
danLi.style.display = "none";
// 
const richardLi = allLists[0].children[1]; 
richardLi.style.border = "2px solid black";
// 
document.body.style.fontSize = "18px";
// 5. BONUS
if (containerDiv.style.backgroundColor === "lightblue") {
    const firstUl = allLists[0];
    const user1 = firstUl.children[0].textContent; 
    const user2 = firstUl.children[1].textContent; 
    alert(`Hello ${user1} and ${user2}`);
}
// ===== Exercise 6
const div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");
// 
let nweli = document.createElement("li");
let nwtext = document.createTextNode("Logout");
nweli.appendChild(nwtext);
// 
const ul = div.querySelector("ul");
ul.appendChild(nweli);
// 
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);

// ===== Exercise 7
const allBooks = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
      alreadyRead: true
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
      alreadyRead: false
    }
  ];
  
  // 
  const section = document.querySelector(".listBooks");
  
  // 
  allBooks.forEach(book => {
    // 
    const bookDiv = document.createElement("div");
    bookDiv.style.margin = "10px";
    bookDiv.style.padding = "10px";
    bookDiv.style.border = "1px solid #ccc";
    // 
    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;
    // 
    if (book.alreadyRead) {
      details.style.color = "red";
    }
     //
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    // 
    bookDiv.appendChild(details);
    bookDiv.appendChild(img);
  
    section.appendChild(bookDiv);
  });
  