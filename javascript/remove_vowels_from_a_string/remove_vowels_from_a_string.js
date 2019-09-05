/**
 * @param {string} S
 * @return {string}
 */
const removeVowels = function(S) {
    const vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true
    };

  return S.split('').reduce((acc, curr) => {
    if (!vowels[curr]) {
      return acc += curr
    }
    return acc
  }, '');
};
