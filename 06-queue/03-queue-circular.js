class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);

    // two pointers
    // -1 === 버퍼 공간 생성 & isFull
    // dequeue를 한번도 하지않고 enqueue를 계속해서 실행하면, front와 rear의 위치는 같아지게 되는 것을 방지하기 위함.
    this.rear = -1; // -1 means not pointing any position in the queue
    this.front = -1; // -1 means not pointing any position in the queue

    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  // FIFO
  enqueue(item) {
    // add end
    if (!this.isFull()) {
      // if queue has capacity to add an element
      this.rear = (this.rear + 1) % this.capacity;
      // set the next index pointer : (current index + 1) % size of queue
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    // remove first
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    // set the next index pointer : (current index + 1) % size of queue
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue);
// CircularQueue {
//     items: [ <5 empty items> ],
//     capacity: 5,
//     currentLength: 0,
//     rear: -1,
//     front: -1
//   }
console.log(queue.isFull()); // true
queue.print(); // 10 20 30 40 50

console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue);
// CircularQueue {
//   items: [ null, 20, 30, 40, 50 ],
//   rear: 4,
//   front: 1,
//   currentLength: 4,
//   capacity: 5
// }

queue.enqueue(60);
console.log(queue);
// CircularQueue {
//   items: [ 60, 20, 30, 40, 50 ],
//   rear: 0,
//   front: 1,
//   currentLength: 5,
//   capacity: 5
// }
queue.print(); // 20 30 40 50 60
