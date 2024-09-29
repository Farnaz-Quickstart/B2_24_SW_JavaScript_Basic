function clickHandler() {
  let myElement = document.getElementById("ageInput").value
  
  console.log (typeof (myElement))
  console.log (`Original Text: ${myElement}`)
  console.log (`Uppercase Text: ${myElement.toUpperCase()}`)
  console.log (`Contatinatrion: ${myElement.concat(" ", " This is our class")}`)
  console.log (`Substring: ${myElement.substring(2, 5)}`)
  console.log (`Include hi?: ${myElement.includes("hi")}`)
}



