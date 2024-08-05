let list = ['sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday'];

  console.log(list[0]);

  let i = 0;

  console.log("Looping through the list using while loop:");
  while (i < list.length) {
    console.log(list[i]);
    i = i + 1;
  } 

  console.log("Looping through the list using for loop:");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }

  console.log("Looping through the list using for in loop:");
  for (let i in list) {
    console.log(list[i]);
  }

  console.log("Looping through the list using for of loop:");
  for (let item of list) {
    console.log(item);
  }