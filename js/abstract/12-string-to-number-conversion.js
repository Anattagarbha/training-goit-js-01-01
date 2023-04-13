"use strict";

// методы Number.parseInt() и Number.parseFloat()
// преобразуют строку в число символ за символом, пока это возможно

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe64")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12.46qwe79")); // 12.46
