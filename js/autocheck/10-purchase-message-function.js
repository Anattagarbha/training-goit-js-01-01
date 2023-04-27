/* дополни код функции так, чтобы в переменную message записывалась строка 
"You picked <product name>, price per item is <product price> credits" */

"use strict";

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}

console.log(makeMessage("Radar", 1650));
