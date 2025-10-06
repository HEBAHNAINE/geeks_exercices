//exercise1
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//exercise2
function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  
  console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
//exercise3
const users = { user1: 18273, user2: 92833, user3: 90315 };
//
const usersArray = Object.entries(users);
console.log(usersArray);
// 
const updatedUsers = usersArray.map(([key, value]) => [key, value * 2]);
console.log(updatedUsers);

//exercise4
//In JavaScript, when you create an instance of a class using the new keyword, the result is always an object

//exercise5
//Option 2 is the only constructor that successfully extends the Dog class
  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//exercice6  
//[2] === [2] => false

//{} === {} => false

//object2.number => 4

//object3.number => 4

//object4.number => 5

//1
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
//2
class Mammal extends Animal {
  sound(soundType) {
    return `${soundType} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}
//3
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));