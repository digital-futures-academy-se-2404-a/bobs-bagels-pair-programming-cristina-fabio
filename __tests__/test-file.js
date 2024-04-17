import { assertEquals } from "./test-framework.js";
import { addItem } from "../index.js";

//? User should be able to add items to the basket

// // Arrange
// const item = "Bagel";
// const basket = [];
// const expected = ["Bagel"].toString;
// let actual, result;

// // Act
// actual = addItem(basket, item);

// // Assert
// result = assertEquals(actual, expected);

// // Result
// console.log(`Test Result: ${result}`);

//? User should be able to remove item from basket

//Arrange
const item = "bagel";
const basket = ["bagel"];
const expected = [].toString;
let actual, result;

//Act
actual = removeItem(basket, item);

//Assert
result = assertEquals(actual, expected);

//Result
console.log(result);
