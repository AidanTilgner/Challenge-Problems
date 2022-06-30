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
    const dfs=(j, root) => {
        cur = root;
        
      
        for (let i = 0; i < word.length; i++) {
            let c = word[i];

            if (c === ".") {
            // .ab
            for (child, idx in Object.keys(cur.children)) {
                if(dfs(i + 1, child)){
                    return true
                }
            }
                return false
            }

            if (!(c in cur.children)) {
                return false;
            }
            cur = cur.children[c];
        }

      return cur.word
    }

    dfs(0, this.root)
  }
}
