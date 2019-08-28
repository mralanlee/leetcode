const test = require("ava");
const threeSum = require("./3_sum");

test("test case 1", async t => {
  const actual = threeSum([-1, 0, 1, 2, -1, -4]);
  const expect = [[-1,-1,2],[-1,0,1]]
  t.deepEqual(actual, expect);
});

test("test case 2", async t => {
  const actual = threeSum([-2, 0, 0, 2, 2]);
  const expect = [[-2, 0, 2]];

  t.deepEqual(actual, expect);
});
