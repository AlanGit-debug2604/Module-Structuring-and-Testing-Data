// Implement a function getAngleType
//
// Don't forget to write tests in implement-tests-with-node-test.
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

export function getAngleType(angle) {
  // TODO: Implement this function
}

//Cases showcases
//First define type: Num (whole number)
//Then range: 0 - 360
//Cases:
//1. 0-89 : Actute angle
//2. 90   : Right angle
//3. 91-179: Obtuse angle
//4. 180: Straight angle
//5. 181-359 : Reflex angle
//6. 360 and beyond Invalid angle
//Key word to use : If?
