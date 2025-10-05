// exercise 1
const landscape = () => {
    let result = "";
  
    const flat = x => {
      for (let i = 0; i < x; i++) {
        result += "_";
      }
    };
  
    const mountain = x => {
      result += "/";
      for (let i = 0; i < x; i++) {
        result += "'";
      }
      result += "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };
  
  console.log(landscape());
// exercise 2
/*The result is 13.
The function addTo returns another function that keeps the value of x.
When we call addTo(10), it remembers 10, and addToTen(3) adds 10 + 3 = 13.*/


//exercise 3
/*The function curriedSum uses currying, which means it takes one argument at a time.
First, curriedSum(30) returns a new function that adds 30 to another number.
Then, when we call that function with (1), it does 30 + 1 = 31.*/


//exercise 4
/*The function curriedSum uses currying, which means it takes one argument at a time.
When we call curriedSum(5), it returns a new function that adds 5 to any number.
So when we call add5(12), it does the calculation:
5 + 12 = 17*/


//exercise 5
/*The function compose combines two functions.
It makes the second function g run first, and then the first function f runs on the result.
So:
compose(add1, add5)(10) → means → add1(add5(10))
add5(10) = 15
add1(15) = 16
*/