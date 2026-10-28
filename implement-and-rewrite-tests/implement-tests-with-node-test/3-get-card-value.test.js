import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Invalid Rank", () => {
  assert.throws(
    () => getCardValue("1♥"),
    /Invalid Rank/,
    "Expected clear error"
  );
});

test("Invalid Suit", () => {
  assert.throws(
    () => getCardValue("9x"),
    /Invalid Suit/,
    "Expected clear error"
  );
});

test("Non-string input", () => {
  assert.throws(
    () => getCardValue(9),
    /Input not a string/,
    "Expected clear error"
  );
});

test("Arbitrary non-card string", () => {
  assert.throws(
  () => getCardValue("invalid"), 
  /Expected a number followed by a suit,/, 
  "Expected clear error"
);
});

test("Classifies ace cards", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Classifies face cards", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♠"), 10);
  assert.equal(getCardValue("K♠"), 10);
});

test("Classifies 10 cards", () => {
  assert.equal(getCardValue("10♠"), 10);
});
