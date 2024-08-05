// Exercise 2: 
// Write a program that asks the user to input a name and checks its length. 
// If the length of the name is between 1 and 8 characters, print "Long". Otherwise, print "Short".


let firstName = prompt("Enter a name:");


if ((firstName === null) && (firstName.length === 0)) {
  console.log("Empty name is not allowed.");
} 
if (firstName.length <= 8) {
  console.log("short name");
} 
else {
  console.log("Long name");
}
