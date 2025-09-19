// ===== Exercise 1
function isBlank(str) {
  return str.trim().length === 0;
}
console.log(isBlank(''));     
console.log(isBlank('abc '));  
console.log(isBlank('   ')); 
// ===== Exercise 2
function abbrevName(firstname, lastname) {
    return firstname + ' ' + lastname[0].toUpperCase() + '.';
  }
  
  console.log(abbrevName("Robin", "Singh"));
  
// ===== Exercise 3
function swapCase(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    
    return result;
  }
  console.log(swapCase('The Quick Brown Fox')); 
  
// ===== Exercise 4
function isOmnipresent(array,num){
    for(let i=0;i<array.length;i++){
        if (!array[i].includes(num)){
            return false
        }
    }
    return true
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
// ===== Exercise 5
let table = document.body.firstElementChild; // get the table
let rows = table.rows; // get all rows

for (let i = 0; i < rows.length; i++) {
  let cells = rows[i].cells;
  if (cells[i]) { // diagonal cell
    cells[i].style.backgroundColor = 'red';
  }
}

