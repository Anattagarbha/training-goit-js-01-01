/* большинство матфункций преобразуют значение в число автоматически.
Для явного преобразования использую функцию Number(value) */

"use strict";

const a = "5";
console.log(Number(a)); // 5
console.log(typeof Number(a)); // "number"

const b = "random string";
console.log(Number(b)); // NaN
console.log(typeof Number(b)); // "number"
