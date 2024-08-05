// Exercise 1: 
// Write a program that prompts the user to input a number and checks whether the number is even or odd. 
// Print "Even" if the number is even and "Odd" if the number is odd.

let value = prompt("Enter an integer:");
let intValue = parseInt(value);

if (Number.isNaN(intValue)) {
    console.log("N/A");
} else if (intValue % 2 === 1) {
    console.log("The number is odd.");
} else {
    console.log("The number is even.");
}