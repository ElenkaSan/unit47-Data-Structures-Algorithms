class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    let node = this.root;
    if (!node) {
			this.root = new Node(val);
			return this;
		}
    while (true) {
			if (val > node.val) {
				if (node.right) {
					node = node.right;
				} else {
					node.right = new Node(val);
					break;
				}
			} else {
				if (node.left) {
					node = node.left;
				} else {
					node.left = new Node(val);
					break;
				}
			}
		}

		return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, node = this.root) {
    if (!node) {
			this.root = new Node(val);
			return this;
		}
    if (val > node.val) {
      if (!node.right) {
				node.right = new Node(val);
				return this;
			}
		return this.insertRecursively(val, node.right);
		} else {
      if (!node.left) {
				node.left = new Node(val);
				return this;
			}
		return this.insertRecursively(val, node.left);
		}
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    if (this.root === null) return;
		let curRoot = this.root;
		while (curRoot) {
			if (val === curRoot.val) {
				return curRoot;
			}
      curRoot = val > curRoot.val
                    ? curRoot.right
                    : curRoot.left;
			// if (val > curRoot.val) {
			// 	curRoot = curRoot.right;
			// } else {
			// 	curRoot = curRoot.left;
			// }
		}
		return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, curRoot = this.root) {
		if (curRoot && val > curRoot.val) {
			return this.findRecursively(val, curRoot.right);
		} else if (curRoot && val < curRoot.val) {
			return this.findRecursively(val, curRoot.left);
		}
		return curRoot ? curRoot : undefined;
  }

/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */
 dfsPreOrder(root = this.root, data = []) {
  if (root) {
    data.push(root.val);
    this.dfsPreOrder(root.left, data);
    this.dfsPreOrder(root.right, data);
  }
  return data;
}

/** dfsInOrder(): Traverse the array using in-order DFS.
 * Return an array of visited nodes. */
dfsInOrder(root = this.root, data = []) {
  if (root) {
    this.dfsInOrder(root.left, data);
    data.push(root.val);
    this.dfsInOrder(root.right, data);
  }
  return data;
}

/** dfsPostOrder(): Traverse the array using post-order DFS.
 * Return an array of visited nodes. */
dfsPostOrder(root = this.root, data = []) {
  if (root) {
    this.dfsPostOrder(root.left, data);
    this.dfsPostOrder(root.right, data);
    data.push(root.val);
  }
  return data;
}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    let root = this.root;
		let queue = [root];
		let data = [];
		while (queue.length) {
			let curRoot = queue.shift(1);
			data.push(curRoot.val);
			if (curRoot.left) queue.push(curRoot.left);
			if (curRoot.right) queue.push(curRoot.right);
		}
		return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
  remove(val) {
    let curRoot = this.root;
    let parent;
    while (curRoot.val !== val) {
      parent = curRoot;
      curRoot = val < curRoot.val
      ? curRoot.left
      : curRoot.right;
    }
    if (curRoot !== this.root) {
      if (!curRoot.left && !curRoot.right) {
        if (parent.left === curRoot) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (curRoot.left && curRoot.right) {
        let rightParent = curRoot;
        let right = curRoot.right;
        if (!right.left) {
          right.left = curRoot.left;
          if (parent.left === curRoot) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === curRoot) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if (right.right) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if (parent.left === curRoot) {
          if (!curRoot.right) {
            parent.left = curRoot.left;
          } else {
            parent.left = curRoot.right;
          }
        } else {
          if (!curRoot.right) {
            parent.right = curRoot.left;
          } else {
            parent.right = curRoot.right;
          }
        }
      }
    }
    return curRoot;
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  isBalanced() {
    let curRoot = this.root;
    if (!curRoot) return;
    function minDepth(curRoot) {
      if (!curRoot) {
        return 0;
      };
      let math = Math.min(minDepth(curRoot.left), minDepth(curRoot.right));
      return 1 + math;
    }
    function maxDepth(curRoot) {
      if (!curRoot) {
        return 0;
      };
      let math = Math.max(maxDepth(curRoot.left), maxDepth(curRoot.right));
      return 1 + math;
    }
    return maxDepth(curRoot) - minDepth(curRoot) <= 1;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */
  findSecondHighest() {
    let curRoot = this.root;
    if (!curRoot || (!curRoot.left && !curRoot.right)) return;
    while (curRoot) {
      if (curRoot.left && !curRoot.right) {
        return this.findSecondHighest(curRoot.left);
      }
      if (curRoot.right && (!curRoot.right.left && !curRoot.right.right)) {
        return curRoot.val;
      }
      curRoot = curRoot.right;
    }
  }


//Further Study! Write another version of the dfsInOrder function 
// but do not use recursion. This can be challenging.
// Think about what the computer is doing for you 
// when you make a recursive call.
  dfsInOrderIteratively(){
    let curRoot = this.root;
    let stack = [];
    let dfsInOrder = [];
    while (stack.length > 0 || curRoot) {
      while (curRoot) {
        stack.push(curRoot);
        curRoot = curRoot.left;
      }
      curRoot = stack.pop();
      if (curRoot) {
        dfsInOrder.push(curRoot.val);
        curRoot = curRoot.right;
      }
    }
    return dfsInOrder;
  }
}

module.exports = BinarySearchTree;
