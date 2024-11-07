
let randomNumber;
let attempts;

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").innerText = "New game started! Guess a number.";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    document.getElementById("feedback").innerText = "Please enter a number between 1 and 100!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("feedback").innerText = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
  } else if (userGuess < randomNumber) {
    document.getElementById("feedback").innerText = "Too low! Try a higher number.";
  } else {
    document.getElementById("feedback").innerText = "Too high! Try a lower number.";
  }
}

window.onload = startNewGame;
