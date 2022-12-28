function getComputerChoice() 
{
    let randomChoice = Math.floor(Math.random() * 3);
    let computer = '';

    if (randomChoice == 0)
    {
        computer = "ROCK";    
    } else if (randomChoice == 1) {
        computer = "PAPER";
    } else {
        computer = "SCISSORS";
    }

    return computer;
}

function playRound(playerSelection, computerSelection)
{
    player = playerSelection.toUpperCase();
    console.log("Player played " + player);
    console.log("Computer played " + computerSelection);

    if (player == computerSelection) {
        console.log("Draw!");
    } else if ((player == "ROCK" && computerSelection == "SCISSORS") || 
    (player == "PAPER" && computerSelection == "ROCK") ||
    (player == "SCISSORS" ** computerSelection == "PAPER")) {
        console.log("Point to player!");
        playerScore++;
    } else if ((computerSelection == "ROCK" && player == "SCISSORS") ||
    (computerSelection == "PAPER" && player == "ROCK") ||
    (computerSelection == "SCISSORS" && player == "PAPER")) {
        console.log("Point to computer!");
        computerScore++;
    } else {
        console.log("Please enter a valid choice.")
    }

}

function game()
{
    for (i = 0; i < 5; i++)
    {
        playerSelection = prompt("Choose Rock, Paper, or Scissors.");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player Score is " + playerScore);
        console.log("Computer Score is " + computerScore);
    }

    if (playerScore > computerScore){
        console.log("Player Wins!");
    } else if (computerScore > playerScore){
        console.log("Computer Wins!");
    } else {
        console.log("The game is a draw!");
    }
}

let playerScore = 0;
let computerScore = 0;

game();