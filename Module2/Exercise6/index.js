let userInput = null;


// Case 1: Always true, infinite loop
do {
  userInput = prompt("Enter a value:")
} while (true);
console.log(userInput + ' is valid');


// Case 2: Always false, will execute onces
do {
  userInput = prompt("Enter a value:")
} while (false);
console.log(userInput + ' is valid');

// Case 3: While false, will execute onces
do {
  userInput = prompt("Enter a value:")
} while (userInput.length==0 || userInput==null) 
console.log(userInput + ' is valid');

// Case 4: While false, will execute onces
do {
  userInput = prompt("Enter a value:")
} while (!(userInput.length!=0 || userInput!=null)) 
console.log(userInput + ' is valid');