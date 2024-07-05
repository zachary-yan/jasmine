// Make a program that asks for a person's age and displays whether they are of legal age or
// not (age >= 18).
prompt = require("prompt-sync")()

let age = prompt("What is your age ? ")
if (age >= 18) {
    console.log("you are legal age.")
} else {
    console.log("you are not legal age.")
}
