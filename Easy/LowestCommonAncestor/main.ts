class TreeNode {
  public value: number;
  public left: TreeNode;
  public right: TreeNode;

  constructor(value: number, left: TreeNode, right: TreeNode) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const LCA = (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode => {
  let cur = root;

  while (cur) {
    if (p.value > cur.value && q.value > cur.value) {
      cur = cur.right;
    } else if (p.value < cur.value && q.value < cur.value) {
      cur = cur.left;
    } else {
      return cur;
    }
  }
};
