//Write a program that reads a number and reports whether it is positive, negative or zero
prompt = require("prompt-sync")()

let number = prompt("What is your number ? ")
if (number > 0) {
    console.log("your number is a positive number.")
} else if (number < 0) {
    console.log("your number is a negative number.")
} else {
    console.log("your number is zero.")
}
