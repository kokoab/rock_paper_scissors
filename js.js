function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) return "rock";
        if (randomNumber === 1) return "paper";
        return "scissors";
    }

    function getHumanChoice() {
        return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
            return;
        }
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }
}

// Start the game
playGame();