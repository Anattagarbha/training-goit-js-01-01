// дополни код функции так, чтобы она возвращала сообщение
// о заказе в формате "You ordered droids worth <total price> credits.
// Delivery (<delivery fee> credits) is included in total price."

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}
