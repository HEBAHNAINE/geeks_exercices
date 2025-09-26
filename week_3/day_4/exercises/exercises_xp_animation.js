// ===== Exercise 1
// Part I
//
setTimeout(function() {
    alert("Hello World");
  }, 2000);
  
  // Part II 
  setTimeout(function() {
    let container = document.getElementById("container");
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
  }, 2000);
  
  // Part III
  let container = document.getElementById("container");
  let button = document.getElementById("clear");
  
  let count = 0;
  //
  let interval = setInterval(function() {
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    count++;
    // 
    if (count >= 5) {
      clearInterval(interval);
    }
  }, 2000);
  // 
  button.addEventListener("click", function() {
    clearInterval(interval);
  });
  
// ===== Exercise 2
function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0; 
    let id = setInterval(frame, 1); 
    function frame() {
      if (pos >= 350) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "px";
      }
    }
  }
  
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...
