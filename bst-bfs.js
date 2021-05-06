class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	insertRecursive(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		const inserted = (val, current = this.root) => {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				return inserted(val, current.left);
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				return inserted(val, current.right);
			}
		};
		return inserted(val);
	}
	find(val) {
		if (!this.root) return false;
		let current = this.root,
			found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	findRecursive(val) {
		if (!this.root) return false;
		const found = (val, current = this.root) => {
			if (!current) {
				return false;
			}
			if (val < current.val) {
				return found(val, current.left);
			} else if (val > current.val) {
				return found(val, current.right);
			} else {
				return true;
			}
		};
		return found(val);
	}
	contains(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}
	// Breadth First Search (BFS)
	// Visit every sibling node before visiting a child node
	bfs() {
		const data = [],
			queue = [];
		let node = this.root;
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	}
	// Depth First Search (DFS) - PreOder
	// Visit the node then look at the entire left side, then we traverse the right side.
	dfsPreOrder() {
		const data = [];
		const traverse = (node) => {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}
	// Depth First Search (DFS) - PostOrder
	// Look at the entire left side then add the node.
	dfsPostOrder() {
		const data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		};
		traverse(this.root);
		return data;
	}
	dfsInOrder() {
		const data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
