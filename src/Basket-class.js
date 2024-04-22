import Item from "./Item-class.js";

export default class Basket {
  #basketItems = [];

  addItem = (item) => {
    if (!(item instanceof Item)) {
      return;
    }
    this.#basketItems.push(item);
  };

  getBasketItems = () => this.#basketItems;
}
