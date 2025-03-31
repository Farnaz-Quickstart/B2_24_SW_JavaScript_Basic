// ----------------------
// GetElement Methods
// ----------------------
let element1 = document.getElementById('mainTitle');            // Return the element as an object 
let arrElements1 = document.getElementsByClassName("green");    // Returns a list of all elements with class name
let arrElements2 = document.getElementsByTagName("p")           // Return a list of all elements with tag name

// ----------------------
// QuerySelector Methods
// ----------------------
let Element3 = document.querySelector("p")                      // Return the FIRST element that matches a CSS selector
let Element4 = document.querySelectorAll("p.yellow")            // Returns a list of all  elements that match a specified CSS selector

console.log (Element4)


