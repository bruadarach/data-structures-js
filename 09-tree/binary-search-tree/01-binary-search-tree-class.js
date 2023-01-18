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
}

let tree = new BinarySearchTree();
tree.root = new Node(5);
tree.root.left = new Node(2);
tree.root.right = new Node(7);
tree.root.left.right = new Node(1);

console.log(tree);
// BinarySearchTree {
//     root: Node {
//       value: 5,
//       left: Node { value: 2, left: null, right: [Node] },
//       right: Node { value: 7, left: null, right: null }
//     }
//   }

console.log(tree.root);
// Node {
//     value: 5,
//     left: Node {
//       value: 2,
//       left: null,
//       right: Node { value: 1, left: null, right: null }
//     },
//     right: Node { value: 7, left: null, right: null }
//   }
