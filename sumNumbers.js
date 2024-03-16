const numSum = 1;
var numReceived = parseInt(prompt("Enter number: "));
if (numReceived < 1) {
  numReceived = parseInt(
    prompt("The number cannot be less than 1, enter number")
  );
}
//no esta entrando al while
//pudiera hacer un else donde digo si numRecived es >1 puede hacer la suma
while (numReceived > 1);
var result = numSum + numReceived;
document.write("The sum is: " + result);
