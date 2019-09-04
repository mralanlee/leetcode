const test = require("ava");
const mergeTwoLists = require("./merge_two_sorted_lists");

function ListNode (val){
  this.val = val;
  this.next = null;
}

// Singular
// const createNode = val => new ListNode(val);
const createList = (data = []) => {
  const list = new ListNode(data[0]);
  for (let i = 1; i < data.length; i++) {
    const newNode = new ListNode(data[i]);

    if (list.next !== null) {
      list.next.next = newNode;
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

  const expected = new ListNode(1);
  expected.next = {
      ...new ListNode(1),
      next: {
        ...new ListNode(2),
        next: {
          ...new ListNode(3),
          next: {
            ...new ListNode(4),
            next: {
              ...new ListNode(5),
              next: null
            }
          }
        }
      }
    };

  t.is(actual, expected);
});
