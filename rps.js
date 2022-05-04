let say = (word) => {console.log(word)};

const rps = {
  choiceStack: ["rock", "paper", "scissors"],
  // "c": computer; "u": user; "t": tie;
  rMap: [
    ["t", "u", "c"],
    ["c", "t", "u"],
    ["u", "c", "t"]
  ],
  res: {
   get "t" () {say("draw")},
   get "u" () {say("you win")},
   get "c" () {say("you lose")},
  }
};

const button = document.getElementsByClassName("btn"),
      arrBtn = Array.from(button);

function getResults (user, comp) {
  say(rps.res[rps.rMap[comp][user]])
}

let playRound = arrBtn.forEach(list => {
  function computer() {
    return Math.floor(Math.random() * 3);
  }
  list.addEventListener('click', e => {
    const cpuRes = computer();
    list.id === "clear" ? console.clear() 
  : (say(`user chose: ${list.id} (${arrBtn.indexOf(list)}), computer chose ${rps.choiceStack[cpuRes]}(${cpuRes})`),
     getResults(arrBtn.indexOf(list), cpuRes));
  })
});