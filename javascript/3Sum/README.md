# 3Sum

Wow this one is probably one of the hardest ones I've done so far.

## First Take
- Got real stuck
- Brute Force via 3 for loops
- `O(n^3)`

## Second Take
- Read up on the thought process via algoexpert on this question.
- Sort the array, and similar to a binary search we'll establish left and right pointer.
- The biggest kicker is to not have duplicate triplets.

### Approach
Unlike binary search, we won't have an idea of a middle, instead we manipulate left and right through a base.
Which means we will need a nested loop (for and a while).

1. Sort the array
2. Finding the triplets:
  - Inside the for loop:
    - `i` is the base index of where it starts, establish this
    - establish a `leftIndex` and `rightIndex` these are pointers to move around in your while loop
    - **first logical check**: if value at `i` is less than 0 (which is the target) than `break`
      - if our base from where we are check is greating than our target, stop checking and move on.
    - **second logical check**: if current iteration (or `i`) is greater than 0 (which means not at start) and number to it previous (`i - 1`) is equal to it, then `continue`. This prevents duplicates.
  - While Loop:
    - The goal of this is to maniupulate your pointers at each iteration of the base (`i`)
    - Our target is to get to a total of 0, which is our base + left + right, so when we have this we push it to our `sums` array ONLY if there is no dupes.
    - **Yay It equals**:
    ```js
      if (0 === total) {
        sums.push([sorted[i], sorted[leftIndex], sorted[rightIndex]]);
        // keep passing if incrementing until left is no longer equal to number next to it, otherwise duplicates
        while (sorted[leftIndex] === sorted[leftIndex + 1]) leftIndex++;
        // keep passing if incrementing until right is no longer equal to number next to it, otherwise duplicates
        while (sorted[rightIndex] === sorted[rightIndex - 1]) rightIndex--;
        // just move it along if the above conditions are not fulfilled
        leftIndex++;
        rightIndex--;
      }
    ```
    - If the target is less than the total, that means you need to move the `rightIndex` more inward. (i.e. target 0, currentSum = 5, more targer closer and try to find a negative 5 diff)
    - If the target is greater than the total, you have to move the `leftIndex` more outward (i.e. target 0, currentSum = -3, move left higher)


