//Make a program that reads the names of three people in sequence, followed by reading their respective
// ages and heights, and prints the data on the screen in table format, using dashes (-) to separate rows
// and pipes (|) to separate columns
prompt = require("prompt-sync")()

let name1 = prompt("What is your name ? ")
let age1 = prompt("What is your age ? ")
let height1 = prompt("What is your height ? ")
let name2 = prompt("What is your name ? ")
let age2 = prompt("What is your age ? ")
let height2 = prompt("What is your height ? ")
let name3 = prompt("What is your name ? ")
let age3 = prompt("What is your age ? ")
let height3 = prompt("What is your height ? ")

console.log("------------------------------------------------")
console.log("|\t" + name1 + "\t|\t" + age1 + "\t|\t" + height1 + "\t|");
console.log("------------------------------------------------")
console.log("|\t" + name2 + "\t|\t" + age2 + "\t|\t" + height2 + "\t|");
console.log("------------------------------------------------")
console.log("|\t" + name3 + "\t|\t" + age3 + "\t|\t" + height3 + "\t|");
console.log("------------------------------------------------")
