const SELECTION = ['Rock', 'Paper', 'Scissors'];
const ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;
let ties = 0;

// select random item from SELECTION
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * SELECTION.length)];
}

function scoreRound(playerSelection, computerSelection) {
  if (playerSelection === SELECTION[0]) {
    switch (computerSelection) {
      case SELECTION[0]:
        ties++;
        return 'A tie';
      case SELECTION[1]:
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      case SELECTION[2]:
        playerScore++;
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === SELECTION[1]) {
    switch (computerSelection) {
      case SELECTION[0]:
        playerScore++;
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[1]:
        ties++;
        return 'A tie';
      case SELECTION[2]:
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    switch (computerSelection) {
      case SELECTION[0]:
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      case SELECTION[1]:
        playerScore++;
        return `You win!!! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[2]:
        ties++;
        return 'A tie';
    }
  }
}

function scoreGame() {
  console.log('FINAL SCORE');
  console.log(`You: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
  console.log(`Ties: ${ties}`);
  if (playerScore > computerScore) {
    console.log(`You win the game ${playerScore}-${computerScore}!!!`);
  } else if (computerScore > playerScore) {
    console.log(
      `You lose... ${computerScore}-${playerScore} for the computer`
    );
  } else {
    console.log(`The game is tied!`);
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    const computerSelection = computerPlay();

    const input = prompt('Rock, paper or scissors?');
    // parse input into a lower case word with a capitalized first character
    const playerSelection = `${input[0].toUpperCase()}${input
      .substring(1)
      .toLocaleLowerCase()}`;

    console.log(scoreRound(playerSelection, computerSelection));
  }
  scoreGame();
}

game(ROUNDS);
