# What is a `tree`?

: A data structure that consists of nodes in a parent / child relationship.

# Trees vs Lists

- Lists - linear
- Trees - non-linear

### A Singly Linked List

- sort of a special case of a tree

# Tree Terminology

- `Root` - The top node in a tree.
- `Child` - A node directly connected to another node when moving away from the Root.
- `Parent` - The converse notion of a child.
- `Siblings` - A group of nodes with the same parent.
- `Leaf` - A node with no children
- `Edge` - The connection between one node and another.

# Real World Examples

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence - Minimax Algorithm Tree
- Computer File Systems
- JSON

# Kinds of Trees

- **`Trees`**
- **`Binary Trees`**
  - Every parent node has at most 2 children (0~2)
- **`Binary Search Trees`**
  - Every parent node has at most **two** children (0~2)
  - BST stores the data that can be compared and sortable.
    - Every node to the **left** of a parent node is **always less** than the parent.
    - Every node to the **right** of a parent node is **always greater** than the parent.

# `Big O` of BST

### Time Complexity

As the number of BST nodes grows, the best and average case is,

- **Insertion - O(log N)**
- **Searching - O(log N)**

Only increase one more step in spite of the double number of nodes

> ⇒ NOT Guaranteed!

- The worst case is not guaranteed with **`O(log N)`**
- There are some binary search trees configurations that are very slow.
  - e.g) one-sided binary search tree ⇒ `O(n)`
  - Solution
    - Don’t use binary tree or BST.
    - Could rewrite the BST, selecting a different root (e.g. 34), and restructure the entire tree.
