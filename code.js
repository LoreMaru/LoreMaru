let playerSelection;

function computerPlay() {
  let choices = ["paper", "rock", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = computerPlay();

function rockFN() {
  let playerSelection = "rock";
  // document.getElementById("demo").innerHTML = playerSelection;
  let computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Draw! 😑";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    document.getElementById("result").innerHTML = "Win! 🏆";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    document.getElementById("result").innerHTML = "Lose! 👎";
  }
}
function paperFN() {
  let playerSelection = "paper";
  // document.getElementById("demo").innerHTML = playerSelection;
  let computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Draw! 😑";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    document.getElementById("result").innerHTML = "Win! 🏆";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    document.getElementById("result").innerHTML = "Lose! 👎";
  }
}
function scissorsFN() {
  let playerSelection = "scissors";
  // document.getElementById("demo").innerHTML = playerSelection;
  let computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Draw! 😑";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    document.getElementById("result").innerHTML = "Win! 🏆";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    document.getElementById("result").innerHTML = "Lose! 👎";
  }
}
