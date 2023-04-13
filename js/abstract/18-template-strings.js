"use strict";

// шаблонные строки - альтернатива конкатенации с более удобным синтаксисом
// шаблонная строка заключена в обратные (косые) кавычки и содержит местозаполнители

const guestName = "Манго";
const roomNumber = "207";
const greeting =
  "Welcome, " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting);

const guestName2 = "Манго";
const roomNumber2 = "207";
const greeting2 = `Welcome, ${guestName2}, your room number is ${roomNumber2}!`;
console.log(greeting2);
