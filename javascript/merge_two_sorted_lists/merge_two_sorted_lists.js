/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // if l1 doesn't exist, then l2 should be sorted
  if (l1 === null) {
    return l2;
  }

  // if l2 is null then return l1
  if (l2 === null) {
    return l1;
  }

  /* if l1.val is less than l2.valthen that means l1.val (at current node)
   * should preceed l2.val. That's why we set "next" for for l2.
   * In this first occurrence, it willset l1 as the "base"
   */
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }

  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

module.exports = mergeTwoLists;
