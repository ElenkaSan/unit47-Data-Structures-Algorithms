/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    let newValue = new Node(val);
    if ( !this.head ) {
      this.head = newValue;
      this.tail = this.head; 
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    let newValue = new Node(val);
    if (this.head === null) {
      this.head = newValue;
    }
    else {
      newValue.next = this.head;
      this.head = newValue;
    }
    if (this.length === 0) {
      this.tail = this.head
    };
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    let headVal = this.head;
     if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return headVal.val;
		}
		this.tail = headVal;
		this.length--;
		return headVal.next.val;
  }

  /** shift(): return & remove first item. */
  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    let currVal = this.head;
		while (idx) {
			currVal = currVal.next;
			idx -=1;
		}
		if (!currVal) throw new Error('Invalid Index');
		return currVal.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    let currVal = this.head;
		while (idx) {
			currVal = currVal.next;
			idx -=1;
		}
		if (!currVal) throw new Error('Invalid Index');
		currVal.val = val;
  }

	_get(idx) {
		let cur = this.head;
		let count = 0;
		while (cur !== null && count != idx) {
			count++;
			cur = cur.next;
		}
		return cur;
	}

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    let currVal = this.head;

    if (idx === 0) {
      return this.unshift(val)
    };
    if (idx === this.length) {
      return this.push(val)
    };
    let before = this._get(idx - 1);
    let newValue = new Node(val);
    newValue.next = before.next;
    before.next = newValue;
    this.length++;
    
    if (!currVal) throw new Error('Invalid Index');
    return currVal.val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currVal = this.head;
    while (idx) {
			currVal = currVal.next;
			idx -=1;
		}
    if (idx === 0) {
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return currVal.val;
    }
		if (idx === this.length - 1) {
      return this.pop()
    }
    let before = this.getAt(idx - 1);
		let removedVal = this.getAt(idx);
		before.next = removedVal.next;
		removedVal.next = null;
		this.length--;

    if (!currVal) throw new Error('Invalid Index');
    return currVal.val;
  }

  /** average(): return an average of all values in the list */
  average() {
    let currVal = this.head;
		let total = 0;
    let count = 0;
		if (!currVal) {
			return 0;
		}
		while (currVal) {
			total += currVal.val;
			count++;
			currVal = currVal.next;
		}
		return total / count;
  }
}

module.exports = LinkedList;
