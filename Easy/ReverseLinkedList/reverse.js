class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function ReverseLinkedList(head) {
  let reversed = [];
  let addToReversed = (node) => {
    reversed.unshift(new ListNode(node.value));
    if (node.next) addToReversed(node.next);
  };
  addToReversed(head);
  for (let i = 0; i + 1 < reversed.length; i++) {
    reversed[i].next = reversed[i + 1];
  }
  return reversed[0];
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(head);
console.log(ReverseLinkedList(head));
