let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {
    if (Math.abs(human === computer)) {
        return true;
    } else if (Math.abs(human > computer)) {
        return true;
    } else if (Math.abs(computer < human)) {
        return false;
    } else if (Math.abs(human === target)) {
        return true;
    } else {
        return "Error!!! Something is wrong";
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else (winner === 'computer'); {
   }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}