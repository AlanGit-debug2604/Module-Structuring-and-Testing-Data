import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test("should throw error when denominator is zero", () => {
  expect(() => isProperFraction(1, 0)).toThrow(Error);
});
// Case1: numerator is zero
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});
// Case2: denominator is Infinity
test("should throw TypeError when denominator is infinity", () => {
  expect(() => isProperFraction(1, Infinity)).toThrow(TypeError);
});
// Case3: numerator is Infinity
test("should throw TypeError when numerator is Infinity", () => {
  expect(() => isProperFraction(Number.POSITIVE_INFINITY, 2)).toThrow(
    TypeError
  );
});
// Case4: denominator is not a number
test("should throw TypeError when denominator is not a number", () => {
  expect(() => isProperFraction(1, "2")).toThrow(TypeError);
  expect(() => isProperFraction(2, "3")).toThrow(TypeError);
  expect(() => isProperFraction(3, "1")).toThrow(TypeError);
});
// Case5: numerator is not a number
test("should throw TypeError when numerator is not a number", () => {
  expect(() => isProperFraction("1", 2)).toThrow(TypeError);
  expect(() => isProperFraction("2", 3)).toThrow(TypeError);
  expect(() => isProperFraction("3", 2)).toThrow(TypeError);
});
// Case6: improper fraction with positive numerator and denominator
test("should return false for improper fraction", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(10, 5)).toEqual(false);
});
// Case7: equal numerator and denominator
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(10, 10)).toEqual(false);
});
// Case8: equal numerator and negative denominator
test("should return false for equal numerator and negative denominator", () => {
  expect(isProperFraction(2, -2)).toEqual(false);
  expect(isProperFraction(5, -5)).toEqual(false);
  expect(isProperFraction(10, -10)).toEqual(false);
});
// Case9: negative improper fraction with positive denominator
test("should return false for negative improper fraction", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(-5, 3)).toEqual(false);
  expect(isProperFraction(-10, 5)).toEqual(false);
});
// Case10: negative improper fraction with negative numerator
test("should return true for negative proper fraction", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-2, 3)).toEqual(true);
  expect(isProperFraction(-3, 4)).toEqual(true);
});
// Case11: proper fraction with negative denominator
test("should return true for proper fraction with negative denominator", () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(2, -3)).toEqual(true);
  expect(isProperFraction(3, -4)).toEqual(true);
});
// Case12: improper fraction with negative denominator
test("should return false for improper fraction with negative denominator", () => {
  expect(isProperFraction(3, -2)).toEqual(false);
  expect(isProperFraction(5, -3)).toEqual(false);
  expect(isProperFraction(10, -5)).toEqual(false);
});
// Case13: proper fraction with both negative numerator and denominator
test("should return true for proper fraction with both negative numerator and denominator", () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(-2, -3)).toEqual(true);
  expect(isProperFraction(-3, -4)).toEqual(true);
});
// Case14: improper fraction with both negative numerator and denominator
test("should return false for improper fraction with both negative numerator and denominator", () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
  expect(isProperFraction(-5, -3)).toEqual(false);
  expect(isProperFraction(-10, -5)).toEqual(false);
});

// Case15: proper fraction with positive numerator and denominator
test("should return true for proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 3)).toEqual(true);
});
