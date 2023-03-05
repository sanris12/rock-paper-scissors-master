const btnRules = document.querySelector(".btn-rules");
const popUP = document.querySelector(".pop-up");
const closePopUP = document.querySelector(".close-pop-up");
const game = document.querySelector(".game");
const containerResult = document.querySelector(".container-result");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const suwit = document.querySelectorAll(".suwit");
const player = document.querySelector(".player");
const komputer = document.querySelector(".computer");
const information = document.querySelector(".information");
const value = document.querySelector("#value");
const playAgain = document.querySelector(".btn-play-again");

let playerChoice;
let computerChoice;
let score = localStorage.getItem("score");
value.innerText = score;

suwit.forEach((suwit) => {
  suwit.addEventListener("click", function (e) {
    meChoice = e.target.dataset.name;
    playerChoice = meChoice;
    computerChoice = computer();
    addLoadingAnimation();
    removeLoadingAnimation();
    const match = matchResults(playerChoice, computerChoice);
    updateScore(match);
    removeClass();
    updateUi(playerChoice, computerChoice, score, match);
    localStorage.setItem("score", score);
  });
});

function addLoadingAnimation() {
  paper.classList.add("paper-animation");
  scissors.classList.add("scissors-animation");
  rock.classList.add("rock-animation");
}

function removeLoadingAnimation() {
  setTimeout(function () {
    paper.classList.remove("paper-animation");
    scissors.classList.remove("scissors-animation");
    rock.classList.remove("rock-animation");
    game.classList.add("hidden1");
    hidden2();
    showResult();
  }, 2000);
}

function hidden2() {
  setTimeout(function () {
    game.classList.add("hidden2");
  }, 500);
}

function showResult() {
  setTimeout(function () {
    containerResult.classList.add("show-result");
  }, 200);
}

function computer() {
  let computerChoice;
  let computerChoices = ["paper", "scissors", "rock"];
  computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerChoice;
}

function matchResults(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if ((playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors")) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore(matchResults) {
  if (matchResults === "win") {
    return score++;
  } else if (matchResults === "lose") {
    return score--;
  } else return;
}

function removeClass() {
  player.classList.remove("paper", "scissors", "rock");
  komputer.classList.remove("paper", "scissors", "rock");
}

function updateUi(playerChoice, computerChoice, score, match) {
  player.classList.add(playerChoice);
  komputer.classList.add(computerChoice);
  information.innerText = match.toUpperCase();
  setTimeout(() => {
    value.innerText = score;
  }, 3000);
}

// pop-up
btnRules.addEventListener("click", () => {
  popUP.classList.add("show-pop-up");
});

closePopUP.addEventListener("click", () => {
  popUP.classList.remove("show-pop-up");
});

// play again
playAgain.addEventListener("click", function () {
  containerResult.classList.remove("show-result");
  game.classList.remove("hidden1", "hidden2");
});
