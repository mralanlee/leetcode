# Binary Search
Since this is a sorted array, we would use a binary search.

Take the middle point of the array by taking the `length - 1` and dividing by 2. Once you set the middle point you will have your two anchors, the left and right pointers.
If your target number to find is less than the middle, then you move the right closer towards the average and vice versa for the left. 

Essentially, you will continually use the middle to find the number you are searching for.
