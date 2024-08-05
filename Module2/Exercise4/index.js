// Define random number between 0 and 5
let SecrectNumber = Math.floor(Math.random() * 5)

// Solution 1: if-else statement
if (SecrectNumber==0){
    console.log("The secret number is 0");
} else if (SecrectNumber==1){
    console.log("The secret number is 1");
} else if (SecrectNumber==2){
    console.log("The secret number is 2");
} else if (SecrectNumber==3){
    console.log("The secret number is 3");
} else if (SecrectNumber==4){
    console.log("The secret number is 4");
} else {
}

// Solution 2: switch statement
switch (SecrectNumber) {
  case 0:
    console.log("The secret number is 0");
    break;
  case 1:
    console.log("The secret number is 1");
    break;
  case 2:
    console.log("The secret number is 2");
    break;
  case 3:
    console.log("The secret number is 3");
    break;
  case 4:
    console.log("The secret number is 4");
    break;
  default:
    console.log("An unexpected error occurred.");
}

// Solution 3: Using
let dic = {
  "0": "The secret number is 0",
  "1": "The secret number is 1",
  "2": "The secret number is 2",
  "3": "The secret number is 3",
  "4": "The secret number is 4",
}
console.log(dic[SecrectNumber]);
