import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

test("Invalid Rank", () => {
  assert.throws(() => getCardValue("Invalid Rank"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

test("Invalid Suit", () => {
  assert.throws(() => getCardValue("Invalid Suit"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});
// TODO: What other invalid card cases can you think of?
//Invalid Rank or 
//Invalid String
////Out of range input
//Input: (Rank) "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" and (Suit), also invalid input
//Input type: String
//Process Turn input into Num : "A" to 11 ; ("J", "Q", "K") to 10
//Output : a valid Num , or invalid throw error
//const rank
//const suit 
//Edge cases 0: not string
//Edge cases 1: ANy first letter which is not a Rank;
//Edge cases 2: Not a Rank plus Suit input;
//Edge cases 3: Suit mistyped ; or second character is not a suit