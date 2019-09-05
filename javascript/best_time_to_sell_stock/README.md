# Best time to sell stock

## First take

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

However since this is a nested loop, and it has to run through all the scenarios, it will be a `O(n^2)`

## Second Take

This is the leetcode take. I was pretty close except for how I was approaching the `minPrice`.

First the following:

```
let minPrice = Number.MAX_VALUE;
```

This is set to the highest possible JavaScript recognized number. In my loop, the first logical check to is to see if prices at index `i` is less than `minPrice`.
In the first iteration of the loop, it will set the minPrice to the first iteration of what's in the prices array (`prices[0]`). This will set and champion a new base each time of loop if the minimum price is lower.

Next it will check if the minimum profit will be cheaper than the current evaluation of prices at current index minus the minimum price.
If it is greater than the max profit than champion the maxprofit to be greating the current.

This solution stores state of the minimum price, and maximum profit and it is able to handle it one pass. Yielding `O(n)`
