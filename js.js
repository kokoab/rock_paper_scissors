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

    
}

// Start the game
playGame();