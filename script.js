// Rock Paper Scissors Instructions:
    // Function getComputerChoice - this will randomly return either "Rock", "Paper", or "Scissors".
    // Use the getComputerChoice function to have the computer play. (Check with console log before progressing)
    // Need a function that plays a single round of Rock Paper Scissors. (playRound)
    // Above function needs two parameters. (Make sure to return them to be used in later code.)
        // playerSelection - needs to not be case sensitive (rock, Rock, RoCk, etc.)
        // computerSelection
    // Return a string to declare the winner of the round. "You Lose! Paper beats Rock".
    // Function game(), playRound function inside to play a 5 round game. It should keep score and report a winner or loser.
        // use console.log() to display the results of each round and winner at the end.
    // Use prompt() to get input from user.

// My Rock Paper Scissors Game Steps
    // RPS rules: 
        // Rock beats scissors but loses to paper
        // Paper beats rock but loses to scissors
        // Scissors beats paper but loses to rock
    // Prompt asks user to input their choice Rock, Paper or Scissors
    
    /* let userChoice = prompt("Please pick Rock, Paper or Scissors.");  
    let options = ["rock","paper","scissors"];
    let choice = options.indexOf(userChoice.toLowerCase());
    console.log(userChoice.toLowerCase());
    console.log(options);
    console.log(choice);
    // Add in else, error please select Rock Paper or Scissors.
    if (choice >= 0 && choice <= 2){
        alert("Computing");
    } else {
        alert("Invalid response. Please pick Rock, Paper or Scissors.");
    } */
    
    // Computer randomly selects either Rock, Paper or Scissors
    // Computer compares the user's response to their own, aka calculates the winner
        // If user picks Rock &
            // Comp picks Rock, then tie aka no winner
            // Comp picks Paper, then user loses
            // Comp picks Scissors, then user wins
        // If user picks Paper &
            // Comp picks Rock, then user wins
            // Comp picks Paper, then tie aka no winner
            // Comp picks Scissors, then user loses
        // If user picks Scissors &
            // Comp picks Rock, then user loses
            // Comp picks Paper, then user wins
            // Comp picks Scissors, then tie aka no winner
    // Output to user the result aka declare winner
    // Ask user if they want to play again
    // Repeat (RPS)


    let options = ["rock", "paper", "scissors"];
    let computerChoice = getComputerChoice();
    function getComputerChoice(){
        const random = Math.floor(Math.random() * options.length);
        console.log(random, options[random]);
        return options[random];
    }
    let userChoice = getUserChoice();
    function getUserChoice (){
        let userInput = prompt("Please pick Rock, Paper or Scissors");
        let choice = options.indexOf(userInput.toLowerCase());
        if(choice >= 0 && choice <= 2){
            //compare(userChoice, computerChoice);
        } else {
            alert("Invalid response.");
            getUserChoice();
        }
    }
    function compare(){ //pass arguments and name them
        //switches
    }