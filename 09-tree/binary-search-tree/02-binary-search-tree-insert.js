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

  /* following pseudo code */
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // handle duplicated value
        if (value === current.value) {
          return undefined;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  /* arrange code => remove 'else' */
  //   insert(value) {
  //     let newNode = new Node(value);

  //     if (this.root === null) {
  //       this.root = newNode;
  //       return this;
  //     }
  //     let current = this.root;
  //     while (true) {
  //       // handle duplicated value
  //       if (value === current.value) {
  //         return undefined;
  //       }
  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         }
  //         current = current.left;
  //       } else if (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         }
  //         current = current.right;
  //       }
  //     }
  //   }
}

//         10
//     5        13
//   2   7    11   16

let tree = new BinarySearchTree();

tree.insert(10);
console.log(tree);
// BinarySearchTree { root: Node { value: 10, left: null, right: null } }

tree.insert(5);
tree.insert(2);
console.log(tree);
// BinarySearchTree {
//     root: Node {
//       value: 10,
//       left: Node { value: 5, left: [Node], right: null },
//       right: null
//     }
//   }
console.log(tree.root.left.left);
// Node { value: 2, left: null, right: null }

tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);
console.log(tree);
// BinarySearchTree {
//     root: Node {
//       value: 10,
//       left: Node { value: 5, left: [Node], right: [Node] },
//       right: Node { value: 13, left: [Node], right: [Node] }
//     }
//   }
console.log(tree.root.left.left);
//Node { value: 2, left: null, right: null }
console.log(tree.root.left.right);
//Node { value: 7, left: null, right: null }
console.log(tree.root.right.left);
//Node { value: 11, left: null, right: null }
console.log(tree.root.right.right);
//Node { value: 16, left: null, right: null }

/* What about duplicates? => Infinite Loop! */
// tree.insert(10); //=> Infinite Loop!
/* After add code to handle a duplicated value */
tree.insert(10);
console.log(tree); //=> works well!
