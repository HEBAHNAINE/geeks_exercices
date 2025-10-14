const boardElement = document.getElementById("board");
const resultElement = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let board = Array(9).fill("");
let human = "";
let ai = "";
let currentPlayer = "";
let gameOver = false;
let level = "easy";

function chooseSymbol(symbol) {
  human = symbol;
  ai = symbol === "X" ? "O" : "X";
  document.getElementById("chooseSymbol").style.display = "none";
  document.getElementById("chooseLevel").style.display = "block";
}

function chooseLevel(diff) {
  level = diff;
  document.getElementById("chooseLevel").style.display = "none";
  initBoard();
}

function initBoard() {
  boardElement.innerHTML = "";
  board = Array(9).fill("");
  gameOver = false;
  resultElement.textContent = "";
  restartBtn.style.display = "none";

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i;
    cell.addEventListener("click", () => playerMove(i));
    boardElement.appendChild(cell);
  }
  currentPlayer = human;
}


function playerMove(index) {
  if (gameOver || board[index] !== "") return;

  board[index] = human;
  document.getElementById(index).textContent = human;

  if (checkWinner(human)) {
    endGame("Tu as gagné 🎉");
    return;
  }
  if (board.every((cell) => cell !== "")) {
    endGame("Match nul 😐");
    return;
  }

  currentPlayer = ai;
  setTimeout(aiMove, 500);
}

function aiMove() {
  let move;
  if (level === "easy") {
    const available = board.map((v, i) => (v === "" ? i : null)).filter((v) => v !== null);
    move = available[Math.floor(Math.random() * available.length)];
  } else {
    move = bestMove();
  }

  board[move] = ai;
  document.getElementById(move).textContent = ai;

  if (checkWinner(ai)) {
    endGame("L'ordinateur a gagné 🤖");
    return;
  }
  if (board.every((cell) => cell !== "")) {
    endGame("Match nul 😐");
    return;
  }

  currentPlayer = human;
}


function bestMove() {
  for (let combo of winCombos) {
    let [a, b, c] = combo;
    let line = [board[a], board[b], board[c]];

 
    if (line.filter((v) => v === ai).length === 2 && line.includes("")) {
      return combo[line.indexOf("")];
    }

    if (line.filter((v) => v === human).length === 2 && line.includes("")) {
      return combo[line.indexOf("")];
    }
  }

  const available = board.map((v, i) => (v === "" ? i : null)).filter((v) => v !== null);
  return available[Math.floor(Math.random() * available.length)];
}


function checkWinner(player) {
  return winCombos.some((combo) => combo.every((i) => board[i] === player));
}

function endGame(message) {
  resultElement.textContent = message;
  gameOver = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  document.getElementById("chooseSymbol").style.display = "block";
  document.getElementById("chooseLevel").style.display = "none";
  boardElement.innerHTML = "";
  resultElement.textContent = "";
  restartBtn.style.display = "none";
}
