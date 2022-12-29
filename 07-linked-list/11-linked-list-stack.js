const LinkedList = require("./11-linked-list.js");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

// instantiate a class
const stack = new LinkedListStack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.getSize()); // 3
stack.print(); // 30 20 10

console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
