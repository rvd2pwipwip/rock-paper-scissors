const SELECTION = ['Rock', 'Paper', 'Scissors'];
const ROUNDS = 5; // how many rounds in a game

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.results');
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let roundsPlayed = 0;
let gameSummary = '';

// select random item from SELECTION
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * SELECTION.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === SELECTION[0]) {
    switch (computerSelection) {
      case SELECTION[0]:
        ties++;
        return 'A tie';
      case SELECTION[1]:
        computerScore++;
        return `You lose. ${computerSelection} beats ${playerSelection}`;
      case SELECTION[2]:
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === SELECTION[1]) {
    switch (computerSelection) {
      case SELECTION[0]:
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[1]:
        ties++;
        return 'A tie';
      case SELECTION[2]:
        computerScore++;
        return `You lose. ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    switch (computerSelection) {
      case SELECTION[0]:
        computerScore++;
        return `You lose. ${computerSelection} beats ${playerSelection}`;
      case SELECTION[1]:
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case SELECTION[2]:
        ties++;
        return 'A tie';
    }
  }
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    roundsPlayed++;
    display.textContent = playRound(e.target.innerHTML, computerPlay());
    score.textContent = `You: ${playerScore}, Computer: ${computerScore}`;
    // disable game buttons once a player scores 5 points
    if (playerScore === 5 || computerScore === 5) {
      buttons.forEach((btn) => {
        btn.disabled = true;
      });
      // calculate  and display final score
      scoreGame();
      // add replay button to reset game and reanable game buttons
      const replay = document.createElement('button');
      replay.innerHTML = 'Replay';
      replay.addEventListener('click', () => {
        gameReset();
        buttons.forEach((btn) => {
          btn.disabled = false;
        });
      });
      display.appendChild(replay);
    }
  });
});

function scoreGame() {
  if (playerScore > computerScore) {
    gameSummary = `You win the game ${playerScore}-${computerScore}!!!`;
  } else if (computerScore > playerScore) {
    gameSummary = `You lose... ${computerScore}-${playerScore} for the computer`;
  } else {
    gameSummary = `The game is tied!`;
  }
  const finalScore = document.createElement('div');
  finalScore.innerHTML = `<h3>FINAL SCORE</h3>
    <p>You: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
    <p>Ties: ${ties}</p>
    <h4>${gameSummary}</h4>
    `;

  display.appendChild(finalScore);
}

function gameReset() {
  score.textContent = '';
  display.innerHTML = '';
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  roundsPlayed = 0;
}
