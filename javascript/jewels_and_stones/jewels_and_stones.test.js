const test = require('ava');
const numJewelsInStones = require('./jewels_and_stones')

test('test case 1', t => {
  const actual = numJewelsInStones(
    "aA",
    "aAAbbb",
  );

  const expect = 3;

  t.is(actual, expect);
});

test('test case 2', t => {
  const actual = numJewelsInStones(
    "z",
    "ZZ",
  );

  const expect = 0;

  t.is(actual, expect);
});
