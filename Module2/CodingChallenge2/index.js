// 2. Ask the user to enter an integer between 1 and 100. Validate your input and
// repeat asking the user for this input until the user succeeds.

// let intValue = null;
// do {
//   let value = prompt("Enter a number 1 and 100")
//   let intValue = Number.parseInt(value)
// } while (!(intValue > 1 || intValue < 100))

// console.log ("The number is valid!")



let num = null;

do {
  let value = prompt("Enter a number between 1 and 100");
  num = Number.parseInt(value);
}
while (num > 100 || num  < 0)  

console.log ("The number is valid!");
