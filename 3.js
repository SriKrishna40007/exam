
var userInput = prompt("Enter a number:");


var number = parseFloat(userInput);


if (!isNaN(number)) {
  // Perform calculation
  var result = 0;
  for (var i = 1; i <= number; i++) {
    result += i;
  }


  console.log("The sum of numbers from 1 to " + number + " is: " + result);
} else {
  console.log("Invalid input. Please enter a valid number.");
}
