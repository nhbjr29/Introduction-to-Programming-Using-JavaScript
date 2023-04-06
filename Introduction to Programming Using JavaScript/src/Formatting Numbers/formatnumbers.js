/*Formatting numbers using the toFixed() method*/

let toBeFixed = 892022.469;
document.getElementById("formatNumberFixed").innerHTML =
  "Value of toBeFixed = " +
  toBeFixed +
  "<br>" +
  "Value of toBeFixed with 2 decimal places =  " +
  toBeFixed.toFixed(2) +
  "<br>" +
  "Value of toBeFixed with 3 decimal places =  " +
  toBeFixed.toFixed(3) +
  "<br>" +
  "Value of toBeFixed with 6 decimal places =  " +
  toBeFixed.toFixed(6) +
  "<br>" +
  "Value of toBeFixed with 8 decimal places =  " +
  toBeFixed.toFixed(8) +
  "<br>";

/*The toPrecision() method formats a number to a specified length.*/

let specifiedLength = toBeFixed;
document.getElementById("formatNumberPrecision").innerHTML =
  "Value of specifiedLength = " +
  specifiedLength +
  "<br>" +
  "Value of specifiedLength with 2 decimal places =  " +
  specifiedLength.toPrecision(2) +
  "<br>" +
  "Value of specifiedLength with 3 decimal places =  " +
  specifiedLength.toPrecision(3) +
  "<br>" +
  "Value of specifiedLength with 4 decimal places =  " +
  specifiedLength.toPrecision(4) +
  "<br>" +
  "Value of specifiedLength with 5 decimal places =  " +
  specifiedLength.toPrecision(5) +
  "<br>";
