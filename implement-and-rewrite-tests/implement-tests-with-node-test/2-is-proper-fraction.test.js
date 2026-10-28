import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Equal numerator and denominator is not a proper fraction", () => {
  assert.equal(isProperFraction(2, 2), false);
});

test("Improper fraction is false", () => {
  assert.equal(isProperFraction(3, 2), false);
});

test("Zero numerator with positive denominator is a proper fraction", () => {
  assert.equal(isProperFraction(0, 2), true);
});

test("Non-numeric numerator throws TypeError", () => {
  assert.throws(() => isProperFraction("1", 2), TypeError);
});

test("Non-numeric denominator throws TypeError", () => {
  assert.throws(() => isProperFraction(1, "2"), TypeError);
});

test("NaN numerator throws TypeError", () => {
  assert.throws(() => isProperFraction(Number.NaN, 2), TypeError);
});

test("Infinity denominator throws TypeError", () => {
  assert.throws(() => isProperFraction(1, Number.POSITIVE_INFINITY), TypeError);
});

test("Denominator is 0 throws TypeError", () => {
  assert.throws(() => isProperFraction(1, 0), TypeError);
});

test("should return true for negative proper fraction", () => {
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(-2, 3), true);
  assert.equal(isProperFraction(-3, 4), true);
});