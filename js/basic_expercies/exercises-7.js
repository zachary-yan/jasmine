// Make a program that asks for the user's name, and prints the name on the screen immediately after.
prompt = require("prompt-sync")()

let name = prompt("What is your name ? ")
console.log("Hello " + name)
