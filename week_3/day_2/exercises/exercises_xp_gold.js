// ===== Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7]
for(let i=0;i<numbers.length;i++){
        if (numbers[i] % 3 === 0) {
            console.log(true);
          } else {
            console.log(false);
          }
        }
// ===== Exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let namee = prompt("Enter your name:").toLowerCase();
  if (namee in guestList) {
    console.log(`Hi! I'm ${namee}, and I'm from ${guestList[namee]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }  
// ===== Exercise 3
let age = [20, 5, 12, 25, 98, 55]; 
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of ages:", sum); 
let maxAge = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > maxAge) {
    maxAge = age[i];
  }
}
console.log("Highest age:", maxAge);

// ===== Exercise 4

// ===== Exercise ...