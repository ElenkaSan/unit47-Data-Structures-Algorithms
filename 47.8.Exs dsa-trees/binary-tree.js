/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(root = this.root) {
		if (!root) {
      return 0
    };
		if (!root.left && !root.right) {
			return 1;
		}
		return Math.min(
      this.minDepth(root.left), this.minDepth(root.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth(root = this.root, count = 1) {
		if (!root) {
      return 0;
    };
		if (!root.left && !root.right) {
			return count;
		}
		count++;
		return Math.max(this.maxDepth(root.left, count), this.maxDepth(root.right, count));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  // maxSum(root = this.root) {
  //   if (!root) return 0;
  //   let result = 0;
  //   if (result = Math.max(result, root.val + this.maxSum(root.left) + this.maxSum(root.right))){
  //      return result;
  //     };
	// 	return Math.max(0, this.maxSum(root.left)+root.val, this.maxSum(root.right)+root.val);
  // }
  maxSum() {
    let result = 0;
    function maxSumHelp(root) {
      if (!root) {
        return 0;
      };
      result = Math.max(result, root.val + maxSumHelp(root.left) + maxSumHelp(root.right));
      return Math.max(0, maxSumHelp(root.left)+ root.val, maxSumHelp(root.right) + root.val);
    }
    maxSumHelp(this.root);
    return result;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root) {
      return null
    };
    let toVisitQueue=[this.root];
    let larger = null;
    while(toVisitQueue.length) { 
      let current = toVisitQueue.shift(); 
      let curVal = current.val;
      if (curVal > lowerBound && (larger === null || curVal < larger)) {
        larger = curVal;
      }
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
   }
  return larger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */
  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) {
      return false;
    };
    function sameLevelDiferentParent(findRoot, curRoot, level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent){ 
        return data;
      };
      if (curRoot.left === findRoot || curRoot.right === findRoot) {
        data.level = level + 1;
        data.parent = curRoot;
      }
      if (curRoot.left) {
        sameLevelDiferentParent(findRoot, curRoot.left, level + 1, data);
      }
      if (curRoot.right) {
        sameLevelDiferentParent(findRoot, curRoot.right, level + 1, data);
      }
      return data;
    }

    let root1 = sameLevelDiferentParent(node1, this.root);
    let root2 = sameLevelDiferentParent(node2, this.root);
    let sameLevel = root1 && root2 && root1.level === root2.level;
    // (sameLevelDiferentParent(node1, this.root) && sameLevelDiferentParent(node2, this.root) && sameLevelDiferentParent(node1, this.root).level === sameLevelDiferentParent(node2, this.root).level)
    let differentParents = root1 && root2 && root1.parent !== root2.parent;
    // (sameLevelDiferentParent(node1, this.root) && sameLevelDiferentParent(node2, this.root) && sameLevelDiferentParent(node1, this.root).parent !== sameLevelDiferentParent(node2, this.root).parent)
    return sameLevel && differentParents;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */
  static serialize(tree, val = []) {
    function traverse(node) {
      if (node) {
        val.push(node.val);
        traverse(node.left);
        traverse(node.right);
      } else {
        val.push("#");
      }
    }
    traverse(tree.root);
    return val.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  static deserialize(stringTree) {
    if (!stringTree) {
      return null};
    ;
    const val = stringTree.split(" ");
    function buildTree() {
      if (val.length) {
        const curVal = val.shift();
        if (curVal === "#"){
           return null;
          };
        let curRoot = new BinaryTreeNode( + curVal);
        curRoot.left = buildTree();
        curRoot.right = buildTree();
        return curRoot;
      }
    }
    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */
  lowestCommonAncestor(node1, node2, curRoot = this.root) {
    if (curRoot === null) {
      return null
    };
    if (curRoot === node1 || curRoot === node2) {
      return curRoot;
    };
    const left = this.lowestCommonAncestor(node1, node2, curRoot.left);
    const right = this.lowestCommonAncestor(node1, node2, curRoot.right);
    if (left !== null && right !== null) {
      return curRoot;
    };
    if (left !== null || right !== null) {
      return left || right;
    };
    if (left === null && right === null) {
      return null;
    };
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
