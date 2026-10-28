import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when angle = 90`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});
// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  // Test various obtuse angles, including boundary cases
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});
// Case 4: Straight angle
test(`should return "Straight angle" when angle = 180`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  // Test various reflex angles, including boundary cases
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(225)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});
// Case 6: Invalid angles
test(`should return "Invalid angle" when (angle <= 0 or angle >= 360)`, () => {
  // Test various invalid angles, including boundary cases
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(361)).toEqual("Invalid angle");
  expect(getAngleType(-0.5)).toEqual("Invalid angle");
});

