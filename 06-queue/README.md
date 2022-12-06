# Queue

- `FIFO` : the queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).
  - The first element inserted in to the queue is the first element to be removed.
  - e.g) A queue of `people waiting in a line`
  - People enter the queue at one end (rear/tail) and,
  - People leave the queue from the other end (front/head)
- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
- The Queue data structure supports two main operations
  - `Enqueue` : `add` an elements to the **rear/tail** of the collection
  - `Dequeue`: `remove` an element from the front/head of the collection

<br>

# Queue Usage

- Printers
- CPU task scheduling
- **\*Callback Queue in JavaScript runtime** - determine the order in which your code executes.

<br>

# Queue Implementation

| Method             | Explanation                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `enqueue(element)` | add an element to the queue                                                |
| `dequeue(element)` | remove the oldest element from the queue                                   |
| `peek()`           | get the value of the element at the front of the queue without removing it |
| `isEmpty()`        | check if t he queue is empty                                               |
| `size()`           | get the number of elements in the queue                                    |
| `print()`          | visualize the elements in the queue                                        |

<br>

# Queue Implementation Optimised

### **[Problem]**

`dequeue` operation due to the use of the built-in shift method has a linear time complexity, which is not favorable.

- use an `Array`
  ```jsx
  dequeue(element) {
      return this.items.shift(element);
    }
  ```

<br>

### **[Solution]** : `{} Object + two pointers`

use an `Object` ensuring both enqueue and dequeue operations have constant time complexity.

```js
class Queue {
  constructor() {
    // initialize an Object
    this.items = {};
    // initialize two pointers
    this.rear = 0;
    this.front = 0;
  }
}
```

<br>

### **[Conclusion]**

Both enqueue and dequeue have constant time complexity.

<br>

# Circular Queue

- An extended version of a regular Queue.
- The size of the queue is fixed, and a single block of memory is used, as if the first element is connected to the last element.
- Referred to as `circular buffer` or `ring buffer` and follows the FIFO principle.
- A circular queue will reuse the empty block created during the dequeue operation.
- When working with queues of **fixed maximum size**, a circular queue is a great implementation choice.
- The Circular Queue data structure supports two main operations
  - `Enqueue`, which adds an element to the rear/tail of the collection.
  - `Dequeue`, which removes an element from the front/head of the collection.

<br>

# Circular Queue Usage

- Clock
- Streaming data
- Traffic lights

<br>

# Circular Queue Implementation

| Method             | Explanation                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `enqueue(element)` | add an element to the queue                                                |
| `dequeue()`        | remove the oldest element from the ueue                                    |
| `isFull()`         | check if the queue is full                                                 |
| `isEmpty()`        | check if the queue is empty                                                |
| `peek()`           | get the value of the element at the front of the queue without removing it |
| `size()`           | get the number of elements in the queue                                    |
| `print()`          | visualize the elements in the queue                                        |

<br>

# Note

- `"%"` used to set the next index of two pointers in circular queue

  <br>

  | 아이템 (element) | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
  | ---------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | 나머지(%)(idx)   | 0   | 1   | 2   | 3   | 4   | 0   | 1   | 2   | 3   | 4   | 0   | 1   | 2   |

<br>

- index of enqueue and dequeue starts from `"-1"`
  - create kind of a buffer space, in order to prevent the situation when enqueue continues to be executed without a single dequeue, and finally front and rear pointers meet in the same index after the first round.

<br>

# Resource

- https://nakzyu.tistory.com/19
