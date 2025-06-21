function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const resultsDiv = document.getElementById("results");
  let humanScoreSpan = document.getElementById("human_score");
  let computerScoreSpan = document.getElementById("computer_score");
  const all_buttons = document.querySelectorAll(".btn");
  const resetButton = document.getElementById("reset");

  resultsDiv.textContent = "Rock Paper Scissors!";

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
  }

  function resetGame() {
        humanScore = 0;
        computerScore = 0;
        humanScoreSpan.textContent = 0;
        computerScoreSpan.textContent = 0;
        resultsDiv.textContent = "Rock Paper Scissors!";
        all_buttons.forEach(bt => bt.disabled = false);
    }

  all_buttons.forEach((bt) => {
    bt.addEventListener("click", () => playRound(bt.id, getComputerChoice()));
  });

  resetButton.addEventListener("click", resetGame);

  function playRound(humanChoice, computerChoice) {
        if (!["rock", "paper", "scissors"].includes(humanChoice)) return;

        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            resultsDiv.textContent = "It's a tie! Both chose " + humanChoice;
            return;
        }
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            humanScoreSpan.textContent = humanScore;
            resultsDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            computerScore++;
            computerScoreSpan.textContent = computerScore;
            resultsDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        }

        if (humanScore === 5 || computerScore === 5) {
            resultsDiv.textContent = humanScore === 5 ? "Game Over! You won the game!" : "Game Over! Computer won the game!";
            all_buttons.forEach(bt => bt.disabled = true);
            return;
        }
    }

  // console.log("Game Over!");
  // console.log("Human Score: " + humanScore);
  // console.log("Computer Score: " + computerScore);
  // if (humanScore > computerScore) {
  //     console.log("You won the game!");
  // } else if (computerScore > humanScore) {
  //     console.log("Computer won the game!");
  // } else {
  //     console.log("It's a tie game!");
  // }
}

// Start the game
playGame();
