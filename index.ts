#! /usr/bin/env node

import inquirer from "inquirer";

// 1 computer will generate a random number

// 2 user input for guessing number

// 3 compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
{
    name : "userGuesseNumber",
    type : "number",
    message : "please guess a number between 1-6",
}, 


]);

console.log(answers);

if (answers.userGuesseNumber === randomNumber) {
    console.log("Great! you Guessed  right number");
} else {
    console.log("oh! you guessed wrong number");
}







