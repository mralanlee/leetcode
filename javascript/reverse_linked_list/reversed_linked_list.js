/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // In a singly-linked list there's no idea of previous,
  // but if we create or add that in, reversing should be
  // easy peasy.
  // create a new list to avoid mutation of existing
  const list = new ListNode();
  // set previous as null
  list.prev = null;
  // take current as head
  list.curr = head;

  // loop
  while (list.curr !== null) {
    const temp = list.curr.next;
    list.curr.next = list.prev;
    list.prev = list.curr;
    list.curr = temp;
  }

  return list.prev;
};

module.exports = reverseList;
