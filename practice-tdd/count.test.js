// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

// Case1: Multiple Occurrences in a string
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Case2: Multiple Occurrences in a string with different characters
test("should count multiple occurrences of a character in a string with different characters", () => {
  const str = "abacadaeaf";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Case3: Multiple Occurrences in different cases, case sensitive
test("should count multiple occurrences of a character in different cases", () => {
  const str = "AaAaAa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

// Scenario: Single Occurrence
// Given the input string `str`,
// And a character `char` that occurs exactly once in `str` (e.g., 'a' in 'abc'),
// When the function is called with these inputs,
// Then it should return 1, indicating a single occurrence of `char`.

// Case4: Single Occurrence in a string with different characters
test("should count a single occurrence of a character", () => {
  const str = "abc";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
}); 

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.

//Case5: No Occurrences in a string with different characters
test("should return 0 when character does not occur in the string", () => {
  const str = "abc";
  const char = "d";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Edge Cases
// Case6: Empty String
test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Case7: String contains spaces 
test("should count occurrences of a character in a string with spaces", () => {
  const str = "a b c a b c";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});