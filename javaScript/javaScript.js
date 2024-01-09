'use strict';
// Create a random number
const generateRandomNumber = () => Math.floor(Math.random() * 30) + 1;
let getRandomNumber = generateRandomNumber();
// Score and Highscore
let score = 10;
let highScore = 0;
// Flothing variables
const message = document.querySelector('p.message');
const secretNumber = document.querySelector('div.number');
const scorePoints = document.querySelector('p span.score');
const userGuess = document.querySelector('input.guess');
const background = document.querySelector('body');
const highscorePoints = document.querySelector('p span.highscore');
// Event Handler
const winnerLoseGame = function () {
  if (+userGuess.value === getRandomNumber) {
    background.classList.add('winner');
  } else if (score === 0) {
    background.classList.add('defeat');
  }
};
const loseGame = function () {
  message.textContent = '💥 You lost the game!';
  score--;
  winnerLoseGame();
  check.removeEventListener('click', checkAnser);
  secretNumber.textContent = getRandomNumber;
  secretNumber.style.color = '#cf0000';
};
const checkAnser = function () {
  if (!+userGuess.value) {
    message.textContent = '⛔ Not a number!';
  } else if (+userGuess.value === getRandomNumber) {
    if (score > highScore) {
      highScore = score;
      highscorePoints.textContent = highScore;
    }
    message.textContent = '🎉 CORRECT! 🎉';
    secretNumber.textContent = getRandomNumber;
    winnerLoseGame();
    check.removeEventListener('click', checkAnser);
  } else if (+userGuess.value > getRandomNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
    } else {
      loseGame();
    }
  } else if (+userGuess.value < getRandomNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
    } else {
      loseGame();
    }
  }
  scorePoints.textContent = score;
};
const playAgain = function () {
  score = 10;
  scorePoints.textContent = score;
  background.classList.remove('winner', 'defeat');
  message.textContent = 'Start guessing...';
  getRandomNumber = generateRandomNumber();
  check.addEventListener('click', checkAnser);
  secretNumber.textContent = '?';
  secretNumber.style.color = '#222';
  userGuess.value = 0;
};
// Event Listener
const check = document.querySelector('button.check');
check.addEventListener('click', checkAnser);

const playAgainButton = document.querySelector('button.again');
playAgainButton.addEventListener('click', playAgain);