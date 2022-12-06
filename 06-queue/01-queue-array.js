class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue(element) {
    return this.items.shift(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek(element) {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue); // Queue { items: [ 10, 20, 30 ] }

console.log(queue.size()); // 3
queue.print(); // 10,20,20

console.log(queue.dequeue()); // 10
console.log(queue); // Queue { items: [ 20, 30 ] }

console.log(queue.peek()); // 20
console.log(queue); // Queue { items: [ 20, 30 ] }
