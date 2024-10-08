console.log ("This is external JS")

let message1 = "Hello, world!"
console.log (typeof (message1))

message1 = 12
console.log (typeof (message1))

message1 = true
console.log (typeof (message1))

let dayweek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
let myNumbers = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,100]
                //  0   1  2  3  4  
console.log (dayweek[0])    
console.log (dayweek[1]) 
console.log (dayweek[6]) 
console.log (dayweek.length)

console.log (dayweek[dayweek.length-1]) 
console.log (myNumbers[myNumbers.length-1]) 

for (let i = 0; i < 10; i++) {
  console.log (myNumbers[i])
}

console.log (myNumbers[4])



let myStudent = {
  studentName: "Tom",
  studentAge: 20,
  isPassed: true
}

console.log (myStudent.isPassed)

