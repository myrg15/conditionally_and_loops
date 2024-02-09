//pair or odd number
var num = prompt("Enter number: ");
var numberEn = parseInt(num);

if (numberEn % 2 == 0) {
  document.write("Number is pair: ", numberEn);
} else {
  document.write("Number is odd: ", numberEn);
}
