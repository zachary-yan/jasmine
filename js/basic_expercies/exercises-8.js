// Make a program that reads the names of three people in sequence, followed by their respective ages,
// and prints each name with their respective ages on the screen.

prompt = require("prompt-sync")()

let name1 = prompt("What is your name ? ")
let age1 = prompt("What is your age ? ")
let name2 = prompt("What is your name ? ")
let age2 = prompt("What is your age ? ")
let name3 = prompt("What is your name ? ")
let age3 = prompt("What is your age ? ")

console.log(name1 + "\t" + age1);
console.log(name2 + "\t" + age2);
console.log(name3 + "\t" + age3);
