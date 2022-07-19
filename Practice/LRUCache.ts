class LinkNode {
  public key: number;
  public value: number;
  public next: LinkNode | null;
  constructor(key: number, value: number, next: LinkNode | null) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  public head: LinkNode | null;
  constructor(head: LinkNode | null) {
    this.head = head || null;
  }
}

class LRUCache {
  readonly capacity: number;
  private cache: Map<number, number>;
  private cache_vals: LinkedList;

  constructor(capacity: number) {
    if (this.capacity < 1) {
      throw "Capacity has to be greater than 0";
    }
    this.capacity = capacity;
  }

  set(key: number, value: number) {
    if (this.cache.get(key)) {
    }
  }

  get(key: number) {
    return this.cache.get(key);
  }

  get_cache() {
    let res = "";
    let node = this.cache_vals.head;
    while (node) {
      res += `(${node.key}, ${node.value})`;
      node = node.next;
    }
    return res;
  }
}
