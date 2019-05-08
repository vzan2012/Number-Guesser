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
  winningNum = getRandomNum(min, max),
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
  } else {
    gameLogic();
  }

  function gameLogic() {
    // Check if won
    if (guess === winningNum) {
      // Game over - Won
      gameOver(true, `${winningNum} is correct, You WIN the game !!!`);
    } else {
      // Wrong number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        gameOver(
          false,
          `Game Over... You Lost the game. The correct number was ${winningNum}`
        );
      } else {
        // Game continues -answer wrong

        // Change the border color
        guessInput.style.borderColor = "red";
        guessInput.style.borderWidth = "2px";

        // Clear the Input
        guessInput.value = "";

        // Tell user its the wrong answer
        setMessage(
          `${guess} is not correct, ${guessesLeft} guesses left`,
          "red"
        );
      }
    }
  }
});

// Play again - event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable Input
  guessInput.disabled = true;
  // Change the border color
  guessInput.style.borderColor = color;
  guessInput.style.borderWidth = "2px";
  // Change the text color
  message.style.color = color;
  // Set the message
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Again?";
  guessBtn.className += "play-again";
}

// Get Winning Number
function getRandomNum(min, max) {
  let randNum = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(randNum)
  return randNum;
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
