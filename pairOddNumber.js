//pair or odd number
var num = prompt("Enter number: ");
var numberEn = parseInt(num);

if (numberEn % 2 == 0) {
  alert("Number is pair: ", numberEn);
} else {
  if (numberEn % 2 == 1) {
    alert("Number is odd: ", numberEn);
  }
}
