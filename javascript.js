// console.log(23 + 97);
// console.log(1+2+3+4+5+6);
// console.log((4 + 6 + 9) / 77);
// let a = 10;
// console.log(a);
// console.log(9 * a);
// let b = 7 * a;
// console.log(b);
// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;

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

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return "player wins";
    }
    else if(playerSelection === computerSelection) {
        return "tie";
    } else {
        return "computer win";
    }
}

function playGame() {
    for(var i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors: ").toLowerCase();
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

playGame();