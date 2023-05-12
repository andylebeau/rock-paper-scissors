const getComputerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
const getPlayerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

const correctPlayerFormat = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function playRound (playerSelection, computerSelection) {
    // playerSelection = correctPlayerFormat(playerSelection);
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }
    else if (playerSelection == 'Rock') {
        return (computerSelection == 'Paper') ?
        `You Lose! ${computerSelection} beats ${playerSelection}.` : `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'Paper') {
        return (computerSelection == 'Scissors') ?
        `You Lose! ${computerSelection} beats ${playerSelection}.` : `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'Scissors') {
        return (computerSelection == 'Rock') ?
        `You Lose! ${computerSelection} beats ${playerSelection}.` : `You Win! ${playerSelection} beats ${computerSelection}.`
    }
}

function game () {
    let countPlayerWins = 0;
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice))
        if (playRound(getPlayerChoice(), getComputerChoice()).includes('Win')) {
            countPlayerWins++;
        }
    }
    return countPlayerWins > 2 ? `You won ${countPlayerWins} out of 5 rounds!` : `You lost ${countPlayerWins} out of 5 rounds}.`
}