// Make a program that reads the names of three people in sequence, followed by their respective ages
// and heights, and prints the data in table format on the screen

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

console.log("name :" + name1 + "\t" + "age :" + age1 + "\t" + "height :" + height1);
console.log("name :" + name2 + "\t" + "age :" + age2 + "\t" + "height :" + height2);
console.log("name :" + name3 + "\t" + "age :" + age3 + "\t" + "height :" + height3);
