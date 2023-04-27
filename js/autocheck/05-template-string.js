/* объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
"You picked <имя товара>, price per item is <цена товара> credits" */

"use strict";

const productName = "Droid";
const pricePerItem = 3500;

const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;
console.log(message);
