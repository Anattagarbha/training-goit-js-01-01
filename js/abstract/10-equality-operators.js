/* "нестрогие" операторы равенства выполняют 
преобразование типов, что может привести к ошибкам */

"use strict";

console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
