// Set data type
// Methods: add, has, forEach

let letters = new Set (['a', 'b', 'c', 'd', 'e', 'f'])

console.log (typeof letters)
console.log (letters)
letters.add ('a');               // add method
let answer = letters.has ('a')   // has method
console.log (answer)


letters.forEach (function (value) {
  console.log (value)
})