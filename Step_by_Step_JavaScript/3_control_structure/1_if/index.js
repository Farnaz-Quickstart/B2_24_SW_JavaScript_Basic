// Reference: https://www.w3schools.com/js/js_if_else.asp

function printDays () {

  // let elementItems = document.getElementsByName('dayWeek12')
  // console.log (elementItems[0])

  let myValue = document.getElementById('day1').value 
  
  if (myValue == 1) {
 
    console.log ("Saturday")
  } else if (myValue == 2) {
    console.log ("Sunday")
  } else {
    console.log ("Invalid day")
  }
}



// console.log (`${myValue==12}`)
// console.log ("Done")







