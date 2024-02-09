var steps = prompt("Enter number of steps: ", steps);
var numberSteps = parseInt(steps);
if (numberSteps <= 5) {
  document.write("Call cost is: 0,10€");
} else {
  if (numberSteps > 5) {
    document.write("Call cost aditional is: 0,05€");
  }
}
