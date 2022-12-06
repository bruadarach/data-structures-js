class Queue {
  constructor() {
    // initialize an Object
    this.items = {};
    // initialize two pointers
    this.rear = 0;
    this.front = 0;
  }

  // add an element from the rear end of the queue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // remove an element from the front of the queue
  dequeue(element) {
    // hold the element at t he front of the queue
    const item = this.items[this.front];
    // delete the element at the front of the queue
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue); // Queue { items: { '0': 10, '1': 20, '2': 30 }, rear: 3, front: 0 }
console.log(queue.size()); // 3

console.log(queue.dequeue()); // 10
console.log(queue); // Queue { items: { '1': 20, '2': 30 }, rear: 3, front: 1 }

console.log(queue.peek()); // 20
console.log(queue); // Queue { items: { '1': 20, '2': 30 }, rear: 3, front: 1 }
