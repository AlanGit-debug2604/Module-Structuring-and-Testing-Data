import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Face cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 3: Number cards (2-10)
test(`Should return the correct value for number cards`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("4♦")).toEqual(4);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("7♣")).toEqual(7);
  expect(getCardValue("8♦")).toEqual(8);
  expect(getCardValue("9♥")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);
});

// Case 4: Invalid ranks
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("11♠")).toThrow(Error);
  expect(() => getCardValue("1♣")).toThrow(Error);
  expect(() => getCardValue("H♠")).toThrow(Error);
});

// Case 5: Invalid suits
test(`Should throw an error when given an invalid suit`, () => {
  expect(() => getCardValue("A♤")).toThrow(Error);
  expect(() => getCardValue("10X")).toThrow(Error);
  expect(() => getCardValue("KZ")).toThrow(Error);
});

// Case 6: Invalid input types
test(`Should throw an error when given a non-string input`, () => {
  expect(() => getCardValue(10)).toThrow(Error);
  expect(() => getCardValue(null)).toThrow(Error);
  expect(() => getCardValue(undefined)).toThrow(Error);
  expect(() => getCardValue({})).toThrow(Error);
  expect(() => getCardValue([])).toThrow(Error);
});

// Case 7: Edge cases
test(`Should throw an error for edge cases`, () => {
  expect(() => getCardValue("")).toThrow(Error);
  expect(() => getCardValue("A")).toThrow(Error);
  expect(() => getCardValue("♠")).toThrow(Error);
  expect(() => getCardValue("A♠♣")).toThrow(Error);
  expect(() => getCardValue("10♠♣")).toThrow(Error);
});


// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

