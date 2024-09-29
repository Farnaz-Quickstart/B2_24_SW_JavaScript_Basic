// charAt(index)
// concat(string2, string3, ...)
// includes(substring)
// slice(start, end)
// replace(searchValue, newValue)

let message1 = "Hello, world!";
let message2 = `Hello, world!`
let message3 = `        Hello, world!            `
let message4 = "This is Quickstart"

console.log (message1.length)
console.log (message1.charAt(1))
console.log (message1.substring(0,5))
console.log (message1.toLocaleUpperCase())
console.log (message3.length)
console.log (message3.trim())
console.log (message1.concat(message4))
console.log (message1==message2)


function clickHandler() {
  let myElement = document.getElementById("ageInput").value
  
  console.log (typeof (myElement))
  console.log (`Original Text: ${myElement}`)
  console.log (`Uppercase Text: ${myElement.toUpperCase()}`)
  console.log (`Contatinatrion: ${myElement.concat(" ", " This is our class")}`)
  console.log (`Substring: ${myElement.substring(2, 5)}`)
  console.log (`Include hi?: ${myElement.includes("hi")}`)

}
