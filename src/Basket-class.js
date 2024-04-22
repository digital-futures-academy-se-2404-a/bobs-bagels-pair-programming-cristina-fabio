import Item from "./Item-class.js";

export default class Basket {
  #basketItems = [];
  #capacity = 2;

  addItem = (item) => {
    if (!(item instanceof Item)) {
      return;
    }
    this.#basketItems.push(item);
  };

  getBasketItems = () => this.#basketItems;

  removeItem = (item) => {
    const newBasket = this.#basketItems.filter(
      (itemInBasket) => itemInBasket.getItemName() !== item.getItemName()
    );
    this.#basketItems = newBasket;
  };

  isBasketFull = () => {
    return this.#basketItems.length >= this.#capacity;
  };
}
