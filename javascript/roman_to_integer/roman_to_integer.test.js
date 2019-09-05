const test = require('ava');
const romanToInt = require('./roman_to_integer');

test('test case 1', async t => {
  const actual = romanToInt('III');
  const expect = 3;

  t.is(actual, expect);
});


test('test case 2', async t => {
  const actual = romanToInt('IV');
  const expect = 4;

  t.is(actual, expect);
});

test('test case 3', async t => {
  const actual = romanToInt('IX');
  const expect = 9;

  t.is(actual, expect);
});

test('test case 4', async t => {
  const actual = romanToInt('LVIII');
  const expect = 58;

  t.is(actual, expect);
});
