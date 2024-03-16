//algorithm to representation qualification of student,
//the qualification are note between 1 and 10. A >=9, B >=8, C >=7, D >=6, F all qualifications

var note = parseInt(prompt("Enter note in format integer :"));
switch (note) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("Your qualification is letter F");
    break;
  case 6:
    document.write("Your qualification is letter D");
    break;
  case 7:
    document.write("Your qualification is letter C");
    break;
  case 8:
    document.write("Your qualification is letter B");
    break;
  case 9:
    document.write("Your qualification is letter A");
    break;
  case 10:
    document.write("Your qualification is letter A");
    break;
}
