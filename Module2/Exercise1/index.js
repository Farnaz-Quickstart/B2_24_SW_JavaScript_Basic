let value = prompt("Enter an integer:");
let intValue = parseInt(value);

if (Number.isNaN(intValue)) {
    console.log("N/A");
} else if (intValue % 2 === 1) {
    console.log("The number is odd.");
} else {
    console.log("The number is even.");
}