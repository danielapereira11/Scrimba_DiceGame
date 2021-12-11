const message = document.querySelector("#message");
const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard");
const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

function changePlayerTurn() {
  if (player1Turn === true) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
}

function endGame() {
  if (player1Score >= 20) {
    message.innerHTML = "Player 1 has won!";
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline";
  } else if (player2Score >= 20) {
    message.innerHTML = "Player 2 has won!";
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline";
  }
}

function showDisplayBtn() {
  player1Dice.classList.remove("active");
  player2Dice.classList.add("active");
}
function generateRandomNumber() {
  if (player1Turn === true) {
    player1RandomNumber = Math.ceil(Math.random() * 6);
    player1Dice.innerHTML = player1RandomNumber;
    player1Score += player1RandomNumber;
    player1Scoreboard.innerHTML = player1Score;
    message.innerHTML = "Player 2 Turn";
    showDisplayBtn();
  } else {
    player2RandomNumber = Math.ceil(Math.random() * 6);
    player2Dice.innerHTML = player2RandomNumber;
    player2Score += player2RandomNumber;
    player2Scoreboard.innerHTML = player2Score;
    message.innerHTML = "Player 1 Turn";
    showDisplayBtn();
  }

  changePlayerTurn();
  endGame();
}

function resetGame() {
  message.innerHTML = "Player 1 turn";
  rollBtn.style.display = "inline";
  resetBtn.style.display = "none";
  player1Score = 0;
  player1Dice.innerHTML = "-";
  player1Scoreboard.innerHTML = "0";
  player2Score = 0;
  player2Dice.innerHTML = "-";
  player2Scoreboard.innerHTML = "0";
  player1Turn = true;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}

rollBtn.addEventListener("click", generateRandomNumber);
resetBtn.addEventListener("click", resetGame);
