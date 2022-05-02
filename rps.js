let say = (word) => {console.log(word)};

const rps = {
  choiceStack: ["rock", "paper", "scissors"],
  rMap: [
    ["t", "u", "c"],
    ["c", "t", "u"],
    ["u", "c", "t"]
  ],
  res: {
   get "t" () {say("draw")},
   get "u" () {say(`user chose: you win`)},
   get "c" () {say("you lose")},
  }
};

const button = document.getElementsByClassName("btn"),
      arrBtn = Array.from(button);

let userInput = arrBtn.forEach(list => {
  list.addEventListener('click', e => {
    list.id === "clear" ? console.clear() : list.id
  })
});

function cpu (){
  return Math.floor(Math.random() * 3)
}

function getResults(user, comp) {
  say(rps.res[rps.rMap[user][comp]]);
}