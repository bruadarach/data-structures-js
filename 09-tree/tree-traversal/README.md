# Tree Traversal

- Visit every node once
- Will take advantage of `recursion`

# Two ways: `BFS` & `DFS`

## 1. BFS (Breadth-first Search)

Steps - Iteratively

- Create a `queue (this can be an array)` and a variable to store the values of nodes visited.
- Place the root node in the queue.
- Loop as long as there is anything in the queue.
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  - If there is a left property on the node dequeued,
    - add it to the queue.
  - If there is a right property on the node dequeued,
    - add it to the queue.
- Return the variable that stores the values.

```js
// BFS : Breadth-First Search
// queue: FIFO (First In First Out)

// 10
// 6 15
// 3 8 20

queue: [10]; //10 // 6, 15 // 15, 3, 8 // 3, 8, 20 // 8, 20 // 20
visited: [10, 6, 15, 15, 3, 8, 20]; // 10 // 6 (FIFO) // 15 (FIFO) // 3 (FIFO) // 8 (FIFO) // 20 (FIFO)
```

## 2. DFS (Depth-first Search)

### 2.1. In-Order

### 2.2. Pre-Order

Steps - `Recursively`

- Create a variable to store the values of nodes visited.
- Store the root of the BST in a variable called current.
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values.
  - If the node has a left property,
    - call the helper function with the left property on the node.
  - If the node has a right property,
    - call the helper function with the right property on the node.

### 2.3. Post-Order
