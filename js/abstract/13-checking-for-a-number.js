/* для проверки на число можно использовать метод Number.isNaN(value) */

"use strict";

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true
