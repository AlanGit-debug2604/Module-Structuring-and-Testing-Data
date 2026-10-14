export function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be a positive integer");
  }
  if (count === 0) {
    return "";
  }
    
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let result = "";
  for (let i = 0; i < count; i++) { // i++ is i=i+1, i+=1, i=i+1, all are valid
    result = result + str; //result += str; is also valid
  }
  return result;

    
}


