let result = document.getElementById('result');
let playerScoreHead = document.getElementById('playerScore');
let computerScoreHead = document.getElementById('computerScore'); 
const resetBtn = document.getElementById('resetBtn');
let displayPlayer = document.getElementById('displayPlayer');
let displayComputer = document.getElementById('displayComputer');
let conditionText = document.getElementById('condition');

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

function checkResult(player, computerSelection)
{
    if (player == computerSelection) {
        result.textContent = 'NEITHER COMPETITOR GETS A POINT';
        conditionText.style.fontSize = "30px";
        conditionText.textContent = "DRAW"
        } else if ((player == "ROCK" && computerSelection == "SCISSORS") || 
        (player == "PAPER" && computerSelection == "ROCK") ||
        (player == "SCISSORS" && computerSelection == "PAPER")) {
            result.textContent = 'YOU HAVE GAINED A POINT OVER YOUR ENEMY'
            playerScore++;
            conditionText.style.fontSize = "30px";
            conditionText.textContent = "BEATS";
        } else if ((computerSelection == "ROCK" && player == "SCISSORS") ||
        (computerSelection == "PAPER" && player == "ROCK") ||
        (computerSelection == "SCISSORS" && player == "PAPER")) {
            result.textContent = 'YOUR ENEMY GAINS A POINT'
            computerScore++;
            conditionText.style.fontSize = "18px";
            conditionText.textContent = "IS BEATEN BY";
        }
    
    if (playerScore === 5)
    {
        result.textContent = "YOU HAVE BEATEN YOUR ENEMY";
    } else if (computerScore === 5) {
        result.textContent = "YOUR ENEMY HAS BEATEN YOU";
    }

    displayPlayer.style.visibility = "visible";
    displayPlayer.textContent = player;

    displayComputer.style.visibility = "visible";
    displayComputer.textContent = computerSelection;

    playerScoreHead.textContent = playerScore.toString();
    computerScoreHead.textContent = computerScore.toString();
    
}

function resetGame()
{
    resetBtn.style.visibility = "visible";
    resetBtn.addEventListener('click', function(){
        resetBtn.style.visibility = "hidden";
        result.textContent = "";
        conditionText.style.fontSize = "30px";
        conditionText.textContent = "BEGIN";
        displayPlayer.style.visibility = "hidden";
        displayComputer.style.visibility = "hidden";
        playerScore = 0;
        computerScore = 0;
        playerScoreHead.textContent = playerScore.toString();
        computerScoreHead.textContent = computerScore.toString();
        
    })

}

const choiceList = document.querySelectorAll('.choiceDiv');

choiceList.forEach((choice) => {
    choice.addEventListener('click', function(){
        if(playerScore < 5 && computerScore < 5) {
            let player = choice.id.toUpperCase();
            let computerSelection = getComputerChoice();
            checkResult(player, computerSelection);

            if (playerScore === 5)
            {
                resetGame();
            } else if (computerScore === 5) {
                resetGame();
            }
        }

        })
    })

let playerScore = 0;
let computerScore = 0;


