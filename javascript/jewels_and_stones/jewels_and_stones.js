/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  // create a map from strings that are in J
  let obj = {};
  for (let i = 0; i < J.length; i++) {
    obj[J[i]] = true;
  }

  let counter = 0;
  for (let i = 0; i < S.length; i++) {
    if (obj[S[i]]) {
      counter += 1;
    }
  }

  return counter;
};

module.exports = numJewelsInStones;
