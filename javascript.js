function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, getComputerChoice) {
    if((playerSelection === "rock" && getComputerChoice === "scissors") || (playerSelection === "scissors" && getComputerChoice === "paper") || (playerSelection === "paper" && getComputerChoice === "rock")) {
        return 1;
    }
    else if(playerSelection === getComputerChoice) {
        return 0;
    } else {
        return -1;
    }
}
function updateScore(winner) {
    if(winner === 1) {
        playerScore++;
        h1.textContent = "You won!";
    } else if(winner === 0) {
        h1.textContent = "Tie!";
    } else {
        computerScore++;
        h1.textContent = "You lost :(";
    }
    div.textContent = playerScore + " " + computerScore;
    if(playerScore >= 5 || computerScore >= 5) {
        h1.textContent = "Game Over!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
}
let playerScore = 0;
let computerScore = 0;

const h1 = document.querySelector("h1");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    updateScore(playRound("rock", getComputerChoice()))
});
paperButton.addEventListener("click", () => {
    updateScore(playRound("paper", getComputerChoice()))
});
scissorButton.addEventListener("click", () => {
    updateScore(playRound("scissors", getComputerChoice()))
});

const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = playerScore + " " + computerScore;
body.appendChild(div);