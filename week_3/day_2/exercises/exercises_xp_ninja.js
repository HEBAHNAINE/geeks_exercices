// ===== Exercise 1
let person1={
    FullName:"hiba hanine",
    Mass:54,
    Height:164
}
let person2 = {
    fullName: "fatima kaanoune",
    mass: 75,
    height: 159
  };
  function calculateBMI(person) {
    return person.mass / (person.height * person.height);
  }
console.log(`${person1.fullName}'s BMI:`, calculateBMI(person1));
console.log(`${person2.fullName}'s BMI:`, calculateBMI(person2));
function compareBMI(p1, p2) {
    const bmi1 = calculateBMI(p1);
    const bmi2 = calculateBMI(p2);
  
    if (bmi1 > bmi2) {
      console.log(`${p1.fullName} has the higher BMI (${bmi1.toFixed(2)})`);
    } else if (bmi2 > bmi1) {
      console.log(`${p2.fullName} has the higher BMI (${bmi2.toFixed(2)})`);
    } else {
      console.log(`Both ${p1.fullName} and ${p2.fullName} have the same BMI (${bmi1.toFixed(2)})`);
    }
  }
  compareBMI(person1, person2);
// ===== Exercise 2
function findAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    console.log("Average:", average);
    if (average > 65) {
      console.log("You passed!");
    } else {
      console.log("You failed and must repeat the course.");
    }
  }
  const grades = [70, 80, 65, 90];
  findAvg(grades);
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...