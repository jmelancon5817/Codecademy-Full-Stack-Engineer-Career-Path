let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.floor(Math.random() * 9) + 1;
};

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess === computerGuess) {
    return true;
  } else if (
    Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)
  ) {
    return true;
  } else {
    return false;
  }
};

let updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

let advanceRound = () => {
  currentRoundNumber += 1;
};
