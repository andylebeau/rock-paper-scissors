const getComputerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

const correctPlayerFormat = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function playRound (playerSelection, computerSelection) {
    playerSelection = correctPlayerFormat(playerSelection)
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