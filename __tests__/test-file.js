import { assertEquals } from "./test-framework.js";
import basket from "../src/basket.js";

const afterEach = () => {
	item = undefined;
	basket.basketItems = [];
	expected = undefined;
	actual = undefined;
	result = undefined;
};

//! TEST 1

//? Test the basket is increasing by 1

// Arrange
let item = {};
let expected = basket.basketItems.length + 1;
let actual, result;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.1: ${result}`);

//Clear
afterEach();

//! TEST 2

//? User should be able to add items to the basket

// Arrange
item = {};
expected = true;

// Act
basket.addItem(item);
actual = basket.basketItems.includes(item);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.2: ${result}`);

//Clear

afterEach();

//! TEST 3

//? What happens when we add an item to a basket that already contain other items.

// Arrange
basket.basketItems = [{ name: "item1" }];
item = {};
expected = [...basket.basketItems, item].toString();

// Act
basket.addItem(item);
actual = basket.basketItems.toString();

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
expected = basket.basketItems.length;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result n.4: ${result}`);

//Clear

afterEach();
