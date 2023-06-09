/* один из встроенных классов, который предоставляет
набор методов для работы с числами */

"use strict";

// Math.floor - возвращает целое число, меньшее либо равное указанному

console.log(Math.floor(1.7)); // 1

// Math.floor - возвращает целое число, большее либо равное указанному

console.log(Math.ceil(1.2)); // 2

// Math.round - возвращает значение числа, округленное до ближайшего целого

console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max - возвращает наибольшее число из набора

console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min - возвращает наименьшее число из набора

console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow - возведение в степень

console.log(Math.pow(2, 4)); // 16

// Math.random - возвращает псевдослучайное число

console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
