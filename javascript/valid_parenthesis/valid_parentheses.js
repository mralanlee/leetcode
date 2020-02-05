const isValid = s => {
  // edge case checking
  if (s.length < 1) return true;
  // if it's an odd lengthed string, than it's automatically false
  if (s.length % 2 !== 0) return false;

  // initialize stack
  const stack = [];

  // create a map of expected value to evaluate in the stack
  const bracketMap = {
    "}": "{",
    ")": "(",
    "]": "["
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      // if noticed any of the values, add to the stack
      stack.push(s[i]);

      // if it had been within this value, then go to the next iteration
      // no need to continue evaluation
      continue;
    }

    if (!bracketMap[s[i]]) {
      // roundhouse check. if it's not an left version of the bracket,
      // nor a right version of the bracket, then return false
      return false;
    } else {
      // this checks for the adjacent item in the string is a match or not
      if (stack[stack.length - 1] === bracketMap[s[i]]) {
        // remove from the stack because we no longer care about it.
        stack.pop();
        continue;
      }

      return false;
    }
  }

  // now check if it is valid, the stack SHOULD be empty
  return !(stack.length > 0);
};

module.exports = isValid;
