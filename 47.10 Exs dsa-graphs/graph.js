class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
    // vertexArray.map((vertex) => this.addVertex(vertex));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of vertex.adjacent) {
      this.removeEdge(node, vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];
		let seen = new Set(stack);
		let result = [];
		while (stack.length) {
			let current = stack.pop();
			result.push(current.value);
 
			for (let val of current.adjacent) {
				if (!seen.has(val)) {
					stack.push(val);
					seen.add(val);
				}
			}
		}
		return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
		let seen = new Set(queue);
		let result = [];
		while (queue.length) {
			let current = queue.shift();
			result.push(current.value);

			for (let i of current.adjacent) {
				if (!seen.has(i)) {
					queue.push(i);
					seen.add(i);
				}
			}
		}
		return result;
  }
}

module.exports = {Graph, Node}