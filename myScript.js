let wins = 0;
let loses = 0;
let ties = 0;
const resultMessage = document.querySelector('#round');

function playRound (playerSelection) {
    const computerSelection = getComputerSelection()
    let result = '';
    const win = `You Win! ${playerSelection} beats ${computerSelection}.`;
    const lose = `You Lose! ${computerSelection} beats ${playerSelection}.`;
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

    if (result == win) {wins++}
    else if (result == lose) {loses++}
    else {ties++}

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
    const playerScore = document.querySelector('.you');
    playerScore.textContent = `You: ${wins}`;
    const totalTies = document.querySelector('.ties');
    totalTies.textContent = `Ties: ${ties}`;
    const computerScore = document.querySelector('.computer');
    computerScore.textContent = `Computer: ${loses}`;
}

function gameOver() {
    playerChoice.forEach(choice => {
        choice.disabled = true;
    })
    resultMessage.textContent = (wins == 5) ? 'Ali wants a rematch!' : 'Request a rematch?'
    const newGame = document.querySelector('#choices');
    newGame.textContent = (wins == 5) ? 'YOU are the new CHAMPION!' : 'Mohammad Ali is UNDEFEATED!'
}
