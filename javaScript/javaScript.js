'use strict';

// Create a random number
const generateRandomNumber = () => Math.floor(Math.random() * 20) + 1;
let getRandomNumber = generateRandomNumber();
// Flothing variables
const userGuess = document.querySelector('input.guess');
const winn = document.querySelector('body');
// HighScore
const highScore = document.querySelector('p span.highscore');
let highScores = [0];
// Range hint
const message = document.querySelector('p.message');
const scorePoints = document.querySelector('p span.score');

const chechAnswer = function () {
  if (scorePoints.innerHTML === '0') {
    message.innerHTML = '💥 you lose!';
    checkButton.removeEventListener('click', chechAnswer);
    winn.classList.add('defeat');
  } else if (+userGuess.value === 0) {
    message.innerHTML = '⛔ Not a number!';
  } else if (+userGuess.value > getRandomNumber) {
    message.innerHTML = '📈 too high!';
    scorePoints.innerHTML = +scorePoints.innerHTML - 1;
  } else if (+userGuess.value < getRandomNumber) {
    message.innerHTML = '📉 too low!';
    scorePoints.innerHTML = +scorePoints.innerHTML - 1;
  } else if (+userGuess.value === getRandomNumber) {
    message.innerHTML = '🏆 CORRECT!';
    winn.classList.add('winner');
    checkButton.removeEventListener('click', chechAnswer);
    highScores.push(+document.querySelector('p span.score').innerHTML);
    highScore.innerHTML = Math.max(...highScores);
  }
};
// Event Listener on button.check
const checkButton = document.querySelector('button.check');
checkButton.addEventListener('click', chechAnswer);
// Play again
const playAgain = document.querySelector('button.again');

const replay = function () {
  checkButton.addEventListener('click', chechAnswer);
  getRandomNumber = generateRandomNumber();
  winn.classList.remove('winner', 'defeat');
  scorePoints.innerHTML = 20;
  message.innerHTML= 'Start guessing...';
};

playAgain.addEventListener('click', replay);
