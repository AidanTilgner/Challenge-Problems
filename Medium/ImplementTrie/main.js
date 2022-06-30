class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (let i; i < word.length; i++) {
      if (!(c in cur.children)) {
        cur.children[c] = TrieNode();
      }
      cur = cur.children[c];
    }
    cur.endOfWord = true;
  }

  search(word) {
    let cur = this.root;
    for (let i; i < word.length; i++) {
      if (!(c in cur.children)) {
        return false;
      }
      cur = cur.children[c];
    }
    return cur.endOfWord;
  }

  startsWith(word) {
    let cur = this.root;
    for (let i; i < word.length; i++) {
      if (!(c in cur.children)) {
        return false;
      }
      cur = cur.children[c];
    }
    return true;
  }
}
