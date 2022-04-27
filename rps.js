/*step 1: Create the values required to run the game,
such as rock, paper, and scissors*/

let userScore = 0;
let computerScore = 0;
let draw = 0;
const symbol = rps.choiceStack;

let scrBrd = {
    player : document.getElementById('player'),
    computer : document.getElementById('computer'),
    tie : document.getElementById('draw'),
    result : document.getElementById("result"),
    //increases the scoreboards through incremental operators.
    winPoint(userChoice, computerChoice) {
        userScore++;
        this.player.innerHTML = userScore;
        alert(`${userChoice} beats ${computerChoice}\nYou earned a point!`);
    },
    drawMatch() { 
        draw++;
        this.tie.innerHTML = draw;
        alert('This is a draw!');
    },
    noPoint(userChoice, computerChoice) {
        computerScore++;
        this.computer.innerHTML = computerScore;
        alert(`${computerChoice} beats ${userChoice}\nComputer earned a point!`)
    },
    //sets all scores back to zero, and does away with the result <p> tag
    startOver() {
        userScore = computerScore = draw = 0;
        this.player.innerHTML = userScore;
        this.computer.innerHTML = computerScore;
        this.tie.innerHTML = draw;
        document.getElementById('result').innerHTML = '';
        console.log(`Player : ${userScore}\nComputer : ${computerScore}\nEnter 'playRound()' in console to begin game, 'scoreBoard.startOver()' to restart`);
    }
}

const button = document.getElementsByClassName("btn"),
    arrChoice = Array.from(button);

const randomNum = Math.floor(Math.random() * 3),
    computerChoice = rps.choiceStack[randomNum];

const rps = {
    choiceStack: ["rock", "paper", "scissors"],
    rMap: [
        ["t", "c", "u"],
        ["u", "t", "c"],
        ["c", "u", "t"],
    ],
    res: {
        get "t" () { draw++; "draw"},
        get "u" () {userScore++; "you win"},
        get "c" () {computerScore++; "you lose"}
    }
}   

action = function (list, event) {
    let value;
    for(i = 0, leng = list.length; i < leng; i++) {
      list[i].addEventListener(event, function(){
          this.id === "clear" ? console.clear() : value = rps.choiceStack.indexOf(this.id)
      });
    }
    return value;
}

let versus = () => {
    let match = rps.rMap[userChoice][computerChoice];
    match ===  "t" ? console.log("This is a draw!")
    : match ==="u" ? (console.log()
}