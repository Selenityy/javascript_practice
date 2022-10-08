let compWins = 0;
let userWins = 0;

function game(){
    let options = ["rock", "paper", "scissors"]; 
    const random = Math.floor(Math.random() * options.length);
    //let computerChoice = getComputerChoice();
    let computerChoice = options[random];
    
    // function getComputerChoice(){
    //     return options[random];
    // }
    
    let userChoice = getUserChoice();
    function getUserChoice (){
        let userInput = prompt("Please pick Rock, Paper or Scissors");
        let choice = options.indexOf(userInput.toLowerCase());
        if(choice < 0 || choice > 2){
            alert("Invalid response.");
            return getUserChoice();
        } 
        else {
            return userInput.toLowerCase();
        }
    }
    console.log("User picked: " + userChoice);
    console.log("Computer picked: " + options[random]);
    
    function playRound(userChoice, computerChoice){
        switch (userChoice){
            case "rock":
                if (computerChoice === "scissors"){
                    userWins++
                    alert("Rock beats scissors, you win the round!");
                    console.log("Rock beats scissors, user wins the round!");
                } else if (computerChoice === "paper"){
                    compWins++
                    alert("Paper beats rock, you lose the round.");
                    console.log("Paper beats rock, user loses the round.");   
                } else if (computerChoice === "rock"){
                    alert("The round is a draw.");
                    console.log("The round is a draw.")
                } else {
                    alert("Does not compute, try again.");
                    console.log("Does not compute, try again.")
                }
                break;
            case "paper":
                if (computerChoice === "rock"){
                    userWins++
                    alert("Paper beats rock, you win the round!");
                    console.log("Paper beats rock, user wins the round.");
                } else if (computerChoice === "scissors"){
                    compWins++
                    alert("Scissors beats paper, you lose the round.");
                    console.log("Scissors beats paper, user loses the round.");
                } else if (computerChoice === "paper"){
                    alert("The round is a draw.");
                    console.log("The round is a draw.")
                } else {
                    alert("Does not compute, try again.");
                    console.log("Does not compute, try again.")
                }
                break;
            case "scissors":
                if (computerChoice === "paper"){
                    userWins++
                    alert("Scissors beats paper, you win the round!");
                    console.log("Scissors beats paper, user wins the round.");
                } else if (computerChoice === "rock"){
                    compWins++
                    alert("Rock beats scissors, you lose the round.");
                    console.log("Rock beats scissors, user loses the round.");
                } else if (computerChoice === "scissors"){
                    alert("The round is a draw.");
                    console.log("The round is a draw.")
                } else {
                    alert("Does not compute, try again.");
                    console.log("Does not compute, try again.")
                }
                break;
        }
    }
    playRound(userChoice, computerChoice);
    console.log("User wins: " + userWins);
    console.log("Comp wins: " + compWins);
}

while (userWins < 3 && compWins < 3){
    console.log("Round Start: ");
    game();
    console.log("Round Ends: ");
}