function playRound (playerSelection, computerSelection) {
    // console.log(playerSelection, computerSelection)
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
    return result;
}

let wins = 0;
let loses = 0;
let ties = 0;
let winOrLose = '';


    const getComputerSelection = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

    const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((choice) => {
        choice.addEventListener('click', () => {
            const resultMessage = document.querySelector('#round');
            winOrLose = playRound(choice.id, getComputerSelection())
            resultMessage.textContent = winOrLose;
            if (winOrLose.includes('Win')) {wins++}
            else if (winOrLose.includes('Lose')) {loses++}
            else {ties++}

            const playerScore = document.querySelector('.you');
            const totalTies = document.querySelector('.ties');
            const computerScore = document.querySelector('.computer');
            playerScore.textContent = `You: ${wins}`;
            totalTies.textContent = `Ties: ${ties}`;
            computerScore.textContent = `Computer: ${loses}`;
        });
        console.log(wins, loses, ties)
    });
