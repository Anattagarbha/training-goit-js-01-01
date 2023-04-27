/* для получения данных от пользователя есть prompt() и confirm(). 
Это тоже методы из интерфейса window */

"use strict";

const isComing = confirm("Please confirm hotel reservation!");
console.log(isComing);

const hotelName = prompt("Please enter hotel name");
console.log(hotelName);
