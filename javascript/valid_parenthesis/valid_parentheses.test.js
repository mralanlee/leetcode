const test = require("ava");
const isValid = require("./valid_parentheses");

test("test case 1", async t => {
  const actual = isValid("()");
  t.truthy(actual);
});
