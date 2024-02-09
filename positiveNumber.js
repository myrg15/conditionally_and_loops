//enter one number by keyboard, will show you if is positive, negative or null
var num = prompt("Enter number:");
var numberEn = parseInt(num);

if (numberEn > 0) {
  document.write("Number is positive: ", numberEn);
} else {
  if (numberEn < 0) {
    document.write("Number is negative: ", numberEn);
  } else if (numberEn == 0) {
    document.write("Number is null");
  }
}
