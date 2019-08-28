# Best time to sell stock

First take:

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProf = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];

      if (profit > maxProf) {
        maxProf = profit;
      }
    }
  }
  return maxProf;
};
```

This is a brute force method. Nested loops, outer loop iterates over number as the base point.
The inner loops job is loop over all the other numbers ahead of the outer loop.

The reason for this is that the base point will always be the first number (the buy in point), where the inner loop will always focus on the sell.
