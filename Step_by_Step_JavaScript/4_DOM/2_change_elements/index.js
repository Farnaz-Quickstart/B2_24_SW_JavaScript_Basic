// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

let element1 = document.getElementById('Profile');            // Return the element as an object 


element1.innerText = 'This is new text changed by Javascript'
element1.innerHTML = '<h2>Document Object Model</h2> This is new text changed by Javascript'
element1.style.color = "red"
element1.style.fontSize = "100px"
element1.setAttribute("style", "color:green")

