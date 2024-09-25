// Object Data Type
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};

// Accessing object properties
let personName = person.name

// Adding new properties
person.gender = "male"


// Deleting object properties
delete person.name


let person2 = {
  name:"Martine Ramirez",
  age: 49,
  address:{
    postalCode:"M2N6B5",
    city: "toronto",
    country: "United States"
  }
}

console.log (person2.name)
console.log (person2.address.postalCode)

