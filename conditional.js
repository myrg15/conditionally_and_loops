//algorithm indicates if two numbers entered by keyboard are equal, if not equal indicates which is the largest

var num1 = prompt("Enter first number:");
var firstNumber = parseInt(num1); // converts string to integer

var num2 = prompt("Enter second number:");
var secondNumber = parseInt(num2);

if (firstNumber == secondNumber) {
  document.write("Are the same");
} else {
  if (firstNumber > secondNumber) {
    document.write("The first number is greater than the second number");
  } else if (secondNumber > firstNumber) {
    document.write("The second number is greater than the first number");
  }
}
