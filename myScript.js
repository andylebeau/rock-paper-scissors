let wins = 0;
let loses = 0;
let ties = 0;
let winner = '';

const resultMessage = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.you');
const totalTies = document.querySelector('.ties');
const computerScore = document.querySelector('.computer');
const gameOverMessage = document.querySelector('.fighters');


function playRound (playerSelection) {
    const computerSelection = getComputerSelection()
    let result = '';
    const win = `${playerSelection} beats ${computerSelection}.`;
    const lose = `${computerSelection} beats ${playerSelection}.`;
    if (playerSelection == computerSelection) {
        result = "It's a draw!";
    }
    else if (playerSelection == 'Rock') {
        result = (computerSelection == 'Scissors') ? win : lose;
    }
    else if (playerSelection == 'Paper') {
        result = (computerSelection == 'Rock') ? win : lose;
    }
    else if (playerSelection == 'Scissors') {
        result = (computerSelection == 'Paper') ? win : lose;
    }

    if (result == win) {wins++, winner = 'you'}
    else if (result == lose) {loses++, winner = 'computer'}
    else {ties++, winner = 'tie'}

    updateScoreBoard(result);

    if (wins == 5 || loses == 5) {
        gameOver()
    }
}

const getComputerSelection = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((choice) => {
        choice.addEventListener('click', () => {
            playRound(choice.id)    
        });
    });

function updateScoreBoard(winOrLoss) {
    resultMessage.textContent = winOrLoss;
    playerScore.textContent = `${wins}`;
    totalTies.textContent = `${ties}`;
    computerScore.textContent = `${loses}`;
    winner == 'you'
        ? (playerScore.style.borderColor = 'green',
         playerScore.style.color = 'green',
         resultMessage.style.borderColor = 'green',
         resultMessage.style.color = 'green')
        :
        (playerScore.style.borderColor = 'gray',
         playerScore.style.color = 'black');
    winner == 'tie'
        ? (totalTies.style.borderColor = 'orange',
         totalTies.style.color = 'orange',
         resultMessage.style.borderColor = 'orange',
         resultMessage.style.color = 'orange')
        :
        (totalTies.style.borderColor = 'gray',
         totalTies.style.color = 'black');
    winner == 'computer'
        ? (computerScore.style.borderColor = 'maroon',
         computerScore.style.color = 'maroon',
         resultMessage.style.borderColor = 'maroon',
         resultMessage.style.color = 'maroon')
        :
        (computerScore.style.borderColor = 'gray',
         computerScore.style.color = 'black');

}

function gameOver() {
    playerChoice.forEach(choice => {
        choice.disabled = true;
    })
    resultMessage.textContent = (wins == 5)
        ? 'YOU WON! Best out of 5.'
        : 'The Computer won best out of 5.';
    gameOverMessage.textContent = 'PLAY AGAIN'

    gameOverMessage.querySelector('.fighters');
    gameOverMessage.addEventListener('click', () => {
    location.reload();
});
}
