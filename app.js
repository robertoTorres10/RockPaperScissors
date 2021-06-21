// Declaring The Variables
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");

const scoreBoard_div = document.querySelector("scoreBoard");
const result_p = document.querySelector(".results > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

// Clicking The Buttons
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    // console.log("WIN");
    userScore++;
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win! 🔥`;
    document.getElementById(userChoice).classList.add("greenGlow");
}
function lose(userChoice, computerChoice){
    // console.log("LOST");
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost! 😢 `;
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw! 😑  `;
}
// console.log(getComputerChoice()); testing to see if this works

function game(userChoice){
    // console.log("testing " + userChoice);
    const computerChoice = getComputerChoice();
    // console.log("User Choice => " + userChoice);
    // console.log("Computer Choice => " + computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS! 😃 ");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSES! 😢 ");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log("IT'S A DRAW! 😑 ");
            draw(userChoice, computerChoice);
            break; 
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
        // console.log("Hey You Clicked Rock!")
    })

    paper_div.addEventListener("click", function(){
        game("p");
        // console.log("Hey You Clicked Paper!")
    })
    scissor_div.addEventListener("click", function(){
        game("s");
        // console.log("Hey You Clicked Scissor!")
    })
}

main();
