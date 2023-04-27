/* используется для создания копии части или всей строки */

"use strict";

const productName = "Repair droid";
console.log(productName.slice(0, 6)); // Repair
console.log(productName.slice(3, 9)); // air dr
console.log(productName.slice(0, productName.length)); // Repair droid
