/* объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
"You picked <имя товара>, price per item is <цена товара> credits" */

"use strict";

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. 
Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message);
