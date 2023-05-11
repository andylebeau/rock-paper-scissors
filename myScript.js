const getComputerChoice = () => ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection)
}