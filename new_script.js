window.onload = function(){
    let compWins = 0;
    let userWins = 0;
    let rounds = 1;
    
    document.querySelector("#rock").addEventListener("click", playRound);
    document.getElementById("paper").addEventListener("click", playRound);
    document.getElementById("scissors").addEventListener("click", playRound);
 
    function playRound(e){
        let playerSelection = e.target.id;
        console.log("User picked: " + e.target.id);
        
        let options = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * options.length);
        let computerSelection = options[random];
        console.log("Computer picked: " + computerSelection);   

        switch(playerSelection) {
            case "rock":
                if(computerSelection === "scissors") {
                    document.getElementById("playerScore").innerHTML = ++userWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Rock beats scissors, you win round " + rounds + "!";
                    console.log("Rock beats scissors, user wins round " + rounds + "!");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "paper") {
                    document.getElementById("computerScore").innerHTML = ++compWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Paper beats rock, you lose round " + rounds + ".";
                    console.log("Paper beats rock, you lose round " + rounds + ".");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "rock") {
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "The round is a draw.";
                    console.log("The round is a draw.");
                    console.log("------------------------"); 
                }
                break;
            case "paper":
                if(computerSelection === "rock") {
                    document.getElementById("playerScore").innerHTML = ++userWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Paper beats rock, you win round " + rounds + "!";
                    console.log("Paper beats rock, you win round " + rounds + "!");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "scissors") {
                    document.getElementById("computerScore").innerHTML = ++compWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Scissors beats paper, you lose round " + rounds + ".";
                    console.log("Scissors beats paper, you lose round " + rounds + ".");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "paper") {
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "The round is a draw.";
                    console.log("The round is a draw.");
                    console.log("------------------------"); 
                }
                break;
            case "scissors":
                if(computerSelection === "paper") {
                    document.getElementById("playerScore").innerHTML = ++userWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Scissors beats paper, you win round " + rounds + "!";
                    console.log("Scissors beats paper, you win round " + rounds + "!");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "rock") {
                    document.getElementById("computerScore").innerHTML = ++compWins;
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "Rock beats scissors, you lose round " + rounds + ".";
                    console.log("Rock beats scissors, you lose round " + rounds + ".");
                    console.log("------------------------"); 
                    rounds++;
                } else if(computerSelection === "scissors") {
                    document.getElementById("computer_picks").innerHTML = "Computer picked: " + computerSelection + ".";
                    document.getElementById("result").innerHTML = "The round is a draw.";
                    console.log("The round is a draw.");
                    console.log("------------------------"); 
                }
                break;
        }
        check();
    };
    
    function check() {
        if(userWins === 3) {
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;
            document.getElementById("result").innerHTML = "Game over, you won!";
            playAgain();
        } else if(compWins === 3) {
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;
            document.getElementById("result").innerHTML = "Game over, computer won!";
            playAgain();     
        }
    };

    function playAgain() {
        let element = document.getElementById("repeat");
        let btn = document.createElement("button");
        btn.style.backgroundColor = 'gray';
        btn.style.color = 'white';
        btn.style.fontSize = '30pt';
        btn.style.marginLeft = '10px';
        btn.style.marginBottom = '30px';
        btn.innerHTML = "Want to play again?";
        btn.onclick = function() {
            // make the top buttons clickable
            document.querySelector("#rock").disabled = false;
            document.querySelector("#paper").disabled = false;
            document.querySelector("#scissors").disabled = false;
            // make the results sentence show no words
            document.getElementById("result").innerHTML = "";
            // make the scores go back to zero
            compWins = 0;
            document.getElementById("computerScore").innerHTML = "0";
            userWins = 0;
            document.getElementById("playerScore").innerHTML = "0";
            rounds = 1;
            // make the play again button disappear
            btn.parentNode.removeChild(btn);
        }
        element.appendChild(btn);
    }
}  