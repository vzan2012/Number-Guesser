// Custom Scripts

/*
    GAME FUNCTION:
    - Player must guess a number between the min and max.
    - Player gets a certain amount of guesses.
    - Notify player of guesses remaining
    - Notify the player of the correct answer if loose.
    - Let the player choose to play again 
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

// Assign the UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for the guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Disable Input
    guessInput.disabled = true;

    // Change the border color
    guessInput.style.borderColor = "green";
    guessInput.style.borderWidth = "2px";

    // Set the message
    setMessage(`${winningNum} is correct, You WIN the game !!!`, "green");
  } else {
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
