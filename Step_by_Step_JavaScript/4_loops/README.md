# Introduction to JavaScript Basics
## 1. Variables 
### Declare variables:
```javascript
let name = "John";    // Block-scoped
const age = 30;       // Constant, block-scoped
var isStudent = true; // Function-scoped
```
## 2. Data Types
### Primitive types:
- string: "Hello"
- number: 42
- boolean: true, false
- null: empty value
- undefined: not assigned value
- symbol: unique identifier

```javascript
let str = "Hello";
let num = 42;
let isTrue = true;
let nothing = null;
let notDefined;
```

## 3. Operators
### Arithmetic:
```javascript
let sum = 5 + 10;
let product = 5 * 10;
let difference = 10 - 5;
let quotient = 10 / 2;
let remainder = 10 % 3;
```


## Comparison:
### javascript
```javascript
5 === 5; // true (strict equality)
5 == "5"; // true (loose equality)
5 !== 6; // true (strict inequality)
5 > 3;   // true
```

### Logical
```javascript
true && false;  // false
true || false;  // true
!true;          // false
```

## 4. Conditionals
```javascript
if (age > 18) {
  console.log("Adult");
} else if (age > 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}
```

## 5. Loops
### For Loop:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## 6. Functions
### Function Declaration:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```
### Arrow Function
```javascript
const greet = (name) => `Hello, ${name}!`;
```

## 7. Arrays
### Declare and Access:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
```


### Array Methods:
```javascript
fruits.push("orange");  // Add to the end
fruits.pop();           // Remove from the end
fruits.shift();         // Remove from the start
fruits.unshift("grape"); // Add to the start
```

## 8. Objects
### Declare and Access:
```javascript
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person.name); // "John"
```

### Add/Modify Properties:
```javascript
person.height = 175; // Add property
person.age = 31;     // Modify property
```

## 9. DOM Manipulation
### Select Elements:
```javascript
let title = document.getElementById("title");
let items = document.getElementsByClassName("item");
```

### Change Content:
```javascript
title.innerText = "New Title";
```

## 10. Events
### Add Event Listener:
```javascript
button.addEventListener("click", function() {
  alert("Button Clicked!");
});
```
## 11. Fetch API (Basic Example)
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

## 12. JSON
### Convert Object to JSON:
```javascript
let jsonString = JSON.stringify(person);
```

### Convert JSON to Object:
```javascript
let jsonObject = JSON.parse(jsonString);
```
