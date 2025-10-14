// Exercise 1 : Comparison
// ==========================
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

//  Tests
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));



// Exercise 2 : Promise with 4s delay
// =====================================
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Test
delayedPromise.then(result => console.log(result));



// Exercise 3 : Resolve & Reject
// ================================
const promise1 = Promise.resolve(3);
promise1.then(value => console.log(value));  // Output: 3

const promise2 = Promise.reject("Boo!");
promise2.catch(error => console.log(error)); // Output: Boo!
