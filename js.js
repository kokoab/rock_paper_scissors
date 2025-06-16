let computerChoice = "";
let humanChoice = 0;


function getRandom (max) {
    return Math.floor(Math.random() * max);
}

function getStance () {
    let getNumber = getRandom(3);

    if (getNumber === 0) {
        computerChoice = "rock";
    }
    else if (getNumber === 1) {
        computerChoice = "paper";
    }
    else if (getNumber === 2) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "invalid choice";
    }

    return computerChoice;
}

getStance();
console.log(computerChoice);