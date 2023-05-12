const getComputerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
const correctPlayerFormat = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function playRound (playerSelection, computerSelection) {
    playerSelection = correctPlayerFormat(playerSelection)
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }
    else if (playerSelection == 'Rock') {
        return (computerSelection == 'Scissors') ?
        `You Win! ${playerSelection} beats ${computerSelection}.` : `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection == 'Paper') {
        return (computerSelection == 'Rock') ?
        `You Win! ${playerSelection} beats ${computerSelection}.` : `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection == 'Scissors') {
        return (computerSelection == 'Paper') ?
        `You Win! ${playerSelection} beats ${computerSelection}.` : `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    let playerTotalWins = 0
    let computerTotalWins = 0
    let draws = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please type rock, paper or scissors')
        const computerSelection = getComputerChoice;
        let winOrLose = playRound(playerSelection, computerSelection)
        if (winOrLose.includes('Win')) {
            playerTotalWins++;
        }
        else if (winOrLose.includes('Lose')) {
            computerTotalWins++
        }
        else {
            draws++
        }
        console.log(winOrLose)
    }
    return (draws == 3 ? "It's a draw!" :
        playerTotalWins > (5 - draws) / 2) ? `You Won! Out of 5 Rounds, you won ${playerTotalWins} with ${draws} draws. The computer won ${computerTotalWins} rounds` :
        `You Lost! Out of 5 Rounds, the computer won ${5 - playerTotalWins - draws} rounds with ${draws} draws.`}