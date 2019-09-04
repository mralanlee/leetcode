const test = require("ava");
const maxProfit = require("./best_time_to_sell_stock");

test("test case 1", async t => {
  const actual = maxProfit([7, 1, 5, 3, 6, 4]);
  const expect = 5;
  t.is(actual, expect);
});

