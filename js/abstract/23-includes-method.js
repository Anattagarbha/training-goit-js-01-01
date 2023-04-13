"use strict";

// проверяет, входит ли подстрока в строку
// чувствителен к регистру

const productName = "Ремонтный дроид";

console.log(productName.includes("н")); // true
console.log(productName.includes("Д")); // false
console.log(productName.includes("дроид")); // true
console.log(productName.includes("ремонтный")); // false
console.log(productName.includes("Ремонтный")); // true
