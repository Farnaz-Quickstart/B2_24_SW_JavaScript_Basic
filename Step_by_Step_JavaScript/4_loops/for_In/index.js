// The for-in loop is used to iterate over the properties (keys) of an object.
// Reference: https://www.w3schools.com/js/js_loop_forin.asp

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

for ( i in person) {
  console.log (`${person[i]}`)
}