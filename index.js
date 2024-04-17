export const addItem = (basket, item) => {
  basket.push(item);
  return basket.toString;
};

export const removeItem = (basket, item) => {
  const newBasket = basket.find((element) => {
    return element !== item;
  });
  return newBasket.toString();
};
