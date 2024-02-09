var workedHours = prompt("Enter number worked hours: ", workedHours);
var totalHoursWorked = parseInt(workedHours);
var hoursExtras;
var payhoursExtras;
var payhoursExtrasThree;

if (totalHoursWorked > 40) {
  hoursExtras = totalHoursWorked - 40;
  payhoursExtras = hoursExtras * 2;
  alert(`Overtime to be paid: ${payhoursExtras}`);
} else {
  if (hoursExtras > 8) {
  }
}
