const test = require("ava");
const search = require("./");

test("test case 1", async t => {
  const actual = search([-1, 0, 3, 5, 9, 12], 2);
  const expect = -1;

  t.is(actual, expect);
});
