/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) {
      return 0;
    };
    let addUp = this.root.val;
		let child = [...this.root.children];
		while (child.length) {
			addUp += child[0].val;
			child.push(...child[0].children);
			child.shift(1);
		}
		return addUp;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    if (!this.root) {
      return 0;
    };
    let countAll = this.root.val % 2 === 0 ? 1 : 0;
		let child = [...this.root.children];
		while (child.length) {
			if (child[0].val % 2 === 0) countAll++;
			child.push(...child[0].children);
			child.shift(1);
		}
		return countAll;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    };
    let count = this.root.val > lowerBound ? 1 : 0;
    let child = [...this.root.children];
    while (child.length) {
			if (child[0].val > lowerBound) count++;
			child.push(...child[0].children);
			child.shift(1);
		}
		return count;
  }

}

module.exports = { Tree, TreeNode };