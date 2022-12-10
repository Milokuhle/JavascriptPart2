const playerSelection = document.querySelector("#player");
const computerSelection = document.querySelector("#computer");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const buttons = document.querySelectorAll(".btnPlay");

let player;
let computer;
let outcome;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerPlay();
    playerSelection.textContent = "Player: " + player;
    computerSelection.textContent = "Computer: " + computer;
    result.textContent = "Result: " + checkWinner();
    score.textContent = endGame();
}))

function computerPlay() {
    const number = Math.floor(Math.random() * 3) + 1;

    switch(number) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return "It's a tie!!"
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You win!" :"You lose"
    } 
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You win!" :"You lose"
    } 
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You win!" :"You lose"
    } 
}

function endGame() {
    let plays;
    if(plays <= 5) {
        if(computer > player) {
            return "Game over, you lose";
        }
        else if(player > computer) {
            return "Game over, You win!!"
        }
        else {
            return "Game over, It's a Tie"
        }
    }
}