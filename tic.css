const cellElements = document.querySelectorAll(".game-board .cell");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1");
const restart_btn = document.querySelector(".result button");

//winning conditions
const WINNING_CONDITIONS = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
]

const playerO = "O";
const playerX = "X";
let toggleTurn = true;
cellElements.forEach(cell => {
   cell.onclick = () => {
      let currentPlayer = toggleTurn ? playerO : playerX;
      cell.classList.add("disabled");
      addInCell(cell, currentPlayer);

      if (winnerCheck(currentPlayer)) {

         addInactive();
         result_text.innerText = currentPlayer + " Win the Game";

      } else if (isDraw()) {
         // Draw the Game!
         addInactive();
         result_text.innerText = "Draw the Game!";
      } else {
         swapPlayer();
      }
   }
});

//Winner Check Function
function winnerCheck(currentPlayer) {
   return WINNING_CONDITIONS.some(conditon => {
      return conditon.every(index => {
         return cellElements[index].classList.contains(currentPlayer);
      });
   })
}

//Game Draw condition checking function
function isDraw() {
   return [...cellElements].every(cell => {
      return cell.classList.contains(playerX) || cell.classList.contains(playerO);
   })
}

//Player Swap Turn by Turn function
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

//restart function
restart_btn.onclick = () => {
   location.reload();
}