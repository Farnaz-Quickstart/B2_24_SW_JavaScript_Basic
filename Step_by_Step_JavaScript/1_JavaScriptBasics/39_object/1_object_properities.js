// Object = A collection of key-value pairs, where the keys (also called properties) are strings
//          and the values can be any data type, including other objects, arrays, functions, numbers and strings. 

let student = {
  name: "John",
  age: 30,
  isStudent: false,
};


// Accessing name of student 
console.log (student.name)

// Adding new properties, gender


// Deleting student name



// Nested Object
let instructor = {
  name:"Martine Ramirez",
  age: 49,
  address:{
    postalCode:"M2N6B5",
    city: "toronto",
    country: "United States"
  }
}

console.log (instructor)
console.log (instructor.name)
console.log (instructor.address.postalCode)

