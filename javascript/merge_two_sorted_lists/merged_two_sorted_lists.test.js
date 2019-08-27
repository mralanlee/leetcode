const test = require("ava");
const mergeTwoLists = require("./merge_two_sorted_lists");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createList = (data = []) => {
  const list = new ListNode(data[0]);
  for (let i = 1; i < data.length; i++) {
    const newNode = new ListNode(data[i]);

    if (list.next !== null) {
      list.next = newNode;

    } else {
      list.next = newNode;
    }
  }
  return list;
};

test("test case 1", async t => {
  const listOne = createList([1, 2, 4]);
  const listTwo = createList([1, 3, 4]);

  const actual = mergeTwoLists(listOne, listTwo);
  const expected = createList([1, 1, 2, 3, 4, 4]);

  t.deepEqual(actual, expected);
});
