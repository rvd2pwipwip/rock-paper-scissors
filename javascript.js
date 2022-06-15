const SELECTION = ['Rock', 'Paper', 'Scissors'];

// select random item from SELECTION
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * SELECTION.length)];
}

const computerSelection = computerPlay();

const input = prompt('Rock, paper or scissors?');
// parse input into a lower case word with a capitalized first character
const playerSelection = `${input[0].toUpperCase()}${input
  .substring(1)
  .toLocaleLowerCase()}`;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === SELECTION[0]) {
    switch (computerSelection) {
      case SELECTION[0]:
        return 'A tie';
      case SELECTION[1]:
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      case SELECTION[2]:
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === SELECTION[1]) {
    switch (computerSelection) {
      case SELECTION[0]:
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[1]:
        return 'A tie';
      case SELECTION[2]:
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    switch (computerSelection) {
      case SELECTION[0]:
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      case SELECTION[1]:
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[2]:
        return 'A tie';
    }
  }
}

console.log(playRound(playerSelection, computerSelection));
