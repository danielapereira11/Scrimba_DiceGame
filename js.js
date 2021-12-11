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
}
rollBtn.addEventListener("click", generateRandomNumber);
