'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);
document.querySelector('.highscore').textContent = highscore;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when there is no input;
  if (!guess) {
   displayMessage('⛔ No Number!');
  } 
  // when the input is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!'
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
  } 
  //when the guess is not match( refactoring of below commented code)
  else if(guess !== secretNumber){
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      // document.querySelector('.message').textContent = guess>secretNumber?'📈 Too High!': '📉 Too Low!';
      displayMessage(guess>secretNumber?'📈 Too High!': '📉 Too Low!')
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game!';
      displayMessage('💥You Lost the game!')
      document.querySelector('.score').textContent = '0';
    }

  }

  /*
  // when the guess is too high
  else if (guess > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High!';
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
  // when the guess is to low
  else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low!';
    } else {
      document.querySelector('.message').textContent = 'YOu lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }*/

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...'
  displayMessage('Start guessing...')
});
