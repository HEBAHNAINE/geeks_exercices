//Exercise1
/*The map() method checks each element
Since all elements are numbers, it multiplies each by 2
So the result is [2, 4, 6] */

//Exercise2
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  
  // Output: [1, 2, 0, 1, 2, 3]
  /*The reduce() method starts with [1, 2] as the initial value.
  Then it concatenates each inner array ([0, 1], [2, 3]).
  So the final result is [1, 2, 0, 1, 2, 3] */


  //Exercise3
  //i represents the index of each element in the array starting from 0 to 5.
//Exercise4
  //1
  const newArray = array.flat(2);
  //2
 const newGreeting = greeting.map(words => words.join(" "));
  //3
  const sentence = newGreeting.join(" ");
  //4
  const freed = trapped.flat(Infinity);



