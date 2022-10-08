let compWins = 0;
let userWins = 0;
let rounds = 1;
// game function will start the round after the welcome prompt while the user and computer have a score of not 3.
function game(){
    const options = ["rock", "paper", "scissors"]; 
    const random = Math.floor(Math.random() * options.length);
    // retrieves and stores the computer's input.
    let computerChoice = options[random]; 
    let userChoice = getUserChoice();
    // getUserChoice function is to retrieve and stores the user's input.
    function getUserChoice() {
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
    // playRound function is how the computer decides who won, aka the rules of rock paper scissors.
    function playRound(userChoice, computerChoice){
        switch (userChoice){
            case "rock":
                if (computerChoice === "scissors"){
                    userWins++;
                    alert("Rock beats scissors, you win round " + rounds + "!");
                    console.log("Rock beats scissors, user wins round " + rounds + "!");
                } else if (computerChoice === "paper"){
                    compWins++;
                    alert("Paper beats rock, you lose round " + rounds + ".");
                    console.log("Paper beats rock, user loses round " + rounds + ".");   
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
                    userWins++;
                    alert("Paper beats rock, you win round " + rounds + "!");
                    console.log("Paper beats rock, user wins round " + rounds + ".");
                } else if (computerChoice === "scissors"){
                    compWins++;
                    alert("Scissors beats paper, you lose round " + ".");
                    console.log("Scissors beats paper, user loses round " + rounds + ".");
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
                    userWins++;
                    alert("Scissors beats paper, you win round " + rounds + "!");
                    console.log("Scissors beats paper, user wins round " + rounds + ".");
                } else if (computerChoice === "rock"){
                    compWins++;
                    alert("Rock beats scissors, you lose round " + rounds + ".");
                    console.log("Rock beats scissors, user loses round " + rounds + ".");
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
alert("Welcome to Rock, Paper, Scissors! Please make sure to open up the website's Console to play this game. Thank you and have fun!");
// this while loop keeps the game going until someone wins 3 times.
while (userWins < 3 && compWins < 3){
    console.log("Round " + rounds + " Start: ");
    game();
    console.log("Round " + rounds + " Ends");
    console.log("------------------------------")
    rounds++;
}