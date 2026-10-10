import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies obtuse angles", () => {
  const right = getAngleType(91);
  assert.equal(right, "Obtuse angle");
});

test("Classifies obtuse angles", () => {
  const right = getAngleType(179);
  assert.equal(right, "Obtuse angle");
});

test("Classifies Straight angles", () => {
  const right = getAngleType(180);
  assert.equal(right, "Straight angle");
});

test("Classifies Reflex angles", () => {
  const right = getAngleType(181);
  assert.equal(right, "Reflex angle");
});

test("Classifies Reflex angles", () => {
  const right = getAngleType(359);
  assert.equal(right, "Reflex angle");
});

test("Classifies Reflex angles", () => {
  const right = getAngleType(360);
  assert.equal(right, "Reflex angle");
});

test("Classifies Invalid angles", () => {
  const right = getAngleType(361);
  assert.equal(right, "Invalid angle");
});

test("Classifies Invalid angles", () => {
  const right = getAngleType(361);
  assert.equal(right, "Invalid angle");
});

test("Classifies Invalid angles", () => {
  const right = getAngleType(-1);
  assert.equal(right, "Invalid angle");
});




// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.
