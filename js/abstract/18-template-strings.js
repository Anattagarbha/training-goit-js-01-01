/* шаблонные строки - альтернатива конкатенации с более удобным синтаксисом.
// Шаблонная строка заключена в обратные (косые) кавычки и содержит местозаполнители */

"use strict";

const guestName = "Манго";
const roomNumber = "207";
const greeting =
  "Welcome, " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting);

const tempGuestName = "Манго";
const tempRoomNumber = "207";
const tempGreeting = `Welcome, ${tempGuestName}, your room number is ${tempRoomNumber}!`;
console.log(tempGreeting);
