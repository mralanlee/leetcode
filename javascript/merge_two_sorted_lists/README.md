# Merge Two Sorted Lists

Problem: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Solution:

1. If one of the parameters are empty, return the one that is not null.
2. Check l1.val to see if it is less than l2.val to establish a base to see which lists first node should preceed the other.
3. Use recursion for the `next` node and so forth
