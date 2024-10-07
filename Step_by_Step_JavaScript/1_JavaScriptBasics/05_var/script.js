// var variable: function scope
let a = 10
let b = 5;
var number1 = 10

function printText () {
  console.log ("Hi")
  console.log ("How are you?")
  console.log (number1)
}

if (a > b) {
  console.log ("a is greater than b")
  console.log (number1)
}

printText()
