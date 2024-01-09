'use strict';
// Create a random number
const generateRandomNumber = () => Math.floor(Math.random() * 30) + 1;
let getRandomNumber = generateRandomNumber();

// Score and Highscore
let score = 10;
let highScore = 0;

// Flothing variables
const scorePoints = document.querySelector('p span.score');
const userGuess = document.querySelector('input.guess');
const background = document.querySelector('body');

// Refactor code
const winnerLoseGame = function () {
  if (+userGuess.value === getRandomNumber) {
    background.classList.add('winner');
  } else if (score === 0) {
    background.classList.add('defeat');
  }
};

const secretNumber = function (text, style) {
  const number = document.querySelector('div.number');

  number.textContent = text;
  number.style.color = style;
};

const generateMessage = function (message) {
  document.querySelector('p.message').textContent = message;
};

const removeEvL = function () {
  check.removeEventListener('click', checkAnser);
};

// Event Handler
const checkAnser = function () {
  if (!+userGuess.value) {
    generateMessage('⛔ Not a number!');
  } else if (+userGuess.value === getRandomNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('p span.highscore').textContent = highScore;
    }
    removeEvL();
    winnerLoseGame();
    generateMessage('🎉 CORRECT! 🎉');
    secretNumber(getRandomNumber);
  } else if (+userGuess.value !== getRandomNumber) {
    if (score > 1) {
      score--;
      generateMessage(
        +userGuess.value > getRandomNumber ? '📈 Too high!' : '📉 Too low!'
      );
    } else {
      score--;
      removeEvL();
      winnerLoseGame();
      generateMessage('💥 You lost the game!');
      secretNumber(getRandomNumber, '#cf0000');
    }
  }

  scorePoints.textContent = score;
};

const playAgain = function () {
  score = 10;
  scorePoints.textContent = score;
  userGuess.value = 0;
  getRandomNumber = generateRandomNumber();
  background.classList.remove('winner', 'defeat');
  check.addEventListener('click', checkAnser);
  secretNumber('?', '#222');
  generateMessage('Start guessing...');
};

// Event Listener
const check = document.querySelector('button.check');
check.addEventListener('click', checkAnser);

const playAgainButton = document.querySelector('button.again');
playAgainButton.addEventListener('click', playAgain);
