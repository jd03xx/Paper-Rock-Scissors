// Function to get users choice
function getUserChoice(userChoice) {
  userChoice = userChoice.toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    return "ERROR: You must enter: rock, paper, or scissors.";
  }
}

//Function to get computers choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  } else {
    return "ERROR IN COMPUTER CHOICE";
  }
  return computerChoice;
}

//Function to determine winner
function compareThrows(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return `User threw ${userChoice} and Computer threw ${computerChoice}...USER WINS!!!`;
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return `User threw ${userChoice} and Computer threw ${computerChoice}...COMPUTER WINS!!!`;
  } else {
    return "It's a TIE!";
  }
}

function playGame(userChoice, computerChoice) {
  console.log(compareThrows(userChoice, computerChoice));
}

const user = getUserChoice("rock");
const computer = getComputerChoice();

playGame(user, computer);
