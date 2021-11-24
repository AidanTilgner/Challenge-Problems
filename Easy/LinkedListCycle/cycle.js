function DetectCycle(head) {
  let prev = [];
  let pos = false;
  let checkNode = (node) => {
    pos = prev.indexOf(node);
    if (pos !== -1) return;
    prev.push(node);
    if (node.next) checkNode(node.next);
  };
  checkNode(head);
  return pos !== -1;
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

let head = new Node(3);
head.next = head;
// head.next.next = new Node(0);
// head.next.next.next = new Node(-4);
// head.next.next.next.next = new Node(-2);

console.log(DetectCycle(head));
