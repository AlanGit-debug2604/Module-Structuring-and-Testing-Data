// Implement a function isProperFraction,
//
// Don't forget to write tests in implement-tests-with-node-test.
//
// When given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

export function isProperFraction(numerator, denominator) {
  // TODO: Implement this function
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new TypeError("Both arguments must be numbers");
  }

  if (denominator === 0) {
    return `Not a valid fraction`;
  }

  if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  }

  return false;
}

//Cases show cases
//Proper function ; improper function
//Input type: Num
//Process : number to logic test
//Output type: boolean or error
//Edge case : negative number
//Edge case: decimal
