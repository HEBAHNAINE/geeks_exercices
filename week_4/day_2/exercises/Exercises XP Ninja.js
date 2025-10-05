//exercise1
const data = [
    { name: 'Butters', age: 3, type: 'dog' },
    { name: 'Cuty', age: 5, type: 'rabbit' },
    { name: 'Lizzy', age: 6, type: 'dog' },
    { name: 'Red', age: 1, type: 'cat' },
    { name: 'Joey', age: 3, type: 'dog' },
    { name: 'Rex', age: 10, type: 'dog' },
  ];
  
  const totalHumanYears = data.reduce((acc, animal) => {
    if (animal.type === 'dog') {
      return acc + (animal.age * 7);
    }
    return acc;
  }, 0);
  
  console.log(totalHumanYears); 

//exercise2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail); 
//exercise3
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
  ];
  
  const userRoles = {};
  
  users.forEach(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    userRoles[fullName] = user.role;
  });
  
  console.log(userRoles);
//execise4
//
const letters = ['x', 'y', 'z', 'z'];
const count = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (count[letter]) {
    count[letter] += 1;
  } else {
    count[letter] = 1;
  }
}

console.log(count); 
//
const letter = ['x', 'y', 'z', 'z'];

const count = letter.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(count); 


  