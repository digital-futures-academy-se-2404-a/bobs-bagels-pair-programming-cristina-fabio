import { assertEquals } from "./test-framework.js";
import Basket from "../src/Basket-class.js";
import Item from "../src/Item-class.js";

const afterEach = () => {
  item = undefined;
  expected = undefined;
  actual = undefined;
  result = undefined;
  basket = null;
};

//! TEST 1

//? Test the basket is increasing by 1

// Arrange
let item = new Item();
let actual, result;
let basket = new Basket();
let expected = basket.getBasketItems().length + 1;

// Act
basket.addItem(item);
actual = basket.getBasketItems().length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.1: ${result}`);

//Clear
afterEach();

// //! TEST 2

//? User should be able to add items to the basket

// Arrange
item = new Item();
basket = new Basket();
expected = true;

// Act
basket.addItem(item);
actual = basket.getBasketItems().includes(item);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.2: ${result}`);

//Clear

afterEach();

//! TEST 3

//? What happens when we add an item to a basket that already contain other items.

// Arrange
item = new Item();
let item2 = new Item();
basket = new Basket();
expected = [item, item2].toString();

// Act
basket.addItem(item);
basket.addItem(item2);
actual = basket.getBasketItems().toString();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.3: ${result}`);

//Clear

afterEach();

//! TEST 4

//? What happens when adding an item that is null/undefined.

// Arrange
item = undefined;
basket = new Basket();
expected = basket.getBasketItems().length;

// Act
basket.addItem(item);
actual = basket.getBasketItems().length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.4: ${result}`);

//Clear

afterEach();
