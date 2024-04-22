export default class Item {
  #itemName;

  constructor(itemName) {
    this.#itemName = itemName;
  }

  getItemName = () => this.#itemName;
}
