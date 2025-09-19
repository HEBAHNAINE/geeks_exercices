// ===== Exercise 1
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNum);

for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// ===== Exercise 2
function capitalize(str) {
    let evenCaps = ''; 
    let oddCaps = '';  
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenCaps += str[i].toUpperCase();
        oddCaps += str[i]; 
      } else {
        evenCaps += str[i];
        oddCaps += str[i].toUpperCase();
      }
    }
    return [evenCaps, oddCaps];
  }
  console.log(capitalize("abcdef")); 
// ===== Exercise 3
function palindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}
// ===== Exercise 4
function biggestNumberInArray(array){
    biggestNum=array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i]>biggestNum){
            biggestNum=array[i];
        }   
    }
    return biggestNum;
}
// ===== Exercise 5
function UniqueElements(array){
    for(let i=0; i<array.length; i++){
       for(let j=i+1; j<array.length; j++){
          if(array[i] === array[j]){
             array.splice(j, 1);
             j--; 
          }
       }
     }
    return array;
 }
 console.log(UniqueElements([1,2,3,3,3,3,4,5]));
 // ===== Exercise 6
 function createCalendar(year, month) {
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    weekdays.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      th.style.padding = '5px';
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
  
    let firstDay = new Date(year, month - 1, 1).getDay(); 
  
    firstDay = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month, 0).getDate();
  
    let date = 1;
    for (let i = 0; date <= daysInMonth; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        cell.style.padding = '5px';
        if (i === 0 && j < firstDay) {
          cell.textContent = ''; 
        } else if (date <= daysInMonth) {
          cell.textContent = date;
          date++;
        } else {
          cell.textContent = '';
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  createCalendar(2012, 9);
  
  