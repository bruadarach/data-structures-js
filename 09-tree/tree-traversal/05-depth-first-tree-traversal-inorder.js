// #recursive #callstack
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
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

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
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

  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    //let current = this.root;

    function traverse(node) {
      data.push(node.value); // 10 // 6 // 3 // 8 // 15 // 20
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    // traverse(current);
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left); // 6 // 3
      if (node.right) traverse(node.right); // 8  // 15 // 20
      data.push(node.value); // 3 // 8 // 6 // 20 // 15 // 10
    }
    traverse(this.root); // 10
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left); // 6 // 3
      data.push(node.value); // 3 // 6  // 8 // 10 // 15 // 20
      if (node.right) traverse(node.right); // 8 // 15 // 20

      /* if you don't want to use If statement */
      // node.left && traverse(node.left);
      // data.push(node.value);
      // node.right && traverse(node.right);
    }
    traverse(this.root); // 10
    return data;
  }

  //              10
  //        6           15
  //     3     8            20
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]

console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]

console.log(tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]

console.log(tree.DFSInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
