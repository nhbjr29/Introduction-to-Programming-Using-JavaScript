//"use strict";

document.getElementById("typeOfDemo").innerHTML =
  'Data type of "Laptop" is ' +
  typeof "Laptop" +
  "<br>" +
  "Data type of 7.43 is  " +
  typeof 7.43 +
  "<br>" +
  "Data type of 7 is  " +
  typeof 7 +
  "<br>" +
  "Data type of false is  " +
  typeof false +
  "<br>" +
  "Data type of an undeclared variable is    " +
  typeof myvar +
  "<br>" +
  "Data type of null is " +
  typeof null;

x = 6.44;
document.getElementById("strict").innerHTML = "Value of x = " + x;

var z = 121;
document.getElementById("conversion").innerHTML =
  "The data type of z before conversion is " +
  typeof z +
  "<br>" +
  "The data type after conversion is  " +
  typeof String(z);
