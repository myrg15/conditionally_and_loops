//algorithm indicates if two numbers entered by keyboard are equal, if not equal indicates which is the largest

var num1 = prompt("Enter first number:");
var firstNumber = parseInt(num1); // converts string to integer
console.log("Number entered:", firstNumber); //num1 contains the number entered by the user

var num2 = prompt("Enter second number:");
var secondNumber = parseInt(num2);
console.log("Number entered: ", secondNumber);

if (firstNumber == secondNumber) {
  alert("Are the same");
} else {
  if (firstNumber > secondNumber) {
    alert("The first number is greater than the second number");
  } else if (secondNumber > firstNumber) {
    alert("The second number is greater than the first number");
  }
}
