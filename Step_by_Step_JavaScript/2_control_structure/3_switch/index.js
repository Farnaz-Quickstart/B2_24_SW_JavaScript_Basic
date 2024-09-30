// Reference: https://www.w3schools.com/js/js_switch.asp

let myColor = "blue"

if (myColor == "red")
  alert ("red")
else if (myColor == "blue")
  alert ("blue")
else if (myColor == "green")  
  alert ("green")
else if (myColor == "yellow")
  alert ("yellow")
else
  alert ("I don't know that color")
endif

switch(myColor) {
  case "red":
    alert ("red")
    break;
  case "blue":
    // code block
    break;
  default:
    // code block
}