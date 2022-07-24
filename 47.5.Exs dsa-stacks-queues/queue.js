/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    let newValue = new Node(val);
    if ( !this.first ) {
      this.first = newValue;
      this.last = newValue; 
    } else {
      this.last.next = this.last;
      this.last = newValue;
    }
    this.size +=1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    let firstValRemove = this.first;
    if (!firstValRemove) throw new Error('Invalid Index');
    if (firstValRemove == this.last ) {
      this.last = null;
    }
    this.first = firstValRemove.next;
    this.size -=1;
		return firstValRemove.val;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this.size ? this.first.val : null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
