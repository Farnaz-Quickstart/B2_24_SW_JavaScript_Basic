// 1. Console log all numbers from 0 to 9
console.log ("zero to nine")
for (i = 0; i < 10; i++) {
  console.log(i);
}

// 2. Console log all numbers from 1 to 10
console.log ("One to ten")
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// 3. Console log all numbers from 9 to 0
console.log ("Nine to zero")
for (i = 9; i >= 0; i--) {
  console.log(i);
}

// 4. Console log all numbers from 10 to 1
console.log ("Ten to one")
for (i = 10; i >= 1; i--) {
    console.log(i);
}

// 4. Console log all numbers from 10 to 1
console.log ("one to 25 even/odd")
for (i = 0; i < 25; i++) {
    if (i % 2 === 0) {
      console.log(i + " (even)");
    } else {
      console.log(i + " (odd)");    
    }
  }
