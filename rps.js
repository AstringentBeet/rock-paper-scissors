/*step 1: Create the values required to run the game,
such as rock, paper, and scissors*/



let rps = { 
    symbols: {
        "Rock": document.getElementById("Rock")
        "Paper": 
        "Scissors":
    }
    list: [
        ["t", "c", "u"],
        ["u", "t", "c"],
        ["c", "u", "t"],
    ],
    value: {
        "t": "tie",
        "u": "Splendid, you won a point!",
        "c": "You lost this round"
    }

    
}

let scoreboard = {
    
}

let player = {
    choice: document.getElementById("btn"),
    input : x => 
            x === "rock" ? 
}

//let symbolGroup = ["rock", "paper", "scissors"]
let randomNum = math.floor(math.random() * 3);
let computerChoice = rps.symbols[randomNum];
let matchResult = rps.list[choice][computerChoice];




