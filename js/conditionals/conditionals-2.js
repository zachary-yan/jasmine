//Write a program that reads a number and reports whether it is odd or even
prompt = require("prompt-sync")()

let number = prompt("What is your number ? ")
if (number % 2 !== 0) {
    console.log("your number is odd number.")
} else {
    console.log("your number is even number.")
}
