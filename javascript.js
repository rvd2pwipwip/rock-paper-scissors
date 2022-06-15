const SELECTION = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return SELECTION[Math.floor(Math.random() * 3)];
}

const computerSelection = computerPlay();
let playerSelection = prompt('Rock, paper or scissors?');

// playerSelection = playerSelection[0].toUpperCase + playerSelection.substring(1);

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
