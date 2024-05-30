#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\nWelcome to Amber's cli number guessing game.");
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuessedNumber",
        message: "Enter your number (number limit from 1 to 7):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("\n\nCongratulations! You guessed the correct number.");
}
else {
    console.log("\n\nSorry! You guessed the wrong number.");
}
;
