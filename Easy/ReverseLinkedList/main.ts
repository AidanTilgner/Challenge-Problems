class LinkNode {
  public next: LinkNode | null;
  constructor(next: LinkNode) {
    this.next = next ? next : null;
  }
}

function reverseLinkedList(head: LinkNode): LinkNode | null {
  if (!head) {
    return null;
  }

  let newHead: LinkNode | null = head;
  if (head.next) {
    newHead = reverseLinkedList(head.next);
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}
