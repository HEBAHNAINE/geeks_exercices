//exercise1
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  
  console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

//exercise2
function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
  } 
//exercise3
//counterOne and counterTwo point to the same object in memory
// so when counterTwo.increment() is called, it also increases counterOne.count to 3.

