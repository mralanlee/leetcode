const test = require("ava");
const fizzBuzz = require("./fizz_buzz");

test("test case 1", async t => {
  const actual = fizzBuzz(1);
  const expect = ["1"];

  t.deepEqual(actual, expect);
});

test("test case 2", async t => {
  const actual = fizzBuzz(15);
  const expect = [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
  ];

  t.deepEqual(actual, expect);
});
