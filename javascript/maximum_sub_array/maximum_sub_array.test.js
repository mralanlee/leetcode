const test = require("ava");
const maxSubArray = require("./maximum_sub_array");

test("test case 1", async t => {
  const actual = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  const expect = 6;

  t.is(actual, expect);
});
