/*function eje1() {
  for (var i = 0; i < 7; i++) {
    document.write("*******");
  }
}
eje1();*/

/*function ej2(num) {
  var string1 = num.toString(); //convert number to a text string
  return string1.length; // return string length number of digits
}
var digits = ej2(1024); //call funtion with number 1024 and show result with alert
alert(digits);*/

function ej3(n1, n2, n3) {
  var n1 = 21,
    n2 = 33,
    n3 = 2;
  var min = ej3(n1, n2, n3);
  if (n1 <= n2 && n1 <= n3) {
    return n1;
  } else if (n2 <= n1 && n2 <= n3) {
    return n2;
  } else {
    return n3;
  }
}
alert("the smaller of" + n1 + "," + n2 + ", " + n3 + " is " + min);
