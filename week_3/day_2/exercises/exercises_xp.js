// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people[people.length - 1] = "Jason";
people.push("Hiba");
console.log(people.indexOf("Mary"));
let copy = people.slice(1, people.length - 1);
console.log(copy);
console.log(people.indexOf("Foo"));
// It returns -1 because "Foo" does not exist in the array
let last = people[people.length - 1];
console.log(last);
//Part II - Loops
for (let i = o; i < people.length; i++) {
  console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}
// ===== Exercise 2
const colors = ["blue", "green", "purple", "black"];
for(let i=0;i<colors.length;i++){
    console.log(`My #${i + 1} choice is ${colors[i]}`);

}
//Bonus
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    let number = i + 1;             
    let suffix = suffixes[i] || "th";
    console.log(`My ${number}${suffix} choice is ${colors[i]}`);
  }
  
// ===== Exercise 3
let number = Number(prompt("Please enter a number:"));
while (number < 10) {
  number = Number(prompt("Number is too small. Please enter a new number:"));
}
console.log("Great! The number is:", number);

// ===== Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log("Number of floors:", building.numberOfFloors);
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);
let secondTenant = building.nameOfTenants[1]; 
let roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0];
console.log("Second tenant:", secondTenant, "Rooms:", roomsOfSecondTenant);
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log("Updated Dan's rent:", building.numberOfRoomsAndRent.dan[1]);

// ===== Exercise 5
const family = {
    father: "mohammed",
    mother: "Fatima",
    son: "ali",
    daughter: "hiba"
  };
  console.log("Keys:");
  for (let key in family) {
    console.log(key);
  }
    console.log("Values:");
  for (let key in family) {
    console.log(family[key]);
  }
  
// ===== Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  let sentence = "";
  for (let key in details) {
    sentence += key + " " + details[key] + " ";
  } 
  console.log(sentence.trim()); 
  
// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let initials = [];
for (let i = 0; i < names.length; i++) {
  initials.push(names[i][0]); 
}
initials.sort();
let secretName = initials.join("");
console.log(secretName);
