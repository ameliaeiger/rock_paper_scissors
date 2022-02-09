
// WHAT I KIND OF THINK I HAVE TO DO
// 1. Establish an array with the strings: 'rock', 'paper', 'scissors'
// 2. Randomly select one item from the array
// 3. Compare computerPlay vs playerSelection
// 4. Evaluate results and return correlating string message

// WHAT I REALLY DID
// 1. Declare variable for array (myArray). Assign array values.
// 2. Declare variable for computer selection (computerSelection). Assign value as function to randomize string return value.
//    from my array (myArray)
// 3. Declare variable for human input (humanSelection)
// 4. In creating the function, be sure to assign placeholder values for whatever reason.
// 5. Wrote the function to determine victor (selectWinner)
// 6. Wrote comparisons of different outcomes. Those are nested.
// *. Right now, the console will log the result.

// For some reason, this has to be here first otherwise none of this works. Apparently
// the element doesn't exist yet because it hasn't been added to the DOM? idk
window.onload = function() {
  document.getElementById("result").innerHTML = text;
}
// DECLARING HUMAN INPUT
//let humanSelection = "rock"; << TESTING PURPOSES ONLY
let greeting = "Choose rock, paper, or scissors.";
let humanSelection = prompt(greeting);


// CHANGING INPUT TO LOWERCASE
let goodHumanSelection = humanSelection.toLowerCase();

// GRAB HUMANSELECTION INPUT
function grabbingInput() {
  return prompt(greeting);
}

// DECLARING ARRAY AND COMPUTER'S CHOICE. RANDOMIZING COMPUTER SELECTION. LOGGING RESULT TO CONSOLE.
const myArray = ["rock", "paper", "scissors"];
const computerSelection = myArray [Math.floor(Math.random() * myArray.length)];
console.log("You selected: " + goodHumanSelection + ". The computer selected: " + computerSelection);

// DISPLAYS RESULTS STRING TO THE BROWSER
let text = ("You selected: " + goodHumanSelection + ". The computer selected: " + computerSelection);

// DECLARE FUNCTION TO COMPARE COMPUTER INPUT VS. HUMAN INPUT
selectWinner(computerSelection, goodHumanSelection);
function selectWinner(computerSelection, goodHumanSelection) {
  if (computerSelection == goodHumanSelection) {
    console.log("Result: tie");
  } else if (
    (computerSelection == "rock" && goodHumanSelection == "scissors") ||
    (computerSelection == "scissors" && goodHumanSelection == "paper") ||
    (computerSelection == "paper" && goodHumanSelection == "rock")
  ) {
    console.log("Result: you lose");
  } else {
    console.log("Result: you win");
  }
}
