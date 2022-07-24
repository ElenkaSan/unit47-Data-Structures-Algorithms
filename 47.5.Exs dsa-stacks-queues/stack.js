/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    let newValue = new Node(val);
    if (!this.first) {
      this.first = newValue;
      this.last = newValue; 
    } else {
      this.first = newValue;
      this.first.next = this.first;
    }
    this.size +=1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    let topRemove = this.first;
    if (!topRemove) throw new Error('Invalid Index');
    if (topRemove == this.last ) {
      this.last = null;
    }
    this.first = topRemove.next;
    this.size -=1;
		return topRemove.val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    return this.size ? this.first.val : null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return !this.size ? true : false;
  }
}

module.exports = Stack;
