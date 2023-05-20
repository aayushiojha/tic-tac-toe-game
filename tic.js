const cellElements = document.querySelectorAll(".game-board .cell");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1");
const restart_btn = document.querySelector(".result button");
const scoreOElement = document.querySelector(".score-o");
const scoreXElement = document.querySelector(".score-x");

let scoreO = 0;
let scoreX = 0;
let toggleTurn = true;

// Winning conditions
const WINNING_CONDITIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6] // Diagonal from top-right to bottom-left
];

// Retrieve scores from local storage
scoreO = localStorage.getItem("scoreO") || 0;
scoreX = localStorage.getItem("scoreX") || 0;

// Update the scores on the leaderboard
scoreOElement.textContent = scoreO;
scoreXElement.textContent = scoreX;

const playerO = "O";
const playerX = "X";

cellElements.forEach(cell => {
  cell.onclick = () => {
    let currentPlayer = toggleTurn ? playerO : playerX;
    cell.classList.add("disabled");
    addInCell(cell, currentPlayer);

    if (winnerCheck(currentPlayer)) {
      addInactive();
      result_text.innerText = currentPlayer + " Wins the Game";
      updateScore(currentPlayer);
      updateLocalStorage(); // Update scores in local storage
    } else if (isDraw()) {
      addInactive();
      result_text.innerText = "Draw the Game!";
    } else {
      swapPlayer();
    }
  };
});

function winnerCheck(currentPlayer) {
  return WINNING_CONDITIONS.some(condition => {
    return condition.every(index => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return (
      cell.classList.contains(playerX) || cell.classList.contains(playerO)
    );
  });
}

function swapPlayer() {
  toggleTurn = !toggleTurn;
  if (toggleTurn) {
    player1.classList.add("active");
    player2.classList.remove("active");
  } else {
    player2.classList.add("active");
    player1.classList.remove("active");
  }
}

function addInCell(cell, currentPlayer) {
  cell.innerHTML = currentPlayer;
  cell.classList.add(currentPlayer);
}

function addInactive() {
  result.classList.remove("inactive");
}

function updateScore(currentPlayer) {
  if (currentPlayer === playerO) {
    scoreO++;
    scoreOElement.textContent = scoreO;
  } else if (currentPlayer === playerX) {
    scoreX++;
    scoreXElement.textContent = scoreX;
  }
}

function updateLocalStorage() {
  localStorage.setItem("scoreO", scoreO);
  localStorage.setItem("scoreX", scoreX);
}

restart_btn.onclick = () => {
  location.reload();
};
