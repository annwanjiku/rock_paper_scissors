document.addEventListener("DOMContentLoaded",()=>{

let submitButton = document.querySelector("#submit-button");
let replayButton = document.querySelector("#replay-button");
let newgameButton = document.querySelector("#newgame-button");

let computerResult = document.querySelector("#count-computer");
let playerResult = document.querySelector("#count-player");

let player = document.querySelector("#player-input");
let computer = document.querySelector("#computerInput")

let choices = ["rock","paper","scissors"];
let computerScore = 0
let playerScore = 0


let playerChoice;
let computerChoice;

let message;
let messagePoint;


function compareChoices(){
    message;
    messagePoint;
    playerChoice = player.value.toLowerCase()
    let index = Math.floor(Math.random()*3)
    computerChoice = choices[index]

    if ((computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "rock" && playerChoice === "scissors") ||
            (computerChoice === "scissors" && playerChoice === "paper")) {
            computerScore++;
            message = `Computer wins, your choice: ${playerChoice} and computers choice:${computerChoice}`
        } 
    else if ((playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
            playerScore++;
            message = `Player wins, your choice: ${playerChoice} and computers choice:${computerChoice}`
        }
    else if(computerChoice === playerChoice){
        message =`It's a tie, your choice: ${playerChoice} and computers choice:${computerChoice}`
    }

    else{
            message = "Enter a valid choice"
            playerScore = " ";
            computerScore=" ";
            computerChoice=" ";
    }

    computerResult.textContent =`computers_score: ${computerScore}`;
    playerResult.textContent =`players_score: ${playerScore}`;
    messagePoint = document.querySelector("#message")
    messagePoint.textContent = message; 
    computer.textContent = `Computer: ${computerChoice}`
    submitButton.disabled = true;   
    
}


submitButton.addEventListener("click",compareChoices)

replayButton.addEventListener("click",()=>{
    submitButton.disabled = false;
    messagePoint.textContent = " ";
    computer.textContent = "Computer:";
   
  
})
newgameButton.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    computerResult.textContent = "computers_score:";
    playerResult.textContent = "players_score:";
    document.querySelector("#player-input").value = ""
    computer.textContent = "Computer:";
    messagePoint.textContent = " ";
    submitButton.disabled = false; 
})

});