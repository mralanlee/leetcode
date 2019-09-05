const test = require("ava");
const lengthOfLongestSubstring = require("./longest_substring");

test("test case 1", async t => {
  const actual = lengthOfLongestSubstring("pwwkew");
  const expect = 3;
  t.is(actual, expect);
});
