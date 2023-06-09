let wins = 0;
let loses = 0;
let ties = 0;
let winner = '';


const resultMessage = document.querySelector('.scoreboard');
const playerScore = document.querySelector('.you');
const totalTies = document.querySelector('.ties');
const computerScore = document.querySelector('.computer');
const drawsSubtitleToggle = document.querySelector('.draws');
const gameOverMessage = document.querySelector('.fighters');

const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((choice) => {
        choice.addEventListener('click', () => {
            displaySlateBackgroundImage(choice.id, 'you')
            playRound(choice.id);
        });
    });


function playRound (playerSelection) {
    playerChoice.forEach((choice) => {
        choice.disabled = true;
    });
    const computerSelection = getComputerSelection();
    showRoundSlate(playerSelection, computerSelection);
    let result = '';
    const win = `${playerSelection} beats ${computerSelection}.`;
    const lose = `${playerSelection} loses to ${computerSelection}.`;
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
    else {ties++, winner = 'tie'};

    drawsSubtitleToggle.textContent = '';

    setTimeout(updateScoreBoard.bind(null, result), 1500);
}

function getComputerSelection() {
    const compRandom = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    displaySlateBackgroundImage(compRandom, 'computer');
    return compRandom;
}

function displaySlateBackgroundImage(image, who) {
    const slateSelector = document.querySelector(`.${who}`);
    slateSelector.style.backgroundImage = `url(images/${image}.png)`;
    resetSlateColors();
}

function updateScoreBoard(winOrLoss) {
    const displaySlateBackgroundImage = document.querySelectorAll('#slate');
    displaySlateBackgroundImage.forEach((slate) => {
        slate.style.backgroundImage = 'url()';
    });
    drawsSubtitleToggle.textContent = 'DRAWS';
    resultMessage.textContent = winOrLoss;
    playerScore.textContent = `${wins}`;
    totalTies.textContent = `${ties}`;
    computerScore.textContent = `${loses}`;
    winner == 'you' ?
        (playerScore.style.borderColor = 'green',
         playerScore.style.color = 'green',
         resultMessage.style.borderColor = 'green',
         resultMessage.style.color = 'green')
        :
        (playerScore.style.borderColor = 'gray',
         playerScore.style.color = 'black');
    winner == 'tie' ?
        (totalTies.style.borderColor = 'orange',
         totalTies.style.color = 'orange',
         resultMessage.style.borderColor = 'orange',
         resultMessage.style.color = 'orange')
        :
        (totalTies.style.borderColor = 'gray',
         totalTies.style.color = 'black');
    winner == 'computer' ?
        (computerScore.style.borderColor = 'maroon',
         computerScore.style.color = 'maroon',
         resultMessage.style.borderColor = 'maroon',
         resultMessage.style.color = 'maroon')
        :
        (computerScore.style.borderColor = 'gray',
         computerScore.style.color = 'black');

    playerChoice.forEach(choice => {
    choice.disabled = false;
    });

    if (wins == 5 || loses == 5) {
        gameOver();
    };
}

function resetSlateColors() {
    playerScore.style.borderColor = 'gray';
    totalTies.style.borderColor = 'gray';
    computerScore.style.borderColor = 'gray'
    playerScore.style.color = 'black';
    totalTies.style.color = 'black';
    computerScore.style.color = 'black';
}

function showRoundSlate(you, computer) {
    resultMessage.style.color = 'black';
    resultMessage.style.borderColor = 'gray';
    resultMessage.textContent = `${you} vs ${computer}`;
    playerScore.textContent = '';
    computerScore.textContent = '';
    you == computer ?
    (totalTies.textContent = '=',
     totalTies.style.color = 'orange',
     totalTies.style.borderColor = 'orange')
    :
    (totalTies.textContent = 'vs',
     totalTies.style.color = 'red',
     totalTies.style.borderColor = 'red');
}

function gameOver() {
    playerChoice.forEach(choice => {
        choice.disabled = true;
    });
    resultMessage.textContent = (wins == 5) ?
    'YOU WON! Best out of 5.' : 'The Computer won best out of 5.';
    gameOverMessage.textContent = 'PLAY AGAIN';

    // Start game over again
    gameOverMessage.querySelector('.fighters');
    gameOverMessage.style.backgroundColor = 'green';
    gameOverMessage.style.color = 'white';
    gameOverMessage.addEventListener('click', () => {
        location.reload();
    });
}