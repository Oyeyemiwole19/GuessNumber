'use strict';

const randomNumber = Math.trunc(Math.random() * 20 + 1);

// document.querySelector('.number').textContent = randomNumber;

//Adding eventlistener to check btn
let score = 20;

let highscore = 0;

const displayMessage = message => {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.score').textContent = score;
  //check if no guess
  if (!guess) {
    displayMessage('⛔ No number');
  }
  //when guess is equal to randomNumber
  else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is greater than randomNumber
  else if (guess > randomNumber) {
    if (score < 1) {
      displayMessage('❇ You lost the game!');
    } else {
      displayMessage('📈 Too high');
      score--;
    }
  }
  //When guess is low : guess less than randNumber
  else if (guess < randomNumber) {
    if (score < 1) {
      displayMessage('❇ You lost the game!');
    } else {
      displayMessage('📉 Too low');
      score--;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const randomNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
