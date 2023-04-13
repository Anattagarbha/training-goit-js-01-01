"use strict";

// чтобы не требовать абсолютно точный ввод, можно сделать нормализацию

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedInput); // 'SAMSUNG'
console.log(normalizedInput === BRAND_NAME); // true
