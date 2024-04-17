import { assertEquals } from "./test-framework.js";

//? User should be able to add items to the basket

// Arrange
const item = "Bagel";
const basket = [];
const expected = ["Bagel"];
let actual, result;

// Act
actual = addItem(basket, item);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(`Test Result: ${result}`);
