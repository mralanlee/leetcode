/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hm = new Map();

  for (let i = 0; i < s.length; i++) {
    // if it key (s value) is not found, set it
    if (!hm.has(s[i])) {
      hm.set(s[i], t[i]);
    } else {
      // if it is found, check to see if they have met before s = pap / t= tit
      // if it was s = pap and t = tao then it's not equal
      if (hm.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  return new Set([...hm.values()]).size === hm.size;
};
