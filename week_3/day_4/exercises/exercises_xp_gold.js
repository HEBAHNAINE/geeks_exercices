// ===== Exercise 1
// 
let select = document.getElementById("genres");
console.log("Selected value:", select.value);
//
let option = new Option("Classic", "classic");
// 
select.appendChild(option);
// 
select.value = "classic";
console.log("New selected value:", select.value);
// ===== Exercise 2
let button = document.querySelector("input[type='button']");
button.addEventListener("click", removecolor);

function removecolor() {
  let select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex); 
}
// ===== Exercise 3

let shoppingList = [];
let root = document.getElementById("root");
let form = document.createElement("form");
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Add item...";

let addBtn = document.createElement("button");
addBtn.type = "button";
addBtn.textContent = "AddItem";
let clearBtn = document.createElement("button");
clearBtn.type = "button";
clearBtn.textContent = "ClearAll";
let ul = document.createElement("ul");
form.appendChild(input);
form.appendChild(addBtn);
form.appendChild(clearBtn);
root.appendChild(form);
root.appendChild(ul);
function addItem() {
  let item = input.value.trim();
  if (item !== "") {
    shoppingList.push(item);
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li); 
    input.value = ""; 
  }
}
function clearAll() {
  shoppingList = [];   
  ul.innerHTML = "";       
}
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);

// ===== Exercise 4

// ===== Exercise ...