/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0 && i % 5 === 0) {
      word = "FizzBuzz";
    } else if (i % 3 === 0) {
      word = "Fizz";
    } else if (i % 5 === 0) {
      word = "Buzz";
    } else {
      word = "" + i;
    }
    res.push(word);
  }
  return res;
};

module.exports = fizzBuzz;
